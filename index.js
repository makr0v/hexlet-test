export default function solution(content){
  // BEGIN
 const data = content.split('\r\n').map((val) => val.split(',')).slice(1, -1)
 console.log('Count: ' + data.length);
  // END
}