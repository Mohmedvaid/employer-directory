import axios from "axios";

// method to get employees
export default {
  search: async function() {
    let res =  await axios.get("https://randomuser.me/api/?results=10&nat=us");
    return res.data;
  }
};
