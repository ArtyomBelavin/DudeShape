import styles from "./PopularSection.module.scss";

const PopularSection = () => {
  return (
    <section className={styles.popular}>
      <div className={styles.popular__top}>
        <div className={styles.text}>
          <h2>Our Popular Furniture</h2>
          <p>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
        </div>
        <div className={styles.btn}>
          <button></button>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
