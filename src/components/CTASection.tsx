import AppDownloadButtons from "./AppDownloadButtons";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#FF6F3C] relative overflow-hidden" id="download">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-[0.06] rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#0F172A] opacity-10 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop doing errands.
          <br />
          Start living your day.
        </h2>
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Download Tumwa and send your first errand in under two minutes. No
          membership fee. No complicated setup. Just post and go.
        </p>

        <div className="flex justify-center mb-10">
          <AppDownloadButtons size="large" />
        </div>

        <p className="text-white/60 text-sm">
          Available on Android and iOS · Free to download · Nairobi, Kenya
        </p>
      </div>
    </section>
  );
}
