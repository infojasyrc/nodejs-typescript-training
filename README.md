Nodejs Training
===

Project to navigate Nodejs and Typescript

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

### Tasks - Class 02:
 - Group 01: Get top free games from google store
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

 - Group 02: List all repositories by user
    - Example: https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    - Library: octokit
    - URL: https://api.github.com/users/USERNAME/repos