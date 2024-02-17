import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

export const createMap = async ({ mapName, mapDescription }) => {
    try {
        const res = await axios.post(`${baseUrl}api/v1/posts`, { mapName, mapDescription });
        return res;
    }
    catch (error) {
        console.log(error.response);
        alert("Failed to add map");
    }

};

