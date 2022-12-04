import React from 'react'
import "../StyleSheets/HomePage.css"
import Card from './Card'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'

const Homepage = () => {
    return (
        <div>

            <Navbar />
            <SocialLinks />
            <Card />
            

        </div>
    )
}

export default Homepage