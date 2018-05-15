# MSSQL Generic API
The repository contains a simpel server-component build in Node.js. The purpose of the component is to create a dynamic HTTP-based API upon an existing Microsoft SQL Server Database. 

## Requirements
To use the component in your own environment, you need to install the following.
 - Node.js
 - Driver for SQL Server

## How to Setup
Follow the following steps to setup your own server.
 - Clone Repository to Server
 - Change configuration in `config.js`
 - Run `npm update` to retrieve dependencies
 - Run `npm start` to start the server

## How to Query
**Get Table** (api/schema/table)

`GET yourservername:8000/api/dbo/customer`

**Get Table with Custom Filtering as POST** (api/schema/table)

```
POST yourservername:8000/api/dbo/customer

application/json
{"filter": "WHERE CustomerID = 1"}
```

**Get Table with Column Filtering in URL** (api/schema/table/column/filter)

`GET yourservername:8000/api/dbo/customer/customerid/1`

`GET yourservername:8000/api/dbo/customer/name/yourcustomername`

**Execute Stored Procedure with Optional Params** (api/sproc/schema/sproc)

```
POST yourservername:8000/api/sproc/dbo/sprocname

application/json
{"params": "'param1', 'params2'"}
```

## Whats Next?
Through my career in the it-industry I have meet customers who needed to share information in a simple and standardized way, and therefore I decided to start this project to see if there might be any interest in it.

The project is quite small in it's current state, but if you want to contribute to the solution or have any request or ideas for improvements, feel free to contact me at Michaeljohannessen@outlook.com. 