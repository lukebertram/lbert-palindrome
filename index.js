
//Adds 'reverse' to all strings.
// Reverses a string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//Adds 'blank' to all strings.
// Returns true if the string is empty or consists entirely of whitespace
// BROKEN REGEX - currently returns flase on an empty string, ""
String.prototype.blank = function() {
  return (/^\s+$/).test(this);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}
