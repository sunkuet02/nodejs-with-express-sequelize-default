var express = require('express')
var swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

var router = express.Router();

const spec = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'A Simple Swagger Application Tests',
            version: '1.0.0'
        },
        produces: ['application/json'],
        consumes: ['application/json'],
    },
    apis: [
        './routes/*.js'
    ]
});

router.get('/api', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(spec);
});

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

module.exports = router;