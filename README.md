# PlaceMark-POI-Hapi

## Project Description
The backend application aims to create a database and APIs for PlaceMark-POI project. 

The database comprises of three collections: categories, points, and users. Sample data in the database are dormitories, supermarkets, postal offices and hospitals in Regensburg. The categories are fixed to the four mentioned.

The API are documented using OpenAPI and can be accessed via `https://dry-cove-28267.herokuapp.com/documentation`. 

You can see the frontend application at `https://github.com/anhnhivu/PlaceMark-POI-Svelte`. [Link](https://github.com/anhnhivu/PlaceMark-POI-Svelte).

## Techology
- Runtime environment: Node.js
- Language: JavaScript
- Framework: Hapi
- Database: MongoDB
- Testing: mocha, chai
- Database Deployment: <b>Cloud Atlas</b>
- Backend Deployment: [Heroku](https://dry-cove-28267.herokuapp.com/) 
- Documentation: [OpenAPI](https://dry-cove-28267.herokuapp.com/documentation)

## Usage

To run this applicaton, ensure that mongodb is installed and configure the `.env` file.

```
db=mongodb://localhost/placemark
cookie_name=example-cookie-name
cookie_password=example-cookie-password
```

In the project folder, run

```
npm install
npm run dev
```

The project should be running on `http://localhost:4000/`.

## Attributes
image: `flaticon.com`
