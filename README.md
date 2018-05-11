# MSSQL Generic API
The repository contains a simpel server-component build in node.js. The purpose of the component is to create a dynamic HTTP-based API upon an existing Microsoft SQL Server Database. 

## Requirements
To use the component in your own environment, you need to install the following.
 - NodeJS
 - Driver for SQL Server

## How to Setup
Follow the following steps to setup your own server.
 - Clone Repository to Server
 - Change `config.js`
 - Run `npm update` to retrieve dependencies
 - Run `npm start` to start the server

## How to Query
**Basic Table Query** (api/schema/table)
`yourservername:8080/api/dbo/customer`

**Basic Table Query with Column Filtering** (api/schema/table/column/filter)
`yourservername:8080/api/dbo/customer/customerid/1`
`yourservername:8080/api/dbo/customer/name/yourcustomername`

## Whats Next?
Through my career in the it-industry I have meet customers who needed to share information in a simple and standardized way, and therefore I decided to start this project to see if there might be any interest in it.

The project is quite small in it's current state, but if you want to contribute to the solution or have any request or ideas for improvements, feel free to contact me at Michaeljohannessen@outlook.com. 

## New Ideas
- Better filtering