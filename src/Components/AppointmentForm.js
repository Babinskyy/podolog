import React, { useState } from "react";

const initFormData = {
  name: "",
  email: "",
  service: "",
  phone: " ",
  appointmentDate: "",
  appointmentTime: "",
  notes: " ",
};

const AppointmentForm = (props) => {
  const { onFormSubmit } = props;
  const [formData, setFormData] = useState(initFormData);

  const inputChangeHandler = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData(initFormData);
  };

  console.log(formData);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-field half-width">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={inputChangeHandler}
          placeholder="NAME"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={inputChangeHandler}
          placeholder="Email address"
          required
        />
      </div>
      <div className="form-field half-width">
        <div className="select-field">
          <select
            name="service"
            defaultValue="s1"
            onChange={inputChangeHandler}
          >
            <option value="s1">Select service</option>
            <option value="s2">Select service 1</option>
          </select>
        </div>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={inputChangeHandler}
          placeholder="Phone numer"
        />
      </div>
      <div className="form-field half-width">
        <input
          name="appointmentDate"
          type="date"
          value={formData.appointmentDate}
          onChange={inputChangeHandler}
          placeholder="date"
        />
        <input
          name="appointmentTime"
          type="time"
          value={formData.appointmentTime}
          onChange={inputChangeHandler}
          placeholder="time"
        />
      </div>
      <div className="form-field">
        <textarea
          name="notes"
          placeholder="Your notes"
          value={formData.notes}
          onChange={inputChangeHandler}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-round">
        Make an Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
