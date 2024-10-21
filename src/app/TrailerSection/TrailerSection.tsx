"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./TrailerSection.module.scss";
import { Trailer, trailers } from "./trailers";
import ActiveTrailer from "./ActiveTrailer";

interface TrailerSectionProps {}

const TrailerSection: React.FC<TrailerSectionProps> = ({}) => {
  const divRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateIndex, setTranslateIndex] = useState("");
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null);

  useEffect(() => {
    if (trailers.length > 0) {
      setActiveTrailer(trailers[0]);
    }
  }, [trailers]);

  const changeTrailer = (event: MouseEvent, film: Trailer, index: number) => {
    // const rect = divRef.current.getBoundingClientRect();
    if (film.name !== activeTrailer?.name) {
      const num = activeIndex - index;
      setActiveIndex(index);
      setTranslateIndex(() => -num * 272 + "px");
      setIsFadingOut(true);
      setTimeout(() => {
        setActiveTrailer(film);
        setIsFadingOut(false);
        setTranslateIndex("0px");
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
                }
                `}
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
                if (activeTrailer?.name === element.name) {
                  return (
                    <div ref={divRef} key={index}>
                      <ActiveTrailer
                        film={activeTrailer}
                        changeTrailer={changeTrailer}
                        getTranslateValue={translateIndex}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={styles.imgWrapper}
                      onClick={(event) => {
                        changeTrailer(event, element, index);
                      }}
                    >
                      <img
                        src={`/Trailers/${element.poster}`}
                        width={"256px"}
                        height={"152px"}
                        alt={element.name}
                        loading="lazy"
                      />
                      <div className={styles.imgBackground}></div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
