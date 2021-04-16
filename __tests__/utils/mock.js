export default class MockResponse {
  static getGeolocationResponse() {
    return [
      [
        {
          formatted_address:
            'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
          geometry: {
            bounds: {
              northeast: {
                lat: -22.8967705,
                lng: -43.1797575,
              },
              southwest: {
                lat: -22.897878,
                lng: -43.1805343,
              },
            },
            location: {
              lat: -22.8973551,
              lng: -43.1802782,
            },
          },
          place_id: 'ChIJa8BFOVp_mQARx6BKGN0xHpM',
        },
      ],
      [
        {
          formatted_address:
            'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
          geometry: {
            location: {
              lat: -22.9039608,
              lng: -43.1703536,
            },
            location_type: 'ROOFTOP',
            viewport: {
              northeast: {
                lat: -22.9026118197085,
                lng: -43.1690046197085,
              },
              southwest: {
                lat: -22.9053097802915,
                lng: -43.1717025802915,
              },
            },
          },
          place_id: 'ChIJn3Nx_eOBmQARSsqe9fhWRcI',
        },
      ],
      [
        {
          formatted_address:
            'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
          geometry: {
            location: {
              lat: -22.790078,
              lng: -47.1817386,
            },
            location_type: 'ROOFTOP',
            viewport: {
              northeast: {
                lat: -22.78872901970849,
                lng: -47.18038961970849,
              },
              southwest: {
                lat: -22.7914269802915,
                lng: -47.18308758029149,
              },
            },
          },
          place_id: 'ChIJ0SPRETG-yJQRaEfqDYCcY0E',
        },
      ],
      [
        {
          formatted_address:
            'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
          geometry: {
            bounds: {
              northeast: {
                lat: -22.7204331,
                lng: -47.1718392,
              },
              southwest: {
                lat: -22.7206063,
                lng: -47.1720221,
              },
            },
            location: {
              lat: -22.7205178,
              lng: -47.1719167,
            },
            place_id: 'ChIJSYo8OfSUyJQR5T2llVIoXEU',
          },
        },
      ],
    ];
  }

  static getCalculateDistanceResponse() {
    return {
      nearest_addresses: [
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
            ],
            distance: 0.011921952761606592,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 0.0702502038691015,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 3.9955536969678613,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
            ],
            distance: 4.002898163699973,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 4.00576566682708,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
            ],
            distance: 4.0130012347818775,
          },
        },
      ],
      more_distant_addresses: [
        {
          element: {
            addresses: [
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
            ],
            distance: 4.0130012347818775,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 4.00576566682708,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
            ],
            distance: 4.002898163699973,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 3.9955536969678613,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'R. Sérgio Furlan, 40 - Parque Bom Retiro, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.790078,
                  lng: -47.1817386,
                },
              },
              {
                address:
                  'R. Edith Pavlu Gatti, 609 - São José, Paulínia - SP, 13140-000, Brazil',
                location: {
                  lat: -22.7205178,
                  lng: -47.1719167,
                },
              },
            ],
            distance: 0.0702502038691015,
          },
        },
        {
          element: {
            addresses: [
              {
                address:
                  'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
                location: {
                  lat: -22.8973551,
                  lng: -43.1802782,
                },
              },
              {
                address:
                  'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
                location: {
                  lat: -22.9039608,
                  lng: -43.1703536,
                },
              },
            ],
            distance: 0.011921952761606592,
          },
        },
      ],
    };
  }

  static getAddresses() {
    return {
      addresses: [
        'Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003',
        'Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200',
        'Sérgio Furlan, 40 Coperlotes, Paulínia SP, 13142196',
        'Edith Pavlu Gatti, 609 São José, Paulínia SP, 13140000',
      ],
    };
  }
}
