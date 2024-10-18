"use client";

import React, { useEffect, useState } from "react";
import styles from "./NewSection.module.scss";
import { Film, films } from "./films";
import FilmItem from "./FilmItem";

interface NewSectionProps {}

const NewSection: React.FC<NewSectionProps> = ({}) => {
  // const [recentFilms, setRecentFilms] = useState<Films[]>([]);
  // useEffect(() => setRecentFilms(films), []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Новинки</p>
      <div className={styles.filmContainer}>
        {films.map((element: Film, index) => {
          return <FilmItem film={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NewSection;
