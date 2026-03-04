import { Bracket, Card } from "bracketui";

const testimonials = [
  {
    stars: 5,
    quote: "Third Bracket completely reimagined how we present our studio online. The result was more than a website — it became a core part of how we win new clients.",
    initials: "SR",
    name: "Sophie Raines",
    role: "Founder, Raines Studio",
    featured: true,
    avatarStyle: "from-accent-300 to-accent-600",
  },
  {
    stars: 5,
    quote: "We saw a 3x increase in organic traffic within 5 months of launching our new site with their SEO baked in. Remarkable ROI.",
    initials: "MK",
    name: "Marcus Klein",
    role: "Head of Marketing, Clarendon",
    featured: false,
    avatarStyle: "from-zinc-400 to-zinc-700",
  },
  {
    stars: 5,
    quote: "The branding work was exceptional. They really listened, challenged our assumptions, and delivered something we're genuinely proud of.",
    initials: "AL",
    name: "Amara Levi",
    role: "CEO, Altum Health",
    featured: false,
    avatarStyle: "from-accent-400 to-accent-800",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-s-section border-y border-bd">
      <Bracket>
        {/* Header */}
        <div className="fade-up mb-12 text-center">
          <span className="eyebrow">Client stories</span>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head">
            Trusted by founders &amp; teams
          </h2>
          <p className="mt-3.5 text-[1.0625rem] text-t-body leading-[1.7] max-w-[560px] mx-auto">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              variant="default"
              className={`
                flex flex-col gap-4 !bg-s-card !border-bd hover:!shadow-lg hover:-translate-y-0.5 transition-all duration-200
                ${t.featured
                  ? "!bg-accent-50 !border-accent-200 accent-shadow dark:!bg-[rgba(188,58,91,0.07)] dark:!border-[rgba(188,58,91,0.15)]"
                  : ""
                }
              `}
            >
              <div className="p-7 flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="text-accent-500 text-[0.85rem] tracking-[2px]">
                  {"★".repeat(t.stars)}
                </div>
                {/* Quote */}
                <p className="text-[0.9375rem] text-t-body leading-[1.65] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-2.5 mt-auto">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarStyle} flex items-center justify-center text-[0.75rem] font-bold text-white shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.875rem] font-semibold text-t-head">{t.name}</div>
                    <div className="text-[0.78rem] text-t-mute">{t.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Bracket>
    </section>
  );
}
