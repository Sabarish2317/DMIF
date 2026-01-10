import React from "react";
import { Users, Target, Zap, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid gap-16 items-center lg:grid-cols-2">
          <div className="space-y-8">
            <span className="text-sm font-semibold tracking-[0.2em] text-blue-900 uppercase">
              Project-First Learning
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">
              Build first.
              <br />
              Learn second.
              <br />
              <span className="text-blue-900">Master forever.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Real mentorship for real engineers.
              <br />
              No lectures. Just projects.
            </p>
            <button className="group inline-flex items-center gap-3 rounded-full bg-blue-900 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-black">
              Start building
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-none">
            <img
              className="w-full max-w-xl object-contain"
              src="/illustration.svg"
              alt="Mentor guiding a student through code"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black items-center justify-center py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 text-center sm:text-left md:grid-cols-3">
          {[
            { stat: "100%", label: "Project-based learning" },
            { stat: "1:1", label: "Mentor-to-student ratio" },
            { stat: "Real", label: "Production-grade code" },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-4xl sm:text-5xl w-full text-center font-bold text-white">
                {item.stat}
              </p>
              <p className="text-gray-400 w-full text-center text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Shift */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2">
          {[
            {
              title: "Old Way",
              tone: "text-gray-500",
              badge: "bg-gray-300",
              items: [
                "Learn syntax first",
                "Copy AI code blindly",
                "Watch endless tutorials",
              ],
              muted: true,
            },
            {
              title: "G-CMP Way",
              tone: "text-blue-900",
              badge: "bg-blue-900",
              items: [
                "Start with real projects",
                "Understand every line",
                "Build under mentorship",
              ],
              muted: false,
            },
          ].map((block) => (
            <div key={block.title} className="space-y-6">
              <h3 className={`text-sm font-semibold uppercase ${block.tone}`}>
                {block.title}
              </h3>
              <div className="space-y-6">
                {block.items.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div
                      className={`mt-1 h-6 w-6 rounded-full ${block.badge}`}
                    ></div>
                    <p
                      className={`text-xl ${block.muted ? "text-gray-400 line-through" : "text-black font-medium"}`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pick a project",
                copy: "Your mentor assigns you something real to build. No theory dumps.",
              },
              {
                step: "2",
                title: "Build & struggle",
                copy: "Code, break things, fix them. Learn what you need, when you need it.",
              },
              {
                step: "3",
                title: "Ship & iterate",
                copy: "Deploy it. Get feedback. Refactor. Repeat until it's production grade.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="group rounded-3xl border border-gray-100 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-2xl font-bold text-white transition-transform group-hover:scale-110">
                  {card.step}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-20 px-6 bg-blue-900">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-white">
            "AI generates code.
            <br />
            Engineers <span className="italic">understand</span> code."
          </p>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Your mentor is your product owner
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dynamic requirements. Real-world pressure. Exactly how top product
              teams operate.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Users,
                title: "Weekly sessions",
                copy: "Code reviews, design discussions, next sprint planning.",
              },
              {
                icon: Zap,
                title: "Always available",
                copy: "Stuck at 2am? Drop a question. Get async help.",
              },
              {
                icon: Target,
                title: "Evolving goals",
                copy: "Requirements change. You adapt. Real engineering.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-3xl bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Icon className="h-8 w-8 text-blue-900" />
                  <h4 className="text-lg font-semibold text-black">{title}</h4>
                </div>
                <p className="text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's This For */}
      <section className="bg-black py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Who's this for?
            </h2>
            <p className="text-xl text-gray-400">
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
              <div key={label} className="rounded-3xl bg-gray-900 p-8">
                <h3 className="text-2xl font-semibold text-white">{label}</h3>
                <p className="mt-3 text-gray-400">
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
      </section>

      {/* Final CTA */}
      <section className="py-36 px-6">
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Stop learning.
            <br />
            Start building.
          </h2>
          <div className="flex flex-col items-center gap-6">
            <button className="group inline-flex items-center gap-3 rounded-full bg-blue-900 px-12 py-5 text-xl font-semibold text-white transition-all duration-300 hover:bg-black">
              Join G-CMP
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-lg text-gray-500">
              No prerequisites. Just bring your curiosity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
