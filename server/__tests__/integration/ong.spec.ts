import request from 'supertest';
import app from '../../src/app';

import db from '../../src/database';

describe('ONG', () => {
  afterAll(async () => {
    await db.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@apad.com.br',
      whatsapp: '5500000000',
      city: 'Rio do Sul',
      uf: 'SC',
    });

    expect(response.body).toHaveProperty('id');
  });
});
