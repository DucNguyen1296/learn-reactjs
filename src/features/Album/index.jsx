import React from "react";
// import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/6/4/a/964a3e60e21d1af2b306f7bb397caa00.jpg",
    },
    {
      id: 2,
      name: "Rap Việt Nghe Là Nghiền",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/1/6/2/0162bf5b6bea14bab28bf90055a94417.jpg",
    },
    {
      id: 3,
      name: "Trào Lưu Nhạc Hot",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/5/0/3/e5034005b4cf89f687809eacd28818dc.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
