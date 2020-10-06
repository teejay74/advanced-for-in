import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('По алфавиту', () => {
  const sortArr = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, sortArr);
  expect(received).toEqual(expected);
});

test('Пустой ключ', () => {
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const received = orderByProps(obj);
  expect(received).toEqual(expected);
});

test('По алфавиту в обратном поярдке', () => {
  const sortArr = ['attack', 'health'];
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const received = orderByProps(obj, sortArr);
  expect(received).toEqual(expected);
});
