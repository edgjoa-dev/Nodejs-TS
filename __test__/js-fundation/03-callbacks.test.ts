import { IUser } from '../../src/interfaces';
import { getUserById } from '../../src/js-foundation/04-arrow';
describe('Test in document 03-callbacks', () => {

    const mockCallback = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('getUserById should return an error if user does not exist ', () => {
        const userId = 1;
        const expectedUser: IUser = {
            id:1,
            name: 'John Doe'
        }

        getUserById(userId, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith(undefined, expectedUser);

    });

    test('should return an error when the Id does not exist', () => {

        const userId = 5;
        const expectedError = `User not found with id ${userId}`

        getUserById(userId, mockCallback);

        expect( mockCallback ).toHaveBeenCalledWith(expectedError);

    });

    test('should handle the smallest possible ID', () => {

        const userId = 0;
        const expectedError = `User not found with id ${userId}`

        getUserById(userId, mockCallback);

        expect( mockCallback ).toHaveBeenCalledWith(expectedError);

    });

    test('should handle the largest possible ID', () => {
        const userId = Number.MAX_SAFE_INTEGER;
        const expectedError = `User not found with id ${userId}`

        getUserById(userId, mockCallback);

        expect( mockCallback ).toHaveBeenCalledWith(expectedError);
    });


});