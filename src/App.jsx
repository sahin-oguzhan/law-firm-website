import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PracticeAreas from './components/PracticeAreas';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <PracticeAreas />
      <AboutMe />
    </>
  );
}
