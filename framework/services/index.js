import Tests from './users.service';

const api = () => ({
  Tests: () => ({ ...Tests }),
});

export default api;
