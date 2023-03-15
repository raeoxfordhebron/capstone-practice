const db = require("../models");
// models path depends on your structure
const tutorial = db.tutorials

exports.create = (req, res) => {
    // Validating the request
    if (!req.body.title) {
        message: "Content can be placed here!"
    }
    return;
}

// Creating a tutorial
const Tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.bod.published : false
}

// Saving the Tutorial in the database
Tutorial.create(tutorial).then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        Message:
        err.message || "Some errors will occur when creating a tutorial"
    })
})

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: '%${title}%'}}: null;
    
    Tutorial.findAll({where: condition}). then(data => {
    res.send(data);
    }) .catch (err => {
    res.status(500).send({
    message:
    err.message || "Some error have occurred when retrieving the tutorials."
    });
    });
    };

exports.findOne = (req, res) => {
    const id = req.params.id;
        
    Tutorial.findByPk(id).then(data => {
    res.send(data);
    }) .catch(err => {
    res.status(500).send({
    message: "Error while retrieving tutorial with id="+ id
    });
    });
    };