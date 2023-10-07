import { RGBToHex, HexToRGB } from "./translators";

function translate(e) {
  e.preventDefault();
  let modalities = document.querySelector("#translationModality");
  let option = modalities.value;

  if (option === "1") {
    let value = document.querySelector("input").value;
    let result = document.querySelector("span #result");
    console.log(value, result, HexToRGB(value));
    let resultValue = "";

    for (const [key, val] of Object.entries(HexToRGB(value))) {
      resultValue += `${key}: ${val} `;
    }

    result.textContent = resultValue;
  } else {
    let value = document.querySelector("input").value;
    let result = document.querySelector("span #result");
    value = value.trim().split(", ");

    let rgbToTranslate = {
      r: value[0],
      g: value[1],
      b: value[2],
    };
    result.textContent = RGBToHex(rgbToTranslate);
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => translate(e));
