// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {


    Object.keys(data).map(function (k, i) {
        data[k] *= 3;
    });

    const sort = Object.entries(data).sort((a, b) => {
        return a[1] - b[1]
    }).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    return sort;
}

console.log(result(data));