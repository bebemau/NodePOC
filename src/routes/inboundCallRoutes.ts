module.exports = app => {
    const inboundCalls = require("../controllers/inboundCallController.ts");
    var router = require("express").Router();

    router.get("/", inboundCalls.findAll);
    router.get("/:id", inboundCalls.findOne);
    
    app.use('/api/inboundcalls', router);
  };