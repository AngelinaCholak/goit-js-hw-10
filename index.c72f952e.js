var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var d=o("9dxg1");const l=document.getElementById("breedSelect"),r=document.getElementById("loader"),c=document.getElementById("error"),a=document.getElementById("catInfo"),s=document.getElementById("catImage"),i=document.getElementById("breedName"),m=document.getElementById("breedDescription"),p=document.getElementById("breedTemperament");(0,d.fetchBreeds)().then((e=>{e.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,l.appendChild(t)}))})).catch((e=>{console.log(e)})),l.addEventListener("change",(()=>{const e=l.value;e&&(r.style.display="block",a.style.display="none",c.style.display="none",(0,d.fetchCatByBreed)(e).then((e=>{s.src=e.url,i.textContent=e.breeds[0].name,m.textContent=e.breeds[0].description,p.textContent=`Temperament: ${e.breeds[0].temperament}`,r.style.display="none",a.style.display="block"})).catch((e=>{console.log(e)})))}));
//# sourceMappingURL=index.c72f952e.js.map
