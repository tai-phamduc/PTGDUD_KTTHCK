import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-0" style={{ borderBottom: '1px solid #ccc' }}>
      <Container fluid className="px-3">
        <Navbar.Brand href="#">
          <i className="bi bi-house-door-fill" style={{ fontSize: '20px' }}></i>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="GIỚI THIỆU" id="intro-dropdown" className="text-danger fw-bold">
            <NavDropdown.Item href="#">Giới thiệu chung</NavDropdown.Item>
            <NavDropdown.Item href="#">Tầm nhìn - Sứ mạng - Mục tiêu chiến lược</NavDropdown.Item>
            <NavDropdown.Item href="#">Triết lý giáo dục</NavDropdown.Item>
            <NavDropdown.Item href="#">Phương châm hoạt động</NavDropdown.Item>
            <NavDropdown.Item href="#">Giá trị cốt lõi</NavDropdown.Item>
            <NavDropdown.Item href="#">Chính sách chất lượng</NavDropdown.Item>
            <NavDropdown.Item href="#">Sơ đồ bộ máy tổ chức</NavDropdown.Item>
            <NavDropdown.Item href="#">Cơ sở vật chất</NavDropdown.Item>
            <NavDropdown.Item href="#">Đội ngũ</NavDropdown.Item>
            <NavDropdown.Item href="#">Ba công khai</NavDropdown.Item>
            <NavDropdown.Item href="#">Hệ thống nhận diện</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="ĐÀO TẠO" id="education-dropdown" className="fw-bold">
            <NavDropdown.Item href="#">Các ngành học</NavDropdown.Item>
            <NavDropdown.Item href="#">Chương trình đào tạo</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="TUYỂN SINH" id="admissions-dropdown" className="fw-bold">
            <NavDropdown.Item href="#">Thông tin tuyển sinh</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className="fw-bold">NGHIÊN CỨU</Nav.Link>
          <Nav.Link href="#" className="fw-bold">SINH VIÊN</Nav.Link>
          <Nav.Link href="#" className="fw-bold">GIẢNG VIÊN</Nav.Link>
          <Nav.Link href="#" className="fw-bold">VĂN BẰNG</Nav.Link>
        </Nav>
        <Form className="d-flex" style={{ maxWidth: '200px' }}>
          <FormControl
            type="search"
            placeholder="Tìm kiếm."
            className="me-2"
            aria-label="Search"
          />
        <Button variant="primary" size="sm" style={{ borderRadius: '50%', width: '32px', height: '32px', padding: '0' }}>
        🔍
        </Button>

        </Form>
      </Container>
    </Navbar>
  );
};

export default MainMenu;
