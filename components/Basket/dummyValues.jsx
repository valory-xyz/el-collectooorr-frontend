export const NFT_LIST = [
  {
    type: 'image',
    url: 'https://artblocks-mainnet.s3.amazonaws.com/294000482.png',
    name: 'Alien DNA #482',
    txn: null,
    description:
      'In the year 3075 of the Second Nuclear Age, a laboratory of an unknown race of aliens was discovered on the planet Vtolmr while drilling a well of molecular oil. Its presumed purpose is to study genetic mutations of races from neighboring planets. During the laboratory investigation, 512 silicon impressions with DNA of different alien species were extracted. Modern methods of quantum analysis do not allow the deciphering of the data obtained. At this point, their value is purely aesthetic. But that may change in time.',
    style: { height: 'auto' },
    cardStyle: { maxWidth: '230px' },
  },
  {
    type: 'image',
    url: 'https://artblocks-mainnet.s3.amazonaws.com/310000082.png',
    name: '100 PRINT #82',
    txn: null,
    description:
      '100 PRINT is a nonfigurative, abstract generative drawing system based on the principles of visual perspective. Each edition is made up of carefully constructed lines and shapes that fit into a multidimensional world created on the fly, inviting the viewer to let their eyes wander and find pockets of what appear to be deliberately constructed objects in 3D space. 100 PRINT is an experimental project that draws inspiration from a wide variety of sources, including cubist and abstract expressionist artworks, printer test sheets, and Escher sketches. It represents a raw display of powerful drawing principles that have governed the construction of many artworks before it.',
    style: { height: 'auto' },
    cardStyle: { maxWidth: '230px', marginRight: '3rem' },
  },
  {
    type: 'image',
    url: 'https://artblocks-mainnet.s3.amazonaws.com/304000763.png',
    name: 'Anticyclone #762 ',
    txn: null,
    description:
      'Anticyclones are a weather phenomena. They pierce through darkness to instill peace and calm. Their planetary scale reminds us of how little we are and how powerful they can be. High pressure, rotation, air flow… The "Anticyclone" series is an artistic exploration and interpretation of those concepts. The rendering borrows its aesthetics from traditional and organic media like paper and crayons, to lend an analog/archival look. "Can a computer draw like a human?" The question is asked and challenged once more through "Anticyclone".',
    style: { height: 'auto' },
    cardStyle: { maxWidth: '230px' },
  },
];

const todayDate = new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
});

export const NFT_METADATA = [
  {
    artist: 'Ben Kovach',
    date: todayDate,
    // bought: '0.125',
    // txn: null,
  },
  {
    artist: 'Shvembldr',
    date: todayDate,
    // bought: '0.125',
    // txn: null,
  },
  {
    artist: 'William Mapan',
    date: todayDate,
    // bought: '0.125',
    // txn: null,
  },
];
