import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F0F4F8', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header style={{ background: 'linear-gradient(90deg, #4F46E5 0%, #6B78F1 100%)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', position: 'sticky', top: 0, zIndex: 10 }}>
      
    </header>
  );
}

function Hero() {
  return (
    <div style={{ position: 'relative', backgroundColor: 'white', overflow: 'hidden', paddingBottom: '5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 1rem' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h1 style={heroHeading}>Unlock the power of your <span style={{ color: '#4F46E5' }}>social media data</span></h1>
          <p style={heroText}>Analyze your social media performance effortlessly. Gain actionable insights and optimize engagement across all platforms.</p>
          <div>
            <Link to='/dashboard'><button style={ctaButton('#4F46E5', 'white')}>Get started</button></Link>
            <Link to='/dashboard'><button style={ctaButton('white', '#4F46E5')}>Live demo</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { name: 'Comprehensive Analytics', description: 'Gain in-depth insights into your social media performance across platforms.', icon: '📊' },
    { name: 'AI-Powered Insights', description: 'Leverage GPT to generate actionable recommendations for better engagement.', icon: '🤖' },
    { name: 'Custom Reports', description: 'Create beautiful, customizable reports to share with your team or clients.', icon: '📄' },
  ];

  return (
    <div style={{ padding: '5rem 1rem', backgroundColor: '#F9FAFB' }} id="features">
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#4F46E5', fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>Features</h2>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Powerful tools to improve your social media</p>
        <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '48rem', margin: '0 auto' }}>
          Unlock the full potential of your social media with advanced tools for analysis, insights, and reporting.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginTop: '4rem' }}>
          {features.map((feature) => (
            <div key={feature.name} style={{ textAlign: 'left', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', transition: 'color 0.3s ease' }}>{feature.icon}</div>
              <h3 style={featureTitle}>{feature.name}</h3>
              <p style={{ color: '#6B7280' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { name: 'Connect Your Accounts', description: 'Quickly connect your social media accounts to start analyzing.', icon: '☁' },
    { name: 'Analyze Your Data', description: 'Our system processes your data and provides comprehensive insights.', icon: '📈' },
    { name: 'Get AI-Powered Insights', description: 'Receive valuable insights and recommendations powered by AI.', icon: '💡' },
  ];

  return (
    <div style={{ padding: '5rem 1rem', backgroundColor: '#fff' }} id="how-it-works">
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#4F46E5', fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>How It Works</h2>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Simple steps to improve your social media performance</p>
        <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '48rem', margin: '0 auto' }}>
          Follow these easy steps to start boosting your social media strategy and engagement.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginTop: '4rem' }}>
          {steps.map((step, index) => (
            <div key={step.name} style={{ textAlign: 'left', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{step.icon}</div>
              <h3 style={featureTitle}>{index + 1}. {step.name}</h3>
              <p style={{ color: '#6B7280' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div style={{ backgroundColor: '#4F46E5', padding: '5rem 1rem', color: 'white', textAlign: 'center' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Ready to boost your social media performance?
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#E0E7FF', marginBottom: '2rem' }}>
          Join thousands of marketers who are already using our platform to supercharge their social media strategy.
        </p>
        <button style={ctaButton('white', '#4F46E5')}>Get started for free</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: 'white', padding: '3rem 1rem', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>&copy; 2025 Your Company. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" aria-label="Facebook" style={{ color: '#6B7280' }}>Facebook</a>
          <a href="#" aria-label="Twitter" style={{ color: '#6B7280' }}>Twitter</a>
          <a href="#" aria-label="GitHub" style={{ color: '#6B7280' }}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}



const ctaButton = (bgColor, textColor) => ({
  padding: '0.75rem 2rem',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: textColor,
  backgroundColor: bgColor,
  borderRadius: '0.375rem',
  transition: 'background-color 0.3s ease',
  border: 'none',
  cursor: 'pointer',
});

const featureTitle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#111827',
  marginBottom: '1rem',
};

const heroHeading = {
  fontSize: '3.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#111827',
};

const heroText = {
  fontSize: '1.25rem',
  color: '#6B7280',
  maxWidth: '48rem',
  marginBottom: '2rem',
};