import { Bracket, Button } from "bracketui";

const metaItems = [
  "Free 30-min scoping call",
  "Fixed-price proposals",
  "You own everything",
];

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-bd">
      <Bracket>
        <div
          className="fade-up rounded-3xl px-14 py-16 max-sm:px-7 max-sm:py-10 relative overflow-hidden cta-card-bg"
          style={{
            boxShadow:
              "0 0 0 1px rgba(var(--glow-rgb),.06), 0 8px 32px -8px rgba(var(--glow-rgb),.12), 0 24px 64px -16px rgb(0 0 0 / .08)",
          }}
        >
          {/* Top-right bloom */}
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-50"
            style={{ background: "radial-gradient(circle, rgba(var(--glow-rgb), .15) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 grid grid-cols-[1fr_auto] gap-12 items-center max-[760px]:grid-cols-1 max-[760px]:gap-7">
            {/* Left */}
            <div>
              <span className="eyebrow mb-3.5 inline-flex">Let&apos;s work together</span>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-t-head mb-2.5">
                Your next site
                <br />
                ships in 4 weeks.
              </h2>
              <p className="text-[1rem] text-t-body leading-[1.65] max-w-[460px]">
                Tell us what you&apos;re building. We&apos;ll scope it, price it, and kick off within days — no lengthy discovery, no retainer lock-in.
              </p>
              {/* Meta */}
              <div className="flex flex-wrap gap-5 mt-7">
                {metaItems.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[0.8375rem] text-t-body">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-500 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2.5 shrink-0 max-[760px]:flex-row max-[480px]:flex-col">
              <Button
                variant="default"
                size="lg"
                as="a"
                href="#"
                className="gap-2 whitespace-nowrap justify-center"
              >
                Start a project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href="#"
                className="whitespace-nowrap justify-center"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  );
}
