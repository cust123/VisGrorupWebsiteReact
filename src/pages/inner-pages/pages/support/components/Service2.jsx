import React from "react";
import icon1 from "../../../../../assets/images/icon/icon_61.svg";
import icon2 from "../../../../../assets/images/icon/icon_62.svg";
import icon3 from "../../../../../assets/images/icon/icon_63.svg";
import { Link } from "react-router-dom";

const Service2 = () => {
  const serviceContent = [
    {
      id: "telecommunicationID",
      icon: icon1,
      delayAnimation: 0,
      link: "/services/telecommunication",
      title: "Telecommunication",
      text: (
        <>
          Working as an outsourcing team, our experts are involved in developing
          high-rated mobile communications.
        </>
      ),
    },
    {
      id: "infotainmentsystemID",
      icon: icon2,
      delayAnimation: 100,
      link: "/services/infotainmentsystems",
      title: "Infotainment Systems ",
      text: (
        <>
          Testing activities of several infotainment systems manufactured by
          famous automotive brands
        </>
      ),
    },
    {
      id: "softwaredevelopmentID",
      icon: icon3,
      delayAnimation: 200,
      link: "/services/softwaredevelopment",
      title: "Software Development",
      text: (
        <>
          Our Software development expertise ensures tailored end-to-end
          solutions that match business requirements.
        </>
      ),
    },
    {
      id: "softwaretestingID",
      icon: icon3,
      delayAnimation: 200,
      link: "/services/softwaretesting",
      title: "Software Testing",
      text: (
        <>
          Our Software development expertise ensures tailored end-to-end
          solutions that match business requirements.
        </>
      ),
    },
  ];
  return (
    <>
      {serviceContent.map((item) => (
        <div
          className="col-md-6 col-sm-12 d-flex mt-45"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="card-style-seven">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={item.icon} alt="icon" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <Link type="button" className="theme-btn-three " to={item.link}>
              Read More..
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service2;
