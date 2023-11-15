import styles from './Header.module.css';

import { Link } from "react-router-dom";

const navigation = [
    {component: "/", name: "Início"},
    {component: "/search", name: "Buscar"}
]


const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header