import React from 'react';
let image = require("../images/nza_slideshow.jpg");

export default function Index() {
    return (
        <React.Fragment>
            <main class="container">
                <div class="row justify-content-md-center">
                    <div class="col-sm-9">
                        <img src={image.default} alt="image not found" />
                    </div>
                    <div class="col-3">
                        <h6>NEWS FEED</h6>
                        <textarea id="w3review" name="w3review" rows="17" cols="20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </textarea>
                        <p></p>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-sm-9">
                            <strong>Welcome to our website!</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div class="col-3">
                            <strong>Bigshot, Zoo, & Adds, P.C.</strong>
                            <p>419 West South Street, Suite 4200</p>
                            <p>Houston, Texas 35983</p>
                            <p>555-555-5555 (Phone)</p>
                            <p>555-555-5555 (Fax)</p>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )}