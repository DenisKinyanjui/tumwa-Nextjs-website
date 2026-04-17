const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Verified Runners",
    body: "Every runner is vetted before they go live. Community ratings keep standards high — your errand goes to someone with a real reputation to protect.",
    color: "text-[#FF6F3C] bg-[#FF6F3C]/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "M-Pesa & Card Payments",
    body: "Pay through M-Pesa or card. No cash changes hands during the errand — funds are held securely and released when you confirm completion.",
    color: "text-[#2E8B57] bg-[#2E8B57]/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Live Task Tracking",
    body: "From the moment a runner accepts to the moment your task is done, you can follow the progress in real time. No more calling to ask where they are.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast, Reliable Runners",
    body: "Runners are already nearby when you post. Most errands are picked up in under 5 minutes — not because we promise it, but because the model is built for it.",
    color: "text-purple-600 bg-purple-50",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="features">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Tumwa
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Built for how Nairobi actually works
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Not a copy of some US delivery app retrofitted for Kenya. Tumwa is
            designed around the routes, payment methods, and realities of
            Nairobi life.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-[#0F172A] font-bold text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
