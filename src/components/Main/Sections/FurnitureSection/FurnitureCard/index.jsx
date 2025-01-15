import styles from "./FurnitureCard.module.scss";

const FurnitureCard = ({ img, text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? styles.activeCard : styles.Card}
    >
      <img src={img} alt="living-img" />
      <p>{text}</p>
    </button>
  );
};

export default FurnitureCard;
