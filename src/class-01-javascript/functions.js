
const mySecondFunction = () => {
    console.log("Number: ", 2);
}

const myFirstFunction = (name) => {
    // return "Hola " + name;
    mySecondFunction();
    return `Hola ${name}`;
}

const myPromiseFunction = async () => {
    return Promise.resolve({data: 'hola mundo cruel'});
}

module.exports = {
    myFirstFunction,
    myPromiseFunction
};