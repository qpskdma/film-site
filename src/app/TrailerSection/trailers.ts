export interface Trailer {
  logo?: boolean;
  name: string;
  poster: string;
  rating: number;
  year: number;
  genre: string;
  country: string;
  ageLimit: string;
}

export const trailers: Trailer[] = [
  {
    logo: true,
    name: "Avatar",
    poster: "Avatar.jfif",
    rating: 7.9,
    year: 2024,
    genre: "Фентези",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "Focus",
    poster: "Focus.jfif",
    rating: 7.1,
    year: 2015,
    genre: "Драма",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "Instant Family",
    poster: "InstanteFamily.jfif",
    rating: 7.5,
    year: 2018,
    genre: "Комедия",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "War",
    poster: "War.jfif",
    rating: 7.9,
    year: 2019,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "Revenge of the Bridesmaids",
    poster: "Revenge.png",
    rating: 7,
    year: 2010,
    genre: "Комедия",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "While You Were Sleeping",
    poster: "WhileYouWereSleeping.jfif",
    rating: 7.7,
    year: 1995,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "Funky Men",
    poster: "FunkyMen.jfif",
    rating: 6.9,
    year: 2008,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
];
