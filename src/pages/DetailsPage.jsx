import React, { useEffect, useState, useRef } from "react";
import MyContext from "../components/MyContext";
import NavigationComponent from "../components/NavigationComponent";
import WithLoadingComponent from "../components/WithLoadingComponent";
import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent";
import FooterComponent from "../components/FooterComponent";
import MyService from "../services/MyService";

const DetailsWithLoading = WithLoadingComponent(EmployeeDetailsComponent);

const Service = new MyService();

export default function DetailsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState("true");
  const handleNavBtnToggle = () => {
    setShow(!show);
  };

  const getData = () => {
    Service.getData()
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <MyContext.Provider value={data}>
        <NavigationComponent handleNavBtnToggle={handleNavBtnToggle} />
        <DetailsWithLoading isLoading={isLoading} show={show} />
        <FooterComponent />
      </MyContext.Provider>
    </React.Fragment>
  );
}
