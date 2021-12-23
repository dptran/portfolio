import React from 'react';
let image = require("../images/content-navlink-career.jpg")

export default function CV() {
    return (
        <React.Fragment>
            <div class="row justify-content-md-left">
                <div class="col-3 sidebar">
                    <ul class="list-unstyled components">
                        <p>WHERE WE WORK</p>
                        <li class="active">
                            <a href="#" styles="color: white">United States</a>
                        </li>
                        <li>
                            <a href="#" styles="color: white">International</a>
                        </li>
                    </ul>
                    <img src={image.default} alt="image not found" />
                </div>

                <div class="col-sm-9">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore
                        magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo
                        consequat.</p>
                    <strong>UNITED STATES</strong>
                    <table>
                        <tr>
                            <td>Alabama</td>
                            <td>Maine</td>
                            <td>Oklahoma</td>
                        </tr>
                        <tr>
                            <td>Alaska</td>
                            <td>Maryland</td>
                            <td>Oregon</td>
                        </tr>
                        <tr>
                            <td>Arizona</td>
                            <td>Massachuetts</td>
                            <td>Pennsylvania</td>
                        </tr>
                        <tr>
                            <td>Arkansas</td>
                            <td>Michigan</td>
                            <td>South Carolina</td>
                        </tr>
                        <tr>
                            <td>California</td>
                            <td>Minnesota</td>
                            <td>South Dakota</td>
                        </tr>
                        <tr>
                            <td>Colorado</td>
                            <td>Mississippi</td>
                            <td>Tennessee</td>
                        </tr>
                        <tr>
                            <td>Connecticut</td>
                            <td>Missouri</td>
                            <td>Texas</td>
                        </tr>
                        <tr>
                            <td>Florida</td>
                            <td>Montana</td>
                            <td>Utah</td>
                        </tr>
                        <tr>
                            <td>Georgia</td>
                            <td>Nebraska</td>
                            <td>Vermont</td>
                        </tr>
                        <tr>
                            <td>Hawaii</td>
                            <td>Nevada</td>
                            <td>Virginia</td>
                        </tr>
                        <tr>
                            <td>Idaho</td>
                            <td>New Hampshire</td>
                            <td>Washington</td>
                        </tr>
                        <tr>
                            <td>Illinois</td>
                            <td>New Jersey</td>
                            <td>West Virginia</td>
                        </tr>
                        <tr>
                            <td>Indiana</td>
                            <td>New Mexico</td>
                            <td>Wisconsin</td>
                        </tr>
                        <tr>
                            <td>Iowa</td>
                            <td>New York</td>
                            <td>Wyomin</td>
                        </tr>
                        <tr>
                            <td>Kansas</td>
                            <td>North Carolina</td>
                        </tr>
                        <tr>
                            <td>Kentucky</td>
                            <td>North Dakota</td>
                        </tr>
                        <tr>
                            <td>Louisiana</td>
                            <td>Ohio</td>
                        </tr>
                    </table>

                </div>
            </div>
        </React.Fragment>
    );
}