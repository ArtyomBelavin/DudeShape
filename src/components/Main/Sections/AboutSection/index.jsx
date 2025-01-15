import styles from "./AboutSection.module.scss";
import about from "../../../../images/about-1.png";
import security from "../../../../images/vectors/security.svg";
import check from "../../../../images/vectors/check.svg";
import car from "../../../../images/vectors/car.svg";

import AdventagesItem from "./AdventagesItem";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.images}>
        <img className={styles.img} src={about} alt={about} />
        <div className={styles.bgImg}></div>
      </div>
      <div className={styles.text}>
        <h3>About Us</h3>
        <p>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials
        </p>
        <div className={styles.aboutAdvantages}>
          <AdventagesItem
            img={security}
            title="Best Quality"
            description="All of our furniture uses the best materials and choices"
          />
          <AdventagesItem
            img={check}
            title="100% Secure"
            description="All of our furniture uses the best materials and choices"
          />
          <AdventagesItem
            img={car}
            title="Free Shpping"
            description="All of our furniture uses the best materials and choices"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
