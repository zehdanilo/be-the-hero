const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id' , () => {
    it('should generate Unique Id', () => {
        const id = generateUniqueId();
        
        expect( id ).toHaveLength(8);

    });
});
