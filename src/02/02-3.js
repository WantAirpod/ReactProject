/* 전개 연산자 */

var arr1 = ["one", "two"];
var arr2 = ["three", "four"];

//각 배열의 요소를 추출하여 새로운 배열을 만듬.
var combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
//
var combined = arr1.concat(arr2);

var combined = [].concat(arr1, arr2);

var first = arr1[0];
var second = arr1[1];
var three = arr1[2] || "empty"; //||연산자와 조합하면 추출할 배열 요소가 업을 때 기본값을 지정함 .

function func() {
  var args = Array.prototype.slice.call(arguments); //특수 변수(arguments)를 사용해 함수 내 인자 항목들을 배열로 반환(func(a,b,c))
  var first = args[0];
  var others = args.slice(1, args.length); // 인덱스 범위에 해당하는 배열 요소를 추출한다. 여기서는 args.length가 전체 배열의 길이이므로 인덱스 범위 1번부터 마지막 항목까지 추출.
}
