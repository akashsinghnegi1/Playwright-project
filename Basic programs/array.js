let names = ['akash', 'tom', 'mitchell', 'harry', 1, 1.2345]
console.log(names)
let sorted = names.sort().reverse()
console.log(sorted)

//2D array
let electronics = ['earphone', 'laptop', 'phone']
let food = ['burger', 'fries', 'dal chawal']

let allItems = [electronics, food]
for(let i of allItems){
    for(let j of i){
        console.log(j)
    }
}
