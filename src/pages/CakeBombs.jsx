import React from 'react';
import { Helmet } from 'react-helmet-async';

function CakeBombs() {
  return (
    <section className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Cake Bombs | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content="Order custom Cake Bombs from Saints & Sinners Bake Shop. Choose from classic and gourmet flavors like Oreo, Peanut Butter Cup, and S'more."
        />
      </Helmet>

      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-serif mb-6 text-center'>Cake Bombs</h1>

        <p className='text-lg font-light leading-relaxed mb-6'>
          Cake Bombs are special order, much like our cakes. Please email us to place an order and
          secure an available spot. When ordering, the minimum is 1 dozen per flavor.
        </p>

        <div className='bg-sinner text-saint p-4 rounded-xl shadow mb-6'>
          <p className='text-lg'>
            <span className='font-semibold'>Standard Bombs:</span> $2.50 each (Vanilla or Chocolate)
            <br />
            <span className='font-semibold'>Gourmet Bombs:</span> $3.00 each
          </p>
        </div>

        <h2 className='text-2xl font-serif mb-4'>Flavors</h2>
        <ul className='list-disc ml-6 text-lg font-light space-y-1'>
          <li>Vanilla</li>
          <li>Chocolate</li>
          <li>Confetti</li>
          <li>S’more</li>
          <li>Peanut Butter Cup</li>
          <li>Andes Mint Chocolate</li>
          <li>Chocolate Caramel</li>
          <li>Oreo</li>
          <li>Chocolate Chip</li>
          <li>Rocky Road</li>
        </ul>
      </div>
    </section>
  );
}

export default CakeBombs;
