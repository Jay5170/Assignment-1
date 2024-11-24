import React from 'react'
import { assets } from '../../assets/assets'

const Our_Team = () => {
  return (
    <div className='our_team flex flex-wrap flex-col '>
      <div className='ot_heading flex justify-center'>
        <h1>OUR TEAM</h1>
      </div>
      <div className='flex justify-center'>
        <div className="ot_slider ">
          <div className="ot_slider_line">
            <hr />
          </div>
          <div className="ot_slider_body"></div>
        </div>
      </div>
      <div className='ot_cards flex justify-between text-center'>
        <div>
          <img src={assets.Person_1} alt="" className='card_img' />
          <h5 className='card_text'>Jessica D'suza</h5>
        </div>
        <div>
          <img src={assets.Person_2} alt="" className='card_img' />
          <h5 className='card_text'>Johny Williams</h5>
        </div>
        <div>
          <img src={assets.Person_3} alt="" className='card_img' />
          <h5 className='card_text'>Sanya R,</h5>
        </div>

      </div>
    </div>
  )
}

export default Our_Team
