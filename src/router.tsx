import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Layout from './components/layout/Layout';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Transparency from './pages/Transparency';
import Technology from './pages/Technology';

// Not Found
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}
