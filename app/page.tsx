import { About, Hero, Skills } from "@/components";

const Home = () => {
  return (
    <div className="space-y-14">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default Home