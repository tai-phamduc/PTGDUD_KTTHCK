import React from 'react';

const TopNavBar = () => {
  return (
    <div className="bg-primary d-flex justify-content-between align-items-center px-3" style={{ height: '35px' }}>
      <div className="container d-flex align-items-center gap-3 text-white">
        <a href="#" className="d-flex align-items-center gap-1 text-white text-decoration-none">
          <i className="bi bi-display"></i>
          <span>E-OFFICE</span>
        </a>
        <a href="#" className="d-flex align-items-center gap-1 text-white text-decoration-none">
          <i className="bi bi-envelope"></i>
          <span>EMAIL</span>  
        </a>
        <a href="#" className="d-flex align-items-center gap-1 text-white text-decoration-none">
          <i className="bi bi-journal-bookmark"></i>
          <span>THƯ VIỆN - THÔNG TIN</span>
        </a>
      </div>
      <div className="d-flex align-items-center gap-2 text-white">
        <span>KẾT NỐI | LIÊN HỆ</span>
        <img src="https://flagcdn.com/w40/vn.png" alt="Vietnam Flag" width="20" height="14" />
        <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" width="20" height="14" />
      </div>
    </div>
  );
};

export default TopNavBar;
