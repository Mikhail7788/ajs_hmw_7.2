import Daemon from '../Daemon';

test('new Daemon', () => {
  const newDaemon = new Daemon('Демон');
  expect(newDaemon).toEqual({
    name: 'Демон', level: 1, health: 100, type: 'daemon', attack: 10, defence: 40,
  });
});