function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = true;
            if (sucess) {
                resolve("Data Fecthched Successfully")
            } else {
                reject("Error Fetching Data")
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


