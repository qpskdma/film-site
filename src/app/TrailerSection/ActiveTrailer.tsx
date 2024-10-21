import React from "react";
import { Trailer } from "./trailers";
import styles from "./TrailerSection.module.scss";

interface ActiveTrailerProps {
  film: Trailer | null;
  changeTrailer: Function;
  getTranslateValue: string;
}

const ActiveTrailer: React.FC<ActiveTrailerProps> = ({
  film,
  changeTrailer,
  getTranslateValue,
}) => {
  return (
    <div
      className={`${styles.imgWrapper} ${styles.activeTrailer} `}
      onClick={(event) => {
        changeTrailer(event, film);
      }}
    >
      <img
        src={`/Trailers/${film?.poster}`}
        width={"256px"}
        height={"152px"}
        alt={film?.name}
        loading="lazy"
      />
      <div
        className={`${styles.line} `}
        style={{ transform: `translate(${getTranslateValue})` }}
      ></div>
    </div>
  );
};

export default ActiveTrailer;
