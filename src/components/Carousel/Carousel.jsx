import { Button, Carousel } from "antd";
import React, { useRef } from "react";

const CarouselComponent = () => {
  const ref = useRef();
  const array = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        gap: "20px",
        padding: "20px",
        margin: "20px",
        border: "1px dashed blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "500px",
        height: "500px",
      }}
    >
      <Carousel
        autoplay
        dots={true}
        pauseOnHover={true}
        draggable
        ref={ref}
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {array.map((item, index) => {
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <div key={index}>
              <div
                style={{
                  background: randomColor,
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>Slide nr.{item}</h1>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          onClick={() => {
            ref.current.prev();
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            ref.current.goTo(0);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            ref.current.next();
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CarouselComponent;
