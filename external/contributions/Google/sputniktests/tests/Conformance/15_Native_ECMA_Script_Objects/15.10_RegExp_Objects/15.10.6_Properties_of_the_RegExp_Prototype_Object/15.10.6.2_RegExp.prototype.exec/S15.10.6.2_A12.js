// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A12;
* @section: 15.10.6.2;
* @assertion: regExp exec() acts like regExp.exec('undefined') (step 2);
* @description: Checking RegExp.prototype.exec.length;
*/

(/foo/).test('xfoox');
var match = new RegExp('(.|\r|\n)*','').exec()[0];
if (match === 'xfoox') {
  $FAIL('#1: regExp.exec() leaks match globally');
}
if (match !== 'undefined') {
  $FAIL('#2: regExp.exec() must coerce absent first arg to "undefined"');
}
