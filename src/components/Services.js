import React from 'react';
let image = require("../images/content-navlink-attorneys.jpg")
let image1 = require("../images/sub-02-subrogation.jpg")
let image2 = require("../images/sub-02-litigation.jpg")
let image3 = require("../images/sub-02-business.jpg")
let image4 = require("../images/sub-02-warehouse.jpg")
    
export default function Services() {
    return (
        <React.Fragment>
            <div class="row justify-content-md-left">
                <div class="col-3 sidebar">
                    <ul class="list-unstyled components">
                        <p>What We Do</p>
                            <li class="active">
                                <a href="#" styles="color: white">Subrogation</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Property</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Workers' Compensation</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Litigation</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Appellate</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Commercial Defense</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Labor/Employment</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Business</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Brokerage Agreement</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Business Formation</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Business Related Contracts</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Labor/Employment</a>
                            </li>
                    </ul>
                            < img src={image.default} alt="image not found" />
            </div>

                            <div class="col-sm-9">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore
                                    magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.</p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-block">
                                        <a href="#">< img src={image1.default} alt="image not found" /></a>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-block">
                                        <a href="#">< img src={image2.default} alt="image not found" /></a>
                                                </div>
                                            </div>
                                        </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#">< img src={image3.default} alt="image not found" /></a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-block">
                                        <a href="#">< img src={image4.default} alt="image not found" /></a>
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