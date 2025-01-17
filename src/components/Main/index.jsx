import CompanySection from "./Sections/CompanySection";
import AboutSection from "./Sections/AboutSection";
import FurnitureSection from "./Sections/FurnitureSection";
import FeedbackSection from "./Sections/FeedbackSection";
import PopularSection from "./Sections/PopularSection";

const Main = () => {
  return (
    <main>
      <CompanySection />
      <AboutSection />
      <PopularSection />
      <FurnitureSection />
      <FeedbackSection />
    </main>
  );
};

export default Main;
