import { createLoger } from '../loggr';

it('shuld return stored logs', () => {
  const logger = createLoger('user login');
  expect(logger.getLogos()).toEqual([]);
});

it('shuld save log message', () => {
  const logger = createLoger('user login');
  logger.log('loggin success');
  expect(logger.getLogos()).toEqual(['log - user login - loggin success']);
});

it('shuld save errors ', () => {
  const logger = createLoger('user login');
  logger.error('errorText');
  expect(logger.getLogos()).toEqual(['error - user login - errorText']);
});
