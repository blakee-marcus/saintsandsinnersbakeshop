import React from 'react';
import { Helmet } from 'react-helmet-async';

function CustomCupcakes() {
  return (
    <main className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Custom Decorated Cupcakes | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Order custom decorated cupcakes from Saints & Sinners Bake Shop in Long Beach. Personalized designs for birthdays, weddings, and all occasions.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/custom-cupcakes' />

        {/* Social sharing metadata */}
        <meta
          property='og:title'
          content='Custom Decorated Cupcakes | Saints & Sinners Bake Shop'
        />
        <meta
          property='og:description'
          content='Hand-decorated cupcakes made to order for any occasion. Located in Long Beach, CA.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/custom-cupcakes' />
        <meta property='og:type' content='product' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/custom-cupcakes.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Custom Decorated Cupcakes | Saints & Sinners Bake Shop'
        />
        <meta
          name='twitter:description'
          content='Delicious, personalized cupcakes baked fresh for your celebration. Order now in Long Beach, CA.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/custom-cupcakes.jpg'
        />

        {/* JSON-LD structured data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            hasVariant: [
              {
                '@type': 'Product',
                name: 'Standard Cupcakes',
                description: '6 per flavor minimum',
              },
              {
                '@type': 'Product',
                name: 'Mini Cupcakes',
                description: '12 per flavor minimum',
              },
            ],

            name: 'Custom Decorated Cupcakes',
            description:
              'Made-to-order cupcakes in a variety of flavors and styles. Perfect for birthdays, weddings, and special events. Available for pickup in Long Beach, CA.',
            brand: {
              '@type': 'Brand',
              name: 'Saints & Sinners Bake Shop',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '0.00',
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
        <h1 className='text-4xl font-serif text-center mb-8'>Custom Decorated Cupcakes</h1>

        <div className='space-y-6 text-lg leading-relaxed'>
          <p>
            At Saints & Sinners Bake Shop, our custom decorated cupcakes are crafted to suit any
            celebration. Whether it's a birthday, wedding, or special event, we offer personalized
            designs that are both delightful and delicious.
          </p>

          <p>
            Choose from a variety of flavors and frostings to create the perfect combination for
            your occasion. Our cupcakes are made to order, ensuring freshness and quality in every
            bite.
          </p>

          <div>
            <p>Please note:</p>
            <ul className='list-disc list-inside mt-2'>
              <li>
                Minimum order: 6 standard cupcakes per flavor, or 12 mini cupcakes per flavor.
              </li>
              <li>Orders must be placed in advance to ensure availability.</li>
              <li>Custom decorations may incur additional charges based on complexity.</li>
            </ul>
          </div>

          <p>
            To place an order or inquire about custom designs, please email us at{' '}
            <a
              href='mailto:email@saintsandsinnersbakeshop.com'
              className='text-sinful-red underline'
              aria-label='Email Saints and Sinners Bake Shop'>
              email@saintsandsinnersbakeshop.com
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}

export default CustomCupcakes;
