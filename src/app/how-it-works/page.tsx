import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How Tumwa Works – Send & Complete Errands in Nairobi",
  description:
    "Learn how Tumwa connects customers with runners for fast, trusted errand services in Nairobi. Step-by-step guide for both senders and runners.",
};

const customerSteps = [
  {
    number: "01",
    title: "Download the app",
    description:
      "Available on Android and iOS. Sign up with your phone number and verify via OTP. Takes about 90 seconds.",
  },
  {
    number: "02",
    title: "Post your errand",
    description:
      "Describe what needs to be done. Add your pickup/drop-off locations, a budget, and any specific instructions — item lists, brands, urgency. Be as specific as you need.",
  },
  {
    number: "03",
    title: "A verified runner accepts",
    description:
      "Runners near you see your errand. When one accepts, you see their name, photo, rating, and how many errands they've completed. You approve before they move.",
  },
  {
    number: "04",
    title: "Track in real time",
    description:
      "From acceptance to completion, you can follow the progress. Runners can send updates and photos. You're never left guessing.",
  },
  {
    number: "05",
    title: "Confirm and pay",
    description:
      "When the errand is done to your satisfaction, you confirm completion. Payment releases automatically via M-Pesa or card. No upfront cash required.",
  },
];

const runnerSteps = [
  {
    number: "01",
    title: "Apply on the app",
    description:
      "Download the app, choose 'Join as a Runner', and submit your ID and details. Approval usually takes 24–48 hours.",
  },
  {
    number: "02",
    title: "Go live and browse errands",
    description:
      "Once approved, toggle your availability. You'll see errands posted near you — their description, distance, and payment upfront.",
  },
  {
    number: "03",
    title: "Accept what works for you",
    description:
      "No minimum. No quota. Accept errands that fit your schedule, your location, and what you're comfortable with.",
  },
  {
    number: "04",
    title: "Complete the task",
    description:
      "Follow the errand instructions, communicate with the customer if needed, and complete the task. Update status as you go.",
  },
  {
    number: "05",
    title: "Get paid via M-Pesa",
    description:
      "Once the customer confirms, your payment hits your M-Pesa wallet. Same day, every time.",
  },
];

const errandTypes = [
  {
    title: "Grocery & Shopping",
    desc: "Supermarket runs, market visits, specific item pickups.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: "Pharmacy Runs",
    desc: "Medication pickups, prescription deliveries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
  {
    title: "Document Delivery",
    desc: "Forms, contracts, passports, letters across Nairobi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Food Pickup",
    desc: "Restaurant orders, food from specific outlets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "General Errands",
    desc: "Queuing, bill payment, bank visits — anything that needs a body.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Package Drop-off",
    desc: "Send something to someone across town.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0F172A] pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
            Simple for senders.
            <br />
            Simple for runners.
          </h1>
          <p className="text-slate-400 text-xl max-w-xl leading-relaxed">
            Two flows. Both built to be fast, transparent, and low-friction.
          </p>
        </div>
      </section>

      {/* What you can send */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
              What can you send?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              If it can be done by one person on foot, bike, or matatu — you
              can post it on Tumwa.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {errandTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6F3C]/10 flex items-center justify-center text-[#FF6F3C] mb-4 mx-auto">
                  {type.icon}
                </div>
                <h3 className="text-[#0F172A] font-semibold text-sm mb-1.5">
                  {type.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer flow */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#FF6F3C]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FF6F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                For customers
              </h2>
              <p className="text-slate-400 text-sm mt-0.5">
                Post an errand and get it done
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {customerSteps.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center">
                  <span className="text-[#FF6F3C] font-black text-base">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2 pb-6 border-b border-slate-100 last:border-0">
                  <h3 className="text-[#0F172A] font-bold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Runner flow */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#2E8B57]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2E8B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                For runners
              </h2>
              <p className="text-slate-400 text-sm mt-0.5">
                Earn by completing errands near you
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {runnerSteps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#2E8B57]/20 flex items-center justify-center">
                  <span className="text-[#2E8B57] font-black text-base">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2 pb-6 border-b border-slate-800 last:border-0">
                  <h3 className="text-white font-bold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
