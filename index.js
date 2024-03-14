const binarySearch = (arr, key) => {
    if(typeof key === "string") return 'Программа не ищет символы';
    if(key > 10000 || key < -10000) return "Параментры не могут принимать значение более 10000 или менее -10000";
    const array = [...arr];
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    for (let i in array) {
        if(i > 10000 || i < -10000) return "Параментры не могут принимать значение более 10000 или менее -10000";
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === key) {
            if (!arraysAreEqual(array,arr)) {
                return [array,mid]
            }
            return mid;
        } else if (array[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return "Данного элемента нет в массиве";
}
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

module.exports = binarySearch;