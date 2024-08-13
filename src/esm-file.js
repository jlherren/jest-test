import {getRequireMain} from './common-js-file.cjs';

export function doWork() {
    let requireMain = getRequireMain();
    console.log('Doing work.  Note that require.main is', requireMain);
    return requireMain;
}
