import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import AboutMe from '../components/AboutMe';
import ProcessAndStats from '../components/ProcessAndStats';
import Faq from '../components/Faq';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutMe />
        <ProcessAndStats />
        <Faq />
        <BlogSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
