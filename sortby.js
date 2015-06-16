// sortby.js
//
//	A fast collection sort on one or multiple keys, with native support
//
// Copyright (c) 2015 Dennis Raymondo van der Sluis
//
// This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
//
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>

"use strict"


var sortby= function( array, sortkeys, doReverse ){

	var arrayLength= array.length;

	// return immediately if there is nothing to sort
	if ( ('object' !== typeof array) || !(array instanceof Array) || (arrayLength < 2) )
		return array;

	// auto-find keys if no sortkeys are given
	if ( ! sortkeys ){
		var sortkeys= [];
		for ( var key in array[0] )
			sortkeys.push( key );
	} else
			// allow for sortkeys argument to be a single key as String
			if ( typeof sortkeys === 'string' )
				sortkeys= [ sortkeys ];


	function nativeSort(){
		return array.sort( function( a, b ){
			var length= sortkeys.length- 1;
      for ( var i= 0; i < length; i++ ){
        var key= sortkeys[i];
        if ( a[key] > b[key] )
          return 1;
        if ( a[key] < b[key] )
          return -1;
      }
      return 0;
		});
	}



	function insertSort(){

		var sortkey= sortkeys[ sortkeys.length- 1 ];

		for ( var index= 1; index < arrayLength; index++ ){
			var current	= array[ index ],
					prev		= index- 1;

			while ( (prev >= 0) && (array[ prev ][ sortkey ] > current[ sortkey ]) ){
					array[ prev+ 1 ]= array[ prev ];
					--prev;
			}

			array[ +prev+ 1 ]= current;
		}

		if ( sortkeys.length > 1 ){
			sortkeys.pop();
			insertSort();
		}
	}


	function swapReverse(){
		var
			head	= 0,
			tail	= arrayLength- 1,
			stop	= tail/ 2;

		while ( head < stop ){
			var temp= array[ head ];
			array[ head ]= array[ tail ];
			array[ tail ]= temp;
			head++;
			tail--;
		}
		return array;
	}


	// use native sort if available
	if ( Array.prototype.sort )
		nativeSort();
	else
		insertSort();


	if ( doReverse )
		// use native reverse if available
		if ( Array.prototype.reverse )
			array.reverse()
		else
			swapReverse();

	return array;

};


if ( ('undefined' !== typeof define ) && ('function' === typeof define) && define.amd )
	define( 'sortby', [], function(){
		return sortby;
	})
else if ( 'undefined' !== typeof module )
	module.exports= sortby;
else if ( 'undefined' !== typeof window )
	window.sortby= sortby;