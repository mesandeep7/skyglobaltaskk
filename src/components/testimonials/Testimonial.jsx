import React from 'react';
import './test.css'
function Testimonial() {
  return (
    <div class="container marketing position-relative cardsecd">
      <h1 className="display-6 fw-bold text-dark py-5">Testimonials</h1>
      <div className="row">
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            src="https://images.pexels.com/photos/18896715/pexels-photo-18896715/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            width="140"
            height="140"
          />
          <h4 className="mt-4 fw-normal" >Corey Korsgaard</h4>
          <p className="m-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            src="https://images.pexels.com/photos/2869076/pexels-photo-2869076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            width="140"
            height="140"
          />
          <h4 className="fw-normal mt-4" >Jakob Aminoff</h4>
          <p className="m-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            width="140"
            height="140"
          />
          <h4 className="fw-normal mt-4" >Carla Press</h4>
          <p className="m-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
      </div>
    </div>
  );
}

export default Testimonial;
