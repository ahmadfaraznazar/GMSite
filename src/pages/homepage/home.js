import React from 'react'
import Banner from './hometop'
import Card from './homecard'
import Transparentcard from './transparentcard'
import ERP from './homecard3'
import Green from '../blogs/last'

const home = () => {
  return (
    <div>
      <Banner />
      <Card />
      <Transparentcard />
      <ERP />
      <Green />
    </div>
  )
}

export default home
