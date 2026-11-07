import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/CTA.png"
        alt="An airplane flying over a tropical island with turquoise waters"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div aria-hidden className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center text-white">
        <h2 className="font-heading text-5xl sm:text-6xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-white/85">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-10 flex h-13 items-center gap-4 bg-white px-8 text-sm font-medium tracking-widest text-foreground uppercase transition-colors hover:bg-white/90"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
