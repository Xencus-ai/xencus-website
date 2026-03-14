"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  BarChart2,
  Target,
  Megaphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { digitalMarketingPage as dm } from "@/content/services-pages";

/* ── Motion ──────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/* ── Nokia Snake Canvas ──────────────────────────────────────── */
const CELL = 90;
const SNAKE_CELLS = 5;
const DX = [1, 0, -1, 0];
const DY = [0, 1, 0, -1];

type Dir = 0 | 1 | 2 | 3;

interface SnakeState {
  pts: [number, number][];
  dir: Dir;
  prog: number;
  speed: number;
  rgb: [number, number, number];
}

function makeSnake(W: number, H: number): SnakeState {
  const cols = Math.floor(W / CELL) + 1;
  const rows = Math.floor(H / CELL) + 1;
  const dir = Math.floor(Math.random() * 4) as Dir;
  const x = Math.floor(Math.random() * cols);
  const y = Math.floor(Math.random() * rows);
  return {
    pts: [[x, y]],
    dir,
    prog: 0,
    speed: 0.006 + Math.random() * 0.005,
    rgb: [250, 171, 78],
  };
}

function GridSnakeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let raf = 0;
    let snakes: SnakeState[] = [];

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      snakes = [makeSnake(W, H)];
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      ctx.clearRect(0, 0, W, H);

      const cols = Math.floor(W / CELL) + 2;
      const rows = Math.floor(H / CELL) + 2;

      for (const s of snakes) {
        s.prog += s.speed * dt;

        while (s.prog >= 1) {
          s.prog -= 1;
          const [hx, hy] = s.pts[s.pts.length - 1];
          s.pts.push([hx + DX[s.dir], hy + DY[s.dir]]);

          if (Math.random() < 0.3) {
            const opp = ((s.dir + 2) % 4) as Dir;
            const choices = ([0, 1, 2, 3] as Dir[]).filter((d) => d !== opp);
            s.dir = choices[Math.floor(Math.random() * choices.length)];
          }

          if (s.pts.length > SNAKE_CELLS + 2) s.pts.shift();

          const [cx, cy] = s.pts[s.pts.length - 1];
          if (cx < -3 || cx > cols + 3 || cy < -3 || cy > rows + 3) {
            Object.assign(s, makeSnake(W, H));
          }
        }

        const n = s.pts.length;
        if (n < 2) continue;

        const [r, g, b] = s.rgb;
        const [ax, ay] = s.pts[n - 2];
        const [bx, by] = s.pts[n - 1];
        const headX = (ax + (bx - ax) * s.prog) * CELL;
        const headY = (ay + (by - ay) * s.prog) * CELL;

        for (let i = 0; i < n - 1; i++) {
          const alpha = ((i + 1) / (n - 1)) * 0.75;
          const x1 = s.pts[i][0] * CELL;
          const y1 = s.pts[i][1] * CELL;
          const x2 = i === n - 2 ? headX : s.pts[i + 1][0] * CELL;
          const y2 = i === n - 2 ? headY : s.pts[i + 1][1] * CELL;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowColor = `rgba(${r},${g},${b},${alpha * 0.6})`;
          ctx.shadowBlur = 8;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(headX, headY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.95)`;
        ctx.shadowColor = `rgba(${r},${g},${b},1)`;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{
        /* Large transparent centre hides snake behind content; only corners show */
        maskImage:
          "radial-gradient(ellipse 60% 65% at 50% 50%, transparent 50%, black 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 65% at 50% 50%, transparent 50%, black 80%)",
      }}
    />
  );
}

/* ── FAQ item ────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[#171717] sm:text-base">{q}</span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-[#707070] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-7 text-[#525252]">{a}</p>
      )}
    </div>
  );
}

/* ── Sub-service icons ───────────────────────────────────────── */
const SUB_ICONS = [Target, Megaphone, BarChart2] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function DigitalMarketingPageContent() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — white grid, corner blur
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="dm-hero-title"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden -mt-[var(--header-offset)] pt-[var(--header-offset)] bg-white"
      >
        {/* Grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
        {/* Fade grid at corners */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, transparent 30%, white 85%)",
          }}
        />
        {/* Bottom fade */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-white to-transparent" />

        {/* Snake travels along grid lines, masked to outer corners only */}
        <GridSnakeCanvas />

        <Container className="relative z-10">
          <div className="grid items-center gap-8 py-12 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-16">

            {/* Copy */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.h1
                id="dm-hero-title"
                variants={fadeUp}
                className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#171717] sm:text-5xl lg:text-[clamp(2.8rem,4vw,4rem)]"
              >
                Marketing that{" "}
                <span className="text-[#FAAB4E]">
                  converts learners
                </span>
                , not just clicks
              </motion.h1>

              {/* Channel chips — below the title, spinning border */}
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["Meta Ads", "Google Ads", "WhatsApp", "SEO", "Email", "Organic"].map((ch) => (
                  <div
                    key={ch}
                    className="card-spin-figure rounded-full px-3 py-1 text-xs font-medium text-[#525252]"
                  >
                    {ch}
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-lg text-sm leading-7 text-[#525252] sm:text-base sm:leading-8"
              >
                {dm.subtitle}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <div className="cta-spin-wrap">
                  <div className="cta-spin-border" aria-hidden />
                  <Link
                    href={dm.cta.buttonHref}
                    className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 sm:px-7 sm:py-3.5"
                  >
                    {dm.cta.buttonText}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none">
                <Image
                  src="/Assets/illustrations/services/digital/digital-hero.svg"
                  alt="Digital marketing performance dashboard"
                  width={600}
                  height={560}
                  className="relative w-full"
                  priority
                />

                {/* Floating metric badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-2 -left-2 z-20 flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 shadow-lg sm:-bottom-4 sm:-left-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100">
                    <TrendingUp className="size-4 text-green-600" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#171717]">CAC Optimised</p>
                    <p className="text-[10px] text-[#707070]">Weekly iteration</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -right-2 top-4 z-20 flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-lg sm:-right-4"
                >
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-xs font-medium text-[#171717]">All channels live</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          METRICS STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {dm.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="rounded-2xl p-5 text-center"
                style={{ boxShadow: "8px 8px 24px #e8e8e8, -8px -8px 24px #ffffff" }}
              >
                <p className="text-xl font-extrabold text-[#171717] sm:text-2xl">{m.value}</p>
                <p className="mt-1 text-xs leading-5 text-[#707070] sm:text-sm">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROBLEMS — what you're dealing with
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="dm-problems-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Illustration — shows on mobile too */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center lg:order-2"
            >
              <Image
                src="/Assets/illustrations/services/digital/Online world-amico.svg"
                alt="Digital marketing challenges"
                width={480}
                height={460}
                className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px]"
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={fadeUp.transition}
              className="lg:order-1"
            >
              <SectionLabel>The real problem</SectionLabel>
              <h2
                id="dm-problems-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
              >
                Why most EdTech marketing spend doesn&apos;t convert
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#707070]">
                These are the patterns we see across every EdTech company we work with.
              </p>

              <div className="mt-8 space-y-4">
                {dm.problems.map((p, idx) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-4 rounded-2xl border border-zinc-100 p-4 sm:p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xs font-black text-red-400">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-[#171717]">{p.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT WE DO — sub-services bento
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="dm-services-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-10 text-center sm:mb-12"
          >
            <SectionLabel>What we cover</SectionLabel>
            <h2
              id="dm-services-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Your full growth stack, managed end to end
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {dm.subServices?.map((ss, idx) => {
              const Icon = SUB_ICONS[idx] ?? Zap;
              return (
                <motion.div
                  key={ss.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col rounded-2xl border border-zinc-100 p-6 sm:p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100">
                    <Icon className="size-5 text-amber-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-[#171717] sm:text-lg">{ss.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {ss.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-[#525252]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS — timeline + illustration
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="dm-how-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Steps */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={fadeUp.transition}
            >
              <SectionLabel>How we work</SectionLabel>
              <h2
                id="dm-how-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
              >
                From audit to live campaigns in days
              </h2>

              <ol className="relative mt-10 space-y-0">
                <div
                  aria-hidden
                  className="absolute left-[1.1rem] top-5 h-[calc(100%-2.5rem)] w-px bg-amber-200"
                />
                {dm.howItWorks.map((step, idx) => (
                  <motion.li
                    key={step.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-white ring-4 ring-white">
                      {idx + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-[#171717] sm:text-base">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-[#707070]">{step.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <Image
                src="/Assets/illustrations/services/digital/Marketing-rafiki.svg"
                alt="Marketing strategy and execution"
                width={460}
                height={440}
                className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px]"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          OUTCOMES — what you get
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="dm-outcomes-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <Image
                src="/Assets/illustrations/services/digital/Social media-bro.svg"
                alt="Marketing results and outcomes"
                width={460}
                height={440}
                className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px]"
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={fadeUp.transition}
            >
              <SectionLabel>What you get</SectionLabel>
              <h2
                id="dm-outcomes-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
              >
                Results tied to enrolments, not vanity metrics
              </h2>

              <div className="mt-8 space-y-5">
                {dm.outcomes.map((o, idx) => (
                  <motion.div
                    key={o.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.09 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <Zap className="size-4 text-amber-700" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#171717] sm:text-base">{o.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#707070]">{o.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHO THIS IS FOR
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-14 sm:pb-20" aria-labelledby="dm-audience-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-8 sm:mb-10"
          >
            <SectionLabel>Who this is for</SectionLabel>
            <h2
              id="dm-audience-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Built specifically for EdTech growth teams
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {dm.targetAudience.map((a, idx) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-zinc-100 p-5 sm:p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-xs font-black text-amber-700">
                  {["G", "F", "P"][idx]}
                </div>
                <h3 className="text-sm font-bold text-[#171717] sm:text-base">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#707070]">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOG / CONTENT — illustration break
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-14 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 via-white to-orange-50/30 sm:rounded-3xl">
            <div className="grid items-center gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  Content &amp; SEO
                </p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-[#171717] sm:text-2xl">
                  We write the content that earns organic traffic
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#525252]">
                  High-intent blog posts, landing pages, and programme content optimised for the
                  exact searches your prospective learners are making — in English and regional
                  languages.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["SEO articles", "Landing pages", "WhatsApp sequences", "Email nurture", "Hindi / regional"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/Assets/illustrations/services/digital/Blog post-bro.svg"
                  alt="Content and SEO for EdTech"
                  width={280}
                  height={280}
                  className="w-full max-w-[200px] sm:max-w-[260px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-14 sm:pb-20" aria-labelledby="dm-faq-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-8"
          >
            <SectionLabel>FAQ</SectionLabel>
            <h2
              id="dm-faq-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              {dm.faq.title}
            </h2>
          </motion.div>

          <div className="mx-auto max-w-2xl divide-y divide-zinc-100 rounded-2xl border border-zinc-100 px-5 sm:px-8">
            {dm.faq.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — dark closer
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8" aria-labelledby="dm-cta-title">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-2xl bg-[#151515] px-6 py-10 text-center shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          >
            <div aria-hidden className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-0 -z-10 h-[20rem] w-[20rem] rounded-full bg-amber-400/10 blur-3xl" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Ready to grow?
            </p>
            <h2
              id="dm-cta-title"
              className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {dm.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              {dm.cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href={dm.cta.buttonHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FAAB4E] px-7 py-3.5 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                {dm.cta.buttonText}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-zinc-400 transition hover:text-white"
              >
                All services <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
