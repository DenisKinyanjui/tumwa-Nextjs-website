import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tumwa – Get in Touch",
  description:
    "Reach out to Tumwa for support, partnership inquiries, or general questions. We're based in Nairobi, Kenya.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "hello@tumwaapp.com",
    href: "mailto:hello@tumwaapp.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
];

const subjects = [
  "General inquiry",
  "Technical support",
  "Partnership / business",
  "Becoming a runner",
  "Media / press",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 max-w-xl leading-tight">
            We read every message.
          </h1>
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed">
            Questions, partnerships, feedback, press inquiries — send it our
            way. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-6">
                Reach us directly
              </h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6F3C]/10 flex items-center justify-center text-[#FF6F3C] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#0F172A] font-medium text-sm hover:text-[#FF6F3C]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#0F172A] font-medium text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                  <p className="text-[#0F172A] font-semibold text-sm">
                    Typical response time
                  </p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Email: within 24 hours (Mon–Fri)
                  <br />
                  App support: usually same day
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-6">
                Send us a message
              </h2>

              <form className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Grace Mwangi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C]/20 bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="grace@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C]/20 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C]/20 bg-white appearance-none"
                  >
                    <option value="">Select a subject…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s.toLowerCase().replace(/ /g, "_")}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us what's on your mind. The more detail you give, the faster we can help."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C]/20 bg-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-slate-400 text-xs">
                    This is a UI demo — form submission is not yet wired up.
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#FF6F3C] hover:bg-[#e55a28] text-white font-semibold rounded-xl shadow-sm text-sm inline-flex items-center gap-2"
                  >
                    Send message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
