import React from "react";
import styles from "./PromoSection.module.scss";

interface PromoSectionProps {}

const PromoSection: React.FC<PromoSectionProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Смотри мировые премьеры</p>
        <div className={styles.profits}>
          <div>
            <img src="Ticket.svg" alt="" loading="lazy" />
            <p>Новинки каждую неделю</p>
          </div>
          <div>
            <img src="Phone.svg" alt="" loading="lazy" />
            <p>На любом устройстве</p>
          </div>

          <div>
            <img src="Star.svg" alt="" loading="lazy" />
            <p>Без рекламы и доплат</p>
          </div>
          <div>
            <img src="Like.svg" alt="" loading="lazy" />
            <p>Эксклюзивная озвучка</p>
          </div>
        </div>
        <div className={styles.price}>
          <button className="gradientBtn">Попробовать бесплатно</button>
          <p>далее от 166 ₽/мес</p>
        </div>
      </div>
      <div className={styles.postersContainer}>
        <div className={`${styles.posters} ${styles.postersTop}`}>
          <img src="/Promo/Elite.jfif" alt="" loading="lazy" />
          <img src="/Promo/Emily.png" alt="" loading="lazy" />
          <img src="/Promo/SweetHome.png" alt="" loading="lazy" />
        </div>
        <div className={`${styles.posters} ${styles.postersMiddle}`}>
          <img src="/Promo/SweetHome.png" alt="" loading="lazy" />
          <img src="/Promo/GoodDoctor.jfif" alt="" loading="lazy" />
          <img src="/Promo/Elite.jfif" alt="" loading="lazy" />
        </div>
        <div className={`${styles.posters} ${styles.postersBottom}`}>
          <img src="/Promo/GoodDoctor.jfif" alt="" loading="lazy" />
          <img src="/Promo/Emily.png" alt="" loading="lazy" />
          <img src="/Promo/SweetHome.png" alt="" loading="lazy" />
          <img src="/Promo/Emily.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
