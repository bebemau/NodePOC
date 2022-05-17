module.exports = function (sequelize, Sequelize) {
    var InboundCall = sequelize.define("InboundCalls.InboundCalls", {
        InboundCallID: {
            type: Sequelize.BIGINT
        },
        CallSID: {
            type: Sequelize.STRING
        },
        CampaignID: {
            type: Sequelize.INTEGER
        }
    });
    return InboundCall;
};
//# sourceMappingURL=InboundCallModel.js.map