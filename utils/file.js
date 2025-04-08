const path = require('path');


const getFileFromAbsolutePath = (absolutePath) => {
    return path.resolve(absolutePath);
};

module.exports = { getFileFromAbsolutePath };