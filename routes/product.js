var express = require('express');
const productController = require('../controllers/product');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       title:
 *         type: string
 */

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     description: Creates a new product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', productController.create);

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/', productController.getAll);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: product's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/:productId', productController.getById);

router.put('/:productId', productController.update);

router.delete('/:productId', productController.deleteById);

module.exports = router;
