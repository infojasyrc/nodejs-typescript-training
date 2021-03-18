Nodejs Training
===

Project to navigate Nodejs and Typescript

Required Nodejs version: 14

## Class 01: Understanding the basic

- Nodejs is not a language
- Javascript basic, From "var" to "let and const". Const doesn't mean constant.
- Module, Functions and classes
- Async / Await

## Class 02: Typescript

- Install and configure typescripts
- Run the first file
- Import/Export, Functions and Classes
- Async / Await

### Exercises - Class 02:
  - Group 01: Search in iTunes Store
    - [Docs](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1):
    - Library: [node-fetch](https://www.npmjs.com/package/node-fetch) and [Types for node-fetch](https://www.npmjs.com/package/@types/node-fetch)
    - URL: https://itunes.apple.com/search?term=ARTIST&limit=5
    - Limit: 5 results
 

 - Group 02: List all repositories by user 
    - [Example](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user): https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    - Library: @octokit/core
    - NPM: https://www.npmjs.com/package/@octokit/core
    - URL: https://api.github.com/users/USERNAME/repos
    - Limit: 2 results


  - Group 03: Get top free games from google store
    - Library: unirest
    - URL: https://gplaystore.p.rapidapi.com/topFreeGames
    - Headers required:
    ```json
        {
            "x-rapidapi-key": "fa6ef5d0e0mshe6e9ee80eb4cca6p186581jsnea2acdc9ddc4",
            "x-rapidapi-host": "gplaystore.p.rapidapi.com",
            "useQueryString": true
        }
    ```
    - Note: No Implemented because it requires a subscription for Rapid API


## Class 03: Test Driven Development

- Install and configure Jest
- Run the first test

### Tasks - Class 03:
 - Group 01: Get top free games from google store


 - Group 02: List all repositories by user
 

## Class 04: GraphQL