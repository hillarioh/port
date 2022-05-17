import "./reset.css";
import * as Elements from "./modules/Dom.js";
import viewMeal from "./modules/Functions.js";
import { categoryItem, categoryList } from "./modules/Api.js";

const populateData = (data) => {
  let cats = "";
  data.foreach((d) => {
    cats += `
    <div class="cat-card">
      <img src="${d.strCategoryThumb}" width="200" height="200" />
      <p>${d.strCategoryDescription}</p>
      <button aria-label="${d.idCategory}">View</button>
    </div>`;
  });
  console.log(Elements.catContainer);
  console.log(cats);
  Elements.catContainer.innerHTML = cats;
};

const getCategoryData = async () => {
  try {
    let response = await categoryList();
    let cats = "";
    response.categories.foreach((d) => {
      cats += `
    <div class="cat-card">
      <img src="${d.strCategoryThumb}" width="200" height="200" />
      <p>${d.strCategoryDescription}</p>
      <button aria-label="${d.idCategory}">View</button>
    </div>`;
    });
    console.log(Elements.catContainer);
    console.log(cats);
    Elements.catContainer.innerHTML = cats;
  } catch (error) {}
};

getCategoryData();

// getMeal(url).then((data) => viewMeal(data));

// Elements.popupBtn.addEventListener("click", () => {
//   const openModal = () => {
//     Elements.modal.style.display = "block";
//   };
//   openModal();
// });

// Elements.closeBtn.addEventListener("click", () => {
//   const closeModal = () => {
//     Elements.modal.style.display = "none";
//   };
//   closeModal();
// });

// const list = categoryList() || [];

// console.log(list);
