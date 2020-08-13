export const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  export const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  