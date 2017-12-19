var _ = require('lodash');

var names = ['cat', 'dog', 'frog', 'fox', 'chicken', 'pig'];
var other = ['Sasha', 'Kirill', 'Nikita', 'mama']

_.each([names, other], function(nameGroup) {
  findFoxSay(nameGroup);
});

function findFoxSay(values) {
  _.find(values, function(name) {
    if (name === 'fox'|| name==='Nikita' ) {
      console.log('What does the '+name+' say???');
    } else {
      console.log('I know how the '+name+' say!');
    }
  });
}
