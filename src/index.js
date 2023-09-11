import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.getElementById("breedSelect");
const loader = document.getElementById("loader");
const error = document.getElementById("error");
const catInfo = document.getElementById("catInfo");
const catImage = document.getElementById("catImage");
const breedName = document.getElementById("breedName");
const breedDescription = document.getElementById("breedDescription");
const breedTemperament = document.getElementById("breedTemperament");

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.display = "none"; 
    loader.style.display = "block";

    fetchBreeds()
        .then(breeds => {
            breeds.forEach(breed => {
                const option = document.createElement("option");
                option.value = breed.id;
                option.textContent = breed.name;
                breedSelect.appendChild(option);
            });
            loader.style.display = "none";
            container.style.display = "block"; 
        })
        .catch(err => {
            console.log(err);
            loader.style.display = "none";
            error.style.display = "block"; 
        });

    breedSelect.addEventListener("change", () => {
        const selectedBreedId = breedSelect.value;
        if (selectedBreedId) {
            loader.style.display = "block";
            catInfo.style.display = "none";
            error.style.display = "none"; 

            fetchCatByBreed(selectedBreedId)
                .then(cat => {
                    catImage.src = cat.url;
                    breedName.textContent = cat.breeds[0].name;
                    breedDescription.textContent = cat.breeds[0].description;
                    breedTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

                    loader.style.display = "none";
                    catInfo.style.display = "block";
                })
                .catch(err => {
                    console.log(err);
                    loader.style.display = "none";
                    error.style.display = "block"; 
                });
        }
    });
});
