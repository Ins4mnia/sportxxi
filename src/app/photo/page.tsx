"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import PhotoCard from "@/components/photoCard/PhotoCard";

const Page: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState([]);

  const filteredPhotos = selectedCategory === "Все" ? data : data.filter((photo) => photo.category === selectedCategory);

  const fetching = async () => {
    const response = await fetch("http://localhost:5500/photos");
    const data = await response.json();
    setData(data);

    const uniqueCategories = Array.from(new Set(data.map((elem) => elem.category)));
    setCategories(["Все", ...uniqueCategories]);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Фотоматериалы</h1>
      <div className={s.Page__wrapper}>
        <div className={s.Filter}>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? s.Active : s.Filter__Category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={s.PhotoGrid}>
          {filteredPhotos.map((photo, index) => (
            <PhotoCard key={index} src={photo.src} title={photo.title} id={photo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
