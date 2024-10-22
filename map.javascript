const map = new Map();
map.set('name:', 'Thinh');
map.set('age:', 20);
map.set('country:','Viet Nam') 
console.log(map.size);               
for (let [key, value] of map) {
    console.log(key, value);
}
console.log(map.get('name:')); 
map.delete('age:');
console.log(map.get('age:')); 
console.log(map.has('age:'));
map.clear();
console.log(map.size); 
