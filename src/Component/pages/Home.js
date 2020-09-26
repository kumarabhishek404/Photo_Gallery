import React, { useEffect } from 'react'
import Card from '../Card';

const person = {
    father: "Father",
    mother: "Mother",
    brother: "Brother",
    bigSister: "Sister",
    smallSister: "Sister",
    me: "Me"
}

const images = {
    image1: '/images/Papa/img1.jpg',
    image2: '/images/Mummy/img1.jpg',
    image3: '/images/Sister/img1.jpg',
    image4: '/images/Bhai/img1.jpg',
    image5: '/images/Abhishek/img5.jpg',
    image6: '/images/Kittu-Rishabh/img1.jpg',
    image7: '/images/Kittu-Rishabh/img6.jpg',
    image8: '/images/Kittu-Rishabh/img3.jpg',
    image9: '/images/Kittu-Rishabh/img8.jpg',
    image10: '/images/Abhishek/img10.jpg'
}

const path = {
    papa: '/papa',
    mummy: '/mummy',
    sister: '/sister',
    bhai: '/bhai',
    me: '/me',
    home: '/home'
}

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} relation={person} root={path} greet='Hello, Guys' heading='Come into my family gallery' />
        </div>
    )
}

export default Home
