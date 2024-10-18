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
          <div className={styles.filmWrapper}>
            <div>
              <img src="/Top/1.svg" alt="" loading="lazy" />
            </div>
            <img
              width={"300px"}
              height={"450px"}
              src="/Top/BeautifulDisaster.png"
              alt=""
            />
          </div>
          <div className={styles.filmWrapper}>
            <div>
              <img src="/Top/2.svg" alt="" loading="lazy" />
            </div>
            <img
              width={"300px"}
              height={"450px"}
              src="/Top/Startrack.jfif"
              alt=""
            />
          </div>
          <div className={styles.filmWrapper}>
            <div>
              <img src="/Top/3.svg" alt="" loading="lazy" />
            </div>
            <img
              width={"300px"}
              height={"450px"}
              src="/Top/JonUik.jfif"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.filmWrapper}>
            <div>
              <img src="/Top/4.svg" alt="" loading="lazy" />
            </div>
            <img
              width={"300px"}
              height={"450px"}
              src="/Top/MovingCastle.jfif"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.filmWrapper}>
            <div>
              <img src="/Top/5.svg" alt="" loading="lazy" />
            </div>
            <img
              width={"300px"}
              height={"450px"}
              src="/Top/RedNotice.jfif"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
