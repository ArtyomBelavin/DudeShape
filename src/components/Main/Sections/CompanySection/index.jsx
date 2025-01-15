import styles from "./CompanySection.module.scss";
import masterCard from "../../../../images/vectors/masterCard.svg";
import airbnb from "../../../../images/vectors/airbnb.svg";
import uber from "../../../../images/vectors/uber.svg";
import paypal from "../../../../images/vectors/paypal.svg";
import visa from "../../../../images/vectors/visa.svg";
import stripe from "../../../../images/vectors/stripe.svg";

const CompanySection = () => {
  return (
    <section className={styles.company}>
      <h3>Trusted by 20,000+ companies</h3>
      <div>
        <img src={masterCard} alt={masterCard} />
        <img src={airbnb} alt={airbnb} />
        <img src={uber} alt={uber} />
        <img src={paypal} alt={paypal} />
        <img src={visa} alt={visa} />
        <img src={stripe} alt={stripe} />
      </div>
    </section>
  );
};

export default CompanySection;
