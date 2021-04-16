import request from 'supertest';
import app from '../../src/app';
import MockResponse from '../utils/mock';

describe('Address', () => {
  it('Should calculate distance', async () => {
    const response = await request(app)
      .post('/addresses')
      .send(MockResponse.getAddresses());

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(
      MockResponse.getCalculateDistanceResponse()
    );
    expect(response.body.nearest_addresses).toHaveLength(6);
    expect(response.body.more_distant_addresses).toHaveLength(6);
  });

  it('Should return error when calculate distance', async () => {
    const response = await request(app)
      .post('/addresses')
      .send({ addresses: ['Rua Dois'] });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: 'Must have two or more addresses!',
    });
  });

  it('Should return error when send incorrect params', async () => {
    const response = await request(app)
      .post('/addresses')
      .send({ address: ['Rua Dois'] });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: 'Addresses not found!',
    });
  });
});
