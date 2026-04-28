export async function getData() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}
export async function getNewsData(categoryId) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
  const data = await res.json();
  return data.data;
}
export async function getSingleNewsData(newsId) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`);
  const data = await res.json();
  return data.data;
}   