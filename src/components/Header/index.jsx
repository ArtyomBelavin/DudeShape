import styles from "./Header.module.scss";
import logo from "../../images/vectors/logo.svg";
import search from "../../images/vectors/search.svg";
import burger from "../../images/vectors/burger.svg";
import hero from "../../images/hero-1.png";

const Header = () => {
  const navList = [
    {
      id: 0,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Features",
    },
    {
      id: 3,
      text: "Contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <div>
          <a href="#">
            <img src={logo} alt={logo} />
          </a>
        </div>
        <ul>
          {navList.map((item) => (
            <li key={item.id}>
              <a href="#">{item.text}</a>
            </li>
          ))}
        </ul>
        <div className={styles.basket}>
          <a href="#">
            <img src={search} alt={search} />
          </a>
          <a href="#">
            <img src={burger} alt={burger} />
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        <img src={hero} alt={hero} />

        <div className={styles.text}>
          <h1>We Help You Make Modern Furniture</h1>
          <p>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials{" "}
          </p>
          <div>
            <button>Explore More</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
