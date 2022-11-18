import { Button, Carousel } from "antd";
import React, { useRef } from "react";

const CarouselComponent = () => {
  const ref = useRef();
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
          background: "green",
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Slide nr.1</h1>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Slide nr.2</h1>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Slide nr.3</h1>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Slide nr.4</h1>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Slide nr.5</h1>
        </div>
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
