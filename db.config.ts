export const dbConfigs = {
  HOST: "sqlmi-callcenter-test.public.9b38393c2454.database.windows.net",
  PORT: "3342",
  USER: "svc_tazapi",
  PASSWORD: "s^t2g$g1&Gyg=ds1#",
  DB: "TazInboundCalls",
  dialect: 'mssql',
  dialectOptions: { 
    options: {
      encrypt: true,
      enableArithAbort: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
