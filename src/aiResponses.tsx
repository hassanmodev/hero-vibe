export type AIResponse = {
  header: string;
  subheader: string;
  btnTexts: string[];
  image: string;
  layout: {
    wrapper: string;
    textBlock: string;
    imageBlock: string;
    ctaBlock: string;
  };
  buttonStyles: {
    primary: string;
    secondary: string;
  };
};
export const aiResponses: AIResponse[] = [
  {
    header: "Design Beyond Limits",
    subheader: "Let your imagination guide the experience.",
    btnTexts: ["Start Creating", "Try Demo"],
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlcm98ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 py-16 min-h-[80vh]",
      textBlock: "max-w-2xl space-y-8 lg:pr-8",
      imageBlock: "relative lg:aspect-square w-full max-w-2xl mx-auto",
      ctaBlock: "mt-8 flex gap-6 flex-wrap",
    },
    buttonStyles: {
      primary: "cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-blue-500/30 transition-all",
      secondary: "cursor-pointer bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/30 transition-all",
    }
  },
  {
    header: "Future-Driven Tools",
    subheader: "Harness the power of modern AI tech.",
    btnTexts: ["Sign Up Now", "See How"],
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlcm98ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto flex flex-col gap-12 px-4 py-16 min-h-[80vh] text-center",
      textBlock: "max-w-3xl mx-auto space-y-8",
      imageBlock: "relative aspect-[4/3] w-full max-w-4xl mx-auto",
      ctaBlock: "mt-8 flex gap-6 flex-wrap justify-center",
    },
    buttonStyles: {
      primary: "cursor-pointer bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-teal-500/30 transition-all",
      secondary: "cursor-pointer bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-amber-500/30 transition-all",
    }
  },
  {
    header: "Creative Collaboration",
    subheader: "Innovate together with smart design tools.",
    btnTexts: ["Get Started", "Join the Beta"],
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlcm98ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto grid lg:grid-cols-[2fr,3fr] gap-12 items-center px-4 py-16 min-h-[80vh]",
      textBlock: "max-w-xl space-y-8 lg:pl-8 order-2 lg:order-1",
      imageBlock: "relative aspect-[16/9] w-full max-w-5xl order-1 lg:order-2",
      ctaBlock: "mt-8 flex gap-6 flex-wrap justify-start",
    },
    buttonStyles: {
      primary: "cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-violet-500/30 transition-all",
      secondary: "cursor-pointer bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white shadow-lg hover:shadow-rose-500/30 transition-all",
    }
  },
];

export function getRandomContent(currentHeadline: string) {
  let next;
  do {
    next = aiResponses[Math.floor(Math.random() * aiResponses.length)];
  } while (next.header === currentHeadline);
  return next;
}

