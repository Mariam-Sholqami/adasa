import data from "../../../data/data.json";
import CategoriesCardHome from "../../../Componant/CategoriesCardHome/CategoriesCardHome";

const categoryIcons = {
  إضاءة: "fa-sun",
  بورتريه: "fa-user",
  "مناظر طبيعية": "fa-mountain-sun",
  تقنيات: "fa-sliders",
  معدات: "fa-camera",
};

function CategoriesSection() {
  const categories = data.categories;

  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label mb-4">
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            التصنيفات
          </span>
          <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => {
            const count = data.posts.filter(
              (post) => post.category === cat.name
            ).length;

            return (
              <CategoriesCardHome
                key={cat.id}
                category={cat}
                count={count}
                icon={categoryIcons[cat.name]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;