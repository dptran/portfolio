import React from 'react';
let image = require("../images/content-05-contact.jpg")
let image1 = require("../images/content-link-where.jpg")
let image2 = require("../images/content-link-reputation.jpg")

export default function Contact() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col sidebar">
                        <ul class="list-unstyled components">
                            <p>CONTACT US</p>
                            <li class="active">
                                <a href="#" styles="color: white">Directions/Parking</a>
                            </li>
                            <li>
                                <a href="#" styles="color: white">Career Opportunities</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6">
                        < img src={image.default} alt="image not found" />
                            <p>The office hours are from 8am - 5pm Monday through Friday</p>
                            <p>689 East South Street</p>
                            <p>Suite 4210</p>
                            <p>Houston, Texas 09345</p>
                            <p>PH: 332.332.8980</p>
                            <p>FAX: 332.323.5477</p>
                            <p>Contact: Rosemary Sage at me@lzblaw.com"</p>
                    </div>
                    <div class="col">
                        < img src={image1.default} alt="image not found" />
                            <strong>Where We Work</strong>
                            <p>Find out more about our work</p>

                        < img src={image2.default} alt="image not found" />
                            <strong>Reputation</strong>
                            <p>Read about our admirable reputation.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
