```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//Check field type before incrementing
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc=>{if(typeof doc.field2 === 'number'){db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field2:1}});}});
```