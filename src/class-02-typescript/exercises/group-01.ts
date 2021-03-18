

import { HeaderInit, Response, RequestInit } from 'node-fetch';
import fetch from 'node-fetch';

export default class Excercise1 {
  constructor() {
    console.log('Group 01')
  }

  async main(artist: string) {
    const headers: HeaderInit = {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br'
    }

    const opts: RequestInit = {
      method: 'GET',
      headers: headers
    }

    const request = await fetch(`https://itunes.apple.com/search?term=${artist}&limit=5`, opts)
    return request.json()
  }
}