import { Link } from "react-router-dom";
import data from "../../../data/data.json";
import BlogCard from "../../../Componant/BlogCard/BlogCard";

function LatestPostsSection() {
  const sortedPosts = [];
  for (let i = 0; i < data.posts.length; i++) {
    sortedPosts.push(data.posts[i]);
  }

  sortedPosts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              الأحدث
            </span>
            <h2 className="section-title text-white">أحدث المقالات</h2>
            <p className="section-subtitle max-w-lg">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
          <Link
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            to="/blog"
            data-discover="true"
          >
            عرض جميع المقالات
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestPostsSection;