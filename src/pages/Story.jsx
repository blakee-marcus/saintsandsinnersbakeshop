import React from 'react';
import { Helmet } from 'react-helmet-async';

function Story() {
  return (
    <main className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Our Story | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Discover the story behind Saints & Sinners Bake Shop in Long Beach. Learn how a love for sweets and creativity inspired our handmade cakes, pastries, and desserts.'
        />
        <meta
          name='keywords'
          content='Saints and Sinners Bake Shop, bakery Long Beach, custom cakes, dessert shop, handmade pastries, local bakery story, artisan baker Long Beach'
        />

        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/story' />
        <meta property='og:title' content='Our Story | Saints & Sinners Bake Shop' />
        <meta
          property='og:description'
          content='From childhood joy to professional pastry passion, learn the story behind Saints & Sinners Bake Shop in Long Beach, CA.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/story' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/our-story.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Our Story | Saints & Sinners Bake Shop' />
        <meta
          name='twitter:description'
          content='Inspired by a lifelong love of sweets, Saints & Sinners Bake Shop brings handcrafted cakes and desserts to Long Beach.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/our-story.jpg'
        />
      </Helmet>

      <div className='max-w-3xl mx-auto text-center'>
        <h1 className='text-4xl font-serif mb-6'>Our Story</h1>

        <p className='text-lg leading-relaxed font-light'>
          I started{' '}
          <span className='font-semibold text-sinful-red'>Saints & Sinners Bake Shop</span> because
          I genuinely adore sweets — plain and simple. Even after years as a professional baker and
          cake decorator, it’s still magical to watch someone light up with joy over a handcrafted
          dessert.
        </p>

        <p className='text-lg leading-relaxed font-light mt-6'>
          What drives me is the creativity that comes from dreaming up a new recipe — and the
          artistic freedom in every swirl of frosting or chocolate drizzle. At Saints & Sinners,
          we’re obsessed with making sure our desserts don’t just{' '}
          <span className='italic'>look</span> beautiful, but also{' '}
          <span className='italic'>taste</span> unforgettable.
        </p>

        <p className='text-lg leading-relaxed font-light mt-6'>
          Every recipe we use is the result of years of experimenting with flavor, texture, and
          presentation. From classic cakes to custom cookies and pastries, we aim to create desserts
          that feel soulful, vibrant, and made with the highest-quality ingredients available.
        </p>
      </div>
    </main>
  );
}

export default Story;
