import Character from '../Character';

test('new Character', () => {
  const newCharacter = new Character('Test77');
  expect(newCharacter).toEqual({
    name: 'Test77', level: 1, health: 100,
  });
});

test('noname Character', () => {
  const newCharacter = () => new Character();
  expect(newCharacter).toThrow(new Error('имя не задано!'));
});

test('short name', () => {
  const newCharacter = () => new Character('h');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов!'));
});

test('dead Character', () => {
  const newCharacter = new Character('idle');
  newCharacter.health = 0;
  const levelUp = () => newCharacter.levelUp();
  expect(levelUp).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('levelUp Character', () => {
  const newCharacter = new Character('idle');
  newCharacter.attack = 25;
  newCharacter.defence = 25;
  newCharacter.type = 'idle';
  newCharacter.levelUp();
  expect(newCharacter).toEqual({
    name: 'idle', level: 2, health: 100, type: 'idle', attack: 30, defence: 30,
  });
});