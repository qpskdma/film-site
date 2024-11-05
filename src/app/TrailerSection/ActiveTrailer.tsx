import React from "react";
import { Trailer } from "./trailers";
import styles from "./TrailerSection.module.scss";

interface ActiveTrailerProps {
  film: Trailer | null;
  changeTrailer: Function;
  translateValue: string;
}

const ActiveTrailer: React.FC<ActiveTrailerProps> = ({
  film,
  changeTrailer,
  translateValue,
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
        className={styles.line}
        style={{ transform: `translate(${translateValue})` }}
      ></div>
    </div>
  );
};

export default ActiveTrailer;
