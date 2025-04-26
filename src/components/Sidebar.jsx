import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function Sidebar() {
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div className="bg-primary text-white p-3" style={{ minHeight: "100vh" }}>
      <h5 className="mb-4">CƠ CẤU TỔ CHỨC</h5>
      <ul className="list-unstyled">
        {/* Lãnh đạo - expandable */}
        <li className="mb-2">
          <div
            className={`d-flex justify-content-between align-items-center ${openMenu === 'lanhdao' ? 'text-danger' : ''}`}
            onClick={() => toggleMenu('lanhdao')}
            style={{ cursor: 'pointer' }}
          >
            LÃNH ĐẠO
            <span>&gt;</span>
          </div>
          <Collapse in={openMenu === 'lanhdao'}>
            <ul className="list-unstyled ps-3 mt-2">
              <li>ĐẢNG ỦY</li>
              <li>BAN GIÁM HIỆU</li>
            </ul>
          </Collapse>
        </li>

        {/* Other normal items */}
        {['CÁC PHÒNG BAN', 'CÁC KHOA', 'CÁC VIỆN', 'CÁC TRUNG TÂM', 'CÁC PHÂN HIỆU', 'ĐOÀN THỂ'].map((item, index) => (
          <li key={index} className="mb-2 d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
            {item}
            <span>&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
