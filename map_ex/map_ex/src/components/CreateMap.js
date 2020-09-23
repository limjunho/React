import React, { useEffect } from "react";

const { kakao } = window;

const CreateMap = () => {
  useEffect(() => {
    const container = document.getElementById("kakaomap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="kakaomap"
      style={{
        width: "300px",
        height: "300px",
      }}
    ></div>
  );
};

export default CreateMap;
