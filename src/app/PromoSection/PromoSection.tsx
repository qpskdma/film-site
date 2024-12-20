import React from "react";
import styles from "./PromoSection.module.scss";

const PromoSection: React.FC = () => {
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
    </div>
  );
};

export default PromoSection;
