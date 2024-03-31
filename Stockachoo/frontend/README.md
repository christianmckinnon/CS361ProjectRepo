# Instructions to Run the Stockachoo Web Application

Christian McKinnon and Baorong Luo

3/16/2024

### Instructions:
"Stockachoo" is a full-stack web application written using NodeJS, React, and JSX with CSS.

First, a user must install RabbitMQ as the application uses this messaging service to operate the microbackend.js microservice, found here: <https://www.rabbitmq.com/docs/download> (link updated 3/31/2024). 

Once installed, please run the microservice using any terminal, for example, MacOS users would type: "brew services start rabbitmq" for Windows: "rabbitmq-server start" (To stop: Mac: "brew services stop rabbitmq" and Windows: "rabbitmqct1 stop").

In the Stockachoo directory, there are two subdirectories, backend and frontend. Within both, the "node_modules" folders have been removed to limit excessive file sizes. As such, a user must cd into each subdirectory and use npm (the default package manager for Node) by typing "npm install." Then in the frontend subdirectory, we can launch the front-end GUI on port: 8000 by typing "npm start" and the backend microservice on port: 3000 by again typing "npm start". Once all three operations are running, the web application then becomes fully accessible on any web browser of your choice, at  <http://localhost:8000/>. Please enjoy the application and feel free to send me any feedback!