import { Container } from "@mui/system";
import React from "react";
import "./Footer.css";

const FooterBottom = () => {
  return (
    <footer>
      <Container className="footers1">
        <div className="d-flex">
          <img
            className="imgs"
            src="data:image/jpeg;base64,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"
          />
          <h1 style={{ color: "white" }}>MM GYM</h1>
        </div>
        <p>
          MM GYM Gym, The land of fitness, est la Première chaîne de clubs de
          fitness en Tunisie avec 10 clubs répartis sur le Grand Tunis.
        </p>
      </Container>

      <Container>
        <h1 className="footers2" style={{ color: "white" }}>
          HORAIRES
        </h1>

        <div className="footers2">
          <div style={{ color: "white" }}>
            <h2>LUNDI</h2>
            <h2>MARDI</h2>
            <h2>MERCREDI</h2>
            <h2>JEUDI</h2>
            <h2>VENDREDI</h2>
            <h2>SAMEDI</h2>
          </div>

          <div style={{ color: "white" }}>
            <h2>06:30 – 21:30</h2>
            <h2>06:30 – 21:30</h2>
            <h2>06:30 – 21:30</h2>
            <h2>06:30 – 21:30</h2>
            <h2>06:30 – 21:30</h2>
            <h2>06:30 – 21:30</h2>
          </div>
        </div>
      </Container>

      <Container className="footers3">
        <div>
          <div style={{ color: "red" }}>
            <h1> suiver nous</h1>
            <div className="logo">
              <a href="">
                <img
                  className="logo1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////l5eWZmZmQkJCAgIAKCgrt7e0RERHNzc2hoaFMTEwXFxd9fX3w8PDi4uI3Nzf29vbFxcW4uLjY2NhqampUVFSFhYXV1dWLi4vHx8e6uroODg5mZmZeXl4nJycgICBxcXGsrKwuLi5CQkI8PDwmDCXRAAADi0lEQVR4nO3df1PaQBDG8USj0ST8BkVQRGrf/1ssgdqGomXvrtt9NvN8Z/zTmf1MbAKXXJrl+8qqbrK+1dRV2eKy/U9lPYxa1VE4sJ5DsUEr7O8RbKvyrLSeQbky6/ch3B/ErLYeQbk6699l4rS++xhjjDHGGGOMMcYYY4wxxhjz0fPdec/WQ6V2N36pZtP5MP+6+cZ6yOheF7O/0n51bT1pVNtiPpHoDjk8ipt7sa7t3nre0N6ugnz7rCcOazMP9TkT7sJ9roTjMgboSLiJ8jkSLiKBboQvsUAvwm/RQCfC2+CroDfhOh7oQxh9lnEjFH2L8CysUoAuhElAD8K0Q+hA2Mi/7ToVDtKADoTLvgvHiUB8YdF7Ydi6k0dhKhBe+NB7YeLlPs/hNwROU4Uza8Glkr5W7BveWgsulQgcwe94DDzRlKP58v53awf7qgM+lC4f3+H/Ij/pUex7tx41smsp0HrQ6GZC4dh60OiEn0rhL3pfJ7xfCH9N+LqRCDi0HjMhmdDdvfpOMuHUesyEZHdkHJ9ohMKd9ZgJyYSeX5kiE/p8tOsYhRTiRyGF+FFIIX79F8oeKXX8ufS7COj5++GTTDjxuBR8SPzMpdeDuJA/STN9tR5WWrMoPtrJ1mg+/lCX18VZTw/WnrOS7/j+2QrsX2jyDd/zRtamk97+PTDPb6xV3VYawpW1qlvQqUUa0nr4bdyunwshXSp1hEjr4TrCwprVSUe4sGZ10hEi3TzVESLd4VcRTrbWrE4qwitrVTcV4dxa1U1FCPUokYpwba3qpiKEWmhUEUI9f6kiRPpIoyOEWqnREE6QPtKoCLEeZNcQYu220BBiLbVpCKEu+CpCsPtuCmttUKulKuulUKfSxJdDfBrSQtsh6d4DaVhn0kNF4t77kyZgp5ljzWZw87MqaJv6cFXcnDTYbK0xl3uQbz5c31kPG9dWDLSeNDrh1rWJ9ZzxCV+ogHR/KTQ+q38MarkpMAopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCv97TegvOBM2WfBL7p0J6yz4ZUDOhFUW/MJUZ8IyC36jky9hlWfB79d2JRzkrTDwKHoStv/hWCvMy6qWXzS8CJu6OrxB9weMgzZfsnt+CgAAAABJRU5ErkJggg=="
                />
              </a>
              <a href="">
                <img
                  className="logo1"
                  src="data:image/png;base64,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"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterBottom;
