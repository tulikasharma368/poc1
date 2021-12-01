import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tinymce from "../tinymce/Tinymce";
import "./midsection.css";
import Deletepopup from "../delpopup/Deletepopup";
import logo from "../../assets/tinymcelogo.png";
import { getTitle, paragraph } from "../../redux/action";

const Midsecction = (props) => {
  const dispatch = useDispatch();
  const eleList = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getTitle());

    console.log(eleList);
  }, []);

  React.useEffect(() => {
    console.log(eleList);
  }, [eleList]);

  // const listItems = eleList.map((element) =>
  //     <Tinymce elelist={element}/>
  // );

  return (
    <div className="outer-mid">
      <div className="midsection">
        <div className="buttons">
          <div className="pdiv">p</div>
          <a href="https://reactjs.org/" target="_blank">
            <button className="butt">Expand</button>
          </a>
          <Deletepopup button="Delete" />
        </div>
        <Tinymce elelist={props.elelist} />
        <div className="buttons">
          <button className="butt">Comment</button>
          <button className="butt">TCM Icon</button>
        </div>
      </div>
    </div>
  );
};

export default Midsecction;
