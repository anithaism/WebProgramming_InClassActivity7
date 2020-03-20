function printnumber() 
{

var num=document.getElementById("myNumber").value;

    var a = 0, b = 1, f = 1;
    document.write(a);
    document.write(" ");
    document.write(b); 
    for(var i = 2; i < num; i++) {
        f = a + b;
        a = b;
        b = f;
     document.write(" ");
     document.write(f);
    }
}