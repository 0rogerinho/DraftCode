import Hero from '../components/home/Hero';
import About from '../components/home/about/About';
import CardAbout from '../components/home/cardAbout/CardAbout';
import Challenges from '../components/home/challengeCarousel/Challenges';
import Discord from '../components/home/discord/Discord';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CardAbout />
      <Discord />
      <Challenges />
    </>
  );
};

export default Home;
