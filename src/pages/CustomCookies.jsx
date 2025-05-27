import React from 'react';
import { Helmet } from 'react-helmet-async';

function CustomCookies() {
  return (
    <main className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Custom Decorated Cookies | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Order custom hand-decorated sugar cookies from Saints & Sinners Bake Shop in Long Beach. Perfect for birthdays, weddings, and all occasions.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/custom-cookies' />

        {/* Open Graph & Twitter for social previews */}
        <meta property='og:title' content='Custom Decorated Cookies | Saints & Sinners Bake Shop' />
        <meta
          property='og:description'
          content='Beautifully crafted sugar cookies made to order for any celebration. Based in Long Beach, CA.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/custom-cookies' />
        <meta property='og:type' content='product' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/custom-cookies.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Custom Decorated Cookies | Saints & Sinners Bake Shop'
        />
        <meta
          name='twitter:description'
          content='Custom sugar cookies made to match your event. Hand-decorated in Long Beach, CA.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/custom-cookies.jpg'
        />

        {/* JSON-LD structured data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Custom Decorated Cookies',
            description:
              'Hand-decorated sugar cookies crafted to match any theme or event. Perfect for parties, weddings, showers, and corporate events. Available for pickup in Long Beach, CA.',
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
        <h1 className='text-4xl font-serif text-center mb-8'>Custom Cookies</h1>

        <div className='space-y-6 text-lg leading-relaxed'>
          <p>
            Our hand-decorated sugar cookies are crafted with precision and creativity, making them
            perfect for any occasion. Whether you're celebrating a birthday, wedding, baby shower,
            or corporate event, we can design cookies that match your theme and vision.
          </p>

          <p>
            Prices vary depending on the size and complexity of the design. To ensure we can
            accommodate your request, please place your order at least 7 days in advance. For custom
            cookie cutter designs, additional lead time may be required.
          </p>

          <p>
            To get a quote or place an order, please email us at{' '}
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

export default CustomCookies;
