import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PracticeAreas from './components/PracticeAreas';
import AboutMe from './components/AboutMe';
import ProcessAndStats from './components/ProcessAndStats';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased text-secondary bg-background-light">
      <NavBar />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutMe />
        <ProcessAndStats />
      </main>
      <Footer />
    </div>
  );
}
