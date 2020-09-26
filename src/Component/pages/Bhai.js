import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/Bhai/img1.jpg',
    image2: '/images/Bhai/img2.jpg',
    image3: '/images/Bhai/img3.jpg',
    image4: '/images/Bhai/img4.jpg',
    image5: '/images/Bhai/img5.jpg',
    image6: '/images/Bhai/img6.jpg',
    image7: '/images/Bhai/img7.jpg',
    image8: '/images/Bhai/img8.jpg',
    image9: '/images/Bhai/img9.jpg',
    image10: '/images/Bhai/img10.jpg'
}

function Bhai() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} heading='Vivek Singh' />
        </div>
    )
}

export default Bhai
