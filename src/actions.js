export const REQUEST_USER_DATA = "REQUEST_USER_DATA";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

export const requestUserData = (user, pwd) => ({ type: REQUEST_USER_DATA, user, pwd });
export const receiveUserData = data => ({ type: RECEIVE_USER_DATA, data });

export const REQUEST_DASHBOARDUSER_DATA = "REQUEST_DASHBOARDUSER_DATA";
export const RECEIVE_DASHBOARDUSER_DATA = "RECEIVE_DASHBOARDUSER_DATA";


export const requestDashboardUserData = (user) => ({ type: REQUEST_DASHBOARDUSER_DATA, user});
export const receiveDashboardUserData = data => ({ type: RECEIVE_DASHBOARDUSER_DATA, data });

export const REQUEST_ALLUSER_DATA = "REQUEST_ALLUSER_DATA";
export const RECEIVE_ALLUSER_DATA = "RECEIVE_ALLUSER_DATA";


export const requestAllUserData = () => ({ type: REQUEST_ALLUSER_DATA});
export const receiveAllUserData = data => ({ type: RECEIVE_ALLUSER_DATA, data });