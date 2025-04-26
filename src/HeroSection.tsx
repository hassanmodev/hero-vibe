import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { aiResponses, getRandomContent, saveResponses, type AIResponse } from "./aiResponses";
import { HeroImage } from "./HeroImage";
import { PromptForm } from "./PromptForm";
import { ButtonGroup } from "./ButtonGroup";
import { EditableHeading, EditableSubheading } from "./EditableHeading";


export const HeroSection = () => {
  const [content, setContent] = useState<AIResponse>(aiResponses[0]);
  const [prompt, setPrompt] = useState<string>("");

  const handleRegenerate = useCallback(() => {
    const newContent = getRandomContent(content.header);
    setContent(newContent);
  }, [content.header]);

  const handleChange = useCallback((setter: (content: AIResponse) => AIResponse) => {
    setContent((prev) => {
      const updatedContent = setter(prev);
      
      // Update aiResponses array and save to localStorage
      const updatedResponses = aiResponses.map(response => 
        response.header === prev.header ? updatedContent : response
      );
      saveResponses(updatedResponses);
      
      return updatedContent;
    });
  }, []);

  const handlePromptSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setPrompt("");
    handleRegenerate();
  }, [handleRegenerate]);

  const { wrapper, textBlock, imageBlock, ctaBlock } = content.layout;
  const { primary, secondary } = content.buttonStyles;

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">
      <div className={`${wrapper} place-items-center h-full`}>
        <>
          <motion.div
            key={content.header}
            className={`space-y-6 ${textBlock}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <EditableHeading content={content} handleChange={handleChange} />
            <EditableSubheading content={content} handleChange={handleChange} />
            <ButtonGroup
              btnTexts={content.btnTexts}
              primary={primary}
              secondary={secondary}
              handleChange={handleChange}
              ctaClass={ctaBlock}
            />
          </motion.div>
        </>

        <>
          <motion.div
            key={content.image}
            className={`${imageBlock} relative flex justify-center items-center`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <HeroImage image={content.image} imageBlockClass={imageBlock} />
          </motion.div>
        </>
      </div>
      <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        handlePromptSubmit={handlePromptSubmit}
      />
    </section>
  );
};
