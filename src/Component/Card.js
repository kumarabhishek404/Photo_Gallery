import React from 'react'
import CardItem from './CardItem'
import { Link } from 'react-router-dom'
import './Card.css'


function Card(props) {

    console.log(props)
    // console.log(props.relation.father);
    return (
        <div className='card'>
            <h1>{props.greet ? props.greet : ''}</h1>
            <h1>{props.heading}</h1>
            <div className='card_links'>
                <div className="card_links_box">
                    <Link to='/papa' className='links'>
                        Papa
                </Link>
                    <Link to='/mummy' className='links'>
                        Mummy
                </Link>
                    <Link to='/sister' className='links'>
                        Sister
                </Link>
                    <Link to='/bhai' className='links'>
                        Bhai
                </Link>
                    <Link to='me' className='links'>
                        Abhishek
                </Link>
                </div>
            </div>
            <div className='card_container'>
                <div className='card_wrapper'>
                    <ul className='card_items'>
                        <CardItem
                            path={props.root ? props.root.papa : '/'}
                            src={props.src.image1}
                            text='Papa is my love '
                            person={props.relation ? props.relation.father : ''}
                        />
                        <CardItem
                            path={props.root ? props.root.mummy : '/'}
                            src={props.src.image2}

                            person={props.relation ? props.relation.mother : ''}
                        />
                    </ul>
                    <ul className='card_items'>
                        <CardItem
                            path={props.root ? props.root.sister : '/'}
                            src={props.src.image3}
                            text='Papa is my love '
                            person={props.relation ? props.relation.smallSister : ''}
                        />
                        <CardItem
                            path={props.root ? props.root.bhai : '/'}
                            src={props.src.image4}
                            text='Papa is my love '
                            person={props.relation ? props.relation.brother : ''}
                        />
                        <CardItem
                            path={props.root ? props.root.me : '/'}
                            src={props.src.image5}
                            text='Papa is my love '
                            person={props.relation ? props.relation.me : ''}
                        />
                    </ul>
                    <ul className='card_items'>
                        <CardItem
                            path='/'
                            src={props.src.image6}
                            text='Papa is my love '
                        />
                        <CardItem
                            path='/'
                            src={props.src.image7}
                            text='Papa is my love '
                        />
                        <CardItem
                            path='/'
                            src={props.src.image8}
                            text='Papa is my love '
                        />
                    </ul>
                    <ul className='card_items'>
                        <CardItem
                            path='/'
                            src={props.src.image9}
                            text='Papa is my love '
                        />
                        <CardItem
                            path='/'
                            src={props.src.image10}
                            text='Papa is my love '
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;
