import AddressService from '../services/AddressService';

class AddressController {
  async getDistance(req, res) {
    try {
      const { addresses } = req.body;
      if (!addresses) {
        throw new Error('Addresses not found!');
      }
      return res.status(200).send(await AddressService.execute(addresses));
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AddressController();
