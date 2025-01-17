import styles from "./PopularCard.module.scss";
import share from "../../../../../images/vectors/share.svg";
import { useToggleLike } from "../../../../../store/store";

const PopularCard = ({ img, id }) => {
  const { likes, toggleLike } = useToggleLike();
  const isActive = likes[id];

  return (
    <div className={styles.pupularCard}>
      <div>
        <img src={img} alt="popularOneImg" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p>White Swan Chair</p>
          <div>
            <button
              onClick={() => toggleLike(id)}
              className={isActive ? styles.likeBtnActive : styles.likeBtn}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16607_90)">
                  <path
                    d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                    fill={isActive ? "white" : "black"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16607_90">
                    <rect
                      width="10"
                      height="9.99998"
                      fill="white"
                      transform="translate(0.941406 0.618286)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className={styles.share}>
              <img src={share} alt="share" />
            </button>
          </div>
        </div>
        <div className={styles.cardPrice}>
          <p>$40</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;