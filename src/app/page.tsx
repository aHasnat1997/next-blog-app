import Hero from '@/components/home/Hero';
import LatestBlog from '@/components/home/LatestBlog';
import React from 'react';

const page = () => {
  return (
    <main className='min-h-screen'>
      <Hero />
      <LatestBlog />
    </main>
  );
};

export default page;