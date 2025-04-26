import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function Sidebar() {
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div className="text-primary" style={{height: '100%', backgroundColor: '#d7dfe2' }}>
      <h5 className="mb-4 bg-primary text-white p-3"><b>CƠ CẤU TỔ CHỨC</b></h5>
      <ul className="list-unstyled px-3 gap-3">

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

        {/* Các Phòng Ban - expandable */}
        <li className="mb-2">
          <div
            className={`d-flex justify-content-between align-items-center ${openMenu === 'phongban' ? 'text-danger' : ''}`}
            onClick={() => toggleMenu('phongban')}
            style={{ cursor: 'pointer' }}
          >
            CÁC PHÒNG BAN
            <span>&gt;</span>
          </div>
          <Collapse in={openMenu === 'phongban'}>
            <ul className="list-unstyled ps-3 mt-2">
              <li>PHÒNG TỔ CHỨC - HÀNH CHÍNH</li>
              <li>PHÒNG TÀI CHÍNH - KẾ TOÁN</li>
              <li>PHÒNG KẾ HOẠCH - ĐẦU TƯ</li>
              <li>PHÒNG ĐÀO TẠO</li>
              <li>PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ</li>
              <li>PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN</li>
              <li>PHÒNG KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG</li>
              <li>PHÒNG QUẢN TRỊ</li>
              <li>PHÒNG DỊCH VỤ</li>
              <li>PHÒNG QUẢN LÝ KÝ TÚC XÁ</li>
              <li>TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ</li>
              <li>NHÀ XUẤT BẢN</li>
            </ul>
          </Collapse>
        </li>

        {/* Other normal items */}
        {['CÁC KHOA', 'CÁC VIỆN', 'CÁC TRUNG TÂM', 'CÁC PHÂN HIỆU', 'ĐOÀN THỂ'].map((item, index) => (
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
