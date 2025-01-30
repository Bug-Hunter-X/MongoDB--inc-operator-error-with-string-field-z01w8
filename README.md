# MongoDB $inc Operator Error with String Field
This example demonstrates an error that can occur when using the `$inc` operator in MongoDB update operations. The `$inc` operator is designed to increment numeric fields. If you attempt to use it with a string field, it will result in an error.  The solution involves carefully checking the data types of fields before applying the `$inc` operator.

## Bug
The provided `bug.js` file contains code that attempts to increment a string field using the `$inc` operator. This will throw a MongoDB error. 

## Solution
The `bugSolution.js` file shows the correct implementation, where we check and only increment if the field is numeric.