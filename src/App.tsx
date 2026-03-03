import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/Chatbot';
import CatMascot from './components/CatMascot';

// Small utility pages to keep the refactor complete
const PrivacyPolicy = () => (
  <div style={{ padding: "120px 8%", maxWidth: "800px", margin: "0 auto" }}>
    <h1>Privacy Policy</h1>
    <p>Last updated: March 3, 2024</p>
    <p>At Digi Udaan, we take your privacy seriously. We only collect information necessary to provide you with the best digital marketing services.</p>
  </div>
);

const TermsOfService = () => (
  <div style={{ padding: "120px 8%", maxWidth: "800px", margin: "0 auto" }}>
    <h1>Terms of Service</h1>
    <p>By using our services, you agree to our terms. We provide digital marketing solutions tailored to your business goals.</p>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        {/* Redirect for old manual navigation states if needed */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Chatbot />
      <CatMascot />
    </Layout>
  );
}

export default App;
