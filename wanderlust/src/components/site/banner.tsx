import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Banner() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a coastal village with turquoise waters"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <h1 className="font-heading text-6xl leading-[1.05] font-medium sm:text-7xl lg:text-8xl">
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/destinations"
            className="flex h-13 items-center gap-3 bg-brand px-8 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-brand/90"
          >
            Explore Now
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
          <Link
            href="/destinations"
            className="flex h-13 items-center bg-white/25 px-8 text-sm font-medium tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/35"
          >
            View Destination
          </Link>
        </div>
      </div>
    </section>
  );
}
