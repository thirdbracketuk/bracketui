"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { Bracket, Button } from "bracketui";

const projects = [
  { tag: "Website",    imgStyle: { background: "linear-gradient(135deg,#f5d5e1 0%,#eeb3c8 100%)" }, mockup: "site",      title: "Raines Studio",       desc: "Full rebrand and website for a London-based interior design studio.",              meta: "Brand · Web · SEO" },
  { tag: "SaaS",       imgStyle: { background: "linear-gradient(135deg,#e4e4e7 0%,#d1d1d6 100%)" }, mockup: "dashboard", title: "Clarendon Dashboard", desc: "Product design and Next.js build for a B2B analytics platform.",                   meta: "UI/UX · Platform · Design System" },
  { tag: "E-Commerce", imgStyle: { background: "linear-gradient(135deg,#fde8d8 0%,#fbd0b5 100%)" }, mockup: "shop",      title: "Altum Health Shop",   desc: "Shopify store redesign and SEO growth strategy for a wellness brand.",            meta: "E-Commerce · SEO · Branding" },
  { tag: "Branding",   imgStyle: { background: "linear-gradient(135deg,#e0f2fe 0%,#bae6fd 100%)" }, mockup: "brand",     title: "Meridian Legal",      desc: "Complete brand identity for a boutique property law firm.",                       meta: "Brand Identity · Collateral" },
  { tag: "Website",    imgStyle: { background: "linear-gradient(135deg,#f0fdf4 0%,#bbf7d0 100%)" }, mockup: "hero",      title: "GreenRoot Farms",     desc: "Brand and marketing site for a direct-to-consumer organic food startup.",         meta: "Brand · Web" },
];

type MockupType = "site" | "dashboard" | "shop" | "brand" | "hero";

function Mockup({ type }: { type: MockupType }) {
  const bar  = <div className="h-2 bg-black/15 rounded w-full" />;
  const line = (w: string) => <div className={`h-1.5 bg-black/10 rounded ${w}`} />;
  const block = <div className="h-11 bg-black/10 rounded-md" />;
  if (type === "site") return (<div className="flex flex-col gap-2 w-full max-w-[240px]">{bar}{line("w-4/5")}{line("w-3/5")}<div className="grid grid-cols-2 gap-1.5 mt-1">{block}{block}</div></div>);
  if (type === "dashboard") return (<div className="flex flex-col gap-2 w-full max-w-[240px]">{bar}<div className="flex gap-1.5">{[1,2,3].map(i=><div key={i} className="h-1.5 w-5 bg-black/15 rounded"/>)}</div>{line("w-[70%]")}{line("w-1/2")}</div>);
  if (type === "shop") return (<div className="flex flex-col gap-2 w-full max-w-[240px]">{bar}{line("w-full")}<div className="grid grid-cols-3 gap-1.5 mt-1">{[1,2,3].map(i=><div key={i} className="h-14 bg-black/10 rounded-md"/>)}</div></div>);
  if (type === "brand") return (<div className="flex flex-col gap-3 w-full max-w-[240px]"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-md bg-black/20"/><div className="h-2.5 w-24 bg-black/15 rounded"/></div><div className="flex gap-2">{["#1e3a5f","#2d6a9f","#7cb9e8","#e8f4fc"].map(c=><div key={c} className="w-7 h-7 rounded-full border-2 border-black/10" style={{background:c}}/>)}</div></div>);
  return (<div className="flex flex-col gap-2 w-full max-w-[240px]">{bar}<div className="h-[72px] bg-black/10 rounded-lg w-full"/></div>);
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === "right"
        ? <path d="M3 8h10M9 4l4 4-4 4"/>
        : <path d="M13 8H3M7 4L3 8l4 4"/>}
    </svg>
  );
}

export default function LatestWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section id="work" className="pt-24 pb-0 bg-s-section border-y border-bd">
      <Bracket>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 fade-up">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head">
              Projects we&apos;re proud of
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Scroll arrows — hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <button className="scroll-arrow" onClick={() => scroll("left")} disabled={!canLeft} aria-label="Scroll left">
                <ArrowIcon dir="left" />
              </button>
              <button className="scroll-arrow" onClick={() => scroll("right")} disabled={!canRight} aria-label="Scroll right">
                <ArrowIcon dir="right" />
              </button>
            </div>
            <Button variant="outline" size="md" as="a" href="#" className="gap-2 shrink-0">
              View all work
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Button>
          </div>
        </div>
      </Bracket>

      {/* Full-width scroll */}
      <div className="hscroll-track" ref={trackRef}>
        <div className="hscroll-inner">
          {projects.map((p, i) => (
            <div key={i} className="w-[320px] shrink-0 bg-s-card border border-bd rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="h-[200px] relative flex items-center justify-center p-6" style={p.imgStyle}>
                <span className="absolute top-3 left-3 text-[0.7rem] font-semibold uppercase tracking-[0.07em] bg-white/85 backdrop-blur-sm text-zinc-700 px-2 py-0.5 rounded-full border border-black/[0.06]">{p.tag}</span>
                <Mockup type={p.mockup as MockupType} />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-[0.975rem] font-semibold text-t-head mb-1.5">{p.title}</h3>
                <p className="text-[0.845rem] text-t-body leading-[1.6] mb-3">{p.desc}</p>
                <span className="text-[0.75rem] font-medium text-accent-600">{p.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
