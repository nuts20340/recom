import './ProdsStyles.css'

import React from 'react'
import p1 from '../assets/tag1.png'
import p2 from '../assets/tag2.png'
import p3 from '../assets/cspice.png'

const Prods = () => {
    return (
        <div className='produc'>
            <div className="produc-containter">
                <div className="pro1">
                    <img className='im1' src={p1} alt="p1" />
                    <img className='im2' src={p2} alt="p2" />
                    <img className='im3' src={p3} alt="" />
                </div>
                <div className="pro2">
                    <img className='im4' src={p3} alt="p3" />
                </div>
                <div className="prod3">
                    <img className='im5' src={p3} alt="p3" />
                </div>
                <div className="pro4">
                    <img className='im6' src={p3} alt="p3" />
                </div>
                <div className="pro5">
                    <img className='im7' src={p3} alt="p3" />
                </div>
            </div>
        </div>
    )
}

export default Prods
