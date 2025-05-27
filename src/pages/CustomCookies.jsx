import React from 'react';
import { Helmet } from 'react-helmet-async';

function CustomCookies() {
  return (
    <div className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Custom Decorated Cookies | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content='Order custom hand-decorated sugar cookies from Saints & Sinners Bake Shop in Long Beach. Perfect for any occasion, made to order with care.'
        />
      </Helmet>

      <h1 className='text-4xl font-serif text-center mb-8'>Custom Cookies</h1>

      <div className='max-w-3xl mx-auto space-y-6 text-lg leading-relaxed'>
        <p>
          Our hand-decorated sugar cookies are crafted with precision and creativity, making them
          perfect for any occasion. Whether you're celebrating a birthday, wedding, baby shower, or
          corporate event, we can design cookies that match your theme and vision.
        </p>

        <p>
          Prices vary depending on the size and complexity of the design. To ensure we can
          accommodate your request, please place your order at least 7 days in advance. For custom
          cookie cutter designs, additional lead time may be required.
        </p>

        <p>
          To get a quote or place an order, please email us at{' '}
          <a href='mailto:email@saintsandsinnersbakeshop.com' className='text-sinful-red underline'>
            email@saintsandsinnersbakeshop.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default CustomCookies;
