import React from 'react';
import './fourthFile.css';
import Screenshot290 from '../webtaskresource/Screenshot (290).png';
import Ellipse53 from '../webtaskresource/Ellipse 53.svg';
import Ellipse55  from '../webtaskresource/Ellipse 55.svg';
import Subtract2 from '../webtaskresource/Subtract2.svg';
import Ellipse54 from '../webtaskresource/Ellipse 54.svg';
import Screenshot296 from '../webtaskresource/Screenshot (296).png';

export default function fourthFile() {
    return (
        <section class="fourthFileFile">
            <div class="swapFileFile">

                <div class="contentDivFile">
                    {/* <!-- <svg class="secondSvgFile" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 47 47"
                            fill="none">
                            <path
                                d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z"
                                fill="#BE554B" />
                        </svg> --> */}
                    <h2>Get 20% off for student</h2>
                    <h1>Student discounts available.
                        <br />
                        <span>Get ready for some fun in the sun! </span>
                    </h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit</li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button>Explore more</button>
                </div>

                <div class="swapFileFileFirst">
                    <img class="swapFileFileImg" src={Screenshot290} alt="" />
                </div>

                <img class="firstSvgCurveFile" src={Ellipse53} alt="" />
                <img class="secondSvgCurveFile" src={Ellipse55} alt="" />
                <img class="thirdSvgCurveFile" src={Subtract2} alt="" />
                <img class="fourthSvgCurveFile" src={Ellipse54} alt="" />


            </div>


            <div class="swapFileFileDivss">

                <div class="swapFileFileSecondss">
                    <img class="swapFileFileImgSecondss" src={Screenshot296} alt="" />
                </div>

                <div class="carFormDivSecFile">
                    {/* <!-- <div class="card" style="width: 38rem;"> --> */}
                    <div class="card cardSecEditFile"   style={{width:"25rem"}}> 
                        <div class="card-body">
                            <h5 class="card-title titleBookCard">Book Now </h5>
                            <h6 class="card-subtitle mt-3 mb-5 text-body-secondary">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </h6>
                            <div class="row g-3">
                                <div class="col-12">
                                    <label for="firstName" class=" titleBookCard form-label ">City</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="PlaceHolder"
                                        value="" required="" />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label titleBookCard">Arival</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="10 October" value=""
                                        required="" />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label titleBookCard">Depature</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="11 october" value=""
                                        required="" />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label titleBookCard">Arival</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="10 October" value=""
                                        required="" />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label titleBookCard   ">Depature</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="11 october" value=""
                                        required="" />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                            </div>
                            <button type="button" class="btn btn-dark mt-5 mb-3">Book Now</button>


                        </div>
                    </div>


                </div>



            </div>

        </section>

    )
}
