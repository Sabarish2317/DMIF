import React from "react";
import { motion, type Transition } from "framer-motion";
import { Users, Target, Zap, ArrowRight } from "lucide-react";

export default function Landing() {
  const shiftBlocks = [
    {
      label: "Old way",
      title: "Tutorial treadmill",
      description:
        "Collect courses, rewatch the same videos, and hope confidence appears someday.",
      items: [
        "Memorize syntax before touching anything real",
        "Paste AI snippets without understanding trade-offs",
        "Ship nothing because nobody reviews your code",
      ],
      footer: "Result: you know buzzwords, not decisions.",
      highlight: false,
    },
    {
      label: "G-CMP way",
      title: "Product apprenticeship",
      description:
        "Own a production-grade roadmap with a mentor who behaves like your product owner.",
      items: [
        "Start with a real brief and measurable outcomes",
        "Pair with mentors who explain the why behind every change",
        "Ship, review, refactor, and document like a real team",
      ],
      footer: "Result: your portfolio reads like release notes, not tutorials.",
      highlight: true,
    },
  ];

  const mentorshipSignals = [
    { label: "Feedback loop", value: "< 24 hrs" },
    { label: "Live reviews", value: "4 / month" },
    { label: "Surface area", value: "Code · product" },
  ];

  const mentorshipStack = [
    {
      icon: Users,
      title: "Sprint planning + scope check",
      meta: "Weekly anchor",
      copy: "Every build starts with a live walkthrough of requirements, risks, and the definition of done so you never ship blindly.",
    },
    {
      icon: Zap,
      title: "Async rescue lane",
      meta: "<2 hr avg",
      copy: "Drop blockers, prototypes, or Looms anytime and get pointed answers instead of waiting for the next session.",
    },
    {
      icon: Target,
      title: "Product-grade reviews",
      meta: "Code + UX",
      copy: "Mentors comment like product owners: performance notes, naming, user flows, and the trade-offs behind every change.",
    },
  ];

  const buildPhases = [
    {
      step: "1",
      title: "Pick a project",
      copy: "Your mentor assigns a scoped, real brief instead of a tutorial so you always know the user, the constraints, and what success looks like.",
      outcome: "Shared definition of done with clear acceptance tests.",
    },
    {
      step: "2",
      title: "Build & struggle",
      copy: "You write production-grade code, break things, and get targeted guidance only when you need it. Every blocker turns into a design conversation.",
      outcome: "Working feature slices that ship every sprint.",
    },
    {
      step: "3",
      title: "Ship & iterate",
      copy: "Deploy, demo, gather feedback, and refactor. Mentors review like product owners so you internalize trade-offs, not just fixes.",
      outcome: "A release note-worthy project with measurable impact.",
    },
  ];

  const viewportConfig = { once: true, amount: 0.3 };
  const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionTransition: Transition = {
    duration: 0.7,
    ease: [0.22, 0.55, 0.25, 0.95] as const,
  };
  const motionSectionProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: viewportConfig,
    variants: sectionVariants,
    transition: sectionTransition,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        {...motionSectionProps}
        className="relative pt-20 pb-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid gap-10 items-center lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-900 uppercase">
              Project-First Learning
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
              Build first.
              <br />
              Learn second.
              <br />
              <span className="text-blue-900">Master forever.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Real mentorship for real engineers.
              <br />
              No lectures. Just projects.
            </p>
            <button className="group inline-flex items-center gap-3 rounded-full bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-900">
              Start building
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-none">
            <img
              className="w-full max-w-lg object-contain"
              src="/illustration.svg"
              alt="Mentor guiding a student through code"
            />
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <motion.section
        {...motionSectionProps}
        className="bg-blue-900 items-center justify-center py-12 px-6"
      >
        <div className="max-w-6xl mx-auto grid gap-8 text-center sm:text-left md:grid-cols-3">
          {[
            { stat: "100%", label: "Project-based learning" },
            { stat: "1:1", label: "Mentor-to-student ratio" },
            { stat: "Real", label: "Production-grade code" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-2xl sm:text-3xl w-full text-center font-bold text-white">
                {item.stat}
              </p>
              <p className="text-gray-300 w-full text-center text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* The Shift */}
      <motion.section {...motionSectionProps} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-900">
              The shift
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Trade tutorial fatigue for product muscle
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600">
              A simple comparison of what changes when you stop consuming
              content and start owning production-grade releases with mentors
              who care about outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {shiftBlocks.map((block) => (
              <article
                key={block.label}
                className={`relative overflow-hidden rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  block.highlight
                    ? "border-transparent bg-blue-900 text-white"
                    : "border-gray-100 bg-white text-gray-900"
                }`}
              >
                <div className="relative flex flex-col gap-5">
                  <span
                    className={`inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.4em] ${
                      block.highlight ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {block.label}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`text-xl font-semibold ${
                        block.highlight ? "text-white" : "text-black"
                      }`}
                    >
                      {block.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        block.highlight ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {block.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                            block.highlight
                              ? "bg-white/25 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {block.highlight ? "✓" : "—"}
                        </span>
                        <p
                          className={`text-sm leading-relaxed ${
                            block.highlight ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`text-xs ${
                      block.highlight ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {block.footer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...motionSectionProps} className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Before G-CMP",
              copy: "Endless tutorials, zero clarity. The code editor feels like a wall, not a playground.",
              tone: "bg-rose-50",
              image: "/ill3.svg",
              alt: "Student feeling stuck and frustrated while learning alone",
            },
            {
              title: "After G-CMP",
              copy: "Guided sprints, real mentorship, and your own shipped products that prove your skills.",
              tone: "bg-emerald-50",
              image: "/ill2.svg",
              alt: "Confident student collaborating online and celebrating progress",
            },
          ].map(({ title, copy, tone, image, alt }) => (
            <figure
              key={title}
              className={`${tone} flex flex-col gap-4 rounded-[28px] p-7 shadow-inner`}
            >
              <img
                className="h-56 w-full rounded-xl object-cover"
                src={image}
                alt={alt}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {copy}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section {...motionSectionProps} className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-900/70">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              How it works
            </h2>
            <p className="text-sm text-gray-500">
              A tight three-step cadence keeps you shipping: scope with your
              mentor, build relentlessly, then iterate based on real feedback.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {buildPhases.map((card, index) => (
              <article
                key={card.step}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white  p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-900/10 text-sm font-semibold text-blue-900">
                      {card.step}
                    </span>
                    <h3 className="text-base font-semibold text-black">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-blue-900/50">
                    Step {index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.copy}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent" />
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-400">
                    Outcome
                  </p>
                  <p className="text-sm text-gray-800">{card.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visual Break */}
      <motion.section
        {...motionSectionProps}
        className="py-14 px-6 bg-blue-900"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
            "AI generates code.
            <br />
            Engineers <span className="italic">understand</span> code."
          </p>
        </div>
      </motion.section>

      {/* Mentorship */}
      <motion.section
        {...motionSectionProps}
        className="py-20 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-900/70">
                Mentorship model
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Your mentor owns outcomes, not office hours
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Expect the same cadence and accountability you'd get inside a
                top-tier product team: live planning, async unblockers, and
                reviews that go past syntax into user and business impact.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {mentorshipSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-gray-100 bg-white p-4"
                >
                  <p className="text-xs text-blue-900/60">{signal.label}</p>
                  <p className="mt-3 text-lg font-semibold text-blue-900">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Mentors behave like product owners: they challenge decisions,
              request instrumentation, and demand clarity on trade-offs.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {mentorshipStack.map(({ icon: Icon, title, copy, meta }) => (
              <article
                key={title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-blue-900/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-base font-semibold text-black">
                      {title}
                    </h4>
                    <span className="rounded-full border border-gray-100 bg-blue-50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-blue-900/70">
                      {meta}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who's This For */}
      <motion.section
        {...motionSectionProps}
        className="bg-blue-900 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Who's this for?
            </h2>
            <p className="text-base text-gray-200">
              Anyone ready to become a real engineer.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "School & college students",
              "Career switchers",
              "Working engineers",
              "AI tool users",
            ].map((label) => (
              <div key={label} className="rounded-xl bg-gray-100/15 p-7">
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="mt-2 text-gray-200 text-xs sm:text-sm">
                  {label === "School & college students" &&
                    "Build your foundation before placements matter."}
                  {label === "Career switchers" &&
                    "No CS degree? No problem. Just commitment."}
                  {label === "Working engineers" &&
                    "Level up to product, R&D, or architecture roles."}
                  {label === "AI tool users" &&
                    "Go from copy-paste to actually understanding code."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section {...motionSectionProps} className="py-28 px-6">
        <div className="mx-auto max-w-4xl flex flex-col gap-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Stop learning.
            <br />
            Start building.
          </h2>
          <div className="flex flex-col items-center gap-5">
            <button className="group inline-flex items-center gap-3 rounded-full bg-blue-900 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-900">
              Join G-CMP
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-gray-500">
              No prerequisites. Just bring your curiosity.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
