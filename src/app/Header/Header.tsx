import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/Logo.svg" alt="" loading="lazy" />
      </div>
      <ul className={styles.navContainer}>
        <li className={styles.active}>
          <Link href={"#"}>Главная</Link>
        </li>
        <li>
          <Link href={"#"}>Фильмы</Link>
        </li>
        <li>
          <Link href={"#"}>Сериалы</Link>
        </li>
        <li>
          <Link href={"#"}>ТВ</Link>
        </li>
      </ul>
      <div></div>
      <ul className={styles.btnsContainer}>
        <li>
          <button className="defaultBtn">
            <img src="./Download.svg" alt="Download" loading="lazy" />
            Установить
          </button>
        </li>
        <li>
          <button className="gradientBtn">7 дней за 0 ₽</button>
        </li>
        <li>
          <button className="defaultBtn">
            <img
              src="./Promo1.svg"
              alt=""
              loading="lazy"
              className={styles.promo}
            />
            Промокод
          </button>
        </li>
        <li>
          <button className={styles.search}>
            <img src="/Search.svg" alt="" loading="lazy" />
          </button>
        </li>
        <li>
          <Link href={"#"}>Войти</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
