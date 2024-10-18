export interface Film {
  name: string;
  poster: string;
  rating: number;
  year: number;
  duration: string;
  newSeason?: boolean;
}

export const films: Film[] = [
  {
    name: "Муфаса: Король Лев",
    poster: "Mufasa.png",
    rating: 9.9,
    year: 2024,
    duration: "2 ч 32 мин",
  },
  {
    name: "Амфибия",
    poster: "Amfibia.png",
    rating: 9.9,
    year: 2024,
    duration: "2 ч 32 мин",
  },
  {
    name: "Слишком стар, чтобы умереть молодым",
    poster: "TooOld.png",
    rating: 9.9,
    year: 2024,
    duration: "2 сезона",
    newSeason: true,
  },
  {
    name: "Джокер: Безумие на двоих",
    poster: "Joker.png",
    rating: 9.9,
    year: 2024,
    duration: "1 ч 56 мин",
  },
  {
    name: "Хороших девочек не убивают",
    poster: "GoodGirl.png",
    rating: 5.4,
    year: 2024,
    duration: "5 сезонов",
    newSeason: true,
  },
  {
    name: "Лощина",
    poster: "Loshina.png",
    rating: 9.9,
    year: 2024,
    duration: "2 ч 42 мин",
  },
  {
    name: "Гадкий я 4",
    poster: "DespicableMe.png",
    rating: 9.9,
    year: 2024,
    duration: "1 ч 48 мин",
  },
];
