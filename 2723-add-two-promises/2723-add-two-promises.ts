type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const result = await promise1 + await promise2;
    return Promise.resolve(result);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */