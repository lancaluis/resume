import { About, Hero, Skills } from "@/components";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default Home