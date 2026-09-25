function CategoriesBtn({ category, categories, setCategory, setCurrentPage }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() =>{ setCategory("all");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            category === "all"
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
          }`}
        >
          جميع المقالات
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {setCategory(cat.name);
                setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              category === cat.name
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoriesBtn;