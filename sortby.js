// sortby.js
//
//	A modified insert-sort that now accepts multiple sort keys
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

var sortby= function( array, sortkeys ){

	if ( (array.length > 1) && sortkeys ){

		var sortkey	= sortkeys[ sortkeys.length- 1 ];
		var length	= array.length;

		for ( var index= 1; index < length; index++ ){
			var current	= array[ index ],
					prev		= index- 1;

			while ( (prev >= 0) && ( array[prev][sortkey] > current[sortkey]) ){
				array[ prev+ 1 ]= array[ prev ];
				--prev;
			}

			array[ +prev+ 1 ]= current;
		}

		if ( sortkeys.length > 1 ){
			sortkeys.pop();
			sortby( array, sortkeys );
		}

	}

	return array;
};

if ( 'undefined' !== typeof module )
	module.exports= sortby;
if ( 'undefined' !== typeof window )
	window.sortby= sortby;