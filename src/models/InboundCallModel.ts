module.exports = (sequelize, Sequelize) => {
    const InboundCall = sequelize.define("InboundCalls", {
      InboundCallID: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      CallSID: {
        type: Sequelize.STRING
      },
      CampaignID: {
        type: Sequelize.INTEGER
      }
    },
    {
      schema: 'InboundCalls',
      timestamps: false, //default property
      createdAt: false, //default property
      updatedAt: false, //default property
    });
    return InboundCall;
  };