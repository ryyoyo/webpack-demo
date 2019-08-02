import _ from 'lodash';
import $ from 'jquery';
import foo from './foo';

function component() {
  const element = $('<div></div>');

  element.html(_.join(['Hi', 'webpack'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
console.log(1,foo())
