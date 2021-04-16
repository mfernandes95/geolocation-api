import axios from 'axios';

class AddressService {
  async getGeolocation(addresses) {
    if (addresses.length < 2) {
      throw new Error('Must have two or more addresses!');
    }
    const responseLocations = [];
    for (let address in addresses) {
      const response = await axios.get(
        `${process.env.GOOGLE_GEOCODE_URL}/json?address=${addresses[address]
          .replace(/ /g, '+')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')}&key=${process.env.GOOGLE_API_KEY}`
      );
      responseLocations.push(response.data.results);
    }
    return responseLocations;
  }

  calculateDistance(addresses) {
    const addressCombinations = [];
    for (let i = 0; i < addresses.length; ++i) {
      for (let j = i + 1; j < addresses.length; ++j) {
        const obj = {};
        obj.addresses = [
          {
            address: addresses[i][0].formatted_address,
            location: addresses[i][0].geometry.location,
          },
          {
            address: addresses[j][0].formatted_address,
            location: addresses[j][0].geometry.location,
          },
        ];
        (obj.distance = Math.hypot(
          addresses[j][0].geometry.location.lng -
            addresses[i][0].geometry.location.lng,
          addresses[j][0].geometry.location.lat -
            addresses[i][0].geometry.location.lat
        )),
          addressCombinations.push({ element: obj });
      }
    }

    const nearest_addresses = addressCombinations.sort(function (a, b) {
      return a.element.distance < b.element.distance
        ? -1
        : a.element.distance > b.element.distance
        ? 1
        : 0;
    });

    return {
      nearest_addresses: nearest_addresses,
      more_distant_addresses: nearest_addresses.slice().reverse(),
    };
  }

  async execute(addresses) {
    return this.calculateDistance(await this.getGeolocation(addresses));
  }
}
export default new AddressService();
