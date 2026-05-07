/**
 * 1. Deep Clone: Kisi bhi object ki mukammal copy banata hai
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * 2. Debounce: Function ko baar baar call hone se rokta hai (performance ke liye)
 */
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

/**
 * 3. Fetch Wrapper: API se data mangwane ka asaan tareeqa
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

/**
 * 4. Array GroupBy: Data ko kisi khass property ki bunyaad par group karta hai
 */
function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
}

// Testing ke liye sample data
console.log("Deep Clone Test:", deepClone({ a: 1, b: { c: 2 } }));