import React from 'react'

const Footer = () => {
  return (
    <div class="footerdiv">

      <footer class="page-footer shadow">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <p className='footp'>
            Set the foundation of an aggressive growth
          </p>
        </div>

        <div className="buttondiv col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button className=" btn btn-light">Hop on a call</button>
        </div>

        <div className='mx-4'>
          <div class="d-flex flex-column mx-auto py-5" >
            <div class="d-flex flex-wrap justify-content-between">

              <div>
                <p class="h5 mb-4" >Our fixes</p>
                <ul class="p-0" >
                  <li class="my-2">
                    <a class="text" href="/">Team</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Expert</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Content</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4" >Community</p>
                <ul class="p-0" >
                  <li class="my-2">
                    <a class="text" href="/">About us</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Contact Us</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Privacy</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Teams</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4" >Resources</p>
                <ul class="p-0" >
                  <li class="my-2">
                    <a class="text" href="/">Eye-Openers</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Buzz</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4" >Social</p>
                <ul class="p-0" >
                  <li class="my-2">
                    <a class="text" href="/">LinkedIn</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Twitter</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Facebook</a>
                  </li>
                  <li class="my-2">
                    <a class="text" href="/">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <p class="text-center mt-5">&copy; Copyright 2023 growth.cx</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer