import { LinkedList } from "./linked-lists.js";
import { HashMap } from "./hash-map.js";

const list = new LinkedList();

list.set("One", "Norway");

list.set("One", "Norway again");

list.set("Two", "Sweden");

console.log(list);

const hashMap = new HashMap();

console.log(hashMap.hash("Belgium"));
