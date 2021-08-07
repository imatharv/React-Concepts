import React, { useEffect, useState } from "react";
import MyContext from "../components/MyContext";
import NavigationComponent from "../components/NavigationComponent";
import DashboardComponent from "../components/DashboardComponent";
import FooterComponent from "../components/FooterComponent";
import MyService from "../services/MyService";

const Service = new MyService();

export default function MyPage() {
  const [data, setData] = useState([]);
  const getData = () => {
    Service.getData()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <MyContext.Provider value={data}>
        <NavigationComponent />
        <DashboardComponent />
        <FooterComponent />
      </MyContext.Provider>
    </React.Fragment>
  );
}
