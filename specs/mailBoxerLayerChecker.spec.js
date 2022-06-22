 import api from '../framework/services/index';

describe('Проверка импорта', () => {
  it('imports without error', () => {
    expect(api).toBeTruthy();
    expect(api().Tests).toBeTruthy();
  });
});
describe('keke test', () => {
  it(' Делаем запрос', async () => {
    const params = 'kek@shrek.cb';
    const response = await api().Tests().get(params);
    expect(response.status).toEqual(200);
  });
  it(' Делаем запрос с некорректным токеном', async () => {
    const params = 'kek@shrek.cb';
    const response = await api().Tests().getBadToken(params);
    expect(response.status).toEqual(401);
  });

  it.each`
   
   params    | expected
   ${'rmukhamatgaliev@voximplant.com'} | ${200}
   ${'Milo'} | ${200}
   ${'o'} | ${200}
   ${''} | ${200}
   ${' '} | ${200}

  `('returns $expected when', async ({ params, expected }) => {
    const response = await api().Tests().get(params);
    expect(response.status).toEqual(expected);
  });
});
