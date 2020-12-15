import React, { Component } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
class Photos extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    M.Carousel.init({
      fullWidth: true
    });
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <div class="carousel carousel-slider">
          <a class="carousel-item"><img src="https://mrpl.city/uploads/news/968x504/webvsa5jb6svwdzfpecrvrl1qibebft7.jpg" /></a>
          <a class="carousel-item"><img src="https://mrpl.city/uploads/news/968x504/4mq3s46ounol3ypfbe1esjnzwkgqe4mi.jpg" /></a>
          <a class="carousel-item"><img src="https://pr.ua/upload/user_files/2017/79/AVK_4571.jpg" /></a>
          <a class="carousel-item"><img src="https://pr.ua/upload/user_files/2019/32/AVK_9983.JPG" /></a>
        </div>
      </div>
    );
  }
}
export default Photos;