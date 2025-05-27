import React from 'react';
import { Helmet } from 'react-helmet-async';

function CookieCakes() {
  return (
    <section className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Cookie Cakes | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content='Order custom-decorated Cookie Cakes from Saints & Sinners Bake Shop. Choose your size and color scheme. A perfect gift for any occasion.'
        />
      </Helmet>

      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-serif mb-6 text-center'>Cookie Cakes</h1>

        <p className='text-lg font-light leading-relaxed mb-6'>
          Our cookie cakes are made with classic chocolate chip cookie dough and can be customized
          in several different sizes. We decorate them with buttercream in any color scheme you’d
          like. These cookie cakes make the perfect gift for birthdays, holidays, or just because!
        </p>

        <p className='text-lg font-light leading-relaxed mb-6'>
          Pricing includes up to three colors (including white). Each additional color is{' '}
          <span className='font-semibold'>$5</span>.
        </p>

        <h2 className='text-2xl font-serif mb-4'>Sizes & Base Prices</h2>
        <ul className='list-disc ml-6 text-lg font-light space-y-1'>
          <li>8 inch Cookie Cake – $25</li>
          <li>10 inch Cookie Cake – $35</li>
          <li>12 inch Cookie Cake – $45</li>
          <li>14 inch Cookie Cake – $55</li>
        </ul>
      </div>
    </section>
  );
}

export default CookieCakes;
