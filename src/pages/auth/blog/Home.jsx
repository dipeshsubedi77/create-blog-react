import React from 'react'

import Layout from '../../../components/Navbar/Layout/Layout'
import Card from './Components/Card'

const Home = () => {
  return (
    <Layout>
        <div className='flex flex-wrap justify-center space-x-2 mt-10'>
       
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
 

        



        
    </Layout>
 
  )
}

export default Home
