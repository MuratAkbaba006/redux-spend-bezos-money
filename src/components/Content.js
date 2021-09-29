import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import ContentItem from "./ContentItem";
import './contentItem.scss'
const Content = () => {
  const data = [
    {
      id: nanoid(),
      img: "https://d.neoldu.com/news/57966.jpg",
      name: "Yacht",
      price: 10000000000,
    },
    {
      id: nanoid(),
      img: "https://www.iklimhaber.org/wp-content/uploads/2021/07/je.jpg",
      name: "Plane",
      price: 20000000000,
    },
    {
      id: nanoid(),
      img: "https://galeri14.uludagsozluk.com/772/peki-kek_1271925_m.jpg",
      name: "Peki Kek",
      price: 0.5,
    },
    {
      id: nanoid(),
      img: "https://gezivego.com/wp-content/uploads/Romantik-Bir-Tatil-Icin-En-Ucuz-8-Avrupa-Sehri.jpg",
      name: "Europen Holiday",
      price: 50000,
    },
    {
      id: nanoid(),
      img: "https://i4.hurimg.com/i/hurriyet/75/0x0/6116b5554e3fe10d049a4e9d.jpg",
      name: "Kim Min Jae",
      price: 25000000,
    },
    {
      id: nanoid(),
      img: "http://img.gazetevatan.com/vatanmediafile/Haber598x362/2017/02/24/altin-fiyatlari-haftanin-son-gununde-ne-kadardan-d-2717244.Jpeg",
      name: "1 kg Gold",
      price: 50000,
    },
  ];
  return (
    <div className="grid-container">
      {data.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Content;
