import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';


describe('Test in logger-plugin adapter', () => {


    test('buildLogger should be a function', () => {
        expect(typeof buildLogger).toBe('function');
    });

    test('buildLogger should return a function logger', () => {

        const logger = buildLogger('test');

        expect(typeof logger.error).toBe('function');
        expect(typeof logger.log).toBe('function');

    });

    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
              message,
              service,
            })
          );
    });

});