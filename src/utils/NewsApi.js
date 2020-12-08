class Api {
  constructor() {
    this.date = new Date();
    this.dateTo = this.date.toISOString().substring(0, 10)
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.day = this.date.getDate() - 7
    this.dateFrom = new Date(this.year, this.month, this.day).toISOString().substring(0, 10);
  }

  getArticles(keyword) {
    return fetch(`https://newsapi.org/v2/everything?q=
    ${encodeURI(keyword)}
    &from=${this.dateFrom}
    &to=${this.dateTo}
    &pageSize=100
    &apiKey=ff6a72cacbba42609c9636f22faa156b`,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }

}

const newsApi = new Api();
export default newsApi;
