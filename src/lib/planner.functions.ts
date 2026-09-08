import { createServerFn } from "@tanstack/react-start";
import { NoObjectGeneratedError, Output, streamText } from "ai";
import { z } from "zod";

const PlannerInput = z.object({
  destinations: z.string().min(2).max(200),
  startDate: z.string().min(4).max(20),
  endDate: z.string().min(4).max(20),
  budgetInr: z.number().min(1000).max(5_000_000),
  travellers: z.number().min(1).max(20),
  interests: z.array(z.string().max(60)).max(12),
  pace: z.string().max(30),
});

const daySchema = z.object({
  day: z.number(),
  date: z.string(),
  city: z.string(),
  title: z.string(),
  morning: z.string(),
  afternoon: z.string(),
  evening: z.string(),
  stay: z.string(),
  local_travel: z.string(),
  food_pick: z.string(),
  day_cost_inr: z.number(),
});

const itinerarySchema = z.object({
  trip_title: z.string(),
  summary: z.string(),
  best_time_note: z.string(),
  total_estimated_inr: z.number(),
  days: z.array(daySchema),
  budget_breakdown: z.array(z.object({ label: z.string(), amount_inr: z.number() })),
  tips: z.array(z.string()),
});

export type Itinerary = z.infer<typeof itinerarySchema>;

export const planIndiaTrip = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PlannerInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("AI is not configured for this project yet.");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(key);

    const prompt = [
      `Plan a domestic India trip.`,
      `Destinations (India only): ${data.destinations}`,
      `Travel dates: ${data.startDate} to ${data.endDate}`,
      `Travellers: ${data.travellers}`,
      `Total budget: INR ${data.budgetInr} for the whole group`,
      `Interests: ${data.interests.join(", ") || "general sightseeing"}`,
      `Pace: ${data.pace}`,
      "",
      "Rules:",
      "- Only Indian places, Indian stays, Indian transport (IRCTC trains, domestic flights, cabs, autos, metro).",
      "- Never suggest any destination or stopover outside India.",
      "- One entry per travel day between the given dates (cap at 14 days).",
      "- Name real, specific places, neighbourhoods, dishes and stay types.",
      "- All costs in INR, realistic for India, and the sum should respect the stated budget.",
      "- Keep each field to one or two short sentences.",
    ].join("\n");

    try {
      const result = streamText({
        model: gateway("google/gemini-3.8-flash"),
        system:
          "You are an expert India-only travel planner for TravelX. You plan exclusively inside India and refuse to include international locations.",
        prompt,
        output: Output.object({ schema: itinerarySchema }),
      });
      const output = await result.output;
      return output as Itinerary;
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        throw new Error("The planner could not finish that itinerary. Try again with fewer cities.");
      }
      throw error;
    }
  });
