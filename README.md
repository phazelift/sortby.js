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
	 { key1: '9',	key2: '9',	key3: '2' }
	,{ key1: '0',	key2: '2',	key3: '0' }
	,{ key1: '1',	key2: '1',	key3: '4' }
	,{ key1: '4',	key2: '1',	key3: '2' }
	,{ key1: '5',	key2: '3',	key3: '9' }
	,{ key1: '9',	key2: '9',	key3: '1' }
	,{ key1: '9',	key2: '5',	key3: '2' }
	,{ key1: '1',	key2: '8',	key3: '9' }
	,{ key1: '2',	key2: '2',	key3: '3' }
	,{ key1: '2',	key2: '2',	key3: '9' }
	,{ key1: '1',	key2: '3',	key3: '1' }
	,{ key1: '9',	key2: '9',	key3: '3' }
	,{ key1: '8',	key2: '4',	key3: '4' }
	,{ key1: '3',	key2: '9',	key3: '8' }
];

console.log( sortby(data, ['key1', 'key2', 'key3']) );
//[ { key1: '0', key2: '2', key3: '0' },
//  { key1: '1', key2: '1', key3: '4' },
//  { key1: '1', key2: '3', key3: '1' },
//  { key1: '1', key2: '8', key3: '9' },
//  { key1: '2', key2: '2', key3: '3' },
//  { key1: '2', key2: '2', key3: '9' },
//  { key1: '3', key2: '9', key3: '8' },
//  { key1: '4', key2: '1', key3: '2' },
//  { key1: '5', key2: '3', key3: '9' },
//  { key1: '8', key2: '4', key3: '4' },
//  { key1: '9', key2: '5', key3: '2' },
//  { key1: '9', key2: '9', key3: '1' },
//  { key1: '9', key2: '9', key3: '2' },
//  { key1: '9', key2: '9', key3: '3' } ]
```
___
