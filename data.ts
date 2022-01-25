type Langs = { en: string; es: string };
const posts: { id: number; date: Date; title: Langs; content: Langs }[] = [
  {
    id: 1,
    date: new Date("2022-01-01"),
    title: {
      en: "Discworld by Terry Pratchett",
      es: "Mundodisco de Terry ",
    },
    content: {
      en: "It's wonderful.",
      es: "Es maravilloso.",
    },
  },
  {
    id: 2,
    date: new Date("2022-02-01"),
    title: {
      en: "Love in the Times of Cholera by Marquéz",
      es: "El amor en los tiempos del cólera de Marquéz ",
    },
    content: {
      en: "It's a real cool book.",
      es: "Es un libro genial.",
    },
  },
];

export { posts };
