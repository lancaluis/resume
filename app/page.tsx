import { About, Hero, Skills } from "@/components";

const Home = () => {
  return (
    <div className="space-y-12 bg-gray-900">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default Home