import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/Mummy/img1.jpg',
    image2: '/images/Mummy/img1.jpg',
    image3: '/images/Mummy/img1.jpg',
    image4: '/images/Mummy/img1.jpg',
    image5: '/images/Mummy/img1.jpg',
    image6: '/images/Mummy/img1.jpg',
    image7: '/images/Mummy/img1.jpg',
    image8: '/images/Mummy/img1.jpg',
    image9: '/images/Mummy/img1.jpg',
    image10: '/images/Mummy/img1.jpg'
}

function Mummy() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} heading='Mummy Ji' />
        </div>
    )
}

export default Mummy;
