import {doWork} from '../src/esm-file.js';

describe('A test', () => {
    it('runs migrations', async () => {
        let requireMain = doWork();
        expect(requireMain).toBe(undefined);
    });
});
