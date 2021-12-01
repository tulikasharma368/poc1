import axios from "axios";
export const GET_DATA = "GET_DATA";

const getdata = (user) => ({
  type: GET_DATA,
  payload: user,
});

export const getTitle = () => (dispatch, getState) => {
  console.log("State is fired", getState());
  axios
    .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then((response) => {
      console.log(response.data);
      dispatch(getdata(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
