import React from 'react'
import { FaSearch } from 'react-icons/fa';
function navbar() {
  return (
    <div className='NavbarBlueTop'>
        <row>
            <div className='col-4 text-white'>
                <i className='fa fa-search'></i>
            EVERY ORDER CAN HELP END CHILDHOOD HUNGER
            </div>
        </row>

        <nav className="navbar navbar-expand-lg navbar-light bg-light BackgroundImage">
  <a className="navbar-brand" href="/#">
    <img src="https://uploads.gorgias.io/MdAV17qmm57ZWgaX/naturally-honest-BT-3fe86b61-2d2d-4ab3-b60a-61b498df421a.png" alt= "Navbar Brand logo" height={60} width={250}/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle NavbarBlueTop text-white rounded" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <a className="nav-link BlueNavbarBtn" href="/#">QUALITY <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link ml-3 BlueNavbarBtn" href="/#">MISSION <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link ml-3 BlueNavbarBtn" href="/#">#BIOTRUST <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search all products..." aria-label="Search"/>
      <button class="btn" type="submit">
      <FaSearch/>
      </button>
    </form>
  </div>
</nav>
<nav aria-label="breadcrumb" className='Breadcrumbs'>
  <ol class="breadcrumb bg-white ">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">COLLAGEN PROTEIN</li>
  </ol>
</nav>
    </div>
  )
}

export default navbar