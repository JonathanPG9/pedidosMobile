import axios from "axios"

export default class FetchingData {
  constructor(BASEURL, URL, TOKEN) {
    this.URL = URL
    this.BASEURL = BASEURL
    this.TOKEN = TOKEN
    this.fetching = axios.create({
      baseURL: BASEURL,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/json'
      },
      withCredentials: true
    })
  }
  get = () => {
    return this.fetching({
      url: this.URL
    });
  }
  getId = (id) => {
    return this.fetching({
      url: `${this.URL}/${id}`
    })
  }
  post = (body) => {
    return this.fetching({
      url: `${this.URL}/`,
      method: "post",
      data: body
    })
  }
  delete = (id) => {
    return this.fetching({
      url: `${this.URL}/${id}`,
      method: "delete"
    })
  }
  update = (id, body) => {
    return this.fetching({
      url: `${this.URL}/${id}`,
      method: "put",
      data: body
    })
  }
}