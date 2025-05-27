import React from 'react';

function Contact() {
  return (
    <section className='bg-saint text-sinner px-6 py-16'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-4xl font-serif text-center mb-8'>Contact Us</h2>

        <div className='space-y-6 text-lg leading-relaxed font-light'>
          <div>
            <p className='font-semibold text-sinful-red'>Address:</p>
            <p>595 Pine Ave, Long Beach, CA 90802</p>
          </div>

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
                className='underline hover:text-sinful-red'>
                email@saintsandsinnersbakeshop.com
              </a>
            </p>
            <p className='mt-1'>Email us for all order inquiries. Thank you!</p>
          </div>

          <div>
            <p className='font-semibold text-sinful-red'>Phone:</p>
            <p>
              <a href='tel:5626764090' className='underline hover:text-sinful-red'>
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
    </section>
  );
}

export default Contact;
