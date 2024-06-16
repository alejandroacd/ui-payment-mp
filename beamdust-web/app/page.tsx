import Hero from "./components/hero";
import MainContent from "./components/main-content";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
     <Hero />
     <MainContent />
    </main>
  );
}
