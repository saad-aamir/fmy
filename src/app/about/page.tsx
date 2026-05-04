import type { Metadata } from "next";
import Image from "next/image";
import founderBg from "../../../public/img/about-founder-bg.jpg";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Eyebrow } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import {
  founder,
  perspectives,
  strongerFuture,
  whyChooseUs,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "FMY Chartered Accountants — founded by Faraz Yunus (FCCA, ACA). Partner-led London accountancy with Big 4 foundation, corporate leadership, and professional services growth experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FMY"
        title="About Us"
        description="Our team of seasoned professionals brings a wealth of expertise and a forward-thinking approach to every client relationship. At FMY Chartered Accountants, we understand that no two financial situations are alike. That's why we pride ourselves on offering tailored solutions designed to meet your specific needs and drive sustainable growth."
      >
        <p className="max-w-2xl text-base text-bone-100 leading-relaxed">
          We have built a reputation for reliability, transparency, and
          exceptional service. Clients trust us not only to manage their
          finances with precision but also to provide the strategic insights
          needed to navigate today's dynamic financial landscape. By
          leveraging the latest tools and technologies, we ensure accuracy,
          efficiency, and compliance at every step.
        </p>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Meet Our Founder"
            title={
              <>
                Faraz Yunus.{" "}
                <span className="italic font-light">
                  Partner-led, by definition.
                </span>
              </>
            }
          />

          <div className="mt-14 relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
            <Image
              src={founderBg}
              alt=""
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              quality={65}
              placeholder="blur"
              className="object-cover opacity-45"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 100% 0%, rgba(201,164,73,0.25), transparent 60%), linear-gradient(135deg, rgba(2,51,32,0.7), rgba(1,24,14,0.78))",
              }}
            />
            <div className="grain absolute inset-0" />

            <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 p-10 sm:p-14">
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center font-display text-5xl text-ink-950 font-semibold shadow-2xl shadow-black/30">
                  {founder.initials}
                  <span className="absolute -bottom-2 -right-2 rounded-full bg-ink-950 border hairline-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-400">
                    Founder
                  </span>
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <div className="font-display text-2xl text-bone-50 tracking-tight">
                    {founder.name}
                  </div>
                  <div className="text-sm text-gold-400 uppercase tracking-[0.14em] mt-1">
                    {founder.role}
                  </div>
                  <div className="mt-2 text-xs text-slate-muted">
                    {founder.quals}
                  </div>
                </div>
              </div>

              <div>
                <Eyebrow>Founder's note</Eyebrow>
                <blockquote className="mt-5 font-display text-3xl sm:text-[2.25rem] leading-[1.1] tracking-tight bone-gradient-text">
                  “{founder.quote}”
                </blockquote>
                <div className="mt-8 space-y-5 text-bone-100 leading-relaxed">
                  {founder.bio.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Three Perspectives, One Practice"
            title={
              <>
                A combination{" "}
                <span className="italic font-light">
                  few accountants can match.
                </span>
              </>
            }
            description="Faraz holds FCCA and ACA qualifications and brings together three distinct backgrounds — each one shaping how he serves clients."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {perspectives.map((p, i) => (
              <div
                key={p.k}
                className="group bg-ink-950 hover:bg-ink-900 transition-colors duration-300 p-8"
              >
                <div className="font-display text-5xl tracking-tight text-gold-500/30 group-hover:text-gold-500/70 transition-colors duration-500">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-display text-2xl text-bone-50 tracking-tight transition-colors duration-300 group-hover:text-gold-300">
                  {p.k}
                </h3>
                <p className="mt-3 text-slate-muted leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32 border-t hairline">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Eyebrow>Strategic Thinking, Personal Service</Eyebrow>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight bone-gradient-text leading-[1.05]">
                Three principles.{" "}
                <span className="italic font-light">No exceptions.</span>
              </h2>
              <p className="mt-6 text-lg text-bone-100 leading-relaxed">
                FMY is built on three principles: technical excellence without
                the jargon, transparent fixed-fee pricing, and genuine
                partnership focused on solving problems — not just filing
                forms.
              </p>
              <p className="mt-5 text-lg text-slate-muted leading-relaxed">
                If you value quality, transparency, and working with someone
                who genuinely understands your situation, let's talk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/contact" variant="primary" size="lg">
                  Book a consultation <ArrowIcon />
                </LinkButton>
                <LinkButton href="/services" variant="gold-outline" size="lg">
                  Explore services
                </LinkButton>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  h: "Technical excellence",
                  p: "Without the jargon. Every conversation, every report, written so you can act on it.",
                },
                {
                  h: "Transparent fixed-fee pricing",
                  p: "Written scope, written fee. No 6-minute timesheets. No surprise quarterly top-ups.",
                },
                {
                  h: "Genuine partnership",
                  p: "Focused on solving problems — not just filing forms. We pre-empt issues, not react to them.",
                },
              ].map((item) => (
                <div
                  key={item.h}
                  className="rounded-2xl border hairline bg-ink-900/40 p-6"
                >
                  <h3 className="font-display text-xl text-bone-50 tracking-tight">
                    {item.h}
                  </h3>
                  <p className="mt-2 text-sm text-slate-muted leading-relaxed">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="A stronger financial future"
            title={
              <>
                Smarter decisions.{" "}
                <span className="italic font-light">From the start.</span>
              </>
            }
            description="At FMY Chartered Accountants, we believe that building a successful future starts with the right financial choices today. Our expert guidance helps simplify the complex, so you can focus on what truly matters — growing with confidence."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {strongerFuture.map((feature, i) => (
              <div
                key={feature}
                className="group bg-ink-950 hover:bg-ink-900 transition-colors duration-300 p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-gold-500/60 tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gold-500/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-500/25 group-hover:text-gold-300 group-hover:scale-110">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7l2.5 2.5L11 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-bone-50 tracking-tight transition-colors duration-300 group-hover:text-gold-300">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Strategic clarity,{" "}
                <span className="italic font-light">
                  every step of the way.
                </span>
              </>
            }
          />

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {whyChooseUs.map((point, i) => (
              <div
                key={i}
                className="card-glow group flex gap-5 rounded-2xl border hairline bg-ink-900/40 p-7"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-500/10 text-gold-400 font-display text-sm transition-all duration-300 group-hover:bg-gold-500/25 group-hover:text-gold-300 group-hover:scale-110">
                  0{i + 1}
                </span>
                <p className="text-bone-100 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
