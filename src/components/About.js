import React from 'react';
let image = require("../images/sub-01-attorneys.jpg");
let image1 = require("../images/sub-01-staff.jpg");
let image2 = require("../images/sub-01-reputation.jpg");
let image3 = require("../images/sub-01-history.jpg");

export default function About() {
    return (
        <React.Fragment>
            <div class="row justify-content-md-left">
                <div class="col-3 sidebar">
                    <ul class="list-unstyled components">
                        <p>WHO WE ARE</p>
                        <li class="active">
                            <a href="#" styles="color: white">Welcome</a>
                            <li>
                                <a href="/attorneys" styles="color: white">Attorneys</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Staff</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Reputation</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">History</a>
                            </li>
                        </li>
                    </ul>
                    <div id="map-container-google-8" class="z-depth-1-half map-container-5" styles="height: 300px">
                        <iframe src="https://maps.google.com/maps?q=Houston,Texas&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                            styles="border:0" allowfullscreen></iframe>
                    </div>
                    <img src={require('../images/sub-01-attorneys.jpg')} />
                </div>

                
                <div class="col-sm-9">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#"><img src={image.default} alt="image not found" /></a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#"><img src={image1.default} alt="image not found" /></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#"><img src={image2.default} alt="image not found" /></a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#"><img src={image3.default} alt="image not found" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}