const colorPicker = document.getElementById("color-picker");
const colorBox = document.getElementById("color-box");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-btn");

// Function to append a new hex entry to the Color History list
function addColorToHistory(hexCode) {
  const listItem = document.createElement("li");
  listItem.textContent = hexCode.toUpperCase();

  // Set text font color to match the selected hex color value
  listItem.style.color = hexCode;

  // Allow clicking history item to restore color into color picker and preview box
  listItem.addEventListener("click", function () {
    colorPicker.value = hexCode;
    colorBox.style.backgroundColor = hexCode;
  });

  historyList.appendChild(listItem);
}

// 1. Live preview as user selects or drags in color picker dialog
colorPicker.addEventListener("input", function (e) {
  colorBox.style.backgroundColor = e.target.value;
});

// 2. Add entry to color history when user finishes choosing color
colorPicker.addEventListener("change", function (e) {
  const selectedHex = e.target.value;
  colorBox.style.backgroundColor = selectedHex;
  addColorToHistory(selectedHex);
});

// Clear history list action
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
