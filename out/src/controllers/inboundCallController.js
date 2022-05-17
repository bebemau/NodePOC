var db = require("../models");
var InboundCall = db.InboundCall;
var Op = db.Sequelize.Op;

if(InboundCall == null) {
    console.log('inboundcall is null');
}

exports.findAll = function (req, res) {
    var _a;
    var inboundCallID = req.query.inboundCallID;
    var condition = inboundCallID ? { inboundCallID: (_a = {}, _a[Op.like] = "%".concat(inboundCallID, "%"), _a) } : null;
    InboundCall.findAll({ where: condition })
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        });
    });
};

exports.findOne = function (req, res) {
    var id = req.params.id;
    InboundCall.findByPk(id)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: "Error retrieving data with id=" + id
        });
    });
};
//# sourceMappingURL=inboundCallController.js.map