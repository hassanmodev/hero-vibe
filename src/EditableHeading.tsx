import type { AIResponse } from "./aiResponses";

// Define types for our components
interface EditableTextProps {
  content: AIResponse;
  handleChange: (setter: (content: AIResponse) => AIResponse) => void;
}
// Extracted components with proper type definitions
export const EditableHeading = ({ content, handleChange }: EditableTextProps) => (
  <h1
    contentEditable
    suppressContentEditableWarning
    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent outline-none leading-tight py-1 cursor-text caret-black"
    onBlur={(e) => handleChange((content) => ({ ...content, header: e.target.innerText }))}
  >
    {content.header}
  </h1>
);
export const EditableSubheading = ({ content, handleChange }: EditableTextProps) => (
  <p
    contentEditable
    suppressContentEditableWarning
    className="text-xl md:text-2xl text-gray-700 outline-none leading-relaxed py-2"
    onBlur={(e) => handleChange((content) => ({ ...content, subheader: e.target.innerText }))}
  >
    {content.subheader}
  </p>
);
