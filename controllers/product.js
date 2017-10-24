'use strict'

var Product = require('../models').Product;

module.exports = {
    create(req, res) {
        return Product.create({
            title: req.body.title,
        })
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error));
    },
    
    getAll(req, res) {
        return Product.findAll().then(allProducts => {
            res.status(200).send(allProducts);
        });
    },
    
    getById(req, res) {
        return Product.findById(req.params.productId)
            .then(product => {
                if (!product) {
                    res.status(404).send({
                        message: 'Product not found'
                    })
                } else {
                    res.status(200).send(product);
                }
            })
            .catch(error => res.status(400).send(error));
    },
    
    update(req, res) {
        return Product.findById(req.params.productId)
            .then(product => {
                if (!product) {
                    res.status(404).send({
                        message: 'Product not found'
                    })
                } else {
                    product.update({
                        title: req.body.title || product.title,
                    })
                        .then(() => res.status(201).send(product))
                        .catch(error => res.status(400).send(error));
                }
            })
    },
    
    deleteById(req, res) {
        return Product.findById(req.params.productId)
            .then(product => {
                if(!product) {
                    res.status(404).send({
                        message: 'Product not found'
                    })
                } else {
                    product.destroy()
                        .then(() => res.status(204).send())
                        .catch(error => res.status(400).send(error));
                }
            })
    }
};