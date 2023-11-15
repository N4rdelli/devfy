import styles from "./Header.module.css";
import iconHome from "../../assets/home-outline.svg";
import iconSearch from "../../assets/search-outline.svg";
import logoImg from "../../assets/spotify.svg";

import { Link } from "react-router-dom";

const navigation = [
  {
    component: "/",
    name: "Início",
    icon: iconHome,
    alt: "Ícone de uma casa",
  },
  {
    component: "/search",
    name: "Buscar",
    icon: iconSearch,
    alt: "Ícone de uma lupa",
  },
];

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo Spotify"/>
        <h1> Spotify </h1>
      </div>
      
      <div className={styles.nav}>
        {navigation.map((item) => (
          <Link key={item.name} to={item.component}>
            <img src={item.icon} alt={item.alt} /> {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
