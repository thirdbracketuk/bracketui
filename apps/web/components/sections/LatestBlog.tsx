"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { Bracket, Button } from "bracketui";

const posts = [
  { tag: "SEO",         date: "Feb 2025", featured: false, title: "Why your homepage isn't ranking — and it's probably not what you think", excerpt: "Most homepage SEO problems aren't technical. They're structural. Here's how to diagnose and fix the real issue." },
  { tag: "Design",      date: "Jan 2025", featured: true,  title: "The case for boring websites", excerpt: "Scroll-jacking and 3D heroes get attention. But conversion comes from clarity. A defence of restraint in web design." },
  { tag: "Branding",    date: "Dec 2024", featured: false, title: "How to brief a brand designer without wasting everyone's time", excerpt: "A practical framework for founders going into a brand project — what to prepare, what to avoid, and what to let go of." },
  { tag: "Strategy",    date: "Nov 2024", featured: false, title: "Should your startup launch with a one-pager or a full site?", excerpt: "The honest answer depends on two things: how clear your positioning is, and how fast you need to move." },
  { tag: "Development", date: "Oct 2024", featured: false, title: "Next.js or Webflow? A no-nonsense comparison for founders", excerpt: "We've built on both. Here's when each one is the right call — and when it really doesn't matter." },
];

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === "right"
        ? <path d="M3 8h10M9 4l4 4-4 4"/>
        : <path d="M13 8H3M7 4L3 8l4 4"/>}
    </svg>
  );
}

export default function LatestBlog() {
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
    trackRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section id="blog" className="pt-24 pb-0 bg-background border-t border-bd">
      <Bracket>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 fade-up">
          <div>
            <span className="eyebrow">From the blog</span>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head">
              Thinking out loud
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button className="scroll-arrow" onClick={() => scroll("left")} disabled={!canLeft} aria-label="Scroll left">
                <ArrowIcon dir="left" />
              </button>
              <button className="scroll-arrow" onClick={() => scroll("right")} disabled={!canRight} aria-label="Scroll right">
                <ArrowIcon dir="right" />
              </button>
            </div>
            <Button variant="outline" size="md" as="a" href="#" className="gap-2 shrink-0">
              Read all posts
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Button>
          </div>
        </div>
      </Bracket>

      {/* Full-width scroll */}
      <div className="hscroll-track" ref={trackRef}>
        <div className="hscroll-inner">
          {posts.map((post, i) => (
            <div
              key={i}
              className={`w-[300px] shrink-0 border border-bd rounded-2xl p-6 flex flex-col gap-3 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1
                ${post.featured
                  ? "bg-accent-50 border-accent-200 accent-shadow dark:bg-[rgba(188,58,91,0.07)] dark:border-[rgba(188,58,91,0.15)]"
                  : "bg-s-section hover:bg-s-card"
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.07em] text-accent-600 bg-accent-100 px-2 py-0.5 rounded-full dark:bg-[rgba(188,58,91,0.15)] dark:text-accent-400">
                  {post.tag}
                </span>
                <span className="text-[0.75rem] text-t-mute">{post.date}</span>
              </div>
              <h3 className="text-[0.95rem] font-semibold text-t-head leading-[1.4] tracking-[-0.01em] flex-1">
                {post.title}
              </h3>
              <p className="text-[0.845rem] text-t-body leading-[1.6]">{post.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-accent-600 mt-auto hover:gap-2.5 transition-all duration-150 no-underline">
                Read post
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
