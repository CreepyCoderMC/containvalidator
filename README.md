# Contain Validator
This module is small but easy to use. The purpose of this module is to check if a string value contains a sub string value, it can optionally also do none case sensitive comparing.
## Validation processes
The code contains two methods to check it a string contains a substring.
### Compare method 1
This method is case sensitive so both string value and sub string value must be the same case.
### Compare method 2
This method is not case sensitive so both string value and sub string value can be any case.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import subStringIsValid from './node_modules/@creepycoder/containvalidator/containvalidator.js';

console.log( "Testing Condition 1 Passed = " + subStringIsValid(    "Hallo world" , "world" , true  ) );
console.log( "Testing Condition 2 Passed = " + subStringIsValid(    "Hallo world" , "World" , false ) );
console.log( "Testing Condition 3 Passed = " + !subStringIsValid(   "Hallo world" , "beans" , true  ) );
console.log( "Testing Condition 4 Passed = " + subStringIsValid(    "Hallo world" , "world"         ) );
console.log( "Testing Condition 5 Passed = " + !subStringIsValid(   "Hallo world" , "World"         ) );
```
The results will look as follows
```
Testing Condition 1 Passed = true
Testing Condition 2 Passed = true
Testing Condition 3 Passed = true
Testing Condition 4 Passed = true
Testing Condition 5 Passed = true
```
## Function Parameters
```
@param  { String  }  source        The source string to be checked
@param  { String  }  subString     The sub string to be checked
@param  { Boolean }  caseSensitive If the check must be case sensitive ( optional , default = true )
@return { Boolean }                Validation passed or failed
```
## Version History
| Version  | Date                   | Remark                              |
|----------|------------------------|-------------------------------------|
| 1.0.0    | 04 September 2022      | Official first release              |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/containvalidator
## Operating Systems Tested On
>Windows and Linux
## License Information
containvalidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)