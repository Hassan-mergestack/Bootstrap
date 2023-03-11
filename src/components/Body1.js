import React from 'react'
 function Body1() {
  return (
    <div className='col-12 container row'>
        <div className='col-2 bg-light'>
            <span >2</span>
        </div>

        <div className='col-5'>
             <row className='d-flex justify-content-center'>
                <h3 className='blueh4 '>AGELESS MULTI-COLLAGEN® PROTEIN POWDER</h3>
             </row>
             <row className='d-flex justify-content-center'>
                <span >Select your money saving option below:</span>
             </row>
        </div>

        <div className='col-5'>
             <row className='d-flex justify-content-center'>
                <h4 className='blueh4 '>Choose Your Package</h4>
             </row>
             <row className='d-flex justify-content-center mb-3'>
                <span >Select your money saving option below:</span>
             </row>
             <div className='d-flex d-inline-block container'>
                <button className='btn btn-primary btn-block Bluebutton'>One-Time Purchase</button>
                <button className='btn btn-primary btn-block Whitebutton ml-2'>Subscribe & save 30%</button>
             </div>
            </div>
    </div>
  )
}

export default Body1
