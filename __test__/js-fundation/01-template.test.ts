import { emailTemplate } from '../../src/js-foundation/01-template';


describe('Test in the archive  01-template.ts', () => {

    test('should show greeting', () => {

        const expected = 'Hi, '
        const result = emailTemplate;

        expect( result ).toContain( expected )
    });

    test('should contain {{name}} and {{orderId}}', () => {

            expect( emailTemplate ).toContain('{{name}}')
            expect( emailTemplate ).toContain('{{orderId}}')

            expect( emailTemplate ).toMatch('{{name}}')
            expect( emailTemplate ).toMatch('{{orderId}}')

    });
});
