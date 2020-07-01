import request from 'supertest'
import app from '../app'

describe('testting express server', () => {
    test("GET", (done) => {
      request(app)
        .get("/")
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
})