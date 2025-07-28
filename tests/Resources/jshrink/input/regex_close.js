function test (string) {
  return (string || '').replace(
    /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
    '\\$1'
  )
}

// Regex with escaped slash
function testEscapedSlash(str) {
  var result = str.replace(/foo\/bar/, "baz");
  return result;
}

// Regex with character class containing a slash
function testCharClassSlash(str) {
  var c = /[a\/b]/;
  return c.exec(str);
}

// Regex with nested opening bracket. This is a valid regex in non-v-mode.
function testNestedBrackets(str) {
  try {
    var d = /[[]/;
    return d.test(str);
  } catch (e) {
    return "Error";
  }
}

// Regex with escaped closing bracket
function testEscapedClosingBracket(str) {
  var e = /[a-z\]]/;
  return e.test(str) ? "Contains letter or ]" : "No match";
}

// Regex with newlines in character class
function testNewlineCharClass(str) {
  var g = /[a\n:b]/;
  return g.test(str);
}

// Regex with multiple character classes
function testMultipleCharClasses(str) {
  var j = /[a-z][0-9]/;
  return j.test(str);
}

function testNestedCharacterClasses(str) {
  // nested character class in non-v-mode. this is interpreted as /^[\[a-z]\]$/
  return str.match(/^[[a-z]]$/);
}

function testUnclosedNestedCharacterClasses(str) {
  // nested character class in non-v-mode. this is interpreted as /^[\[a-z]$/ and should not throw an error
  return str.match(/^[[a-z]$/);
}
