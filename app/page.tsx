import Carousel from "@/pages/Carousel";
import Content1 from "@/pages/Content1";
import Content2 from "@/pages/Content2";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Content1 />
      <Content2 />
      <Carousel />
    </main>
  );
}
