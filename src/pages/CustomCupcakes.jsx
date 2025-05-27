import React from 'react';
import { Helmet } from 'react-helmet-async';

function CustomCupcakes() {
  return (
    <div className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Custom Decorated Cupcakes | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content='Order custom decorated cupcakes from Saints & Sinners Bake Shop in Long Beach. Personalized designs for every occasion, baked fresh to order.'
        />
      </Helmet>

      <h2 className='text-4xl font-serif text-center mb-8'>Custom Decorated Cupcakes</h2>

      <div className='max-w-3xl mx-auto space-y-6 text-lg leading-relaxed'>
        <p>
          At Saints & Sinners Bake Shop, our custom decorated cupcakes are crafted to suit any
          celebration. Whether it's a birthday, wedding, or special event, we offer personalized
          designs that are both delightful and delicious.
        </p>

        <p>
          Choose from a variety of flavors and frostings to create the perfect combination for your
          occasion. Our cupcakes are made to order, ensuring freshness and quality in every bite.
        </p>

        <p>
          Please note:
          <ul className='list-disc list-inside mt-2'>
            <li>Minimum order: 6 standard cupcakes per flavor, or 12 mini cupcakes per flavor.</li>
            <li>Orders must be placed in advance to ensure availability.</li>
            <li>Custom decorations may incur additional charges based on complexity.</li>
          </ul>
        </p>

        <p>
          To place an order or inquire about custom designs, please email us at{' '}
          <a href='mailto:email@saintsandsinnersbakeshop.com' className='text-sinful-red underline'>
            email@saintsandsinnersbakeshop.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default CustomCupcakes;
