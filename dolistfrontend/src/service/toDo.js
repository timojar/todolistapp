import axios from "axios";

const getTodoList= async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/todo`);
    console.log(ret, "doDossss");
    return ret.data;
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};


export default {
  getTodoList
}
