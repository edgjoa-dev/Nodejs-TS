import { httpClientPlugin } from '../../src/plugins/http-client.plugin';



describe('Test in htt-client plugin adapter', () => {

    test('should return a object data', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
          });
    });
    test('httpClientPlugin should have POST, PUT and DELETE methods', () => {

        expect(typeof httpClientPlugin.get).toBe('function');
        expect(typeof httpClientPlugin.post).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(typeof httpClientPlugin.delete).toBe('function');
    });

});