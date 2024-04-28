import axios from "axios";

export const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter";

const options = {
    method: "GET",
    headers: {
        // x-rapidapi-host':'example.com',
        "x-rapidapi-key": "7335611ba24c5e032e10fe8cde45f910",
        "X-RapidAPI-Host": "api.rajaongkir.com",
    },
};

export const fetchROAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const data = await axios.get(
    //     "https://api.rajaongkir.com/starter/province?key=7335611ba24c5e032e10fe8cde45f910"
    // );

    return data;
};
