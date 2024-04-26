interface Anime {
  title: string;
  image: string;
  quotes: string[];
}

interface FitProperties {
  "object-contain": string;
  "object-cover": string;
  "object-fill": string;
  "object-none": string;
}

const cssClassNames = {
  containerClassNames:
    " flex flex-col justify-center items-center w-1/2  my-0 mx-auto ",
  pageTitleClassNames: "font-bold mb-4 text-teal-900 text-3xl mt-4",
  imageClassNames:
    " w-[500px] h-[400px] border-2 border-solid border-grey rounded-xl cursor-pointer ",

  buttonCSSClassNames:
    " hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border border-solid border-black rounded-md text-sm inline-flex justify-center items-center px-7 py-3 mt-[20px] ",
  buttonContainerClassNames: " flex gap-8 justify-center items-center",

  textContainerClassNames: " flex flex-col justify-center items-center  mt-4  ",
  headingClassNames: " font-bold underline mt-1",
  paragraphClassNames: " text-justify px-8 text-sm italic",

  likeBtnContainerClassNames: "flex flex-row justify-center items-center",
  ratingClassNames:
    "flex flex-row justify-center items-center relative w-[60px] h-[60px] bg-red-500 rounded-full mt-4 text-white",
  ratingsContainerClassNames: "w-full overflow-hidden",
};

const animeInfo: Anime[] = [
  {
    title: "Naruto",
    image: "/images/naruto.jpg",
    quotes: [
      "Hard work is worthless for those that don't believe in themselves. - Naruto Uzumaki",
      "Growth occurs when one goes beyond one's limits. realizing that is also part of training. - Itachi Uchiha",
      "If you don't like the hand that fate's dealt you with, fight for a new one. - Naruto Uzumaki",
      "It's human nature not to realize the true value of something, unless they lose it. - Orochimaru",
    ],
  },
  {
    title: "Death Note",
    image: "/images/deathnote.jpg",
    quotes: [
      "To Win, You Must Attack. - L",
      "All Humans Die The Same. - Ryuk",
      "Careful What You Do, Because God Is Watching Your Every Move. - Misa Amane",
      "When You Die, I'll Be The One Writing Your Name In My Death Note. - Ryuk",
    ],
  },
  {
    title: "Dragon Ball Z",
    image: "/images/dragonballz.png",
    quotes: [
      "I could go one step farther If I wanted to. - Goku",
      "I do not fear this new challenge. Rather like a true warrior I will rise to meet it. - Vegeta",
      "Sometimes, we have to look beyond what we want and do what's best. - Piccolo",
      "Push through the Pain. Giving Up Hurts More. - Vegeta",
    ],
  },
  {
    title: "Jujutsu Kaisen",
    image: "/images/jujutsukaisen.jpg",
    quotes: [
      "I Don't Know How I'll Feel When I'm Dead, But I Don't Want To Regret The Way I Lived. - Yuji Itadori",
      "Searching For Someone To Blame Is Such A Pain. - Satoru Gojo",
      "It's Not About Whether I Can. I Have To Do It. - Megumi Fushigaro",
      "What Makes Us Obligated To Meet Such Perfection Or Such Absurd Standards? - Nobara Kugisaki",
    ],
  },
  {
    title: "Mob Psycho 100",
    image: "/images/mobpsycho100.jpg",
    quotes: [
      "Why do you have to be like this? you are the PROTAGONIST of your own life, aren't you? - Reigen Arataka",
      "Everyone grows because of their encounters with other people.",
      "Don't do it Mob. In the end, you're the one who's going to get hurt. When things go south, it's ok to run away and save yourself! - Reigen Arataka",
      "I made the decision to consider my feelings more. And you need to pick up things you feel are important.",
    ],
  },
];

const nextItemIndexInArr = (arr: any[], curr: any) => {
  const currIndex = arr.findIndex((el) => el === curr);
  return currIndex === arr.length - 1 ? 0 : currIndex + 1;
};

const objFitProps: (keyof FitProperties)[] = [
  "object-contain",
  "object-cover",
  "object-fill",
  "object-none",
];

const getRatings = (anime: string) => {
  const performHeavyMathOperation = (n: number): number => {
    if (n <= 1) {
      return 1;
    }
    return performHeavyMathOperation(n - 1) + performHeavyMathOperation(n - 2);
  };

  const ratings: any = {
    Naruto: 4.7,
    "Death Note": 4.8,
    "Dragon Ball Z": 4.7,
    "Jujutsu Kaisen": 4.9,
    "Mob Psycho 100": 4.9,
  };

  performHeavyMathOperation(32);

  return ratings[anime];
};

export {
  cssClassNames,
  animeInfo,
  nextItemIndexInArr,
  objFitProps,
  getRatings,
};
