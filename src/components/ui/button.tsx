import React, { memo } from 'react';
import type { AIResponse } from "@/aiResponses";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleChange: (update: (content: AIResponse) => AIResponse) => void;
  children: React.ReactNode;
}

export const Button = memo(({ 
  children, 
  className = "", 
  handleChange, 
  ...props 
}: ButtonProps) => {
  const handleInput = (e: React.FormEvent<HTMLButtonElement>) => {
    const newValue = (e.target as HTMLButtonElement).innerText;
    const index = props["key"] as number;
    
    if (index !== undefined) {
      handleChange((content) => {
        const newBtnTexts = [...content.btnTexts];
        newBtnTexts[index] = newValue;
        return { ...content, btnTexts: newBtnTexts };
      });
    }
  };

  return (
    <button
      contentEditable
      suppressContentEditableWarning
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${className}`}
      {...props}
      onInput={handleInput}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
