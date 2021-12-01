import React from "react";
import Midsection from "../components/midsection/Midsecction";
import Leftpanel from "../components/leftpanel/Leftpanel";
import Rightpanel from "../components/rightpanel/Rightpanel";
import { getTitle } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Mainpage = () => {
  const dispatch = useDispatch();
  const eleList = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getTitle());
    console.log(eleList);
  }, []);

  React.useEffect(() => {
    console.log(eleList);
  }, [eleList]);

  const listItems = eleList.map((element) => (
    <Midsection elelist={element.name + ", " + element.city} />
  ));

  //   const listItems = Object.keys(eleList).map((element) => (
  //     <Midsection elelist={eleList[element]} />
  //   ));

  return (
    <div>
      <Leftpanel />
      {/* <Midsection /> */}
      <div className="tinymces">{listItems}</div>
      <Rightpanel />
    </div>
  );
};

export default Mainpage;
