import React from "react";
import { Film } from "./films";
import styles from "./FilmItem.module.scss";

interface FilmItemProps {
  film: Film;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  return (
    <div className={styles.container}>
      <p className={styles.rating}>{film.rating}</p>
      {film.newSeason ? <p className={styles.newSeason}>Новый сезон</p> : null}
      <img
        className={styles.poster}
        src={`${film.poster}`}
        alt=""
        width={"200px"}
        height={"200px"}
        loading="lazy"
      />
      <div>
        <p>{film.name}</p>
        <div className={styles.subtitle}>
          <span>{film.year}</span>, <span>{film.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
