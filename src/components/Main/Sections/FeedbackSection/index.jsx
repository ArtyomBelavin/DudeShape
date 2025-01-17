import styles from "./FeedbackSection.module.scss";
import feedback from "../../../../images/feedback-1.png";
import avatar from "../../../../images/vectors/avatar.svg";
import star from "../../../../images/vectors/star.svg";

const FeedbackSection = () => {
  return (
    <section className={styles.feedback}>
      <div>
        <img src={feedback} alt="feedback" />
      </div>
      <div className={styles.text}>
        <h2>Our customers are verry importan to us</h2>
        <p>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
        <div className={styles.avatar}>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.name}>
            <h3>Mh Jibon</h3>
            <div>
              <div>
                <img src={star} alt="star" />
              </div>
              <p>4.8</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
