import React from 'react';
import { Helmet } from 'react-helmet-async';

function CookieCakes() {
  return (
    <main className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Cookie Cakes | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Order custom-decorated Cookie Cakes from Saints & Sinners Bake Shop in Long Beach, CA. Choose your size and color scheme. A perfect gift for birthdays, holidays, or any celebration.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/cookie-cakes' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Custom Cookie Cakes',
            description:
              'Custom-decorated Cookie Cakes made from chocolate chip dough and buttercream frosting. Choose from multiple sizes and any color scheme. Available for pickup in Long Beach, CA.',
            brand: {
              '@type': 'Brand',
              name: 'Saints & Sinners Bake Shop',
            },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '25.00',
              highPrice: '55.00',
              offerCount: 4,
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Saints & Sinners Bake Shop',
              },
            },
          })}
        </script>
      </Helmet>

      <article className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-serif mb-6 text-center'>Custom Cookie Cakes</h1>

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
      </article>
    </main>
  );
}

export default CookieCakes;
