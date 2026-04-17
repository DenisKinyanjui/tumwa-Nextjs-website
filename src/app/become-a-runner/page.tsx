import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadButtons from "@/components/AppDownloadButtons";

export const metadata: Metadata = {
  title: "Become a Tumwa Runner – Earn Money in Nairobi",
  description:
    "Join Tumwa as a runner and earn money completing errands in Nairobi. Set your own hours, get paid via M-Pesa same day. Apply now.",
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Same-day M-Pesa payments",
    desc: "No waiting. No minimum thresholds. Complete a task, get paid — directly to your M-Pesa, same day.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Your hours, your rules",
    desc: "No schedule, no boss. Go online when it suits you and offline when you're done. Accept only what fits your day.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Work where you live",
    desc: "Errands come from near you. You're not commuting across Nairobi — you're working within your own neighbourhood.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Build a reputation that pays",
    desc: "High-rated runners get priority on better-paying errands. Your track record is yours to keep and grow.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-3 3.75h3" />
      </svg>
    ),
    title: "Everything in the app",
    desc: "Accept, track, communicate, and get paid — all through the Tumwa app. No extra tools needed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Join a community of earners",
    desc: "Thousands of runners across Nairobi. Tips, advice, and support from people doing exactly what you're doing.",
  },
];

const requirements = [
  "Valid Kenyan National ID or passport",
  "M-Pesa account registered in your name",
  "Android or iPhone (any model in working condition)",
  "Ability to move around — on foot, boda, matatu, or own transport",
  "Basic literacy in English or Swahili to read errand instructions",
  "You must be 18 years or older",
];

const earnings = [
  { label: "Entry-level runner (5–10 errands/day)", range: "KSh 1,500 – 3,000" },
  { label: "Active runner (10–20 errands/day)", range: "KSh 3,000 – 6,000" },
  { label: "Top-rated full-time runner", range: "KSh 6,000 – 10,000+" },
];

const faqItems = [
  {
    q: "How long does approval take?",
    a: "Most applications are reviewed within 24–48 hours. You'll receive a notification in the app when you're approved.",
  },
  {
    q: "Do I need a motorbike or car?",
    a: "No. Many errands are completable on foot or using Nairobi's public transport. Transport type is noted on each errand so you can choose accordingly.",
  },
  {
    q: "What if a customer complains?",
    a: "We have a dispute resolution process. If an issue arises, support is available through the app. Customers can't withhold payment unfairly — our system is designed to protect runners.",
  },
  {
    q: "Can I run errands part-time?",
    a: "Absolutely. Many of our runners use Tumwa alongside another job. There's no minimum activity requirement.",
  },
];

export default function BecomeARunnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2E8B57] opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 relative">
          <p className="text-[#2E8B57] text-sm font-semibold uppercase tracking-widest mb-3">
            For Runners
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            Your neighbourhood.
            <br />
            <span className="text-[#2E8B57]">Your income.</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-xl mb-10">
            Join Tumwa as a runner and start earning from errands near you.
            No fixed schedule. Paid same day via M-Pesa.
          </p>
          <AppDownloadButtons size="large" />
        </div>
      </section>

      {/* Earnings overview */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
              What can you earn?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Earnings depend on how many errands you complete and your rating.
              These are real estimates based on current Nairobi activity.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {earnings.map((tier) => (
              <div
                key={tier.label}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <p className="text-slate-600 text-base">{tier.label}</p>
                <p className="text-[#2E8B57] font-extrabold text-xl sm:text-2xl whitespace-nowrap">
                  {tier.range}
                  <span className="text-slate-400 text-sm font-normal"> /day</span>
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#2E8B57]/10 border border-[#2E8B57]/25 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed">
            <strong className="text-[#0F172A]">Note:</strong> These are
            estimates based on completed errands in Nairobi. Actual earnings
            depend on your location, the hours you run, and your rating. Tumwa
            does not guarantee minimum earnings.
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
              Why runners choose Tumwa
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Beyond the money, here&apos;s what makes Tumwa worth running for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2E8B57]/10 flex items-center justify-center text-[#2E8B57] mb-5">
                  {b.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                What you need to apply
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                No special skills. No vehicle required. Just a few basic things
                to confirm you can complete errands safely and reliably.
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2E8B57]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#2E8B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                Common questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-[#1E293B] rounded-2xl border border-slate-700 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="text-white font-semibold text-sm pr-4">
                        {item.q}
                      </span>
                      <svg
                        className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2E8B57]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Ready to start running?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Download the Tumwa app and apply as a runner today. Approval
            takes 24–48 hours, then you&apos;re live.
          </p>
          <AppDownloadButtons size="large" />
        </div>
      </section>
    </>
  );
}
