import React, { useState, useEffect, useRef } from "react";
import { db, storage } from "../firebase";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc } from "firebase/firestore";

const Home = () => {
  const [data, setData] = useState([]);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft =
        (galleryRef.current.scrollWidth - galleryRef.current.clientWidth) / 2;
      galleryRef.current.scrollTop =
        (galleryRef.current.scrollHeight - galleryRef.current.clientHeight) / 2;
    }
  }, []);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft =
        (galleryRef.current.scrollWidth - galleryRef.current.clientWidth) / 2;
      galleryRef.current.scrollTop =
        (galleryRef.current.scrollHeight - galleryRef.current.clientHeight) / 2;
    }
  }, [data]);

  const listRef = ref(storage, "image/");

  useEffect(() => {
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setStartY(e.pageY - e.currentTarget.offsetTop);
    setScrollLeft(e.currentTarget.scrollLeft);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseLeave = (e) => {
    setIsDragging(false);
    e.currentTarget.style = "gap : 0px";
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style = "gap : 0px";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const walkY = (y - startY) * 3;
    const walkX = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walkX;
    e.currentTarget.scrollTop = scrollTop - walkY;
    e.currentTarget.style = `gap : ${Math.abs(walkX / 30)}px`;
  };

  const handleImageClick = (e, index) => {
    const grid = galleryRef.current;
    const gridItem = grid.querySelectorAll(".grid-item")[index];

    const targetX =
      gridItem.offsetLeft + gridItem.offsetWidth / 2 - grid.clientWidth / 2;
    const targetY =
      gridItem.offsetTop + gridItem.offsetHeight / 2 - grid.clientHeight / 2;

    animateScroll(grid, targetX, targetY);
  };

  const animateScroll = (element, targetX, targetY) => {
    const duration = 500;
    const fps = 60;
    const frames = duration / (1000 / fps);
    const startX = element.scrollLeft;
    const startY = element.scrollTop;
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;

    let frame = 0;

    const scrollStep = () => {
      frame++;
      const progress = frame / frames;
      element.scrollLeft = startX + deltaX * progress;
      element.scrollTop = startY + deltaY * progress;

      if (frame < frames) {
        requestAnimationFrame(scrollStep);
      }
    };

    scrollStep();
  };

  return (
    <div className="home-container">
      <div
        className="grid"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={galleryRef}
      >
        {data.map((item, index) => {
          return (
            <div
              className="grid-item"
              key={index}
              onClick={(e) => handleImageClick(e, index)}
            >
              <img src={item.img} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
