import React, { useEffect, useState } from "react";
import MyContext from "../components/MyContext";
import NavigationComponent from "../components/NavigationComponent";
import WithLoadingComponent from "../components/WithLoadingComponent";
import DashboardComponent from "../components/DashboardComponent";
import FooterComponent from "../components/FooterComponent";
import MyService from "../services/MyService";

const DashboardWithLoading = WithLoadingComponent(DashboardComponent);

const Service = new MyService();

export default function MyPage() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState("1");
  const [isLoading, setIsLoading] = useState(true);

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    if (counter <= 5) {
      setCounter(counter + 1);
    }
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
        <NavigationComponent />
        {/* <DashboardComponent
          counter={counter}
          decreaseCounter={decreaseCounter}
          increaseCounter={increaseCounter}
        /> */}
        <DashboardWithLoading
          isLoading={isLoading}
          counter={counter}
          decreaseCounter={decreaseCounter}
          increaseCounter={increaseCounter}
        />
        <FooterComponent />
      </MyContext.Provider>
    </React.Fragment>
  );
}
