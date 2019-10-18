import axios from "axios";

const getTodoList= async () => {
  try {
    const ret = await axios.get(`http://localhost:8888/todo`);
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
