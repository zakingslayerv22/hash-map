import { LinkedList } from "./linked-lists.js";
import { HashMap } from "./hash-map.js";

const list = new LinkedList();

list.put("One", "Norway");
list.put("One", "Norway again");
list.put("Two", "Sweden");

console.log(list.fetch("One"));
console.log(list.exists("Three"));

console.log(list.removeNode("Two"));

console.log(list);

const hashMap = new HashMap();

hashMap.set("apple", "sweet");
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("applu", "green");
hashMap.set("ak", "white");

console.log(hashMap.get("applu"));

console.log(hashMap.has("banana"));

console.log(hashMap.remove("banana"));

console.log(hashMap);
