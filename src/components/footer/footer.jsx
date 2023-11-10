import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="bg-white text-black px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-6 fw-bold text-dark">Student Special: Discounted rates <br/>on tropical gateways!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Let's embody your beautiful ideas together,simply the<br/> way you visualize your next big things.</p>
          </div>
          <div className="d-grid gap-6 d-sm-flex justify-content-sm-center">
          <ul className="nav justify-content-center pb-3 mb-3 increased-gap">
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Terms of use</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Sales and Refunds</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Legal</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Schedules</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li className="nav-item" style={{ marginRight: '20px' }}><a href="#" className="nav-link px-2 text-body-secondary">Membership</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Joins</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
