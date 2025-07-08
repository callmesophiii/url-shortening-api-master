import Header from '../../url-shortening-api-master/src/components/Header';
import Hero from '../../url-shortening-api-master/src/components/Hero';
import ShortenForm from '../../url-shortening-api-master/src/components/ShortenForm';
import LinkList from '../../url-shortening-api-master/src/components/LinkList';
import Statistics from '../../url-shortening-api-master/src/components/Statistics';
import CTA from '../../url-shortening-api-master/src/components/CTA';
import Footer from '../../url-shortening-api-master/src/components/Footer';
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
