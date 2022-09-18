import React, { useState } from "react";
import axios from "../axios-orders";
import { toast } from "react-toastify";

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
              <p>
                Zadzwoń, a dowiesz się czy wizyta podologiczna jest dla Ciebie!
                <br />
                Zadbaj o swoje zdrowie już dzisiaj.
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
                  Kościuszki 10, Sopot <br />
                  <br />
                </address>
                <address>
                  <span className="ti-email"></span>
                  <a href="mailto:example@leospa.com">
                    kontakt@podologsopot.pl
                  </a>
                  <br />
                </address>
                <address>
                  <span className="ti-tablet"></span>
                  <a href="tel:+0236523653265(02)">tel: +48 533 647 946</a>
                </address>
              </div>
              <div className="col-md-7 offset-md-1 mt-4 mt-md-0">
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
            </div>
          </div>
        </div>
      </div>
    </section>
    // Contact section end
  );
};

export default Contact;
