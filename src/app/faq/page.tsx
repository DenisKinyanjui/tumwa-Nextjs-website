import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ – Tumwa App Nairobi",
  description:
    "Answers to common questions about Tumwa — how it works, payments, safety, runner onboarding, and more.",
};

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "What is Tumwa?",
        a: "Tumwa is a mobile app that connects people in Nairobi with trusted runners who complete errands on their behalf. Think grocery runs, pharmacy pickups, document deliveries, and more — posted through the app and completed by a nearby verified runner.",
      },
      {
        q: "Where does Tumwa operate?",
        a: "We're currently active across Nairobi, including Westlands, CBD, Kilimani, Eastleigh, Karen, Lavington, Ngong Road, South B, and surrounding areas. We're expanding to other Kenyan cities soon.",
      },
      {
        q: "How do I download the app?",
        a: "Search 'Tumwa' on the Google Play Store (Android) or App Store (iOS). It's free to download. You'll need to verify your phone number to create an account.",
      },
      {
        q: "Do I need an account to use Tumwa?",
        a: "Yes. You need a verified account to post errands or work as a runner. Registration takes about 90 seconds — phone number, name, and OTP verification.",
      },
    ],
  },
  {
    title: "Sending Errands",
    questions: [
      {
        q: "How do I send an errand?",
        a: "Open the app, tap 'Post Errand', describe the task (e.g., 'Buy 2kg sugar and 500ml milk from Naivas Westlands'), add your locations, set a budget, and post. Runners near you will see it immediately.",
      },
      {
        q: "What kinds of errands can I post?",
        a: "Most tasks that can be completed by one person on foot, bike, or public transport. Common ones include grocery runs, pharmacy pickups, food collection, document delivery, bank visits, and general queuing tasks. If you're unsure, just post it — runners will either accept or pass.",
      },
      {
        q: "How long does it take for a runner to accept?",
        a: "In active areas, most errands are picked up within 5 minutes. In quieter zones or at unusual hours, it may take longer. You'll be notified as soon as a runner accepts.",
      },
      {
        q: "Can I cancel an errand?",
        a: "Yes — for free, before a runner accepts. Once a runner has accepted and started moving, a small cancellation fee may apply to cover their time.",
      },
      {
        q: "How do I know the runner is trustworthy?",
        a: "Every runner is verified with a national ID before activation. They accumulate public ratings from past customers. You can see their profile — photo, name, rating, and number of completed errands — before approving them.",
      },
    ],
  },
  {
    title: "Payments",
    questions: [
      {
        q: "How does payment work?",
        a: "You pay through M-Pesa or card in the app when you confirm the errand. Funds are held securely and released to the runner only after you confirm the task is complete. No cash changes hands during the errand itself.",
      },
      {
        q: "What payment methods are supported?",
        a: "M-Pesa (Lipa Na M-Pesa), Visa, and Mastercard. We're adding more options over time.",
      },
      {
        q: "What if I'm charged but the errand wasn't completed?",
        a: "Payment only releases when you confirm completion — so if you don't confirm, the runner doesn't get paid. If there's a dispute, our support team reviews it and issues a refund if appropriate.",
      },
      {
        q: "How much does an errand cost?",
        a: "Pricing depends on the task and distance. You set a budget when posting, and runners accept or negotiate based on that. There are no hidden platform fees charged to customers.",
      },
    ],
  },
  {
    title: "Safety & Trust",
    questions: [
      {
        q: "Is Tumwa safe to use?",
        a: "We verify every runner's identity before activation. Payments are held in escrow — you never hand cash to a runner mid-errand. Customers and runners rate each other after every task, creating a community-policed trust system.",
      },
      {
        q: "What happens if something goes wrong?",
        a: "Every transaction is logged. If an errand goes poorly — wrong items, damage, no-show — contact support through the app. We review every dispute seriously.",
      },
      {
        q: "Do runners see my home address?",
        a: "Runners see the drop-off location, which may be your home or office. They don't have access to your full account details, and location sharing stops after an errand ends.",
      },
      {
        q: "Can I block or report a runner?",
        a: "Yes. You can report any runner through the app after an errand. Repeated complaints trigger a review and potential deactivation of the runner's account.",
      },
    ],
  },
  {
    title: "Becoming a Runner",
    questions: [
      {
        q: "How do I become a Tumwa runner?",
        a: "Download the app, tap 'Join as a Runner', and submit your details including a valid Kenyan ID. Applications are usually reviewed within 24–48 hours.",
      },
      {
        q: "How do runners get paid?",
        a: "Directly to your M-Pesa wallet, same day, once the customer confirms task completion. No delays, no minimum thresholds.",
      },
      {
        q: "Is there a minimum number of errands I must complete?",
        a: "No. Tumwa is fully flexible. You can run 1 errand a week or 20 a day — it's entirely your choice.",
      },
      {
        q: "What if a customer doesn't confirm completion?",
        a: "If a customer doesn't respond to confirm after a reasonable period, the system auto-confirms based on your task evidence (photos, GPS data). You'll get paid.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0F172A] pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 max-w-2xl leading-tight">
            Questions we get a lot.
          </h1>
          <p className="text-slate-400 text-xl max-w-xl leading-relaxed">
            If your question isn&apos;t here, you can{" "}
            <Link href="/contact" className="text-[#FF6F3C] hover:underline">
              reach us directly
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-extrabold text-[#0F172A] mb-6 pb-3 border-b border-slate-200">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group border border-slate-200 rounded-2xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#F8FAFC]">
                        <span className="text-[#0F172A] font-semibold text-base pr-6">
                          {item.q}
                        </span>
                        <svg
                          className="w-5 h-5 text-[#FF6F3C] flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4 bg-[#F8FAFC]">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">
            Still have questions?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-6">
            Our support team is available through the app or you can reach us
            by email. We usually respond within a few hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6F3C] hover:bg-[#e55a28] text-white font-semibold rounded-xl shadow-sm"
          >
            Contact us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
