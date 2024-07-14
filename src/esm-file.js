import {getRequireMain} from './common-js-file.cjs';

export function doWork() {
    console.log('Doing work.  Note that require.main is', getRequireMain());
}
