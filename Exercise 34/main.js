const lists = document.querySelector(".list");

const addNewProduct = () => {
  const newproduct = document.createElement("li");
  newproduct.textContent = "new Product";
  lists.appendChild(newproduct);
};

function removeProduct() {
  if (lists.lastChild) {
    lists.removeChild(lists.lastChild);
  }
}