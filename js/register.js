const textarea = document.querySelector(".productDescription");
const placeHolder = document.querySelector(".DescriptionPlaceholder");
textarea.addEventListener("focus", () => {
  document.querySelector(".DescriptionPlaceholder").style.display = "none";
});
