import axios from 'axios';

class AddressService {
  async getGeolocation(body) {
    console.log('addressss', body.addresses);
    const tr = [];
    for (let address in body.addresses) {
      const response = await axios.get(
        `${process.env.GOOGLE_GEOCODE_URL}/json?address=${body.addresses[
          address
        ]
          .replace(/ /g, '+')
          .normalize('NFD')
          .replace(
            /[\u0300-\u036f]/g,
            ''
          )}&key=AIzaSyB5Bc95hWW2cNZ9sL6K6vSqF46Jn20oY9g`
      );
      tr.push(response.data.results);
      // tr.push(response.data.results[0].geometry.location);
    }
    return tr;
  }

  calculateDistance(tr) {
    const combinations = [];
    for (let i = 0; i < tr.length; ++i) {
      for (let j = i + 1; j < tr.length; ++j) {
        // console.log('trrrrrrrrrrr', tr[i][0].geometry.location);
        // combinations.push([tr[i], tr[j]]);

        let obj = {};
        obj.addresses = [
          tr[i][0].formatted_address,
          tr[j][0].formatted_address,
        ];
        // element.end2222 = tr[j][0];
        (obj.distance = Math.sqrt(
          (tr[j][0].geometry.location.lat - tr[i][0].geometry.location.lat) **
            2 +
            (tr[j][0].geometry.location.lng - tr[i][0].geometry.location.lng) **
              2
        )),
          combinations.push({ element: obj });
        // combinations.push([
        //   tr[i][0],
        //   tr[j][0],
        //   Math.sqrt(
        //     (tr[j][0].geometry.location.lat - tr[i][0].geometry.location.lat) **
        //       2 +
        //       (tr[j][0].geometry.location.lng -
        //         tr[i][0].geometry.location.lng) **
        //         2
        //   ),
        // ]);
      }
    }

    console.log('dwaddwadawdw', combinations);
    const prox = combinations.sort(function (a, b) {
      console.log('aaaa', a.element.distance, b.element.distance);
      return a.element.distance < b.element.distance
        ? -1
        : a.element.distance > b.element.distance
        ? 1
        : 0;
    });

    console.log('proxxxxxx', combinations);

    // const longe = combinations
    //   .sort(function (a, b) {
    //     console.log('aaaa', a.element.distance, b.element.distance);
    //     return a.element.distance < b.element.distance
    //       ? -1
    //       : a.element.distance > b.element.distance
    //       ? 1
    //       : 0;
    //   })
    //   .reverse();

    // const longe = proximos.reverse();

    // console.log('longeeee', longe);

    // const x1y1 = tr[0][0].geometry.location;
    // const x1y2 = tr[1][0].geometry.location;

    // let distancia = Math.sqrt(
    //   (x1y2.lat - x1y1.lat) ** 2 + (x1y2.lng - x1y1.lng) ** 2
    // );
    // console.log(
    //   'distanciaaaa',
    //   distancia,
    //   Math.hypot(-43.1802782 - -43.1703536, -22.8973551 - -22.9039608)
    // );
    // const long = combinations.reverse();
    // console.log('longgggg', long);

    console.log('proxxxxxx2222222222222222', combinations);
    // console.log('proxxxxxx', longe);

    return { proximos: prox, longe: prox.reverse() };
  }

  async execute(body) {
    return this.calculateDistance(await this.getGeolocation(body));
  }
}
export default new AddressService();
