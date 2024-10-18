import React, { useEffect } from "react";
import { Trailer } from "./trailers";
import styles from "./TrailerSection.module.scss";

interface ActiveTrailerProps {
  activeTrailer: Trailer | null;
  recetTrailers: Function;
}

const ActiveTrailer: React.FC<ActiveTrailerProps> = ({
  activeTrailer,
  recetTrailers,
}) => {
  useEffect(() => recetTrailers(), []);
  return (
    <div className={styles.activeTrailer}>
      <img
        src={`/Trailers/${activeTrailer?.poster}`}
        width={"256px"}
        height={"152px"}
        alt={activeTrailer?.name}
        loading="lazy"
      />
    </div>
  );
};

export default ActiveTrailer;
