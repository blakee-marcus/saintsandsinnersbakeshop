import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function CakeBombs() {
  return (
    <main className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Cake Bombs | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content="Order custom Cake Bombs from Saints & Sinners Bake Shop in Long Beach. Choose from classic and gourmet flavors like Oreo, Peanut Butter Cup, and S'more."
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/cake-bombs' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProductGroup',
            hasVariant: [
              {
                '@type': 'Product',
                name: 'Standard Cake Bomb',
                description: 'Classic flavors like Vanilla or Chocolate.',
                offers: {
                  '@type': 'Offer',
                  price: '2.50',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
              },
              {
                '@type': 'Product',
                name: 'Gourmet Cake Bomb',
                description: 'Premium flavors like Oreo, Peanut Butter Cup, and Rocky Road.',
                offers: {
                  '@type': 'Offer',
                  price: '3.00',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
              },
            ],
            name: 'Cake Bombs',
            description:
              'Custom Cake Bombs in flavors like Oreo, Peanut Butter Cup, S’more, and more. Minimum 1 dozen per flavor.',
            brand: {
              '@type': 'Brand',
              name: 'Saints & Sinners Bake Shop',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '2.50',
              priceRange: '$2.50 - $3.00',
              priceValidUntil: '2025-12-31',
              itemCondition: 'https://schema.org/NewCondition',
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
        <h1 className='text-5xl md:text-4xl font-serif mb-6 text-center'>
          Cake Bombs – Custom Flavors by the Dozen
        </h1>

        <p className='text-lg font-light leading-relaxed mb-6'>
          Our Cake Bombs are made-to-order, just like our cakes. To place an order, please{' '}
          <Link to='/contact' className='text-sinful-red underline hover:text-goldleaf transition'>
            contact us
          </Link>{' '}
          via email. A minimum of 1 dozen per flavor is required.
        </p>

        <div
          className='bg-sinner text-saint p-4 rounded-xl shadow mb-6'
          aria-label='Cake Bomb Pricing'>
          <p className='text-lg'>
            <strong>Standard Bombs:</strong> $2.50 each (Vanilla or Chocolate)
            <br />
            <strong>Gourmet Bombs:</strong> $3.00 each
          </p>
        </div>

        <h2 className='text-2xl font-serif mb-4'>Available Flavors</h2>
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
      </article>
    </main>
  );
}

export default CakeBombs;
