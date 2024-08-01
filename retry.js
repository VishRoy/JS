// Retry promises N number of times

// Input:
// retry(asyncFn, retries = 3 , delay = 50 , finalError = 'Failed' );
// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50 ms -> failed
// ... attempt 3 -> retry after 50 ms -> failed
// ... Failed.

const wait = ms => new Promise (( resolve ) => {
    setTimeout( () => resolve(), ms);
});

const retryWithDelay = async (asyncFn, retries = 3 , interval = 50 , finalError = 'Failed') => {
    try {
        await asyncFn()
    }catch(err){
        if (retries <= 0 ) {
            return Promise.reject(finalError);
        }
        //delay the next call
        await wait(interval);
        //recursively call the same func
        return retryWithDelay(fn, (retries - 1), interval, finalError);
    }
}