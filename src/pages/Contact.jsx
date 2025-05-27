import React from 'react';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <main className='bg-saint text-sinner px-6 py-16'>
      <Helmet>
        <title>Contact | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Get in touch with Saints & Sinners Bake Shop in Long Beach. View our address, business hours, email, phone, and social media links.'
        />
        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/contact' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Bakery',
            name: 'Saints & Sinners Bake Shop',
            image: 'https://saintsandsinnersbakeshop.com/images/logoRaccoon.webp',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '595 Pine Ave',
              addressLocality: 'Long Beach',
              addressRegion: 'CA',
              postalCode: '90802',
              addressCountry: 'US',
            },
            telephone: '+1-562-676-4090',
            email: 'email@saintsandsinnersbakeshop.com',
            url: 'https://saintsandsinnersbakeshop.com',
            openingHoursSpecification: [
              { dayOfWeek: 'Monday', opens: '08:00', closes: '12:00' },
              { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '13:00' },
              { dayOfWeek: 'Friday', opens: '08:00', closes: '14:00' },
              { dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '14:00' },
            ],
            sameAs: [
              'https://facebook.com/saintsandsinnersbakeshop',
              'https://instagram.com/saintsandsinnersbakeshop',
            ],
          })}
        </script>
      </Helmet>

      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-serif text-center mb-8'>Contact Saints & Sinners</h1>

        <div className='space-y-6 text-lg leading-relaxed font-light'>
          <address className='not-italic'>
            <p className='font-semibold text-sinful-red'>Address:</p>
            <p>595 Pine Ave, Long Beach, CA 90802</p>
          </address>

          <div>
            <p className='font-semibold text-sinful-red'>Store Hours:</p>
            <ul className='ml-4 list-disc'>
              <li>Monday: 8AM – 12PM</li>
              <li>Tuesday – Thursday: 8AM – 1PM</li>
              <li>Friday: 8AM – 2PM</li>
              <li>Saturday – Sunday: 9AM – 2PM</li>
            </ul>
          </div>

          <div>
            <p className='font-semibold text-sinful-red'>Email:</p>
            <p>
              <a
                href='mailto:email@saintsandsinnersbakeshop.com'
                className='underline hover:text-sinful-red'
                aria-label='Email Saints and Sinners Bake Shop'>
                email@saintsandsinnersbakeshop.com
              </a>
            </p>
            <p className='mt-1'>Email us for all order inquiries. Thank you!</p>
          </div>

          <div>
            <p className='font-semibold text-sinful-red'>Phone:</p>
            <p>
              <a
                href='tel:5626764090'
                className='underline hover:text-sinful-red'
                aria-label='Call Saints and Sinners Bake Shop'>
                (562) 676-4090
              </a>{' '}
              — For general questions
            </p>
          </div>

          <div>
            <p className='font-semibold text-sinful-red'>Social Media:</p>
            <p>
              <a
                href='https://facebook.com/saintsandsinnersbakeshop'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-sinful-red'>
                Facebook
              </a>{' '}
              &nbsp;|&nbsp;
              <a
                href='https://instagram.com/saintsandsinnersbakeshop'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-sinful-red'>
                @saintsandsinnersbakeshop
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
