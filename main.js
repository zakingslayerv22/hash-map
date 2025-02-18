import { LinkedList } from "./linked-lists.js";
import { HashMap } from "./hash-map.js";

const list = new LinkedList();

list.put("One", "Norway");
list.put("One", "Norway again");
list.put("Two", "Sweden");

console.log(list);

const hashMap = new HashMap();

hashMap.set("apple", "sweet");
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");

console.log(hashMap);
