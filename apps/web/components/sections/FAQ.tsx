"use client";
import { useState } from "react";
import { Bracket } from "bracketui";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Websites typically launch in 4–6 weeks. Brand identity projects run 3–4 weeks. Larger scopes or custom builds are scoped individually after a discovery call.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — some of our best work has been with founders building from scratch. We have lean packages designed for pre-seed and seed-stage teams who need to move fast.",
  },
  {
    q: "What does the engagement process look like?",
    a: "We start with a 30-minute discovery call, followed by a proposal. Once agreed, we kick off with a strategy session, then move through weekly sprints with regular check-ins.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Absolutely. We build on editor-friendly CMS platforms and provide handover training, so your team can make updates without touching code.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — we offer monthly retainer packages for maintenance, SEO, and ongoing design or development work. Many clients stay with us long-term.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <Bracket>
        {/* Header */}
        <div className="fade-up mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[720px] flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-bd">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-transparent border-none py-[18px] flex items-center justify-between gap-3 cursor-pointer group"
              >
                <span
                  className={`text-[0.9375rem] font-medium transition-colors duration-150
                    ${open === i ? "text-accent-600" : "text-t-head group-hover:text-accent-600"}`}
                >
                  {faq.q}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 transition-transform duration-200
                    ${open === i ? "text-accent-500 rotate-45" : "text-t-mute"}`}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "300px" : "0px" }}
              >
                <p className="text-[0.9rem] text-t-body leading-[1.7] pb-[18px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Bracket>
    </section>
  );
}
