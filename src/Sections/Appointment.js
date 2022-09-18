import axios from "../axios-orders";
import React from "react";
import { toast } from "react-toastify";
import AppointmentForm from "../Components/AppointmentForm";

const Appointment = (prop) => {
  const handleFormSubmit = (data) => {
    axios
      .post("/appointments.json", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Appointment created successfully!");
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    // Appointment section start
    <section className="appointment" id="appointment_sec">
      <div className="appointment-wrap">
        <figure>
          <img src={require("../assets/images/appointment-img.jpg")} alt="" />
        </figure>
        <div className="appointment-form">
          <AppointmentForm onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </section>
    // Appointment section end
  );
};

export default Appointment;
