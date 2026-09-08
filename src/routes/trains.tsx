import { createFileRoute } from "@tanstack/react-router";
import { FareTable, ProductPage } from "@/components/travelx/ProductPage";
import { OfferStubs, SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/trains")({
  head: () => ({
    meta: [
      { title: "Train tickets — TravelX" },
      {
        name: "description",
        content:
          "Book Indian Railways tickets on TravelX. Seat reservations included, advance fares from ₹480, tickets on your phone.",
      },
      { property: "og:title", content: "Train tickets — TravelX" },
      {
        property: "og:description",
        content: "Indian rail with seat reservations included and advance fares from ₹480.",
      },
    ],
  }),
  component: TrainsPage,
});

const services = [
  { route: "NDLS → AGC", detail: "14 Mar · 1h 50m · direct", operator: "Vande Bharat 22470", price: "₹560" },
  { route: "MMCT → ST", detail: "15 Mar · 2h 40m · direct", operator: "Tejas 82902", price: "₹720" },
  { route: "HWH → NJP", detail: "16 Mar · 7h 25m · direct", operator: "Vande Bharat 22301", price: "₹1,240" },
  { route: "SBC → MYS", detail: "17 Mar · 2h 05m · direct", operator: "Shatabdi 12007", price: "₹480" },
];

function TrainsPage() {
  return (
    <ProductPage mode="trains" kicker="Trains / standard class" title="Rail, seat included.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / departures" title="Advance rail fares" />
        <FareTable rows={services} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <SectionHead kicker="(b) / rail offers" title="Cheap seats this week" />
        <OfferStubs count={3} />
      </section>
    </ProductPage>
  );
}
