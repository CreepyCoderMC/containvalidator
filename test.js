import { subStringIsValid } from '@teamcoder/containvalidator';

console.log( "Testing Condition 1 Passed = " + subStringIsValid(    "Hallo world" , "world" , true  ) );
console.log( "Testing Condition 2 Passed = " + subStringIsValid(    "Hallo world" , "World" , false ) );
console.log( "Testing Condition 3 Passed = " + !subStringIsValid(   "Hallo world" , "beans" , true  ) );
console.log( "Testing Condition 4 Passed = " + subStringIsValid(    "Hallo world" , "world"         ) );
console.log( "Testing Condition 5 Passed = " + !subStringIsValid(   "Hallo world" , "World"         ) );