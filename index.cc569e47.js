!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("eWrZJ"),d=document.getElementById("breedSelect"),r=document.getElementById("loader"),c=document.getElementById("error"),a=document.getElementById("catInfo"),i=document.getElementById("catImage"),s=document.getElementById("breedName"),y=document.getElementById("breedDescription"),u=document.getElementById("breedTemperament");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".container");e.style.display="none",r.style.display="block",(0,l.fetchBreeds)().then((function(t){t.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,d.appendChild(t)})),r.style.display="none",e.style.display="block"})).catch((function(e){console.log(e),r.style.display="none",c.style.display="block"})),d.addEventListener("change",(function(){var e=d.value;e&&(r.style.display="block",a.style.display="none",c.style.display="none",(0,l.fetchCatByBreed)(e).then((function(e){i.src=e.url,s.textContent=e.breeds[0].name,y.textContent=e.breeds[0].description,u.textContent="Temperament: ".concat(e.breeds[0].temperament),r.style.display="none",a.style.display="block"})).catch((function(e){console.log(e),r.style.display="none",c.style.display="block"})))}))}))}();
//# sourceMappingURL=index.cc569e47.js.map
