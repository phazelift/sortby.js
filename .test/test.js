"use strict"

var sortby= require( '../sortby.min.js' );

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


console.log( sortby(data, ['key1', 'key2', 'key3'], true ) );




// var data= [
// 	 { key1: 'nt',	key2: 'aq',	key3: 'fl' }
// 	,{ key1: 'aq',	key2: 'nt',	key3: 'nt' }
// 	,{ key1: 'gu',	key2: 'za',	key3: 'br' }
// 	,{ key1: 'za',	key2: 'za',	key3: 'za' }
// 	,{ key1: 'za',	key2: 'aq',	key3: 'aq' }
// 	,{ key1: 'aq',	key2: 'fl',	key3: 'aq' }
// 	,{ key1: 'aq',	key2: 'aq',	key3: 'za' }
// 	,{ key1: 'za',	key2: 'za',	key3: 'aq' }
// 	,{ key1: 'ab',	key2: 'gu',	key3: 'gu' }
// 	,{ key1: 'br',	key2: 'aq',	key3: 'aq' }
// 	,{ key1: 'fl',	key2: 'br',	key3: 'ab' }
// 	,{ key1: 'aq',	key2: 'ab',	key3: 'za' }
// ];






