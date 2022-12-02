const supertest = require("supertest");
const app = require('../app');
const server = require('../server');
const db = require("../utils/database");

const api = supertest(app);

describe('Pruebas para el endpoint <USERS>',  () => {
    test('Probar que get a api/v1/users responde un json', async () => {
        await api
        .get('/api/v1/users')
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
});

afterAll(() => {
    server.close();
    db.close();
});