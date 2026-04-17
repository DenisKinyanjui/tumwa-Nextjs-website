import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RunnerSection from "@/components/RunnerSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tumwa App – Send Errands Across Nairobi Instantly",
  description:
    "Tumwa connects Nairobi residents with trusted runners for grocery runs, deliveries, document pickups, and more. Download the app and send your first errand today.",
};

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Traffic doesn't take days off",
    body: "Sitting in Nairobi traffic to run a single errand is a tax on your day. Waiyaki Way, Mombasa Road, Thika Road — it doesn't matter. You lose hours you can't get back.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Your to-do list isn't shrinking",
    body: "Pharmacy pickups. Grocery runs. Document drops. The tasks pile up until they've taken over your afternoon. None of them needed you specifically — they just needed someone to move.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Random help isn't reliable help",
    body: "Sending a stranger with your cash or asking a boda boda to wait while they shop is a gamble. You need someone accountable, trackable, and rated by people who used them yesterday.",
  },
];

const testimonials = [
  {
    name: "Amina W.",
    location: "Kilimani",
    text: "I sent a runner to pick up medication from a pharmacy in the CBD while I was in a meeting in Westlands. Done before my meeting ended.",
    role: "Finance Manager",
  },
  {
    name: "James N.",
    location: "Eastleigh",
    text: "Been using Tumwa every week for grocery runs. The runner arrives faster than I could have driven there and back in Nairobi traffic.",
    role: "Small business owner",
  },
  {
    name: "Faith M.",
    location: "Karen",
    text: "I was skeptical at first but the runner was rated, on time, and sent me photos of each item. Exactly what I needed.",
    role: "Teacher",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-16">
            <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
              The problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
              Nairobi is busy. Your time is finite.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Most errands don&apos;t need you personally. They just need someone
              who can move — quickly and reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6F3C]/10 flex items-center justify-center text-[#FF6F3C] mb-5">
                  {problem.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {problem.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
                The solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Tumwa was built for exactly this.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                We match you with verified, community-rated runners who are
                already near you. You post the task, they move — and you
                track every step from your phone.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                No phone calls. No cash in someone&apos;s pocket before the job is
                done. No anxiety about whether they&apos;ll show up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { stat: "1,200+", label: "Active users in Nairobi" },
                { stat: "< 5 min", label: "Average errand pickup time" },
                { stat: "4.8★", label: "App rating from users" },
                { stat: "98%", label: "Tasks completed on time" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700"
                >
                  <p className="text-[#FF6F3C] font-extrabold text-3xl mb-1">
                    {item.stat}
                  </p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <FeaturesSection />

      {/* Testimonials */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-16">
            <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
              What people say
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
              Real users. Real errands. Real Nairobi.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-[#0F172A] font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RunnerSection />
      <CTASection />
    </>
  );
}
