import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { aiResponses, getRandomContent, type AIResponse } from "./aiResponses";
import { TopNavigation } from "./TopNavigation";

const HeroSection = () => {
  const [content, setContent] = useState(aiResponses[0]);
  const [prompt, setPrompt] = useState("Enter a prompt to regenerate...");

  const handleRegenerate = () => {
    const newContent = getRandomContent(content.header);
    setContent(newContent);
  };

  const handleChange = (setter: (content: AIResponse) => AIResponse) => {
    setContent((prev) => setter(prev));
  };

  const { wrapper, textBlock, imageBlock, ctaBlock } = content.layout;
  const { primary, secondary } = content.buttonStyles;

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrompt("");
    handleRegenerate();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className={`${wrapper} place-items-center h-full`}>
        <motion.div
          className={`space-y-6 ${textBlock}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent outline-none leading-tight py-1 cursor-text caret-black"
            onBlur={(e) => handleChange((content) => ({ ...content, header: e.target.innerText }))}
          >
            {content.header}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-xl md:text-2xl text-gray-700 outline-none leading-relaxed py-2"
            onBlur={(e) => handleChange((content) => ({ ...content, subheader: e.target.innerText }))}
          >
            {content.subheader}
          </p>
          <div className={ctaBlock}>
            {content.btnTexts.map((txt, i) => (
              <Button
                className={`px-5 py-2.5 rounded-lg text-white font-medium ${i === 0 ? primary : secondary}`}
                key={i}
                handleChange={handleChange}
              >
                {txt}
              </Button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={`${imageBlock} relative flex justify-center items-center`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            alt="Hero Visual"
            className="rounded-xl w-full max-w-xl h-auto max-h-[500px] object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src={content.image}
          />
        </motion.div>
      </div>
      <form
        onSubmit={handlePromptSubmit}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md flex items-center gap-2"
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter a prompt to regenerate..."
            className="w-full px-6 py-3 pr-12 border border-purple-200 rounded-full shadow-lg outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <TopNavigation />
      <div className="pt-16">
        <HeroSection />
      </div>
    </div>
  );
}
