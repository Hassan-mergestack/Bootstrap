import React from 'react'
import { FaSearch } from 'react-icons/fa';
function navBar() {
  return (
    <div className='bbg'>
        <row>
            <div className='col-4 text-white'>
                <i className='fa fa-search'></i>
            EVERY ORDER CAN HELP END CHILDHOOD HUNGER
            </div>
        </row>

        <nav class="navbar navbar-expand-lg navbar-light bg-light Backgr">
  <a class="navbar-brand" href="#">
    <img src="https://uploads.gorgias.io/MdAV17qmm57ZWgaX/naturally-honest-BT-3fe86b61-2d2d-4ab3-b60a-61b498df421a.png" height={60} width={250}></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle bbg text-white rounded" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SHOP
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown">
          <a class="dropdown-item bluecolor" href="#">ALL PRODUCTS</a>
          <a class="dropdown-item bluecolor" href="#">PROTEINS</a>
          <a class="dropdown-item bluecolor" href="#">COLLAGEN PROTEIN</a>
          <a class="dropdown-item bluecolor" href="#">IMMUNE SUPPORT</a>
          <a class="dropdown-item bluecolor" href="#">HEALTHY LIVING</a>
          <a class="dropdown-item bluecolor" href="#">DIGESTIVE HEALTH</a>
          <a class="dropdown-item bluecolor" href="#">ANTI-AGING</a>
          <a class="dropdown-item bluecolor " href="#">GEAR</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link bluecolor" href="#">QUALITY <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link ml-3 bluecolor" href="#">MISSION <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link ml-3 bluecolor" href="#">#BIOTRUST <span class="sr-only">(current)</span></a>
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

export default navBar