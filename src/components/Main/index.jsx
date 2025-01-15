import CompanySection from "./Sections/CompanySection";
import AboutSection from "./Sections/AboutSection";
import FurnitureSection from "./Sections/FurnitureSection";

const Main = () => {
  return (
    <main>
      <CompanySection />
      <AboutSection />
      {/* slider */}
      <FurnitureSection />
    </main>
  );
};

export default Main;
