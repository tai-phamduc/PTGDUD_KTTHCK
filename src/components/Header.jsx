import React from 'react';

const UniversityHeader = () => {
  return (
    <div className="bg-light d-flex align-items-center justify-content-center p-3" style={{ borderTop: '1px solid #1e1e7a', borderBottom: '1px solid #1e1e7a' }}>
      <div className="d-flex align-items-center gap-4">
        <img 
          src="https://iuh.edu.vn/templates/2015/image/logo.png" 
          alt="IUH Logo" 
          style={{ width: '150px', height: 'auto' }}
        />
        <div className="text-center">
          <h5 className="text-primary fw-bold mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            BỘ CÔNG THƯƠNG<br />
            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
          </h5>
          <p className="text-danger mb-0" style={{ fontSize: '14px' }}>
            Đổi mới tư duy, làm giàu thêm tri thức - đời sống
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversityHeader;
