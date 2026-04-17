import AppDownloadButtons from "./AppDownloadButtons";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0F172A] min-h-[92vh] flex items-center overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FF6F3C] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2E8B57] opacity-[0.08] blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF6F3C]/15 border border-[#FF6F3C]/25 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-[#FF6F3C] rounded-full animate-pulse" />
              <span className="text-[#FF6F3C] text-xs font-semibold tracking-wide">
                Now available in Nairobi
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Send errands anywhere{" "}
              <span className="text-[#FF6F3C]">in Nairobi.</span>
              <br />
              Instantly.
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Tumwa connects you with trusted runners who handle your tasks —
              from grocery runs to document pickups — while you get on with
              your day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <AppDownloadButtons size="large" />
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-orange-400", "bg-green-500", "bg-blue-400", "bg-purple-400"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-[#0F172A] flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["K", "A", "M", "J"][i]}
                      </div>
                    )
                  )}
                </div>
                <span className="text-slate-400 text-sm">
                  1,200+ active users
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-400 text-sm">4.8 rated</span>
              </div>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-[#FF6F3C] rounded-[48px] opacity-20 blur-3xl scale-90" />

              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 bg-[#1a1a2e] rounded-[48px] border-2 border-slate-700 shadow-2xl overflow-hidden">
                {/* Dynamic island */}
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-24 h-6 bg-black rounded-full" />
                </div>

                {/* App screen */}
                <div className="mx-3 mb-3 bg-[#0F172A] rounded-[36px] overflow-hidden min-h-[520px] p-5">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/50 rounded-sm relative">
                        <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-white/70 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="mb-5">
                    <p className="text-slate-400 text-xs">Good morning 👋</p>
                    <h2 className="text-white font-bold text-lg">Grace M.</h2>
                  </div>

                  {/* Search/post errand */}
                  <div className="bg-slate-800 rounded-2xl p-3.5 mb-4">
                    <p className="text-slate-400 text-xs mb-1.5">New errand</p>
                    <p className="text-white text-sm font-medium">
                      Grocery pickup — Naivas Westlands
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-[10px] bg-[#FF6F3C]/20 text-[#FF6F3C] px-2 py-0.5 rounded-full">
                        KSh 350
                      </span>
                      <span className="text-[10px] text-slate-400">~20 mins</span>
                    </div>
                  </div>

                  {/* Active errand */}
                  <div className="bg-[#FF6F3C]/10 border border-[#FF6F3C]/25 rounded-2xl p-3.5 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white text-xs font-semibold">Pharmacy run</p>
                      <span className="text-[10px] bg-[#FF6F3C]/20 text-[#FF6F3C] px-2 py-0.5 rounded-full">
                        In progress
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      Kilimani Pharmacy → Your location
                    </p>
                    {/* Progress */}
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div className="bg-[#FF6F3C] h-1.5 rounded-full w-3/5" />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-slate-400">Runner: David K.</span>
                      <span className="text-[10px] text-slate-400">6 min away</span>
                    </div>
                  </div>

                  {/* Completed */}
                  <div className="bg-[#2E8B57]/10 border border-[#2E8B57]/20 rounded-2xl p-3.5">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white text-xs font-semibold">Document drop-off</p>
                        <p className="text-slate-400 text-[11px]">CBD → Upperhill</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#2E8B57]/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#2E8B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
