import Magician from '../Magician';

test('new Magician', () => {
  const newMagician = new Magician('Magic');
  expect(newMagician).toEqual({
    name: 'Magic', level: 1, health: 100, type: 'magician', attack: 10, defence: 40,
  });
});