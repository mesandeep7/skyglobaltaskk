import React from 'react';
import './landPage.css';
import Screenshot297 from '../webtaskresource/Screenshot (297).png';
import Ellipse46 from '../webtaskresource/Ellipse 46.svg';
import Ellipse49 from '../webtaskresource/Ellipse 49.svg';
import Subtract from '../webtaskresource/Subtract.svg';

export default function landPage() {
    return (
        <div>
            <section class="landpageSec">
                <div class="landPageDiv">
                    <div class="firstLandContent" >
                        <h2>Discover the beauty of the tropics</h2>
                        <h1>Tropical <br />
                            Destinations <br />
                            <span>
                                For Student
                            </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br /> rutrum nisi. A nec nisl
                            vitae
                        </p>
                        <button><a href="#">SIGN UP</a> </button>

                    </div>
                    <div class="SecondLandImg">
                        <img src={Screenshot297} alt="" />
                    </div>
                </div>
                <img class="firstSvgEc" src={Ellipse46} alt="" />
                <img class="secondSvgEc" src={Ellipse49} alt="" />
                <img class="thirdSvgEc" src={Subtract} alt="" />
            </section>

        </div>
    )
}
