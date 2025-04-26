// Define types for better structure and type safety
export type ButtonStyle = {
  primary: string;
  secondary: string;
};

export type Layout = {
  wrapper: string;
  textBlock: string;
  imageBlock: string;
  ctaBlock: string;
};

export type AIResponse = {
  header: string;
  subheader: string;
  btnTexts: string[];
  image: string;
  layout: Layout;
  buttonStyles: ButtonStyle;
};

// Common styles that can be reused
const buttonBaseStyles = {
  common: "font-medium shadow-lg transition-all duration-300",
};

// Response templates with diverse images and optimized styling
export const aiResponses: AIResponse[] = [
  {
    header: "Future-Driven Tools",
    subheader: "Harness the power of modern AI tech.",
    btnTexts: ["Sign Up Now", "See How"],
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto flex flex-col gap-12 px-4 py-16 min-h-[80vh] text-center",
      textBlock: "max-w-3xl mx-auto space-y-8",
      imageBlock: "relative aspect-[4/3] w-full max-w-4xl mx-auto",
      ctaBlock: "mt-8 flex gap-6 flex-wrap justify-center",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white hover:shadow-teal-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white hover:shadow-amber-500/30 hover:scale-105`,
    }
  },
  {
    header: "Creative Collaboration",
    subheader: "Innovate together with smart design tools.",
    btnTexts: ["Get Started", "Join the Beta"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto grid lg:grid-cols-[2fr,3fr] gap-12 items-center px-4 py-16 min-h-[80vh]",
      textBlock: "max-w-xl space-y-8 lg:pl-8 order-2 lg:order-1",
      imageBlock: "relative aspect-[16/9] w-full max-w-5xl order-1 lg:order-2",
      ctaBlock: "mt-8 flex gap-6 flex-wrap justify-start",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white hover:shadow-violet-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white hover:shadow-rose-500/30 hover:scale-105`,
    }
  },
  {
    header: "Transform Your Vision",
    subheader: "Powerful tools to bring ideas to life.",
    btnTexts: ["Explore Features", "Watch Demo"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto grid lg:grid-cols-2 gap-16 items-center px-4 py-16 min-h-[80vh]",
      textBlock: "max-w-2xl space-y-8",
      imageBlock: "relative rounded-2xl overflow-hidden h-[60vh] w-full",
      ctaBlock: "mt-10 flex gap-6 flex-wrap",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:shadow-cyan-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white hover:shadow-gray-500/30 hover:scale-105`,
    }
  },
  {
    header: "Data-Driven Decisions",
    subheader: "Visualize insights with intuitive analytics.",
    btnTexts: ["Start Free Trial", "View Case Studies"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto flex flex-col lg:flex-row gap-16 items-center px-4 py-16 min-h-[80vh]",
      textBlock: "max-w-2xl space-y-8 text-left",
      imageBlock: "relative w-full max-w-4xl rounded-lg overflow-hidden ",
      ctaBlock: "mt-10 flex gap-6 flex-wrap",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:shadow-blue-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-white border-2 border-indigo-500 text-indigo-900 hover:bg-indigo-100 hover:shadow-indigo-500/20 hover:scale-105`,
    }
  },
  {
    header: "Seamless Experience",
    subheader: "Integrate AI workflows into your daily routine.",
    btnTexts: ["Get Onboarded", "Learn More"],
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto min-h-[80vh] px-4 py-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl",
      textBlock: "max-w-2xl mx-auto space-y-8 text-center",
      imageBlock: "relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-xl  overflow-hidden my-12",
      ctaBlock: "mt-12 flex gap-6 flex-wrap justify-center",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white hover:shadow-purple-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:shadow-pink-500/30 hover:scale-105`,
    }
  },
  {
    header: "Revolutionize Creativity",
    subheader: "Breakthrough tools for the modern designer.",
    btnTexts: ["Join Waitlist", "See Gallery"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1080",
    layout: {
      wrapper: "container mx-auto flex flex-col min-h-[80vh] px-4 py-16",
      textBlock: "max-w-3xl mx-auto space-y-8 text-center",
      imageBlock: "relative w-full h-[70vh] mx-auto rounded-3xl overflow-hidden  my-12",
      ctaBlock: "mt-10 flex gap-6 flex-wrap justify-center",
    },
    buttonStyles: {
      primary: `${buttonBaseStyles.common} bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white hover:shadow-emerald-500/30 hover:scale-105`,
      secondary: `${buttonBaseStyles.common} bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 hover:shadow-emerald-500/20 hover:scale-105`,
    }
  },
];

// Optimized function with proper type safety
export function getRandomContent(currentHeadline: string): AIResponse {
  const availableResponses = aiResponses.filter(response => 
    response.header !== currentHeadline
  );
  
  // Use a more reliable random selection
  return availableResponses[Math.floor(Math.random() * availableResponses.length)];
}

