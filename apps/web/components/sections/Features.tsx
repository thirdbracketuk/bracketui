import { Bracket, Card } from "bracketui";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h4"/>
      </svg>
    ),
    title: "Strategy-first design",
    body: "We ask the hard questions before touching a pixel. Every design choice is backed by purpose.",
    accent: false,
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Fast delivery cycles",
    body: "Weekly sprints, clear milestones, no ghost-shipping. You'll always know where things stand. Our typical website project ships in 4–6 weeks from kick-off to launch.",
    accent: true,
    tag: "4–6 week turnaround",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Full-stack capability",
    body: "Brand, design, code, and SEO under one roof — no juggling separate agencies.",
    accent: false,
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <path d="M3 3h18v18H3V3z"/><path d="M9 9l6 6M15 9l-6 6"/>
      </svg>
    ),
    title: "No lock-in contracts",
    body: "We work on retainer or project basis. Stay because you love the work, not because you're stuck. Own 100% of everything we build — code, assets, and IP.",
    accent: false,
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12M16 2h6v6"/>
      </svg>
    ),
    title: "SEO built in",
    body: "Technical SEO, content strategy, and core web vitals optimised from the ground up — not bolted on.",
    accent: false,
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Dedicated team",
    body: "You get a named point of contact — not a rotating cast of account managers.",
    accent: true,
    tag: "Direct access",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-s-section border-y border-bd"
    >
      <Bracket>
        {/* Header */}
        <div className="fade-up mb-13">
          <span className="eyebrow">Why Third Bracket</span>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head max-w-[520px]">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-3.5 text-[1.0625rem] text-t-body leading-[1.7] max-w-[560px]">
            We keep things lean, strategic and honest. Here&apos;s what you get when you work with us.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          style={{
            columns: "3",
            columnGap: "16px",
          }}
          className="max-md:[column-count:2] max-sm:[column-count:1]"
        >
          {features.map((f, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <Card
                variant="default"
                className={`
                  !bg-s-card !border-bd hover:!shadow-lg hover:-translate-y-0.5
                  transition-all duration-200
                  ${f.accent ? "!bg-accent-50 !border-accent-200 dark:!bg-[rgba(188,58,91,0.07)] dark:!border-[rgba(188,58,91,0.15)] accent-hover" : ""}
                `}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-[38px] h-[38px] rounded-md flex items-center justify-center mb-3.5
                      ${f.accent
                        ? "bg-accent-100 text-accent-600 dark:bg-[rgba(188,58,91,0.15)] dark:text-accent-400"
                        : "bg-s-section text-t-body dark:bg-s-card-2"
                      }`}
                  >
                    {f.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-t-head mb-1.5">
                    {f.title}
                  </h3>
                  {/* Body */}
                  <p className="text-[0.875rem] text-t-body leading-[1.65]">
                    {f.body}
                  </p>
                  {/* Tag */}
                  {f.tag && (
                    <span className="inline-block mt-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.07em] text-accent-600 bg-accent-100 px-2 py-0.5 rounded-full dark:bg-[rgba(188,58,91,0.15)] dark:text-accent-400">
                      {f.tag}
                    </span>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Bracket>
    </section>
  );
}
