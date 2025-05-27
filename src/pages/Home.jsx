import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock3, CakeSlice } from 'lucide-react';

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='relative min-h-screen flex flex-col items-center justify-center text-center bg-sinner text-saint px-6 py-24 overflow-hidden'>
      <Helmet>
        <title>Saints & Sinners Bake Shop | Custom Cakes & Pastries in Long Beach, CA</title>
        <meta
          name='description'
          content='Discover Saints & Sinners Bake Shop in Long Beach. Custom cakes, fresh pastries, and artisan coffee in a charmingly sinful setting.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/' />

        {/* Open Graph & Twitter */}
        <meta property='og:title' content='Saints & Sinners Bake Shop | Long Beach, CA' />
        <meta
          property='og:description'
          content='Custom cakes, handcrafted pastries, and heavenly coffee in the heart of Long Beach.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/social-preview.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Saints & Sinners Bake Shop | Long Beach, CA' />
        <meta
          name='twitter:description'
          content='Pastries, cakes, and coffee made with flair and flavor. Visit us in Long Beach.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/social-preview.jpg'
        />

        {/* LocalBusiness Schema */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Bakery',
            name: 'Saints & Sinners Bake Shop',
            image: 'https://saintsandsinnersbakeshop.com/images/social-preview.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '702 E 10th St',
              addressLocality: 'Long Beach',
              addressRegion: 'CA',
              postalCode: '90813',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 33.7817,
              longitude: -118.1826,
            },
            telephone: '+1-562-676-4090',
            url: 'https://saintsandsinnersbakeshop.com',
            openingHours: ['Mo-Fr 07:00-15:00', 'Sa-Su 08:00-14:00'],
            sameAs: [
              'https://instagram.com/saintsandsinnersbakeshop',
              'https://facebook.com/saintsandsinnersbakeshop',
            ],
          })}
        </script>
      </Helmet>

      {/* Background glow */}
      <div className='absolute inset-0 bg-gradient-radial from-sinful-red/10 via-transparent to-transparent blur-3xl' />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='z-10 max-w-3xl'>
        <h1 className='text-5xl md:text-6xl font-serif mb-4 tracking-tight leading-tight'>
          Saints & Sinners Bake Shop
        </h1>
        <p className='text-lg text-saint/80 mb-8'>
          Handcrafted pastries, killer coffee, and heavenly vibes in the heart of Long Beach.
        </p>

        <div className='flex flex-col items-center gap-6 text-sm md:text-base'>
          <div className='flex flex-col items-center gap-1'>
            <div className='flex items-center gap-3'>
              <MapPin className='w-5 h-5 text-goldleaf' />
              <span>702 E 10th St, Long Beach, CA 90813</span>
            </div>
            <motion.a
              href='https://maps.app.goo.gl/FrjYhKBAQVXuMW7u6'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-block mt-1 rounded-full border border-goldleaf px-4 py-1 text-sm font-medium text-goldleaf hover:bg-goldleaf hover:text-sinner transition-colors'
              aria-label='Get directions to Saints & Sinners Bake Shop on Google Maps'>
              Get Directions
            </motion.a>
          </div>

          <div className='flex items-center gap-3'>
            <Clock3 className='w-5 h-5 text-goldleaf' />
            <div className='text-left'>
              <p>
                <strong>Mon–Fri:</strong> 7:00 AM – 3:00 PM
              </p>
              <p>
                <strong>Sat–Sun:</strong> 8:00 AM – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <CakeSlice className='absolute bottom-8 right-8 w-10 h-10 text-frosting opacity-20' />
    </motion.main>
  );
}

export default Home;
