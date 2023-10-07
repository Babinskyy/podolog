import React, { useState } from "react";
import axios from "../axios-orders";
import { toast } from "react-toastify";
import front from "../assets/images/salon/front.jpg";

const initContactInfo = {
  firstName: "",
  email: "",
  message: "",
};
const Contact = (props) => {
  const [contactInfo, setContactInfo] = useState(initContactInfo);

  const inputChangeHandler = (e) => {
    const updatedContactInfo = { ...contactInfo };
    updatedContactInfo[e.target.name] = e.target.value;
    setContactInfo(updatedContactInfo);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/contactInfo.json", contactInfo)
      .then((res) => {
        toast.success("Thanks for cantact us. We will reach out to you soon.");
        setContactInfo(initContactInfo);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err.message);
      });
  };

  return (
    // Contact section start
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Zostańmy w kontakcie</h3>
              <p style={{ textAlign: "left" }}>
                <p style={{ textAlign: "center" }}>
                  Nasz salon znajduje się w samym sercu Sopotu
                </p>
                <br />
                - 100 metrów od słynnego Monciaka
                <br /> - 50 metrów od podziemnego parkingu pod dworcem kolejowym{" "}
                <br /> - przystanek autobusowy znajduje się przy samych drzwiach
                wejściowych do salonu. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <div className="row">
              <div className="col-md-4">
                <address>
                  <span className="ti-map-alt"></span>
                  <a
                    href="https://www.google.com/maps/place/'''Dotyk+pi%C4%99kna%22+-+gabinet+kosmetyczno-podologiczny'/@54.4415287,18.5636371,3a,75y,253.95h,90.24t/data=!3m6!1e1!3m4!1sfSIRvD9HcTGCruei7GSC9A!2e0!7i16384!8i8192!4m16!1m9!3m8!1s0x46fd0a910526f167:0x362a88f7760008c8!2sTadeusza+Ko%C5%9Bciuszki+10,+81-759+Sopot,+Poland!3b1!8m2!3d54.4415567!4d18.5633252!10e5!16s%2Fg%2F11c5ll9hgf!3m5!1s0x46fd0bf8bdbd8217:0xf990f0b03775f02e!8m2!3d54.4415567!4d18.5633252!16s%2Fg%2F11lkh1qtvv?entry=ttu"
                    target="_blank"
                  >
                    Kościuszki 10, Sopot{" "}
                  </a>
                  <br />
                </address>
                <address>
                  <span className="ti-email"></span>
                  <a href="mailto:podologsopot@gmail.com">
                    podologsopot@gmail.com
                  </a>
                  <br />
                </address>
                <address>
                  <span className="ti-tablet"></span>
                  <a href="tel:+48 533 647 946">tel: +48 533 647 946</a>
                </address>
              </div>
              <div
                className="col-md-4 offset-md-1 mt-4 mt-md-0"
                style={{ marginLeft: "0" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1379.609922018874!2d18.563226652300973!3d54.44143732111713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a910526f167%3A0x362a88f7760008c8!2sTadeusza%20Ko%C5%9Bciuszki%2010%2C%2081-759%20Sopot!5e0!3m2!1sen!2spl!4v1663511679413!5m2!1sen!2spl"
                  // width={600}
                  // height={450}
                  style={{ border: 0, minHeight: "280px", width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className="col-md-4 mt-4 mt-md-0"
                style={{
                  // backgroundColor: "grey",
                  width: "100%",
                  height: "280px",
                  // backgroundImage: "url('../assets/images/salon/front.jpg')",
                  overflow: "hidden",
                }}
              >
                <img src={front} alt="clinic-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Contact section end
  );
};

export default Contact;
