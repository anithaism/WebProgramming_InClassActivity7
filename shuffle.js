function shuffle() {
    var arra1 = [0, 1, 2, 3, 4, 5];
    var ctr = arra1.length, temp, index;
    document.write(arra1);
    document.write("<br> After Shuffle:");

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    document.write(arra1);
}


