import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Đăng ký nhận tin với email: ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Liên hệ */}
        <div className="footer-section contact">
          <h3>LIÊN HỆ</h3>
          <p>Số điện thoại: 1800 585 860</p>
          <p>Email: cskh@thoitrangkhatoco.vn</p>
        </div>

        {/* Đăng ký nhận tin */}
        <div className="footer-section newsletter">
          <h3>ĐĂNG KÝ NHẬN TIN</h3>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Đăng ký</button>
          </form>
        </div>

        {/* Kết nối với chúng tôi */}
        <div className="footer-section social-links">
          <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <ul>
            <li>
              <Link to="#">Facebook</Link>
            </li>
            <li>
              <Link to="#">Zalo</Link>
            </li>
            <li>
              <Link to="#">Instagram</Link>
            </li>
            <li>
              <Link to="#">Tiktok</Link>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ khách hàng */}
        <div className="footer-section customer-support">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul>
            <li>
              <Link to="#">Giới thiệu</Link>
            </li>
            <li>
              <Link to="#">Hệ thống cửa hàng</Link>
            </li>
            <li>
              <Link to="#">Tra cứu đơn hàng</Link>
            </li>
            <li>
              <Link to="#">Tư vấn bảng size</Link>
            </li>
          </ul>
        </div>

        {/* Chính sách */}
        <div className="footer-section policies">
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li>
              <Link to="#">Chính sách công ty</Link>
            </li>
            <li>
              <Link to="#">Chính sách thành viên</Link>
            </li>
            <li>
              <Link to="#">Chính sách đổi hàng</Link>
            </li>
          </ul>
        </div>

        {/* Fanpage */}
        <div className="footer-section fanpage">
          <h3>FANPAGE CHÚNG TÔI</h3>
          <p>Thời trang nam Khatoco</p>
        </div>

        {/* Phương thức thanh toán */}
        <div className="footer-section payment-methods">
          <h3>PHƯƠNG THỨC THANH TOÁN</h3>
          <p>Phương thức thanh toán qua các kênh ngân hàng.</p>
        </div>

        {/* Bộ công thương */}
        <div className="footer-section bo-cong-thuong">
          <h3>BỘ CÔNG THƯƠNG</h3>
          <p>Được cấp phép bởi Bộ Công Thương</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
