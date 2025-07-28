function test(string){return(string||'').replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,'\\$1')}
function testEscapedSlash(str){var result=str.replace(/foo\/bar/,"baz");return result;}
function testCharClassSlash(str){var c=/[a\/b]/;return c.exec(str);}
function testNestedBrackets(str){try{var d=/[[]/;return d.test(str);}catch(e){return"Error";}}
function testEscapedClosingBracket(str){var e=/[a-z\]]/;return e.test(str)?"Contains letter or ]":"No match";}
function testNewlineCharClass(str){var g=/[a\n:b]/;return g.test(str);}
function testMultipleCharClasses(str){var j=/[a-z][0-9]/;return j.test(str);}
function testNestedCharacterClasses(str){return str.match(/^[[a-z]]$/);}
function testUnclosedNestedCharacterClasses(str){return str.match(/^[[a-z]$/);}