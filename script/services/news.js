export function getNews() {
  async function getNewsData() {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=869c7910a9794249a9906f0ac4fc2fc0"
    );
    const data = await res.json();
    console.log(data);
    showNewsData(data);
  }

  getNewsData();

  //Display News Data
  function showNewsData(data, index = 0) {
    const newsEl = document.querySelector("#news");
    let newsData = data.articles[index].title;

    if (!newsData) {
      newsData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    }

    newsEl.innerHTML = newsData;

    console.log(newsData);

    //Loop through news data every 10 seconds
    setTimeout(() => {
      const newIndex = (index + 1) % data.articles.length;
      showNewsData(data, newIndex);
    }, 15000);
  }
}
