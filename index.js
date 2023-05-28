import _ from 'lodash';

export default function solution(content){
  // BEGIN
 const data = content.split('\r\n').map((val) => val.split(',')).slice(1, -1)
 console.log('Count: ' + data.length);
 
 const cities = _.uniq(data.map((val) => val[7]).sort());
 console.log('Cities:' + cities.map((val) => ' ' + val));
  // END
}