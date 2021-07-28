import React from "react";

export default function UseStateWithObjects() {
  // State as a object
  const [details, setDetails] = React.useState({ name: "", city: "" });
  return (
    <div className="container mt-5 pt-5">
      <div className="col justify-content-start mb-4">
        <label className="lead font-weight-normal" for="name">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>
      <div className="col justify-content-start mb-5">
        <label className="lead font-weight-normal" for="city">
          City
        </label>
        <input
          className="form-control"
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => setDetails({ ...details, city: e.target.value })}
        />
      </div>
      <div className="col justify-content-start">
        <p className="lead font-weight-normal text-primary">
          Name: {details.name}
        </p>
        <p className="lead font-weight-normal text-primary">
          City: {details.city}
        </p>
      </div>
    </div>
  );
}
