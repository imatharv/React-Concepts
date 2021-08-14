import React, { useContext } from "react";
import MyContext from "../components/MyContext";
import CounterComponent from "../components/CounterComponent";

export default function DashboardComponent(props) {
  let ContextData = [];
  ContextData = useContext(MyContext);
  function CounterClickIncrement(props) {
    return (
      <button
        //onClick={decreaseCounter}
        className="btn btn-danger shadow rounded-lg mx-2 action-btn px-4"
      >
        Next
      </button>
    );
  }
  function CounterClickDecrement(props) {
    return (
      <button
        onClick={() => {
          console.log("button clicked");
        }}
        className="btn btn-danger shadow rounded-lg mx-2 action-btn px-4"
      >
        Prev
      </button>
    );
  }
  return (
    <div className="container h-100">
      <div className="my-5">
        <h1 className="display-5">Employees</h1>
      </div>
      <div className="card card-body mb-5 shadow-regular border-0 rounded-lg">
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
      <div className="row justify-content-center mb-5">
        <CounterComponent
          render={(count, decreaseCounter) => (
            <CounterClickDecrement
              count={count}
              decreaseCounter={decreaseCounter}
            />
          )}
        />
        <CounterComponent
          render={(count, increaseCounter) => (
            <CounterClickIncrement
              onClick={() => {
                console.log("ssssssssssssssssssss");
              }}
              count={count}
              increaseCounter={increaseCounter}
            />
          )}
        />

        {/* <button className="btn btn-danger shadow rounded-lg mx-2 action-btn px-4">
          Prev
        </button>
        <button className="btn btn-danger shadow rounded-lg mx-2 action-btn px-4">
          Next
        </button> */}
      </div>
    </div>
  );
}
