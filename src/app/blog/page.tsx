import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tumwa Blog – Nairobi Errands, Tips & Stories",
  description:
    "Practical guides, runner stories, and Nairobi errand tips from the Tumwa team.",
};

const posts = [
  {
    slug: "how-to-send-errands-nairobi",
    title: "How to Send Errands in Nairobi Without Leaving Your Desk",
    excerpt:
      "Most people in Nairobi are spending 2–4 hours a week on tasks that could be delegated in 30 seconds. Here's how Tumwa changes that — and how to write an errand that gets done right the first time.",
    category: "Guide",
    readTime: "5 min read",
    date: "April 10, 2025",
    author: "Tumwa Team",
    featured: true,
    body: [
      {
        heading: "The Nairobi errand problem",
        text: "There's a specific kind of frustration that only Nairobi residents know: you leave the office at 1pm for a 'quick' trip to the CBD, and you're back at 4pm. Three hours. For one task.\n\nTraffic is part of it. Parking is part of it. Queuing is part of it. But the underlying issue is that you're trading your time for a task that doesn't actually need you — it just needs a person who can move.",
      },
      {
        heading: "What makes a good errand post",
        text: "The most common reason an errand doesn't go perfectly? The instructions were vague.\n\nInstead of writing 'buy groceries', write: '2kg Jogoo unga, 1L Elite cooking oil, Tusker Lite 6-pack from Naivas Westlands. Budget: KSh 1,200. If Elite oil isn't available, Elianto is fine.'\n\nBe specific about brands, quantities, and fallback options. Give a time window if it matters. This takes 90 seconds and saves a lot of back-and-forth.",
      },
      {
        heading: "Using Tumwa effectively",
        text: "The runners on Tumwa are rated and return for more business — so they have strong incentives to get things right. But you still help the process by being reachable when the runner has a question, and by confirming completion promptly so they can move on to the next errand.",
      },
    ],
  },
  {
    slug: "make-money-as-runner-kenya",
    title: "How to Make Extra Income as a Tumwa Runner in Nairobi",
    excerpt:
      "Running errands isn't just side hustle money. For some Tumwa runners, it's become a full-time income. Here's what separates the runners earning KSh 6,000+ a day from those who give up after a week.",
    category: "For Runners",
    readTime: "7 min read",
    date: "April 3, 2025",
    author: "Tumwa Team",
    featured: true,
    body: [
      {
        heading: "It's a volume game with a quality floor",
        text: "The runners earning the most on Tumwa aren't just doing the most errands — they're doing the most errands while maintaining a rating above 4.5. High ratings unlock priority placement on better-paying tasks. If you drop below 4.0, the algorithm shows you fewer opportunities.\n\nSo the strategy is: be reliable, be fast, be communicative — and the volume will follow.",
      },
      {
        heading: "Where to position yourself",
        text: "The highest-density errand areas in Nairobi right now: Westlands, Kilimani, Lavington, CBD, and Parklands. If you're near these areas during peak hours (7–10am and 3–7pm), you'll rarely run out of errands to accept.",
      },
      {
        heading: "What the best runners do differently",
        text: "They confirm acceptance immediately — indecision costs money. They call the customer when instructions are ambiguous rather than guessing. They take a photo of completed tasks without being asked. And they rate customers honestly — the system works both ways.",
      },
    ],
  },
  {
    slug: "errand-apps-nairobi-2025",
    title: "Why Nairobi Residents Are Turning to Errand Apps in 2025",
    excerpt:
      "Something has shifted in how Nairobians relate to their time. Here's what's driving the growth of on-demand errand services — and what it says about daily life in Kenya's capital.",
    category: "Insight",
    readTime: "4 min read",
    date: "March 24, 2025",
    author: "Tumwa Team",
    featured: false,
    body: [
      {
        heading: "The commute that never ends",
        text: "Nairobi has one of the worst traffic congestion problems in Sub-Saharan Africa. The average commuter spends 36 minutes each way — and that's just getting to work. Add errand trips on top of that, and it's easy to lose four or five hours of productive time weekly to moving around the city.",
      },
      {
        heading: "The trust infrastructure is finally catching up",
        text: "Five years ago, sending a stranger to shop for you felt reckless. Today, with verified profiles, ratings, and in-app payments, the accountability structures are there. Customers aren't trusting strangers — they're trusting a system with consequences for bad behaviour.",
      },
      {
        heading: "The gig economy meets real Nairobi needs",
        text: "Kenya has always had an informal errand economy — people who do tasks for a fee. Tumwa isn't inventing a new behaviour; it's organising an existing one. The platform gives structure, payment security, and scale to something Nairobians were already doing informally.",
      },
    ],
  },
];

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="bg-[#0F172A] pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#FF6F3C] text-sm font-semibold uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 max-w-2xl leading-tight">
            Guides, stories, and
            <br />
            Nairobi errand intel.
          </h1>
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed">
            Tips for getting more out of Tumwa, stories from runners, and
            takes on how Nairobi moves.
          </p>
        </div>
      </section>

      {/* Blog content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          {/* Featured posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featured.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Cover placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative flex items-end p-6">
                  <span className="inline-block px-3 py-1 bg-[#FF6F3C] text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-[#0F172A] font-extrabold text-xl leading-snug mb-3 group-hover:text-[#FF6F3C] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6F3C] hover:gap-3 transition-all"
                  >
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Other posts */}
          {rest.length > 0 && (
            <div className="space-y-4">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-[#F8FAFC] rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="px-2.5 py-0.5 bg-slate-200 text-slate-600 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-[#0F172A] font-bold text-lg mb-2 group-hover:text-[#FF6F3C] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center sm:items-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[#FF6F3C] hover:underline whitespace-nowrap"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Individual post content (shown below) */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5">
          <div id="how-to-send-errands-nairobi" className="mb-20">
            {posts.map((post) => (
              <article key={post.slug} className="mb-20 last:mb-0">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-[#FF6F3C]/10 text-[#FF6F3C] text-xs font-semibold rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 pb-6 border-b border-slate-200">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
                    {post.excerpt}
                  </p>
                </div>
                <div className="space-y-8">
                  {post.body.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-[#0F172A] font-bold text-xl mb-3">
                        {section.heading}
                      </h3>
                      {section.text.split("\n\n").map((para, i) => (
                        <p key={i} className="text-slate-600 text-base leading-relaxed mb-3 last:mb-0">
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <div className="bg-[#FF6F3C]/5 border border-[#FF6F3C]/20 rounded-2xl p-6">
                    <p className="text-[#0F172A] font-semibold mb-2">
                      Ready to try Tumwa?
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      Download the app and send your first errand today.
                    </p>
                    <Link
                      href="/#download"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6F3C] text-white text-sm font-semibold rounded-xl hover:bg-[#e55a28]"
                    >
                      Download Tumwa
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
