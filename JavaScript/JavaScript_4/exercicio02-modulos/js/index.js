import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import themeSwitcher from "./themeSwitcher.js";
import { handleButtonPress, handleClear, handleTyping } from "./keys.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.querySelector("#clear").addEventListener("click", handleClear);
document.querySelector("#input").addEventListener("keydown", handleTyping);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
