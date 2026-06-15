import request from 'supertest';
import app from '../src/server.js';

describe('Info Endpoint', () => {

    it('should return application information', async () => {

        const response = await request(app)
            .get('/info');

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('application');
        expect(response.body).toHaveProperty('version');
        expect(response.body).toHaveProperty('environment');
    });

});