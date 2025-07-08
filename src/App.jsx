import Header from './components/Header';
import Hero from './components/Hero';
import ShortenForm from './components/ShortenForm';
import LinkList from './components/LinkList';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShortenForm />
      <LinkList />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
