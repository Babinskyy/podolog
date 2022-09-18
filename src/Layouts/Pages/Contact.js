import React, { Fragment, useEffect } from "react";
import ContactSec from "../../Sections/Contact";

const Contact = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <ContactSec {...props} />
    </Fragment>
  );
};

export default Contact;
