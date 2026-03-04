"use client";
import { useState } from "react";
import { Bracket, Card } from "bracketui";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  body: string;
  items: string[];
};

const tabs: { id: string; label: string; group: "services" | "solutions" }[] = [
  { id: "website",  label: "Website",  group: "services"  },
  { id: "seo",      label: "SEO",      group: "services"  },
  { id: "branding", label: "Branding", group: "services"  },
  { id: "design",   label: "Design",   group: "solutions" },
  { id: "platform", label: "Platform", group: "solutions" },
  { id: "industry", label: "Industry", group: "solutions" },
];

const tabContent: Record<string, ServiceItem[]> = {
  website: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: "Marketing Website", body: "Conversion-optimised sites that tell your story and turn visitors into leads.", items: ["Custom design & copy", "CMS integration", "Speed-optimised builds", "Analytics & tracking"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M5 3h14M5 21h14M3 5v14M21 5v14"/></svg>, title: "E-Commerce", body: "Full-featured online stores built for performance and high AOV.", items: ["Shopify / headless builds", "Custom checkout flows", "Product photography direction", "Post-launch support"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: "Web App / SaaS", body: "From MVP to polished product — we design and build application interfaces users love.", items: ["Product design", "Next.js / React builds", "API integrations", "Design systems"] },
  ],
  seo: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>, title: "Technical SEO", body: "Full audits, crawl fixes, schema markup, and Core Web Vitals optimisation.", items: ["Site audit & analysis", "Structured data", "Performance tuning", "Internal linking"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>, title: "Content Strategy", body: "Keyword research, content calendars, and briefs that rank and convert.", items: ["Keyword clustering", "Topical authority mapping", "Content writing", "Monthly reporting"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: "SEO Growth Retainer", body: "An ongoing partnership — we own and grow your organic channel month-to-month.", items: ["Monthly deliverables", "Link building", "Competitor monitoring", "Quarterly strategy review"] },
  ],
  branding: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>, title: "Brand Identity", body: "Logo, colour, type, and voice — a complete identity system built to last.", items: ["Brand strategy workshop", "Logo design", "Brand guidelines", "Asset library"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: "Brand Refresh", body: "Evolve your existing brand without losing equity. Strategic, not arbitrary.", items: ["Brand audit", "Refined visual system", "Migration plan", "Rollout support"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: "Print & Collateral", body: "Business cards, decks, packaging, signage — brand-consistent across every touchpoint.", items: ["Pitch decks", "Print-ready artwork", "Packaging design", "Social templates"] },
  ],
  design: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>, title: "UI / UX Design", body: "Research-led interface design for web and mobile — wireframes to final handoff.", items: ["User research", "Wireframing", "High-fidelity UI", "Design system"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: "Design Systems", body: "Scalable component libraries in Figma and code, so your team ships faster.", items: ["Component architecture", "Token management", "Figma library", "React component kit"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>, title: "Motion & Interaction", body: "Micro-interactions, page transitions, and scroll animations that make interfaces feel alive.", items: ["Lottie animations", "CSS / Framer Motion", "Prototyping", "Video walkthroughs"] },
  ],
  platform: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>, title: "Headless CMS", body: "Contentful, Sanity, or Payload — we choose and integrate the right CMS for your team.", items: ["CMS selection", "Schema design", "Editor training", "Content migration"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>, title: "Infrastructure & DevOps", body: "Vercel, AWS, and edge deployments configured for speed, scale, and reliability.", items: ["CI/CD pipelines", "Edge hosting", "Performance monitoring", "Staging environments"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title: "Integrations", body: "CRM, analytics, payments, email — we wire up the tools your team already uses.", items: ["HubSpot / Salesforce", "Stripe & payments", "Email platforms", "Custom APIs"] },
  ],
  industry: [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "Real Estate", body: "Property portals, developer sites, and agent platforms built for listings and leads.", items: ["Property search UI", "Map integrations", "Lead capture", "Virtual tour support"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: "Health & Wellness", body: "Patient-facing sites, booking systems, and health brand identities that build trust.", items: ["Booking integrations", "Accessibility-first", "GDPR / compliance", "Brand & copy"] },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, title: "Professional Services", body: "Law firms, consultancies, and agencies — credibility-first digital presence.", items: ["Case study showcases", "Thought leadership", "Team & culture pages", "SEO authority building"] },
  ],
};

export default function Services() {
  const [active, setActive] = useState("website");
  const cards = tabContent[active] ?? [];

  return (
    <section id="services" className="py-24 bg-background">
      <Bracket>
        {/* Header */}
        <div className="fade-up mb-11">
          <span className="eyebrow">Services &amp; Solutions</span>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-t-head max-w-[540px]">
            What we build for you
          </h2>
          <p className="mt-3.5 text-[1.0625rem] text-t-body leading-[1.7] max-w-[560px]">
            From websites to full brand ecosystems — pick what you need or let us shape the full picture.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex items-center gap-0.5 bg-s-section border border-bd rounded-[10px] p-1 w-fit mb-9 flex-wrap">
          {/* Group labels */}
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-t-mute px-2.5 py-1.5">
            Services
          </span>
          {tabs.filter(t => t.group === "services").map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-1.5 rounded-[7px] text-[0.8375rem] font-medium transition-all duration-150 cursor-pointer border-none whitespace-nowrap
                ${active === tab.id
                  ? "bg-s-card text-t-head shadow-sm dark:shadow-none dark:bg-s-card-2"
                  : "text-t-body hover:text-t-head bg-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-t-mute px-2.5 py-1.5 ml-1">
            Solutions
          </span>
          {tabs.filter(t => t.group === "solutions").map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-1.5 rounded-[7px] text-[0.8375rem] font-medium transition-all duration-150 cursor-pointer border-none whitespace-nowrap
                ${active === tab.id
                  ? "bg-s-card text-t-head shadow-sm dark:shadow-none dark:bg-s-card-2"
                  : "text-t-body hover:text-t-head bg-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {cards.map((card, i) => (
            <Card
              key={`${active}-${i}`}
              variant="flat"
              className="!bg-s-section !border-bd hover:!bg-s-card hover:!shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="p-7">
                {/* Icon */}
                <div className="w-[38px] h-[38px] rounded-md bg-accent-50 text-accent-600 dark:bg-[rgba(188,58,91,0.12)] dark:text-accent-400 flex items-center justify-center mb-3.5">
                  {card.icon}
                </div>
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-t-head mb-2">
                  {card.title}
                </h3>
                <p className="text-[0.875rem] text-t-body leading-[1.65]">{card.body}</p>
                <ul className="mt-3.5 flex flex-col gap-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-[0.85rem] text-t-body flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Bracket>
    </section>
  );
}
