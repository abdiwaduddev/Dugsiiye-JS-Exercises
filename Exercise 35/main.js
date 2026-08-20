const image = document.querySelector("#image");

function changeImage() {
  const url = prompt("Please Enter image address: ");
  const borderColor = prompt("Please Enter image borderColor: ");
  const width = prompt("Please Enter image width in (pixels): ");
  const height = prompt("Please Enter image height in (pixels): ");
  const borderRadius = prompt("Please Enter image borderRadis in (pixels): ");

  image.setAttribute("src", url);
  image.style.border = `2px solid ${borderColor}`;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  image.style.borderRadius = `${borderRadius}px`;
  image.style.padding = "20px";
  image.style.backgroundColor = "#9349dd";
}

// changeImage()
