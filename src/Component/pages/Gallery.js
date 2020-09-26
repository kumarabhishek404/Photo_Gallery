import React, { useEffect } from 'react'
import Card from '../Card'


const images = {
    src1: '/images/papa.jpeg',
    src2: '/images/pic.png'
}
const person = {
    father: "Father",
    mother: "Mother",
    brother: "Brother",
    bigSister: "Sister",
    smallSister: "Sister",
    me: "Me"
}

function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Card src={images} relation={person} />
        </div>
    )
}

export default Gallery
