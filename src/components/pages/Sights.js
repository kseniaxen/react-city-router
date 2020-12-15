import React, { Component } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
class Sights extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <h2>Main attractions</h2>
        <div class="slider">
          <ul class="slides">
            <li>
              <img src="https://mrpl.city/uploads/news/968x504/webvsa5jb6svwdzfpecrvrl1qibebft7.jpg" />
              <div class="caption center-align">
                <h3>Донецкий академический областной драматический театр</h3>
              </div>
            </li>
            <li>
              <img src="https://mrpl.city/uploads/news/968x504/4mq3s46ounol3ypfbe1esjnzwkgqe4mi.jpg" />
              <div class="caption left-align">
                <h3>Городской сад</h3>
              </div>
            </li>
            <li>
              <img src="https://pr.ua/upload/user_files/2017/79/AVK_4571.jpg" />
              <div class="caption right-align">
                <h3>Пляж Мариуполя</h3>
              </div>
            </li>
            <li>
              <img src="https://pr.ua/upload/user_files/2019/32/AVK_9983.JPG" />
              <div class="caption center-align">
                <h3>Парк Веселка</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sights;