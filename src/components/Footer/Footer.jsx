import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='footer flex justify-center items-center' >
                <div className='footer_icon flex flex-wrap flex-col justify-between'>
                    <img src={assets.Facebook} alt="" /><img src={assets.Linkedin} alt="" /><img src={assets.Google} alt="" />
                </div>
                <div className='footer_text flex justify-between ml-3.5	'>
                    <div> <h5>Social</h5> <p>Facebook</p> <p>Linkedin</p> <p>Google +</p></div>
                    <div> <h5>Explore</h5> <p>Services</p> <p>Team</p> <p>Clients</p></div>
                    <div> <h5>Contact</h5> <p>Lorem Ipsum dummy address</p> <p>used for display</p> <p>1234567890</p></div>
                    <div> <h5>Email</h5> <p>mendlesoncommunication@email.com</p></div>
                </div>
            </div>
            <p className='copy_right text-center'>© Copyright 2018 Mendleson Communication Pty Ltd</p>
        </div>
    )
}

export default Footer
