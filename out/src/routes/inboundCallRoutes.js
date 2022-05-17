module.exports = function (app) {
    var inboundCalls = require("../controllers/inboundCallController.ts");
    var router = require("express").Router();
    router.get("/", inboundCalls.findAll);
    router.get("/:id", inboundCalls.findOne);
    app.use('/api/inboundcalls', router);
};
//# sourceMappingURL=inboundCallRoutes.js.map