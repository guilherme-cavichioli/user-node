
# User

## Definition

Users crud project using mongdb NoSQL database

  

**Programming language:** Node

  

**Framework:** Spring boot, with the following libraries:

- Express

- Mongoose

- Dotenv

  

## Quick Start

  

To start the project you will need to install the following dependencies:

https://docs.docker.com/engine/install/

https://docs.docker.com/compose/install/

  

Clone using ssh: `git clone git@github.com:guilherme-cavichioli/user-node.git`

Clone using https: `git clone https://github.com/guilherme-cavichioli/user-node.git`

  
  

Alter installation, run the following commands at the project root:

**docker compose up**

  

**Using application**

  

Examples of the endpoints requests

 - POST
`curl --location 'http://localhost:3000/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "John Doeeeee",
"email": "john@example.com",
"document": "123456789"
}'`
 - GET ALL
 `curl --location 'http://localhost:3000/v1/users'`
 - GET BY ID
`curl --location 'http://localhost:3000/v1/users/67da2d01325f6f61c212b46d'`
 - DELETE BY ID
`curl --location --request DELETE 'http://localhost:3000/v1/users/67da2d01325f6f61c212b46d'`