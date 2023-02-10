import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/img/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/img/img-01.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Jhon Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  I just wanted to reach out and express my gratitude for the
                  hard work you put into creating my website. Your dedication
                  and professionalism have made this project a success. I am
                  extremely impressed with the final product and the
                  functionality of the website. The design is exactly what I had
                  envisioned and it looks amazing on all devices. The site is
                  easy to navigate and the user experience is fantastic.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/img/img-02.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Henry Nichols</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  One of the things I appreciated the most was the level of
                  communication throughout the project. You were always
                  available to answer any questions I had and provided updates
                  on the progress in a timely manner. Your attention to detail
                  and willingness to go the extra mile made this a truly
                  enjoyable experience.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/img/img-03.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam Smith</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>
                  Your attention to detail and thoroughness in handling our
                  financial accounting has been exceptional. You have provided
                  us with accurate and timely financial information, which has
                  helped us make informed business decisions. Your insights and
                  suggestions have been invaluable in improving our financial
                  processes and helping us stay on track.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
