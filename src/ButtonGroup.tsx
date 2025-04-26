import type { AIResponse } from "./aiResponses";
import { Button } from "./components/ui/button";

interface ButtonGroupProps {
  btnTexts: string[];
  primary: string;
  secondary: string;
  handleChange: (setter: (content: AIResponse) => AIResponse) => void;
  ctaClass: string;
}
export const ButtonGroup = ({ btnTexts, primary, secondary, handleChange, ctaClass }: ButtonGroupProps) => (
  <div className={ctaClass}>
    {btnTexts.map((txt, i) => (
      <Button
        className={`px-5 cursor-pointer py-2.5 rounded-lg font-medium ${i === 0 ? primary : secondary}`}
        key={i}
        handleChange={handleChange}
      >
        {txt}
      </Button>
    ))}
  </div>
);
