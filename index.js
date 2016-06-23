/**
* ConfigDOM constructor
* @exports test
* @constructor ConfigDOM
* @param  {string} id id of the parent element
* @return {object} ConfigDOM object
*/

var htmlize = function htmlize(specs){
  if( specs.constructor === String ){
    return specs;
  }

  var HTML_string = '<' + specs.tag;
  if( specs.props ){
    for( var name in specs.props ){
      HTML_string += ' ' + name + '="' + specs.props[name] + '"';
    }
  }
  HTML_string +=  '>';

  if( specs.children ){
    var childrenStringArray = specs.children.map(function(childSpec){
      if( childSpec ){
        return htmlize(childSpec);
      }
    });
    HTML_string += childrenStringArray.join('');
  }

  HTML_string +=  '</' + specs.tag + '>';

  return HTML_string;
};



module.exports = function(spec){
  var HTML_string = htmlize(spec);

  return HTML_string;
};
