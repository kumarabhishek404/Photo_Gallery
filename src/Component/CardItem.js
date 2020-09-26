import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='card_item'>
                <Link className='card_item_link' to={props.path}>
                    <figure className='card_item_pic-wrap' data-category={props.person ? props.person : 'Family'}>
                        <img src='https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/101946340_898951753907047_7814903735976015049_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qyy41W-fnU4AX-NHCsH&oh=5d4c7e586c3c56d6a3fed544a1ea6343&oe=5F985EB4' alt='Home Image' className='card_item_img' />
                    </figure>
                    <div className='card_item_info'>
                        {/* <h5 className='card_item_text'>{props.text}</h5> */}
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
