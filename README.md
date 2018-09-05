# city-bikes-api-MERN

A MERN stack application using the CityBikes API: https://api.citybik.es/v2/

Application has two pages:

Page 1:

- User can enter the name of a city in a search bar and be shown a list of all stations which have free bikes and also lists the number of free bikes in that station. The list does not include the stations which do not have any free bike.

Page 2:

- User can enter the name of a destination city and the app tells the user if they will have an empty slot to park their bike over there.


# Installation

- Run `npm install` in root directory.
- Run `npm install` in client directory.
- Run `npm run dev` in root directory.

and it should be running.

I'm using `concurrently` to run the server app and client app at the same time, requests are forwarded through a proxy defined in the client's `package.json`.
