import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white px-8 py-10 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
              <h3 className="mt-8 font-heading text-2xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
