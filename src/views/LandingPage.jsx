import * as React from 'react';
import PageWrapper from '../components/PageWrapper';
import ProductHero from '../components/ProductHero';

function LandingPage() {
  return (
    <React.Fragment>
      <PageWrapper text='Star Wars search app. ' />
      <ProductHero />
      <PageWrapper text='“Always pass on what you have learned.” — Yoda' />
    </React.Fragment>
  );
}

export default LandingPage;
