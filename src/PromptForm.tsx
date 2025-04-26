interface PromptFormProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handlePromptSubmit: (e: React.FormEvent) => void;
}

export const PromptForm = ({ prompt, setPrompt, handlePromptSubmit }: PromptFormProps) => (
  <form
    onSubmit={handlePromptSubmit}
    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md flex items-center gap-2 z-10"
  >
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Enter a prompt to regenerate..."
        className="w-full px-6 py-3 pr-12 border border-purple-200 rounded-full shadow-lg outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)} />
      <button
        type="submit"
        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-purple-600 transition-colors"
        aria-label="Submit prompt"
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
);