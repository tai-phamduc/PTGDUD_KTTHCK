import React from 'react';

const FooterBottomBar = () => {
  return (
    <div className="container-fluid bg-light py-2 border-top">
      <div className="container d-flex align-items-center justify-content-between flex-wrap">

        {/* Left side: Logo */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img 
            src="https://iuh.edu.vn/templates/2015/image/logo.png" 
            alt="IUH Logo" 
            style={{ height: '50px', marginRight: '10px' }}
          />
        </div>

        {/* Middle: Info */}
        <div className="d-flex flex-column flex-md-row align-items-center text-secondary small">
          <div className="me-md-3 d-flex align-items-center mb-2 mb-md-0">
            <i className="bi bi-people-fill me-1"></i>
            <span>Số lượt truy cập: 288,835,363</span>
          </div>
          <div className="me-md-3 d-flex align-items-center mb-2 mb-md-0">
            <i className="bi bi-person-fill me-1"></i>
            <span>Hôm nay: 21,717</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-person-lines-fill me-1"></i>
            <span>Đang xem: 77</span>
          </div>
        </div>

        {/* Right side: Social media */}
        <div className="d-flex align-items-center">
          <span className="me-2 small text-secondary">Chia sẻ</span>
          <a href="#" className="me-2">
            <img src="https://iuh.edu.vn/templates/2015/image/icon-fb.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="#" className="me-2">
            <img src="https://iuh.edu.vn/templates/2015/image/icon-tw.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="#">
            <img src="https://iuh.edu.vn/templates/2015/image/icon-in.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default FooterBottomBar;
