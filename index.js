const express = require( 'express' ),
    { json } = require( 'body-parser' ),
    cors = require( 'cors' ),
    massive = require( 'massive' ),
    app = express(),
    { create, getOne, getAll, update, del } = require(`${__dirname}/controllers/products_controller`);
require( 'dotenv' ).config();

const port = process.env.PORT || 3000;

massive( process.env.CONNECTION_STRING ).then( db => app.set( 'db', db ) );
app.use( json() );
app.use( cors() );

app.get( '/api/products', getAll );

app.get( '/api/product/:id', getOne );

app.put( '/api/product/:id', update );

app.post( '/api/product', create );

app.delete( '/api/product/:id', del);

app.listen( port, () => console.log(`Server listening on port ${port}.`) );