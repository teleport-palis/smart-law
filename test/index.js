const SmartLawTrust = artifacts.require('./SmartLawTrust.sol');

contract('SmartLawTrust', (accounts) => {
    describe('transferEntityOwnership()', () => {
        it('verifies the new owner after ownership transfer', async () => {
            let contract = await SmartLawTrust.new();
            await contract.transferOwnership('0x30a259900656F599EDEEBF1eB7E1fBf948072Ba3');
            let newOwner = await contract.newOwner.call();
            assert.equal(newOwner, '0x30a259900656F599EDEEBF1eB7E1fBf948072Ba3');
        });
    });
});