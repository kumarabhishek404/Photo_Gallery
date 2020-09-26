import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/Sister/img1.jpg',
    image2: '/images/Sister/img1.jpg',
    image3: '/images/Sister/img1.jpg',
    image4: '/images/Sister/img1.jpg',
    image5: '/images/Sister/img1.jpg',
    image6: '/images/Sister/img1.jpg',
    image7: '/images/Sister/img1.jpg',
    image8: '/images/Sister/img1.jpg',
    image9: '/images/Sister/img1.jpg',
    image10: '/images/Sister/img1.jpg'
}

function Sister() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} heading='Didi' />
        </div>
    )
}

export default Sister;
