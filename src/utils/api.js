class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._apiKey = options.apiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(
      `${this._baseUrl}/tagged?tag=carsof7eleven&api_key=${this._apiKey}`,
    )
      .then(this._checkResponse)
      .then((data) => {
        return data.response
          .filter((post) => post.photos)
          .map((post) => ({
            _id: post.id,
            name: post.summary,
            link: post.photos[0].original_size.url,
            author: post.blog_name,
          }));
      });
  }
}

const api = new Api({
  baseUrl: 'https://api.tumblr.com/v2',
  apiKey: 'Wc22e5zd4vnnkzLMxuLd4W85RQR7ocGjPRh9Y6NKx8kOYsfjpv',
});

export default api;
