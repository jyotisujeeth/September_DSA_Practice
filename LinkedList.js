/*
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/
var hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
/////////////////////////////////Using Hash Map//////////////////////////////////////////////////////////////////////

var hasCycle = function(head) {
    const seen = new Set();
    
    function traverse(node) {
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};
//////////////////////////////////////Two Pointers/////////////////////////////////////////////////////////////////////////
var hasCycle = function(head) {
    
    function run(fast, slow) {
        if(!fast || !fast.next) return false;
        if(fast.next === slow) return true;
        return run(fast.next.next, slow.next);
    }
    return run(head, head);    
};
/////////////////////////////////////////////////////////Add Property//////////////////////////////////////////////////////////////////////////////
var hasCycle = function(head) {
    
    function run(node) {
        if(!node) return false;
        if(node.seen) return true;
        node.seen = true;
        return run(node.next);
    }
    return run(head);
};
