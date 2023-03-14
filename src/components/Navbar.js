import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {FaPeopleArrows} from 'react-icons/fa'
import {BsPerson} from 'react-icons/bs'

function navbar() {
  return (
    <div className='NavbarBlueTop FontFamily'>
      <div className='col-12 d-flex '>
      <div className='col-5 text-white d-flex-inline d-flex pl-2 py-2'>
      <FaPeopleArrows size={35} className='ml-4'/>
            <div className='container col-10 NavbarFont ml-0 mt-1'>EVERY ORDER CAN HELP END CHILDHOOD HUNGER</div>
            </div>
          <div className='offset-2 col-5 d-flex'>
              <div class="dropdown">
                <div className='border-0 row '>
                <button class="btn btn-secondary dropdown-toggle text-white border-0 btn-md my-3 mr-2 d-flex-inline NavbarOptionBtn" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 CUSTOMER SUPPORT
                 </button>
                 <div class="dropdown-menu NavbarDropdownBtn " aria-labelledby="dropdownMenuButton1">
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Action</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Another action</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Something else here</a>
                 </div>
                </div>
               </div>

               <div class="dropdown">
                <BsPerson className='text-white mr-3 ml-2'/>
                 <button class="btn btn-secondary dropdown-toggle row text-white border-0 btn-md my-3  NavbarOptionBtn d-flex-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 MY ACCOUNT
                 </button>
                 <div class="dropdown-menu NavbarDropdownBtn" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item NavbatDropdownBtn text-white " href="/#">Purchase History</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Manage Subsriptions</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Track my order</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Forget Password</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Create Account</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Customer Account</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Customer Support</a>
                  <a class="dropdown-item NavbatDropdownBtn text-white" href="/#">Login</a>
                 </div>
               </div>
               <button className='btn btn-secondary text-white border-0 btn-md ml-1 pb-3 NavbarOptionBtn'>
                <img src='https://bio-img.s3.amazonaws.com/Shopify/global/vip/cart.png'className='' alt= 'cart' height={30} width={35}></img>
                MY CART (0) </button>

            </div>

    </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light BackgroundImage">
  <a className="navbar-brand" href="/#">
    <img src="https://uploads.gorgias.io/MdAV17qmm57ZWgaX/naturally-honest-BT-3fe86b61-2d2d-4ab3-b60a-61b498df421a.png" alt= "Navbar Brand logo" height={60} width={220} className='mx-5'/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle NavbarBlueTop text-white  btn-block px-3 py-auto mb-2 mr-2 ShopBtn" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SHOP
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <a className="dropdown-item BlueNavbarBtn" href="/#">ALL PRODUCTS</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">PROTEINS</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">COLLAGEN PROTEIN</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">IMMUNE SUPPORT</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">HEALTHY LIVING</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">DIGESTIVE HEALTH</a>
          <a className="dropdown-item BlueNavbarBtn" href="/#">ANTI-AGING</a>
          <a className="dropdown-item BlueNavbarBtn " href="/#">GEAR</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-linkbtn btn BlueNavbarBtn mx-3 my-2" href="/#">QUALITY </a>
      </li>
      <li className="nav-item active">
        <a className="nav-linkbtn btn BlueNavbarBtn mx-3 my-2" href="/#">MISSION </a>
      </li>
      <li className="nav-item active">
        <a className="nav-linkbtn btn btn BlueNavbarBtn mx-3 my-2 " href="/#">#BIOTRUST</a>
      </li>
    </ul>
    <div className="bg-white border SearchBar">
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 border-0" type="search" placeholder="Search all products..." aria-label="Search"/>
      <button className="btn" type="submit">
      </button>
      <FaSearch className='text-secondary fa-sm' />
    </form>
    </div>
  </div>
</nav>
<div className='ThinBlueLine'>.</div>
<nav aria-label="breadcrumb" className='Breadcrumbs'>
  <ol class="breadcrumb bg-white ">
    <li class="breadcrumb-item">HOME</li>
    <li class="breadcrumb-item">COLLAGEN PROTEIN</li>
  </ol>
</nav>

    </div>
  )
}

export default navbar