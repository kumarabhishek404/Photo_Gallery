import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/Papa/img1.jpg',
    image2: '/images/Papa/img2.jpeg',
    image3: '/images/Papa/img1.jpg',
    image4: '/images/Papa/img1.jpg',
    image5: '/images/Papa/img1.jpg',
    image6: '/images/Papa/img1.jpg',
    image7: '/images/Papa/img1.jpg',
    image8: '/images/Papa/img1.jpg',
    image9: '/images/Papa/img1.jpg',
    image10: '/images/Papa/img1.jpg'
}

function Papa() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} heading='Papa Ji' />
        </div>
    )
}

export default Papa;
