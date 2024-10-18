"use client";
import React, { useEffect, useState } from "react";
import styles from "./TrailerSection.module.scss";
import { Trailer, trailers } from "./trailers";
import ActiveTrailer from "./ActiveTrailer";

interface TrailerSectionProps {}

const TrailerSection: React.FC<TrailerSectionProps> = ({}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null);

  useEffect(() => {
    if (trailers.length > 0) {
      setActiveTrailer(trailers[0]);
    }
  }, [trailers]);

  const changeTrailer = (film: Trailer) => {
    if (name !== activeTrailer?.name) {
      setIsFadingOut(true);
      setTimeout(() => {
        setActiveTrailer(film);
        setIsFadingOut(false);
      }, 1000);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url("/Trailers/${activeTrailer?.poster}")`,
      }}
    >
      <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
        <div className={styles.background}>
          <div className={styles.info}>
            {activeTrailer?.logo ? (
              <img
                src="/AvatarLogo.svg"
                alt="Avatar"
                className={`${styles.logo} ${
                  isFadingOut ? styles.descOut : styles.descIn
                }`}
              />
            ) : (
              <h1
                className={`${styles.logo} ${
                  isFadingOut ? styles.descOut : styles.descIn
                }`}
              >
                {activeTrailer?.name}
              </h1>
            )}
            {activeTrailer ? (
              <div
                className={`${styles.description} ${
                  isFadingOut ? styles.descOut : styles.descIn
                }`}
              >
                <span>{activeTrailer?.rating}</span>
                <span>{activeTrailer?.year}</span>
                <span>{activeTrailer?.genre}</span>
                <span>{activeTrailer?.country}</span>
                <span>{activeTrailer?.ageLimit}</span>
              </div>
            ) : null}
            <div className={styles.trailers}>
              {trailers.map((element, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.imgWrapper} ${
                      activeTrailer?.name === element.name
                        ? styles.activeTrailer
                        : null
                    }`}
                    onClick={() => {
                      changeTrailer(element);
                    }}
                  >
                    <img
                      src={`/Trailers/${element.poster}`}
                      width={"256px"}
                      height={"152px"}
                      alt=""
                      loading="lazy"
                    />
                    {activeTrailer?.name === element.name ? null : (
                      <div className={styles.imgBackground}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
