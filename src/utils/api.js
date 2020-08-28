import {apiOptions} from './utils.js'

class Api {
  constructor({apiOptions}) {
    this._baseUrl = apiOptions.baseUrl;
  }

  _handleResponse(res){
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(res.statusText)
    }
  }

  _handleResponseError(err){

    return Promise.reject(err.message)
  }

  getFilmInfo() {
    return fetch(`${this._baseUrl}`)
    .then(this._handleResponse)
    .catch(this._handleResponseError);
  }

  getStarshipInfo(id) {
    return fetch(`${this._baseUrl}${id}/`)
    .then(this._handleResponse)
    .catch(this._handleResponseError);
  }
}

export const api = new Api({apiOptions});

