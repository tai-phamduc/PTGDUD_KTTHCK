import React from 'react';

const FooterInfoSection = () => {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="row text-start">

          {/* LIÊN HỆ */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#a60000' }}>Liên hệ</h6>
            <p className="mb-1">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p className="mb-1">Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p className="mb-1">
              Điện thoại: <a href="tel:02838940390" className="text-decoration-none text-dark">028 38940 390 - 100</a>
            </p>
            <p className="mb-1">
              Tuyển sinh: <a href="tel:02839851932" className="text-decoration-none text-dark">
                028 3985 1932 - 028 3895 5858 - 028 3985 1917
              </a>
            </p>
            <p className="mb-1">
              Email: <a href="mailto:dhcn@iuh.edu.vn" className="text-decoration-none text-dark">dhcn@iuh.edu.vn</a>
            </p>
          </div>

          {/* HOẠT ĐỘNG KHÁC */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#a60000' }}>Hoạt động khác</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Hoạt động phục vụ cộng đồng</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Sinh viên tình nguyện</a></li>
              <li><a href="#" className="text-dark text-decoration-none">CLB/Đội/Nhóm sinh viên</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Kết nối doanh nghiệp</a></li>
            </ul>
          </div>

          {/* THÔNG TIN MỞ RỘNG */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#a60000' }}>Thông tin mở rộng</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Báo chí viết về IUH</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Khám phá IUH</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Kỹ năng mềm</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Bộ sưu tập</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Dịch vụ sinh viên</a></li>
            </ul>
          </div>

          {/* VĂN BẢN TIỆN ÍCH */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#a60000' }}>Văn bản tiện ích</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Quy chế-Quy định-Quy trình</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Ba công khai</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Biểu mẫu đào tạo</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Quản lý khoa học</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Phản hồi</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterInfoSection;
