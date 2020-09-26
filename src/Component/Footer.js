import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'
import Button from '../Component/Button';

function Footer() {
    return (
        <div className='footer_container'>
            <section className='contact_container'>
                <div className='contact_heading'>
                    <h2>Join this portal for travel in a family photo gallery</h2>
                </div>
                <div className='contact_form'>
                    <form>
                        <input type='text' placeholder='Your Email' /><br />
                        <input type='text' placeholder='Your Username' /><br />
                        <Button buttonStyle='' buttonSize='btn_medium'>Join</Button>
                    </form>
                </div>
            </section>
            <section>
                <div className='social'>
                    <div className='social_logo'>
                        HOME <i className='fas fa-home' />
                    </div>
                    <div className='websites_rights'>
                        HOME <i className='far fa-copyright' /> 2020
                    </div>
                    <div className='social_media'>
                        <div className='social_media_icons'>
                            <Link
                                className='social_media_icon'
                                to='https://www.facebook.com'
                                target='_blank'
                                aria-label='Facebook'>
                                <i className='fab fa-facebook-f' />
                            </Link>
                            <Link
                                className='social_media_icon'
                                to='https://www.instagram.com'
                                target='_blank'
                                aria-label='Intagram'>
                                <i className='fab fa-instagram' />
                            </Link>
                            <Link
                                className='social_media_icon'
                                to='https://www.whatsapp.com'
                                target='_blank'
                                aria-label='Whatsapp'>
                                <i className='fab fa-whatsapp' />
                            </Link>
                            <Link
                                className='social_media_icon'
                                to='https://www.linkedin'
                                target='_blank'
                                aria-label='Linkedin'>
                                <i className='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='about_container'>
                    <div className='address'>
                        <p>Village-<span>Balipur</span></p>
                        <p>Post-<span>Shakroli</span></p>
                        <p>Tehsil-<span>Jalesar</span></p>
                        <p>District-<span>Etah</span></p>
                    </div>
                    <div className='contacts'>
                        <p>Mobile-<span>+91-6397308499</span></p><br />
                        <p>Email-<span>ak111edu000@gmail.com</span></p><br />
                        <p>Email-<span>abhishek19@navgurukul.org</span></p><br />
                        <p>Website-<span><a href='http://www.animadrive.in' target='_blank'>http://www.animadrive.in</a></span></p>
                    </div>
                    <div className='quatation'>
                        <p>“Family is not an important thing. It's everything.” <span>– Michael J. Fox.</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
