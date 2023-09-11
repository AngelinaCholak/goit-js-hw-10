
import axios from "axios";

const API_KEY = "live_vso7R99E2iH3rFOZoPtpnMXsV2cSGXQW6t8g9JgTLCa9Hjp5OnIe2J8KHHe0v3ef";
axios.defaults.headers.common["x-api-key"] = API_KEY;
const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
const CATS_URL = "https://api.thecatapi.com/v1/images/search";


export function fetchBreeds() {
    return axios
        .get(BREEDS_URL)
        .then(response => {
            return response.data;
        })
      
}

export function fetchCatByBreed(breedId) {
    return axios
        .get(`${CATS_URL}?breed_ids=${breedId}`)
        .then(response => {
            return response.data[0];
        })
       
}



