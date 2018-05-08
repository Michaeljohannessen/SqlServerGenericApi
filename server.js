//Initializing Node Modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

//Initializing Configurations
var config = require("./config");

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up Server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initializing Database Configurations
var sqlConfig = {
    server: config.db_server,
    database: config.db_database,
    user: config.db_username,
    password: config.db_password,
    port: config.db_port
};

app.get('/api/:schema/:table', function (req, res)
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

            request.query("SELECT * FROM [" + req.params.schema + "].[" + req.params.table + "];", function (err, recordset)
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
