var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let aux = 0;

    while(l1 !== null || l2 !== null || aux > 0){
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        let calculo = val1 + val2 + aux;
        aux = Math.floor(calculo / 10);
        let somaDigito = calculo % 10;

        current.next = new ListNode(somaDigito);
        current = current.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))