var GetRelation = {
			quickSort : function( arr ){
				var _t = this;
				if (arr.length <= 1) { return arr; }
			　　var pivotIndex = Math.floor(arr.length / 2);
			　　var pivot = arr.splice(pivotIndex, 1)[0];
			　　var left = [];
			　　var right = [];
			　　for (var i = 0; i < arr.length; i++){
			　　　　if (arr[i] < pivot) {
			　　　　　　left.push(arr[i]);
			　　　　} else {
			　　　　　　right.push(arr[i]);
			　　　　}
			　　}
			　　return _t.quickSort(left).concat([pivot], _t.quickSort(right));
			},
			getIndex : function( num , arr ){
				for( var i = 0 ; i < arr.length ; i++ ){
					if( arr[i] == num ){
						return i;
					}
				}
			},
			at : function( num ){
				var _t = this;
				var data = _t.quickSort( arr );
				var length = data.length;
				var index = _t.getIndex( num , data );
				var result = [];
				var start = index - 5 ;
				var end = index + 6;

				start = (start <= 0) ? 0 : start;
				end = (start <= 0) ? start + 11 : end;
				start = (end >= length) ? length - 11 : start;
				end = (end >= length) ? length : end;

				for( var i = start ; i < end ; i++ ){
					if( data[i] != num ){
						result.push( data[i] );
					}
				}
				console.log( '当前数字为 : ' + num + '   与之最近的10个数为 : [' + result + ']');
				/*return {
					currentNum : num,
					result : result
				}*/
			}
		}

		
		GetRelation.at(99978);
