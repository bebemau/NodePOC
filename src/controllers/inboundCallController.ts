const db = require("../models/index");
const InboundCall = db.inboundCalls;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const inboundCallID = req.query.inboundCallID;
    var condition = inboundCallID ? { inboundCallID: { [Op.like]: `%${inboundCallID}%` } } : null;

    InboundCall.findAll({ where: condition, 
        limit: 10 ,
        order: [['inboundCallID', 'DESC']] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    InboundCall.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving data with id=" + id
        });
      });
};