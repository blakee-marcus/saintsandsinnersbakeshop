import React from 'react';
import { Helmet } from 'react-helmet-async';

function SpecialtyCakes() {
  return (
    <main className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Custom Specialty Cakes | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Order custom specialty cakes from Saints & Sinners Bake Shop in Long Beach. Choose from flavors like Red Velvet, S’more, and Chocolate Caramel.'
        />
        <meta
          name='keywords'
          content='custom cakes Long Beach, specialty cakes, wedding cakes, birthday cakes, Saints and Sinners Bake Shop, order cake Long Beach'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/specialty-cakes' />

        {/* Open Graph */}
        <meta property='og:title' content='Custom Specialty Cakes | Saints & Sinners Bake Shop' />
        <meta
          property='og:description'
          content='Made-to-order specialty cakes for weddings, birthdays, and celebrations. Available in a variety of flavors. Order in Long Beach.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/specialty-cakes' />
        <meta property='og:type' content='product.group' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/specialty-cakes.jpg'
        />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Custom Specialty Cakes | Saints & Sinners Bake Shop' />
        <meta
          name='twitter:description'
          content='Explore handcrafted cakes with custom flavors and frostings. Made to order in Long Beach, CA.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/specialty-cakes.jpg'
        />

        {/* Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProductGroup',
            name: 'Specialty Cakes',
            description:
              'Handcrafted specialty cakes made to order with custom base flavors, frostings, and seasonal options. Available from Saints & Sinners Bake Shop in Long Beach, CA.',
            brand: {
              '@type': 'Brand',
              name: 'Saints & Sinners Bake Shop',
            },
            hasVariant: [
              { '@type': 'Product', name: 'Red Velvet Cake' },
              { '@type': 'Product', name: 'S’more Cake' },
              { '@type': 'Product', name: 'Peanut Butter Cup Cake' },
              { '@type': 'Product', name: 'Triple Chocolate Cake' },
              { '@type': 'Product', name: 'Chocolate Dipped Strawberry Cake' },
            ],
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

      <h1 className='text-4xl font-serif text-center mb-8'>Specialty Cakes</h1>

      <article className='max-w-3xl mx-auto space-y-6 text-lg leading-relaxed font-light'>
        <p>
          Interested in ordering a custom cake for your celebration? All of our specialty cakes are
          made to order, so advance notice is required. We recommend placing orders at least{' '}
          <strong>two weeks in advance</strong>, as availability fills up quickly.
        </p>

        <p>
          Our cakes come standard with three layers and your choice of frosting, including American
          buttercream, Swiss buttercream, cream cheese, chocolate ganache, or whipped cream.
          Specialty flavors may require specific frostings. Add-ons like fresh fruit and floral
          decor are available for an extra charge.
        </p>

        <p>
          We’re a traditional bakery and offer one vegan option: chocolate cake with vegan
          buttercream.
        </p>

        <p>
          <strong>Note:</strong> Birthday messages or writing are not included in base quotes and
          incur an additional fee.
        </p>

        <p>
          <strong>Email us for a custom quote:</strong>{' '}
          <a
            href='mailto:email@saintsandsinnersbakeshop.com'
            className='text-sinful-red underline'
            aria-label='Email Saints and Sinners Bake Shop'>
            email@saintsandsinnersbakeshop.com
          </a>
        </p>

        <div>
          <h2 className='text-2xl font-serif mt-8 mb-4'>Base Flavors</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Vanilla</li>
            <li>Chocolate</li>
            <li>Marble</li>
            <li>Confetti</li>
            <li>Red Velvet</li>
            <li>Lemon</li>
            <li>Pumpkin</li>
            <li>Carrot</li>
            <li>Brown Sugar</li>
            <li>Coconut</li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-serif mt-8 mb-4'>Specialty Flavors</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Chocolate Dipped Strawberry</li>
            <li>Double Chocolate</li>
            <li>Peanut Butter Cup</li>
            <li>S’more</li>
            <li>Triple Chocolate</li>
            <li>Chocolate Caramel</li>
          </ul>
        </div>
      </article>
    </main>
  );
}

export default SpecialtyCakes;
