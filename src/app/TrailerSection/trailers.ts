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
    name: "Аватар",
    poster: "Avatar.jfif",
    rating: 7.9,
    year: 2024,
    genre: "Фентези",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "Фокус",
    poster: "Focus.jfif",
    rating: 7.1,
    year: 2015,
    genre: "Драма",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "Семья по-быстрому",
    poster: "InstanteFamily.jfif",
    rating: 7.5,
    year: 2018,
    genre: "Комедия",
    country: "США",
    ageLimit: "16+",
  },
  {
    name: "Война",
    poster: "War.jfif",
    rating: 7.9,
    year: 2019,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "Месть подружек невесты",
    poster: "Revenge.png",
    rating: 7,
    year: 2010,
    genre: "Комедия",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "Пока ты спал",
    poster: "WhileYouWereSleeping.jfif",
    rating: 7.7,
    year: 1995,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
  {
    name: "Джеймс Браун. Путь наверх",
    poster: "FunkyMen.jfif",
    rating: 6.9,
    year: 2014,
    genre: "Драма",
    country: "США",
    ageLimit: "18+",
  },
];
