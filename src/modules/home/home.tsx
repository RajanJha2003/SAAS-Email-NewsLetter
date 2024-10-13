import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './elements/banner'
import Branding from './elements/branding'
import Benefits from './elements/benefits'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Branding />
        <Benefits />
    </div>
  )
}

export default Home