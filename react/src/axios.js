import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    // baseURL: "https://test.kanisiusmedia.co.id/test_api/api",
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if (error.response && error.response.status === 401) {
        //     // localStorage.removeItem("TOKEN");
        //     // window.location.reload();
        //     router.navigate("/login");
        //     return error;
        // }
        // throw error;
    }
);

export default axiosClient;
