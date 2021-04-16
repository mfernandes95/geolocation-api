import AddressService from '../services/AddressService';

class AddressController {
  async createCity(req, res) {
    try {
      console.log('returnnnnn', await AddressService.execute(req.body));
      return res.status(200).send(await AddressService.execute(req.body));
      // .json({
      //   length: resp,
      //   // latitude: response.data.results[0].geometry.location.lat,
      //   // longitude: response.data.results[0].geometry.location.lng,
      // });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AddressController();
