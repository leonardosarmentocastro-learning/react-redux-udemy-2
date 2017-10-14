export default function() {
  const book = {
    '1': {title: 'Javascript: The good parts', pages: 100},
    '2': {title: 'Harry potter', pages: 300},
    '3': {title: 'The dark tower', pages: 50},
    '4': {title: 'Eloquent Ruby', pages: 1}
  };

  return [
    book['1'],
    book['2'],
    book['3'],
    book['4']
  ];
}
