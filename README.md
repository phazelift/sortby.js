# sortby
___

A modified insert-sort on an array of objects that now accepts multiple sort keys.
___
<br/>

**sortby**
> `<array> sortby( <array> arrayOfObjects, <array> sortkeys )`

Requires an array of objects.
Returns the array sorted by a insert-sort algorithm that sorts the array of objects by one (or more) of it's keys.
'sortkeys' can be a string or an array of strings.

The first sortkey dominates over the next, and so forth:
```javascript
var data= [
	 { key1: 1,			key2: 222,		key3: 33 }
	,{ key1: 1111,		key2: 222,		key3: 3333 }
	,{ key1: 111,		key2: 2222, 	key3: 333 }
	,{ key1: 111,		key2: 22,		key3: 3 }
	,{ key1: 11,		key2: 2,		key3: 333 }
];

console.log( sortBy( data, ['key1', 'key2']) );
//[ { key1: 1, key2: 222, key3: 33 },
//  { key1: 11, key2: 2, key3: 333 },
//  { key1: 111, key2: 22, key3: 3 },
//  { key1: 111, key2: 2222, key3: 333 },
//  { key1: 1111, key2: 222, key3: 3333 } ]


console.log( sortBy( data, ['key1', 'key3']) );
[ { key1: 1, key2: 222, key3: 33 },
  { key1: 11, key2: 2, key3: 333 },
  { key1: 111, key2: 22, key3: 3 },
  { key1: 111, key2: 2222, key3: 333 },
  { key1: 1111, key2: 222, key3: 3333 },
  { key1: 111111, key2: 222222, key3: 33333 } ]

```
___
