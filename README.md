# sortby.js
___

###A fast collection sort on one or multiple keys, with native support

	- native
			Array.prototype.sort with optimized multi-key sort
			reverse with Array.prototype.reverse

	- javascript algorithms for backwards compatibility
			sort with multi-key insert-sort implementation
			reverse with swap-reverse implementation

Can be used with Browser, Node.js and RequireJS(AMD).
___
<br/>

**sortby**
> `<array> sortby( <array> collection, <array> sortkeys, <boolean> reverse )`

Requires an array of objects. Returns the array sorted by one (or more) of it's objects keys.

'sortkeys' can be a string, or an array of strings in case of multiple sort keys.

If sortkeys is not given, it will default to all keys found in the first entry of the array.

If reverse is given a truthy value, the array will be sorted in reverse.

In case of invalid input, the original array is returned unchanged.

The first sortkey dominates over the next, and so forth:
```javascript
// some data to sort:
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

// sort forwards:
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

// sort reverse:
console.log( sortby(data, ['key1', 'key2', 'key3'], true ) );
//[ { key1: '9', key2: '9', key3: '3' },
//  { key1: '9', key2: '9', key3: '2' },
//  { key1: '9', key2: '9', key3: '1' },
//  { key1: '9', key2: '5', key3: '2' },
//  { key1: '8', key2: '4', key3: '4' },
//  { key1: '5', key2: '3', key3: '9' },
//  { key1: '4', key2: '1', key3: '2' },
//  { key1: '3', key2: '9', key3: '8' },
//  { key1: '2', key2: '2', key3: '9' },
//  { key1: '2', key2: '2', key3: '3' },
//  { key1: '1', key2: '8', key3: '9' },
//  { key1: '1', key2: '3', key3: '1' },
//  { key1: '1', key2: '1', key3: '4' },
//  { key1: '0', key2: '2', key3: '0' } ]
```
___
