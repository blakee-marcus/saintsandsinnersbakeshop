import React from 'react';
import { Helmet } from 'react-helmet-async';

function CustomCakes() {
  return (
    <main className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Custom Cakes | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Order custom buttercream and fondant cakes for birthdays, weddings, and all occasions from Saints & Sinners Bake Shop in Long Beach, CA.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/custom-cakes' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Custom Cakes',
            description:
              'Made-to-order buttercream and fondant cakes for birthdays, weddings, anniversaries, and more. Handmade by Saints & Sinners Bake Shop in Long Beach, CA.',
            brand: {
              '@type': 'Brand',
              name: 'Saints & Sinners Bake Shop',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
              price: '0', // Optional: placeholder, since price is quote-based
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                description: 'Pricing varies based on design complexity and special additions',
              },
              seller: {
                '@type': 'Organization',
                name: 'Saints & Sinners Bake Shop',
              },
            },
          })}
        </script>
      </Helmet>

      <article className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-serif mb-6 text-center'>Custom Decorated Cakes</h1>

        <p className='text-lg font-light leading-relaxed mb-4'>
          We create custom buttercream and fondant cakes for all occasions — birthdays, weddings,
          anniversaries, and more. Every cake is made to order and crafted with care.
        </p>

        <p className='text-lg font-light leading-relaxed mb-4'>
          Please email us to inquire about availability and to secure your order. We strongly
          recommend placing orders at least{' '}
          <span className='font-semibold'>two weeks in advance</span>. Some customers book months
          ahead — spots fill up fast!
        </p>

        <p className='text-lg font-light leading-relaxed mb-4'>
          Pricing varies based on the complexity of the design and any special additions, such as
          carved shapes, sugar flowers, or handmade character toppers.
        </p>

        <p className='text-lg font-light leading-relaxed mb-4'>
          <span className='font-semibold'>Note:</span> Birthday messages or writing are not included
          in quotes and will incur an additional fee.
        </p>

        <p className='text-lg font-light leading-relaxed'>
          For inquiries and quotes, please email us at:{' '}
          <a
            href='mailto:email@saintsandsinnersbakeshop.com'
            className='underline hover:text-sinful-red'
            aria-label='Email Saints and Sinners Bake Shop'>
            email@saintsandsinnersbakeshop.com
          </a>
        </p>

        <p className='text-lg font-light leading-relaxed mt-6'>
          Below are just a few examples of the wide variety of designs we can create — from elegant
          florals to themed character cakes.
        </p>
      </article>
    </main>
  );
}

export default CustomCakes;
