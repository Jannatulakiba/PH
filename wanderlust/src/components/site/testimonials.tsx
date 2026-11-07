"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    photo: "/images/person1.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    photo: "/images/person2.png",
  },
];

/** Circular prev/next buttons (from ui/carousel) restyled into the header row. */
const controlClassName =
  "static inset-auto left-auto my-0 size-12 rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-brand hover:text-brand";

function TestimonialCard({
  quote,
  name,
  location,
  photo,
}: (typeof testimonials)[number]) {
  return (
    <article className="flex h-full min-h-72 flex-col overflow-hidden border border-border bg-white sm:flex-row">
      <div className="flex flex-1 flex-col justify-between p-8">
        <blockquote className="font-heading text-xl leading-snug text-foreground">
          {quote}
        </blockquote>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-px w-4 bg-brand" />
            <p className="text-[15px] text-brand">{name}</p>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      <div className="relative min-h-56 sm:w-[38%]">
        <Image
          src={photo}
          alt={`Photo of ${name}`}
          fill
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 38vw, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-6xl px-6">
        {/* Heading + controls */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
              What Travelers Say
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <CarouselPrevious
              variant="outline"
              size="icon"
              className={controlClassName}
            >
              <ArrowLeft className="size-5" strokeWidth={1.5} />
              <span className="sr-only">Previous testimonials</span>
            </CarouselPrevious>
            <CarouselNext
              variant="outline"
              size="icon"
              className={controlClassName}
            >
              <ArrowRight className="size-5" strokeWidth={1.5} />
              <span className="sr-only">Next testimonials</span>
            </CarouselNext>
          </div>
        </div>

        {/* Slides */}
        <CarouselContent className="mt-14">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="lg:basis-1/2">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
