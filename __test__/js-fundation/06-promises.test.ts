import { getPokemonById } from '../../src/js-foundation/06-promises';


describe('Test in 06-promises archive', () => {

    test('getPokemonById should return a pokemon', async() => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById( pokemonId )

        expect(pokemonName).toBe('bulbasaur')

    })

    test('should return an error if pokemon does not exit', async() => {

        const pokemonId = 10000000;

        try {
            await getPokemonById( pokemonId )
            expect(true).toBeFalsy()
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id: ${pokemonId}`)
        }
    });

});