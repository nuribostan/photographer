import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const Works = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("all");
  const [fullscreen, setFullscreen] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = ref(storage, "image/");

  const handleCategory1 = () => {
    setCategory("all");
  };

  const handleCategory2 = () => {
    setCategory("street");
  };

  const handleCategory3 = () => {
    setCategory("weeding");
  };

  const handleCategory4 = () => {
    setCategory("view");
  };
  const handleSize = (index) => {
    setFullscreen(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }

    setFullscreen(currentIndex);
  };

  const handleNext = (event) => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }

    setFullscreen(currentIndex);
  };

  useEffect(() => {
    const handleExit = (event) => {
      if (event.target.classList.contains("work-item-active-close")) {
        setFullscreen(null);
      }
    };

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setFullscreen(null);
      }
    };
/*
    const handleNext = (event) => {
      if (event.keyCode === 39) {
        if (currentIndex < data.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }
    };

    const handlePrev = (event) => {
      if (event.keyCode === 37) {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(data.length - 1);
        }
      }
    };

    window.addEventListener("keydown", handleNext);
    window.addEventListener("keydown", handlePrev);
*/
    window.addEventListener("click", handleExit);
    window.addEventListener("keydown", handleEsc);
    setFullscreen(currentIndex);
  }, [currentIndex, data.length]);

  useEffect(() => {
    setCurrentIndex(null);
    setFullscreen(null);

    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setData((prev) => [...prev, { img: url, alt: "img" }]);
          });
        });
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div className="work-container">
      <div className="work-title">
        <h1>work</h1>

        <div className="work-category">
          <ul>
            <li
              className={
                category === "all"
                  ? "category-item category-item-selected"
                  : "category-item"
              }
              onClick={handleCategory1}
            >
              all
            </li>
            <li
              className={
                category === "street"
                  ? "category-item category-item-selected"
                  : "category-item"
              }
              onClick={handleCategory2}
            >
              street
            </li>
            <li
              className={
                category === "weeding"
                  ? "category-item category-item-selected"
                  : "category-item"
              }
              onClick={handleCategory3}
            >
              weeding
            </li>
            <li
              className={
                category === "view"
                  ? "category-item category-item-selected"
                  : "category-item"
              }
              onClick={handleCategory4}
            >
              view
            </li>
          </ul>
        </div>
      </div>

      <div className="work-content">
        <div className="work-grid">
          {data.map((item, index) => {
            return (
              <div
                className={`work-item ${
                  fullscreen === index ? "work-item-active" : ""
                }`}
                onClick={() => handleSize(index)}
                key={index}
              >
                <img src={item.img} alt={item.alt} />
                <button
                  className="work-item-active-button button-left"
                  onClick={handlePrev}
                ></button>
                <button
                  className="work-item-active-button button-right"
                  onClick={handleNext}
                ></button>

                <button className="work-item-active-close"></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
