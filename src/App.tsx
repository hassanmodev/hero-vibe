import { TopNavigation } from "./TopNavigation";
import { HeroSection } from "./HeroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <TopNavigation />
      <main className="pt-16">
        <HeroSection />
      </main>
    </div>
  );
}
