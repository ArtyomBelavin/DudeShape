import styles from "./FurnitureSection.module.scss";
import { useState } from "react";
import furniture from "../../../../images/furniture-1.png";
import Living from "../../../../images/vectors/Living.svg";
import kitchen from "../../../../images/vectors/kitchen.svg";
import restaurant from "../../../../images/vectors/restaurant.svg";
import workplace from "../../../../images/vectors/workplace.svg";
import bed from "../../../../images/vectors/bed.svg";
import furnitureSvg from "../../../../images/vectors/furniture.svg";
import FurnitureCard from "./FurnitureCard";
import { useActiveTabFurniture } from "../../../../store/store";

const FurnitureSection = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const { isActiveCard, setIsActiveCard } = useActiveTabFurniture();

  const tabList = [
    {
      id: 0,
      text: "Shop By Room",
    },
    {
      id: 1,
      text: "Shop By Category",
    },
    {
      id: 2,
      text: "Shop By Style",
    },
  ];

  const cards = [
    { id: 1, img: Living, text: "Living Room" },
    { id: 2, img: kitchen, text: "Kitchen" },
    { id: 3, img: restaurant, text: "Dining Room" },
    { id: 4, img: workplace, text: "Office" },
    { id: 5, img: bed, text: "Bed Room" },
    { id: 6, img: furnitureSvg, text: "Hallway" },
  ];

  return (
    <section className={styles.furniture}>
      <div className={styles.text}>
        <h2>All Furniture</h2>
        <ul className={styles.tabs}>
          {tabList.map((tab, index) => (
            <li
              onClick={() => setIsActiveTab(index)}
              key={tab.id}
              className={isActiveTab === index ? styles.activeTab : styles.tab}
            >
              {tab.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.furnitureInfo}>
        <img src={furniture} alt="furniture-img" />
        <div className={styles.grid}>
          {cards.map((card) => (
            <FurnitureCard
              key={card.id}
              img={card.img}
              text={card.text}
              isActive={isActiveCard === card.id}
              onClick={() => setIsActiveCard(card.id)}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
