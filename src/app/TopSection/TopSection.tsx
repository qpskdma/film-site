"use client";

import React, { useRef, useState } from "react";
import styles from "./TopSection.module.scss";

interface TopSectionProps {}

const TopSection: React.FC<TopSectionProps> = ({}) => {
  const movieContainerRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const scrollLeft = () => {
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft -= 500;
      setShowPrevButton(movieContainerRef.current.scrollLeft > 0);
    }
  };

  const scrollRight = () => {
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft += 262;
      setShowPrevButton(true);
    }
  };

  const films = [
    "BeautifulDisaster.png",
    "Startrack.jfif",
    "JonUik.jfif",
    "MovingCastle.jfif",
    "RedNotice.jfif",
  ];
  return (
    <div>
      <p className={styles.title}>ТОП-10 НЕДЕЛИ</p>
      <div className={styles.container}>
        <div className={styles.filmsContainer} ref={movieContainerRef}>
          {showPrevButton && (
            <div className={styles.btn}>
              <button className={`${styles.btnLeft}`} onClick={scrollLeft}>
                <img src="ArrowRight.svg" alt="" />
              </button>
            </div>
          )}
          <div className={styles.btn}>
            <button className={`${styles.btnRight}`} onClick={scrollRight}>
              <img src="ArrowRight.svg" alt="" />
            </button>
          </div>
          {films.map((e, i) => {
            return (
              <div className={styles.filmWrapper} key={i}>
                <div>
                  <img
                    src={`/Top/${i + 1}.svg`}
                    alt={`place${i + 1}`}
                    loading="lazy"
                  />
                </div>
                <img
                  width={"300px"}
                  height={"450px"}
                  src={`/Top/${e}`}
                  alt={e}
                  className={styles.filmPoster}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
