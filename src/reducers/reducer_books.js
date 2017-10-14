export default function() {
  const book = {
    '1': {title: 'Javascript: The good parts'},
    '2': {title: 'Harry potter'},
    '3': {title: 'The dark tower'},
    '4': {title: 'Eloquent Ruby'}
  };

  return [
    book['1'],
    book['2'],
    book['3'],
    book['4']
  ];
}
