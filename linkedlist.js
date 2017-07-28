class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        const newNode = {
            value
        };

        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            // Find the node which we want to insert after
            const node = this._find(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }

        this.length++;
    }

    _find(index) {
        let node = this.head;
        for (let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        return this._find(index).value;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            // Find the node before the one we want to remove
            const node = this._find(index - 1);
            node.next = node.next.next;
        }

        this.length--;
    }
}
 //console.log("hello");
let list = new LinkedList();


// display: displays the linked list (you may also name this PrintList) 
// - You should use this function for other exercises to show the content of your list
function PrintList (list){
    let node = list.head;
    while(node !== null) {
        console.log(node.value);
        node =node.next;
    }
}

//size: returns the size of the linked list
function sizeList (list){
    let node =list.head;
    counter= 0;
    while (node !==null){
        counter ++;
        node=node.next;
    }
    return counter;
}


//isEmpty: finds if the list is empty or not
function isEmpty (list){
    if (list.head === null){
        return true;
    }
    return false;
}
 
//findPrevious: finds the node before the item you are looking for
function findPrev(list, value){
    let node =list.head;
    while(node.next !== null){
        if(node.next.value === value) return node;
        node = node.next;
    }
}

//findLast: returns the last node in the linked list
function findLast(list){
    let node = list.head;
    while(node.next !==null) {
        node =node.next;
    }
    return node;
}

list.insert(0,7);
list.insert(1,6);
list.insert(2,8);
list.insert(3,10);
list.insert(4,11);
list.insert(5,12);
list.insert(6,13);

//Write an algorithm to find the middle element of a linked list without using the .length property. 
function findMiddle (list) {
    let node=list.head;
    let p1= node;
    let p2=node;
    console.log("hello!",p2);
    console.log("bye!",p1);
  
    while (p1.next !==null && p1.next.next != null) {
        p2 = p2.next;
        p1 = p1.next.next;
    }
    return p2;
}

//Write an algorithm to find the third element from the end of a linked list without using the .length property.
function findThird (list){
    let node =list.head;
    while(node.next.next.next!== null){
        node =node.next;
    }
    return node;
}

//Write an algorithm to reverse a linked list.
//For this exercise, notice, we are not asking you to disply 
//the linked list from the end or use another linked list to store the value in reverse order.
//Your program should reverse the direction of a given singly-linked list. 
//In other words, all pointers should point backwards. 
//Your algorithm should take linear time O(n). BONUS: Solve this problem using recursive algorithm (and vice versa)
function reverse(list) {
    let node = list.head;
    let p1=node;
    let previous= null;
    //console.log(list);
    
    while (node){
        node.next = previous;
        previous=node;
        
        if(node.next){
            node=node.next;
        }else{
            node=null;
        }
    }
    console.log("bye",previous);
    console.log("hello!",node);
    return previous;

}

//list.remove(1);
//console.log(PrintList(list));
//console.log(sizeList(list));
//console.log(isEmpty(list));
//console.log(findPrev(list, 8));
//console.log(findLast(list));
//console.log(findThird(list));
//console.log(findMiddle(list));
console.log(reverse(list));

