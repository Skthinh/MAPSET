// Create a new Set
const set = new Set();

// Add values to the Set
set.add('My');
set.add('name');
set.add('is'); 
set.add('Thinh');
set.add('and I'm 20 years old');
console.log(set.size); 
console.log(set.has('My'));       
console.log(set.has(120));     
for (let value of set) {
    console.log(value);
}
set.delete('Thinh');
console.log(set.has('Thinh')); 
set.clear();
console.log(set.size);    
