import { RECEIVE_USER_DATA, RECEIVE_DASHBOARDUSER_DATA, RECEIVE_ALLUSER_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_USER_DATA:
      return {
        ...state,
        userData: data,
    }
      case RECEIVE_DASHBOARDUSER_DATA:
        return {
            ...state,
            userDashbord: data,
        }
      case RECEIVE_ALLUSER_DATA:
        return {
            ...state,
            userList: data,
        }
    default:
      return state;
  }
};