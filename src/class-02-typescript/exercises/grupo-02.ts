import { Octokit } from '@octokit/core'

// - Group 02: List all repositories by user: Victor / Juan Pablo
//     - Example: https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
//     - Library: octokit
//     - URL: https://api.github.com/users/USERNAME/repos

export const baseURL = 'https://api.github.com'
// vamos que ustedes pueden, son los mejores
export default class Exercise2 {
  constructor() {
    console.log('Group 02')
  }

  async main(username: string) {
    const octokit = new Octokit()
    const response = await octokit.request(`/users/${username}/repos`, {
      username: username,
      per_page: 2,
    })
    return response.data
  }
}
