import React, { Component } from "react";

export default class EmployeeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "constructor method",
    };
  }

  // Mounting :: Putting elements into the DOM
  // Called after the component is rendered
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
    setTimeout(() => {
      this.setState({ name: "componentDidMount method" });
    }, 5000);
  }

  // Updating
  // Called just before updating the DOM
  // This method has access to the props and state even after the update.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("previous-state").innerHTML =
      "The previous state was " + prevState.name;
    return prevState;
  }
  // Called after the component is updated in the DOM
  componentDidUpdate(prevState) {
    document.getElementById("current-state").innerHTML =
      "In DidUpdate the current state is " + this.state.name;
    if (prevState.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "In DidUpdate the state is changed to " + this.state.name;
    }
  }
  // You want your state or props to update or not
  // The shouldComponentUpdate() specifies whether React should continue with the rendering or not.
  // shouldComponentUpdate() {
  //   return false; //Change to true for state to update
  // }

  render() {
    return (
      <div className="container h-100">
        <div className="my-4 my-lg-5">
          <h1 className="display-5 mb-4">Employee details</h1>
          <p
            className="lead font-weight-normal mb-0 text-danger"
            id="current-state"
          ></p>
          <p
            className="lead font-weight-normal text-danger mb-0"
            id="previous-state"
          ></p>
          <p
            className="lead font-weight-normal text-danger"
            id="statechange"
          ></p>
          <p className="lead font-weight-bolder text-primary">
            {this.props.show ? <Child /> : null}
          </p>
        </div>
        <div className="card card-body mb-5 shadow-regular border-0 rounded-lg table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="border-0">
                <th className="border-0" scope="col">
                  Id
                </th>
                <th className="border-0" scope="col">
                  Name
                </th>
                <th className="border-0" scope="col">
                  Company
                </th>
                <th className="border-0" scope="col">
                  Email
                </th>
                <th className="border-0" scope="col">
                  Contact
                </th>
                <th className="border-0" scope="col">
                  Address
                </th>
                <th className="border-0" scope="col">
                  City
                </th>
                <th className="border-0" scope="col">
                  Zip
                </th>
                <th className="border-0" scope="col">
                  Website
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((data) => (
                <tr key={data.id} className="table-row-border">
                  <td className="align-middle">{data.id}</td>
                  <td className="align-middle">{data.name}</td>
                  <td className="align-middle">{data.company.name}</td>
                  <td className="align-middle">{data.email}</td>
                  <td className="align-middle">{data.phone}</td>
                  <td className="align-middle">
                    {data.address.suite}, {data.address.street}
                  </td>
                  <td className="align-middle">{data.address.city}</td>
                  <td className="align-middle">{data.address.zipcode}</td>
                  <td className="align-middle">{data.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export class Child extends Component {
  // Unmouting
  // Happens just before the component unmounts and is destroyed and is used for cleanup actions like canceling API calls or clearing any caches in storage
  componentWillUnmount() {
    alert("Child component will unmount");
  }
  render() {
    return <p>I am a child component</p>;
  }
}
