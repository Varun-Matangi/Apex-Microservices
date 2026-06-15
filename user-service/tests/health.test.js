import request from 'supertest';
import app from '../src/server.js';

describe('Health Endpoint', () => {

    it('should return application health', async () => {

        const response = await request(app)
            .get('/health');

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('UP');
    });

});