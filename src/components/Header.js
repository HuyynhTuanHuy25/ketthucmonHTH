import React, { useState } from "react";
import { Link } from "react-router-dom";

// Modal đăng nhập/đăng ký
const LoginModal = ({ isOpen, onClose, onSwitch }) => {
  if (!isOpen) return null; // Không hiển thị modal khi không mở

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <h2>Đăng nhập / Đăng ký</h2>
        <div className="modal-body">
          <form>
            <div>
              <label>Tên đăng nhập:</label>
              <input type="text" placeholder="Tên đăng nhập" />
            </div>
            <div>
              <label>Mật khẩu:</label>
              <input type="password" placeholder="Mật khẩu" />
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
          <p onClick={onSwitch}>Chưa có tài khoản? Đăng ký ngay</p>
        </div>
      </div>
    </div>
  );
};

const Header = ({ cartCount }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State cho hiển thị ô tìm kiếm

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Cập nhật giá trị tìm kiếm
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Tìm kiếm:", searchTerm); // Xử lý tìm kiếm (Ví dụ: gửi yêu cầu tìm kiếm đến backend hoặc cập nhật URL)
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible); // Chuyển trạng thái hiển thị ô tìm kiếm
  };

  return (
    <header>
      <h1>Cửa hàng quần áo</h1>
      <nav>
        <Link to="/">Nhà</Link>
        <Link to="/cart">Giỏ hàng ({cartCount})</Link>

        {/* Nút đăng nhập */}
        <button onClick={openLoginModal}>Đăng nhập</button>

        {/* Nút tìm kiếm ẩn */}
        <button onClick={toggleSearchVisibility}>
          {isSearchVisible ? "Đóng tìm kiếm" : "Tìm kiếm"}
        </button>

        {/* Ô tìm kiếm ẩn */}
        {isSearchVisible && (
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={handleSearchChange} // Cập nhật state khi người dùng thay đổi ô tìm kiếm
            />
            <button type="submit">Tìm kiếm</button>
          </form>
        )}
      </nav>

      {/* Hiển thị Modal đăng nhập */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModal}
        onSwitch={openRegisterModal}
      />
    </header>
  );
};

export default Header;
