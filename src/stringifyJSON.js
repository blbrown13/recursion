// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objectType = typeof(obj);

  if (Array.isArray(obj)) {
    obj = obj.map(function(ele) {
      return stringifyJSON(ele);
    });
    return '[' + obj + ']';
  }

  if (obj !== null) {
    if (objectType === 'object') {
      var result = [];

      for (var key in obj) {
        if (obj[key] === undefined || typeof(obj[key]) === 'function') {
          break;
        }
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }

      return '{' + result.join() + '}';

    } else if (objectType === 'string') {
        return '"' + obj + '"';
    }
  }

  return '' + obj;
};
