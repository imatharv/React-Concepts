import React, { useContext } from "react";
import MyContext from "../components/MyContext";

export default function DashboardComponent() {
  let ContextData = [];
  ContextData = useContext(MyContext);
  console.log(ContextData);
  return (
    // <MyContext.Consumer>
    <div className="container">
      <div className="my-5">
        <h1 className="display-5">Employees</h1>
      </div>
      <div className="card card-body mb-3 shadow-regular border-0 rounded-lg">
        <table className="table table-hover">
          <thead className="">
            <tr className="border-0">
              <th className="border-0" scope="col">
                Avatar
              </th>
              <th className="border-0" scope="col">
                First name
              </th>
              <th className="border-0" scope="col">
                Last name
              </th>
              <th className="border-0" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {ContextData.map((employee) => {
              return (
                <tr key={employee.id} className="table-row-border">
                  <td>
                    <div>
                      <img
                        src={employee.avatar}
                        className="avatar"
                        alt="avatar"
                      />
                    </div>
                  </td>
                  <td className="align-middle">{employee.first_name}</td>
                  <td className="align-middle">{employee.last_name}</td>
                  <td className="align-middle">{employee.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    // </MyContext.Consumer>
  );
}
