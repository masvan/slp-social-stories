import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
