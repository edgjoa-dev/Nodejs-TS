import { getAge } from '../../src/plugins/get-age.plugin';


describe('Test in get-age.plugin.ts', () => {

    test('should return the age', () => {

        const birthdate = '1991-02-11';
        const age = getAge(birthdate);

        expect(age).toBe(32);
  });

    test('should return typeof = number', () => {

        const birthdate = '1991-02-11';
        const age = getAge(birthdate);

        expect( typeof age).toBe( 'number' );
  });

    test('should return current age', () => {

        const birthdate = '1991-02-11';
        const age = getAge(birthdate);

        const calculatorAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatorAge);

  });

});