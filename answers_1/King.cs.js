// JavaScript source code
function findClosestXElem(arr, value, count) {
    function findPos(resultArr, elem) {
        var low = 0,
                high = lastIndex,
                pos = Math.floor((high - low) / 2),
                distance = elem.distance;
        if (resultArr[low].distance >= distance) {
            pos = low;
        } else {
            while (resultArr[pos].distance !== distance) {
                if (resultArr[pos].distance > distance) {
                    high = pos - 1;
                    if (resultArr[low].distance >= distance) {
                        pos = low;
                        break;
                    } else if (resultArr[high].distance <= distance) {
                        break;
                    }
                } else {
                    low = pos + 1;
                    if (resultArr[low].distance >= distance) {
                        pos = low;
                        break;
                    }
                }
                pos = low + Math.floor((high - low) / 2);
            }
        }
        return pos;
    }

    function insert(resultArr, elem) {
        var pos = findPos(resultArr, elem), i = lastIndex - 1, distance = elem.distance;
        for (; i >= 0 && resultArr[i].distance > distance; i--) {
            resultArr[i + 1] = resultArr[i];
        }
        resultArr[i + 1] = elem;
    }

    var result = new Array(count);
    var i = 0,
            len = arr.length,
            distance = 0,
            lastIndex = count - 1;
    for (; i < count && i < len; i++) {//initialize
        result[i] = { index: i, distance: Math.abs(arr[i] - value) };
    }

    result = result.sort(function (a, b) {
        return a.distance - b.distance;
    });

    for (; i < len; i++) {
        distance = Math.abs(arr[i] - value);
        if (distance < result[lastIndex].distance) {
            insert(result, { index: i, distance: distance });
        }
    }
    return result;
}
