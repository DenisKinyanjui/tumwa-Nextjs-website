const steps = [
  {
    number: "01",
    title: "Post your errand",
    description:
      "Describe the task, pin your location, and add any notes — item lists, instructions, or time preferences. Takes about 30 seconds.",
    detail: "Grocery runs, pharmacy pickups, document deliveries, and more.",
  },
  {
    number: "02",
    title: "A runner accepts",
    description:
      "Nearby, verified runners see your errand and the first confirmed one gets moving. You see their profile and rating before they start.",
    detail: "Average pickup time: under 5 minutes.",
  },
  {
    number: "03",
    title: "Task confirmed, payment released",
    description:
      "You get live updates as the errand progresses. Once you confirm it's done, payment is released automatically through M-Pesa or card.",
    detail: "Funds are held securely until you confirm.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Three steps. That&apos;s genuinely it.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            No complicated onboarding. No calls to make. You post, a runner
            moves, you confirm.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-[#FF6F3C]/30 via-[#FF6F3C]/60 to-[#FF6F3C]/30" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Step number */}
              <div className="w-20 h-20 rounded-2xl bg-[#0F172A] flex items-center justify-center mb-6 relative z-10">
                <span className="text-[#FF6F3C] font-black text-2xl">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[#0F172A] font-bold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed mb-3">
                {step.description}
              </p>
              <p className="text-sm text-[#FF6F3C] font-medium">
                {step.detail}
              </p>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-0.5 h-8 bg-[#FF6F3C]/30 ml-10 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
