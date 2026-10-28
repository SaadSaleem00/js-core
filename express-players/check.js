const bodies = [
  { text: 'hello' },
  { sudo: 'hello' },
  { text: 5 },
  { text: '' },
];

for (const body of bodies) {
  const word = body.text;
  const bad = typeof word !== 'string' || word === '';
  console.log(word, '|', typeof word, '|', bad);
  
}