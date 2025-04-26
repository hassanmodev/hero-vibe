import type { AIResponse } from "@/aiResponses";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  handleChange: (update: (content: AIResponse) => AIResponse) => void;
}> = ({ children, className, handleChange, ...props }) => {
  return (
    <button
      contentEditable
      suppressContentEditableWarning
      className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
      onInput={(e: React.FormEvent<HTMLButtonElement>) => {
        const newValue = (e.target as HTMLButtonElement).innerText;
        handleChange((content) => {
          const newBtnTexts = [...content.btnTexts];
          newBtnTexts[props["key"] as number] = newValue;
          return { ...content, btnTexts: newBtnTexts } as AIResponse;
        });
      }}
    >
      {children}
    </button>
  );
}
