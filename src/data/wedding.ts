export const wedding = {
  names: 'Arnel & Marilyn',
  date: 'October 29, 2026',
  dateISO: '2026-10-29',
  city: 'Cebu City',
  dressCode: 'Blue and White',
  invitation: 'Please join us to celebrate our love and new beginnings!',
  ceremony: {
    venue: 'Santo Tomas de Villanueva Parish Pardo',
    time: '6:00 AM',
    time24: '06:00',
    address: 'Pardo, Cebu City',
    // Coordinates verified against the supplied church pin; avoid mobile Plus Code parsing.
    map: 'https://www.google.com/maps/search/?api=1&query=10.2795084%2C123.8546017',
  },
  reception: {
    time: '11:00 AM',
    time24: '11:00',
    description: 'Reception follows at our home in Sitio Lumboy, Inayawan, Cebu City.',
    address: 'Cogon Pardo, Cebu City',
    // Exact point from the supplied reception pin, rather than a locality search.
    map: 'https://www.google.com/maps/search/?api=1&query=10.2720125%2C123.8587656',
  },
  giftNote: 'Your presence on our big day is the best gift we could ask for. If you wish to give a gift, a monetary contribution toward our new journey would be greatly appreciated.',
  closing: 'We look forward to celebrating with you.',
};
