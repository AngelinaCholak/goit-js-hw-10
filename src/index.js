import axios from "axios";
const API_KEY = "live_vso7R99E2iH3rFOZoPtpnMXsV2cSGXQW6t8g9JgTLCa9Hjp5OnIe2J8KHHe0v3ef";
axios.defaults.headers.common["x-api-key"] = API_KEY;
const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_INFO_URL = "https://api.thecatapi.com/v1/images/search";


// Функція для отримання списку порід кішок
export function fetchBreeds() {
  return axios
    .get(API_URL)
    .then(response => {
      // Успішно отримано дані про породи
      return response.data.map(breed => ({
        id: breed.id,
        name: breed.name
      }));
    })
    .catch(error => {
      // Обробка помилок, якщо вони виникли під час запиту
      throw error;
    });
}
// Функція для отримання інформації про кота за ідентифікатором породи
export function fetchCatByBreed(breedId) {
  const params = {
    breed_ids: breedId,
  };

  return axios
    .get(CAT_INFO_URL, { params })
    .then(response => {
      const catData = response.data[0];
      return {
        imageUrl: catData.url,
        breed: catData.breeds[0].name,
        description: catData.breeds[0].description,
        temperament: catData.breeds[0].temperament,
      };
    })
    .catch(error => {
      throw error;
    });
}
// const renderList = (arr, container) => {
//     const markup = arr.map((item) => `
//     <img src="${catData.url}" alt="${catData.breeds[0].name}">
//         <h2>${catData.breeds[0].name}</h2>
//         <p>${catData.breeds[0].description}</p>
//         <p><strong>Темперамент:</strong> ${catData.breeds[0].temperament}</p>`
//     )
// }
// searchForm.addEventListener("submit", searchSubmitHandleer);