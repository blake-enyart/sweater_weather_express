var shell = require('shelljs');
var request = require("supertest");
var app = require('../../../../app');

describe('Forecast API', () => {
  // beforeAll(() => {
  //   shell.exec('npx sequelize db:create')
  // });
  // beforeEach(() => {
  //     shell.exec('npx sequelize db:migrate')
  //     shell.exec('npx sequelize db:seed:all')
  //   });
  // afterEach(() => {
  //   shell.exec('npx sequelize db:migrate:undo:all')
  // });

  describe('Test GET /api/v1/forecast path', () => {
    test('should return a 200 status', () => {
      return request(app).get("/api/v1/forecast?location=denver,co").then(response => {
        expect(response.status).toBe(200)
      });
    });
  });
})
