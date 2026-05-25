import React from 'react'
import CommissionsHero from '@/components/CommissionsHero';
import Commissions from '@/components/Commissions';
import Marquee from '@/components/Marquee';

const page = () => {
  return (
    <main>
        <CommissionsHero />
        <Marquee />
        <Commissions />
    </main>
  )
}

export default page