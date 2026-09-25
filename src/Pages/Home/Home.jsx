
import HeroSection from "./sections/Herosection";
import FeaturedPostsSection from "./sections/Featuredpostssection";
import CategoriesSection from "./sections/Categoriessection";
import LatestPostsSection from "./sections/Latestpostssection";
import NewsletterSection from "./sections/Newslettersection";

function Home() {

  return (
    <>
       <HeroSection />
       <FeaturedPostsSection />
      <CategoriesSection />
      <LatestPostsSection />
      <NewsletterSection />
    </>
  );
}

export default Home;
