//Initializing Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const app = express();

//Initializing Configurations
const config = require("./config");

//Initializing Database Configurations
var sqlConfig = {
    server: config.db_server,
    database: config.db_database,
    user: config.db_username,
    password: config.db_password,
    port: config.db_port
};

//Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.get('/api/:schema/:table', (req, res, next) => {
    sql.connect(sqlConfig, function (err)
    {
        if (err)
        {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else
        {
            var request = new sql.Request();

            request.query("SELECT * FROM [" + req.params.schema + "].[" + req.params.table + "];", function (err, recordset)
            {
                if (err)
                {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else
                {
                    res.json(recordset.recordset);
                }
                sql.close();
            });
        }
    });
});

app.post('/api/:schema/:table', (req, res, next) => {
    sql.connect(sqlConfig, function (err)
    {
        if (err)
        {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else
        {
            var request = new sql.Request();

            request.query("SELECT * FROM [" + req.params.schema + "].[" + req.params.table + "] " + req.body.filter, function (err, recordset)
            {
                if (err)
                {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else
                {
                    res.json(recordset.recordset);
                }
                sql.close();
            });
        }
    });
});

app.get('/api/:schema/:table/:column/:filter', function (req, res)
{ 
    sql.connect(sqlConfig, function (err)
    {
        if (err)
        {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else
        {
            var request = new sql.Request();

            request.query("SELECT * FROM [" + req.params.schema + "].[" + req.params.table + "] WHERE " + req.params.column + " = '" + req.params.filter + "';", function (err, recordset)
            {
                if (err)
                {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else
                {
                    res.send(recordset.recordset);
                }
                sql.close();
            });
        }
    });
});

app.post('/api/sproc/:schema/:table', (req, res, next) => {
    sql.connect(sqlConfig, function (err)
    {
        if (err)
        {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else
        {
            var request = new sql.Request();

            request.query("[" + req.params.schema + "].[" + req.params.table + "] " + req.body.params, function (err, recordset)
            {
                if (err)
                {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else
                {
                    res.json(recordset);
                }
                sql.close();
            });
        }
    });
});

module.exports = app;