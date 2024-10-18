import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.socialsWrapper}>
        <button className="defaultBtn">Написать в поддержку</button>
        <div className={styles.socials}>
          <div>
            <span>Telegram</span>
            <img src="Tg.svg" alt="Telegram" loading="lazy" />
          </div>
          <div>
            <span>ВКонтакте</span>
            <img src="VK.svg" alt="VK" loading="lazy" />
          </div>
          <div>
            <span>Youtube</span>
            <img src="YouTube.svg" alt="YouTube" loading="lazy" />
          </div>
          <div>
            <span>TikTok</span>
            <img src="TikTok.svg" alt="TikTok" loading="lazy" />
          </div>
        </div>
      </div>
      <div className={styles.navContainer}>
        <ul>
          <li>
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
          <li>
            <Link href={"#"}>Контакты</Link>
          </li>
        </ul>
        <div className={styles.navOtherInf}>
          <span>Реферальная программа</span>
          <span>Скачать приложение</span>
          <span>Вопросы и ответы</span>
          <span>Условия использования</span>
        </div>
      </div>
      <div className={styles.warningWrapper}>
        <div className={styles.warning}>
          <div>18+</div>
          <div>
            2024, ООО «ТВОЁ ЛАЙВ» <div>Все права защищены.</div>
          </div>
        </div>
        <img className={styles.logo} src="Logo.svg" alt="Logo" loading="lazy" />
      </div>
    </div>
  );
};

export default Footer;
