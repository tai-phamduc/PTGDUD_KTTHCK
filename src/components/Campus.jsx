import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CampusAndMediaSection = () => {
  const sections = [
    {
      title: "PHÂN HIỆU QUẢNG NGÃI",
      imageUrl: "https://iuh.edu.vn/Resource/Upload2/Image/banner/content/QN03.jpg", // Replace with real image
    },
    {
      title: "CƠ SỞ THANH HÓA",
      imageUrl: "https://iuh.edu.vn/Resource/Upload2/Image/banner/content/TH03.jpg", // Replace with real image
    },
    {
      title: "VIDEO VÀ HÌNH ẢNH",
      videoThumbnail: "https://iuh.edu.vn/templates/2015/image/video-background.jpg", // Replace with real thumbnail or embed
    },
  ];

  return (
    <Row className="g-3" style={{ backgroundColor: '#0e4a90', padding: '20px', marginTop: '20px' }}>
      {sections.map((section, idx) => (
        <Col md={4} key={idx}>
          <Card className="h-100 border-0 bg-transparent text-white">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem', textTransform: 'uppercase' }}>
                  {section.title}
                </Card.Title>
                {section.videoThumbnail && (
                  <Button variant="light" size="sm" style={{ fontSize: '0.7rem', border: '1px solid #ccc', color: 'black' }}>
                    xem tất cả
                  </Button>
                )}
              </div>

              {section.imageUrl && (
                <img src={section.imageUrl} alt={section.title} className="img-fluid" />
              )}

              {section.videoThumbnail && (
                <div className="position-relative">
                  <img src={section.videoThumbnail} alt="Video Thumbnail" className="img-fluid" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <i className="bi bi-play-circle-fill" style={{ fontSize: '3rem', color: 'white' }}></i>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampusAndMediaSection;
