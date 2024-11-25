import React from "react";
import styles from "./NewSection.module.scss";
import { Film, films } from "./films";
import FilmItem from "./FilmItem";

const NewSection: React.FC = () => {
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
