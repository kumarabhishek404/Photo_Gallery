import React, { useEffect } from 'react'
import Card from '../Card'

const images = {
    image1: '/images/Abhishek/img1.jpg',
    image2: '/images/Abhishek/img2.jpg',
    image3: '/images/Abhishek/img3.jpg',
    image4: '/images/Abhishek/img4.jpg',
    image5: '/images/Abhishek/img5.jpg',
    image6: '/images/Abhishek/img6.jpg',
    image7: '/images/Abhishek/img7.jpg',
    image8: '/images/Abhishek/img8.jpg',
    image9: '/images/Abhishek/img9.jpg',
    image10: '/images/Abhishek/img10.jpg'
}

function Abhishek() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Card src={images} heading='Abhishek Kumar' />
        </div>
    )
}

export default Abhishek
