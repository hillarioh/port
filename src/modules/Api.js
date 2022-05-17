const cat_url = "https://www.themealdb.com/api/json/v1/1/categories.php";
const meal_url = "www.themealdb.com/api/json/v1/1/filter.php?c=";

const categoryList = async () => {
  const request = await fetch(cat_url);
  const data = await request.json();
  return data;
};

const categoryItem = async (cat) => {
  const request = await fetch(`${meal_url}${cat}`);
  const data = await request.json();
  return data;
};

export { categoryItem, categoryList };
