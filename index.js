var map = require("poly-map")

var getFrom = function (object) {
    return function (property) {
        return object[property];
    }
}

function argumentNames(func) {
    var names = func.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
        .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
        .replace(/\s+/g, '').split(',');

    return names.length == 1 && !names[0] ? [] : names;
}

function bindArguments(names, values) {
    if (values instanceof Array) {
        return values;
    } else {
        return map(getFrom(values), names);
    }
}

function apply(func, params) {
    var argumentOrder = argumentNames(func),
        args = bindArguments(argumentOrder, params),
        result = func.apply(undefined, args);

    return result;
}

function createApplicator(func, params) {
    if (params === undefined) {
        return function (params) {
          return apply(func, params);
        };
    } else {
        return apply(func, params);
    }
}

module.exports = createApplicator;
