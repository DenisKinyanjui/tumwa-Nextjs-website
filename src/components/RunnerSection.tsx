import Link from "next/link";

const earnings = [
  { label: "Avg. per errand", value: "KSh 350" },
  { label: "Top runners earn/day", value: "KSh 2,500+" },
  { label: "Payment method", value: "M-Pesa" },
  { label: "Payout time", value: "Same day" },
];

export default function RunnerSection() {
  return (
    <section className="py-24 bg-[#0F172A]" id="runners">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-[#2E8B57] text-sm font-semibold uppercase tracking-widest mb-3">
              For Runners
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Your neighbourhood
              <br />
              is your workplace.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Tumwa runners earn by completing errands near them. There&apos;s no
              fixed schedule, no boss, and no minimum commitment. Accept what
              fits your day, complete it, get paid via M-Pesa — same day.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Whether you&apos;re between jobs, supplementing an income, or
              building a full-time running business, Tumwa gives you the tools
              to do it on your terms.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/become-a-runner"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2E8B57] hover:bg-[#236b42] text-white font-semibold rounded-xl shadow-md"
              >
                Become a Runner
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/10"
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Right — earnings cards */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {earnings.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1E293B] rounded-2xl p-5 border border-slate-700"
                >
                  <p className="text-slate-400 text-xs mb-2">{item.label}</p>
                  <p className="text-white font-bold text-xl">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-[#2E8B57]/10 border border-[#2E8B57]/25 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">
                What you need to get started
              </h3>
              <ul className="space-y-3">
                {[
                  "A smartphone (Android or iPhone)",
                  "Valid Kenyan ID or passport",
                  "M-Pesa registered to your name",
                  "Willingness to move — on foot, bike, or matatu",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2E8B57]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#2E8B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
