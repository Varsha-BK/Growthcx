import React from 'react'

const Navmenu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-white bg-white  text-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="data:image/png;base64,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" alt="growthcxlogo" width="200" height="50" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="items navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/whyus">Why us?</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our fixes
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/fullservice">Full-Service</a></li>
                                <li><a class="dropdown-item" href="/contentmarketing">Content Marketing</a></li>
                                <li><a class="dropdown-item" href="/productmarketing">Product Marketing</a></li>
                                <li><a class="dropdown-item" href="/fractionalcmo">Fractional CMO</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/growth">Growth</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href='/eyeopeners'>Eye-peners</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customers
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/growthmarketing">Growth Marketing</a></li>
                                <li><a class="dropdown-item" href="/webanddesign#">Web and Design</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className='hopbtn'>
                        <button className="btn btn-dark">Hop on a call</button>

                    </div>

                </div>
            </div>
        </nav>


    )
}

export default Navmenu