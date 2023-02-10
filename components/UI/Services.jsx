import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Design is a crucial component in creating a positive user
              experience. Good design can make products easier to use, more
              appealing, and more memorable. It can also help convey a company
              brand and values. Design thinking involves considering the needs
              and perspectives of the people who will be using a product, and
              using that understanding to guide the design process. A
              well-designed product can provide a seamless, intuitive, and
              enjoyable experience for the user. Whether in the context of
              websites, apps, products, or services.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
