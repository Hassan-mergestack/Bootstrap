import React from 'react'
import {BsStarFill} from 'react-icons/bs'
 function productGrid() {
  return (
    <div className='col-12 container row FontFamily'>
        <div className='col-2 bg-light'>
        <button className='btn btn-primary StickyReviewBtn'> Reviews</button>
            <span >
            </span>
        </div>
        <div className='col-4 '>
             <row className='d-flex '>
                <h3 className='ProductTitle'>AGELESS MULTI-COLLAGEN® PROTEIN POWDER</h3>
             </row>
             <row className='d-flex justify-content-center'>
             <BsStarFill className='mt-1 StarColor'/> 
             <BsStarFill className='mt-1 StarColor'/> 
             <BsStarFill className='mt-1 StarColor'/> 
             <BsStarFill className='mt-1 StarColor'/> 
             <BsStarFill className='mt-1 StarColor'/> 
             <a href="/#" className="ml-2 " aria-label="2909 reviews">2909 Reviews</a>
             </row>
             <img className="" src="https://cdn.shopify.com/s/files/1/2451/8571/products/collagen-unflavored-5.17.21_1024x1024@2x.png?v=1657121683" alt="product" height={500} width={500} ></img>
             <img className="" src="https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/free-report-image-1546015359856-1555446388183.png" class="free-ebook-img" alt="Receive two free e-books with your order. 'The 3 Week Diet' and '53 Fat Burning Smoothies &amp; Milkshakes' are yours free, a $50 value." height={65} width={480}></img>
        </div>

        <div className='col-6 container '>
             <row className='d-flex justify-content-center'>
                <h4 className='ProductTitle '>Choose Your Package</h4>
             </row>
             <row className='d-flex justify-content-center mb-3'>
                <span >Select your money saving option below:</span>
             </row>
             <div className='d-flex d-inline-block mb-5  '>
                <button className='btn btn-block Bluebutton '>One-Time Purchase</button>
                <button className='btn btn-block Whitebutton ml-2'>Subscribe & save 36%</button>
             </div>
             <div className=' d-flex align-items-center ml-1'>
             <div class="card col-4 LeftCardBorder CardsHeight">
                     <ul   ul class="list-group list-group-flush border-0">
                          <li class="list-group-item border-0 justify-content-center d-flex"> <h1 className='mt-5 mr-3 ml-3 mb-0 ProductTitle bold'>1 Bag</h1></li>
                          <li class="list-group-item border-0 d-flex justify-content-center mb-4"><h1 ><b>$49</b></h1></li>
                          <li class="list-group-item border-0">
                           <button className='btn btn-success btn-md '><b>CHOOSE FLAVOUR</b></button>
                          </li>
                     </ul>
               </div>
               <div class="card col-4 ThickBlueBorder">
                     <ul   ul class="list-group list-group-flush ">
                         <li className='row bold Bluebutton border-0 d-flex justify-content-center pt-0  block'> <h5><b>Most Popular</b></h5></li>
                          <li class="list-group-item border-0"><h1 className='pb-0 pt-3 ProductTitle d-flex mb-0 row justify-content-center'>3 Bags</h1></li>
                          <li class="list-group-item border-0">
                              <h1 className='text-success d-flex row justify-content-center mb-0'>
                                   <b className='bold'>$35</b>                                   
                                   <b>Per Bag</b> 
                                   </h1>
                              <h4><b className='text-danger d-flex justify-content-center row'>(Save 28% )</b></h4> 
                         </li>
                          <li class=" btn btn-success btn-md m-3 bold"><b>CHOOSE FLAVOUR</b></li>
                     </ul>
               </div>
               <div class="card col-4 RightCardBorder">
               <ul   ul class="list-group list-group-flush p-2">
                          <li class="list-group-item border-0"><h1 className='mb-0 mt-1 pt-0 ProductTitle d-flex row justify-content-center'>6 Bags</h1></li>
                          <li class="list-group-item border-0">
                              <h1 className='text-success d-flex row justify-content-center mb-0'>
                                   <b className='bold mb-0'>$31</b>                                   
                                   <b>Per Bag</b> 
                                   </h1>
                              <h4><b className='text-danger d-flex justify-content-center mb-0 row'>(Save 36% )</b></h4> 
                         </li>
                          <li class=" btn btn-success btn-md m-2 "><b>CHOOSE FLAVOUR</b></li>
                     </ul>
               </div>
             </div>
            </div>
    </div>
  )
}

export default productGrid
