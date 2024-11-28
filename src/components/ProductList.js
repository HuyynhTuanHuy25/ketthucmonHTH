import React, { useState } from "react";
import ProductItem from "./ProductItem";

// Dữ liệu sản phẩm
const products = [
  {
    id: 1,
    name: "Quần Jeans Mùa Đông",
    price: 350000,
    category: "Quần",
    image:
      "https://pos.nvncdn.com/5048a3-93414/ps/20211104_Qrc838JJQCFbPNeFsh1b7ovk.jpg",
  },
  {
    id: 2,
    name: "Áo Khoác Gió Mùa Đông",
    price: 750000,
    category: "Áo khoác",
    image: "https://pos.nvncdn.com/4260cc-24295/ps/20231115_RgRQ7Funoj.jpeg",
  },
  {
    id: 3,
    name: "Áo Thun Mùa Đông",
    price: 45000,
    category: "Áo",
    image:
      "https://down-vn.img.susercontent.com/file/13de82cc67433793926a43982b863b54",
  },
  {
    id: 4,
    name: "Dạ Mùa Đông",
    price: 85000,
    category: "Áo khoác",
    image:
      "https://img.lazcdn.com/g/p/96e58e62bdc3997d9d494798a3783477.jpg_webp_360x360q75.jpg_.webp",
  },
  {
    id: 5,
    name: "Áo Lông Mùa Đông",
    price: 100000,
    category: "Áo khoác",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/b7/52/f8/bd194f755a23c0c0ab1a8cb32bdff095.jpg",
  },
  {
    id: 6,
    name: "Áo Khoác Lông Mùa Đông",
    price: 90000,
    category: "Áo khoác",
    image:
      "https://cdn.becungshop.vn/images/500x500/ao-khoac-long-co-cao-dang-lung-lot-ni-mua-dong-xinh-xan-cho-be-gai-p28537-g1659-500x500.jpg",
  },
  {
    id: 7,
    name: "Áo Lông Cao Cấp Mùa Đông",
    price: 12000,
    category: "Áo khoác",
    image:
      "https://bizweb.dktcdn.net/100/502/737/products/o1cn01ae6lmf1re2dlhwkm53433775.jpg?v=1725524746453",
  },
  {
    id: 8,
    name: "Áo Khoác Dạ",
    price: 10000,
    category: "Áo khoác",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7N4aDUgQl3WQY2ixBr8Ta9fAnkPvu-bMlQ&s",
  },
  {
    id: 9,
    name: "Áo Thun ",
    price: 8000,
    category: "Áo khoác",
    image:
      "https://bizweb.dktcdn.net/100/502/737/products/o1cn01mafg4g2gdswnmtyzd3907259.jpg?v=1703735360030",
  },
  {
    id: 10,
    name: "Quần Jogger",
    price: 5000,
    category: "Áo khoác",
    image:
      "https://aothudong.com/upload/product/atd-412/quan-jogger-kaki-nam-cao-cap.jpg",
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Không có sản phẩm nào</p>
      ) : (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
