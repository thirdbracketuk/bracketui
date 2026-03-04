"use client";
import { Bracket, Button } from "bracketui";

const logos = ["Vercel", "Linear", "Notion", "Stripe", "Loom", "Figma"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-[104px] pb-20">
      <Bracket>
        <div className="flex flex-col items-center text-center gap-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 text-accent-700 text-[0.8rem] font-medium px-3 py-1 rounded-full mb-7">
            <span className="badge-dot w-1.5 h-1.5 bg-accent-500 rounded-full" />
            Full-service digital agency
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-t-head mb-5 max-w-[820px]"
          >
            Build brands that{" "}
            <br />
            <em className="not-italic text-accent-600">earn attention</em>
          </h1>

          {/* Lead */}
          <p className="text-[1.0625rem] text-t-body leading-[1.7] max-w-[560px] mb-9">
            We design, develop, and grow digital products — from pixel-perfect websites to complete brand identities and SEO that compounds.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button
              variant="default"
              size="lg"
              as="a"
              href="#contact"
              className="gap-2"
            >
              Start a project
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" as="a" href="#work">
              See our work
            </Button>
          </div>

          {/* Trusted by logos */}
          <div className="fade-up mt-[72px] w-full flex flex-col items-center gap-4">
            <span className="text-[0.78rem] text-t-mute uppercase tracking-[0.06em] font-medium">
              Trusted by teams at
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              {logos.map((name) => (
                <span
                  key={name}
                  className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-t-body"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  );
}
