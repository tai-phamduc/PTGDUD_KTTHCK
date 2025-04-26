import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const NewsSection = () => {
  const newsData = [
    {
      title: "THÔNG BÁO",
      items: [
        { text: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025", date: "24-04-2025", isNew: true },
        { text: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...", date: "21-04-2025", isNew: true },
      ],
    },
    {
      title: "TUYỂN SINH",
      items: [
        { text: "Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...", date: "28-03-2025", isNew: false },
        { text: "Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025", date: "20-03-2025", isNew: false },
      ],
    },
    {
      title: "TIN TỨC - SỰ KIỆN",
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG", // replace with your real image
      items: [
        { text: "AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...", date: "25-04-2025", isNew: true },
        { text: "Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...", date: "22-04-2025", isNew: true },
      ],
    },
    {
      title: "HỢP TÁC QUỐC TẾ",
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/03/GIAOLUUVANHOA-BANNER.JPG", // replace with your real image
      items: [
        { text: "Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...", date: "24-03-2025", isNew: false },
        { text: "Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus", date: "19-03-2025", isNew: false },
      ],
    },
  ];

  return (
    <Row className="g-3">
      {newsData.map((section, idx) => (
        <Col md={6} key={idx}>
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {section.title}
                </Card.Title>
                <Button variant="light" size="sm" style={{ fontSize: '0.7rem', border: '1px solid #ccc' }}>
                  xem tất cả
                </Button>
              </div>

              {section.image && (
                <img src={section.image} alt="news" className="img-fluid mb-2" />
              )}

              <ul className="list-unstyled">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="mb-2" style={{ fontSize: '0.9rem' }}>
                    <span style={{ color: 'red' }}>▶ </span>
                    {item.text}
                    <span className="text-muted" style={{ fontSize: '0.8rem' }}> {item.date}</span>
                    {item.isNew && <span className="text-danger ms-1" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>new</span>}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsSection;
