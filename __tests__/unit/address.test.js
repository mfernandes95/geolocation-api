import AddressService from '../../src/app/services/AddressService';
import MockResponse from '../utils/mock';

describe('Address', () => {
  it('Should calculate distance', async () => {
    const distances = AddressService.calculateDistance(
      MockResponse.getGeolocationResponse()
    );

    expect(distances).toMatchObject(
      MockResponse.getCalculateDistanceResponse()
    );
    expect(distances.nearest_addresses).toHaveLength(6);
    expect(distances.more_distant_addresses).toHaveLength(6);
  });
});
