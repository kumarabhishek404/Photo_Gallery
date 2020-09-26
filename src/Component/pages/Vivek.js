import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/papa.jpeg',
    image2: '/images/pic.png'
}

function Vivek() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card />
        </div>
    )
}

export default Vivek
