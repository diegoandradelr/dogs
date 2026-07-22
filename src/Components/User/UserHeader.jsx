// import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const location = useLocation();

  const title = (() => {
    switch (location.pathname) {
      case "/conta/postar":
        return "Poste Sua Foto";
      case "/conta/estatisticas":
        return "Estatísticas";
      default:
        return "Minha Conta";
    }
  })();

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
