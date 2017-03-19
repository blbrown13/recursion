// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node ? node : document.body;
  var elements = [];

  if (node.classList.contains(className)) {
    elements.push(node);
  }

  for (var i = 0; i < node.children.length; i++) {
    var childNode = getElementsByClassName(className, node.children[i]);
    elements = elements.concat(childNode);
  }

  return elements;
};
