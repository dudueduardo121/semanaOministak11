const geneteUniqueId = require('../../src/utils/generateUniqueld');

describe('Generate Unique ID', () => {
    // teste unitario
    it('should generate an unique ID', () =>{
        // espero que 2 + 2 sejam 4
        //expect(2 + 2).toBe(4);

        const id = geneteUniqueId();
        expect(id).toHaveLength(8);
    });
});