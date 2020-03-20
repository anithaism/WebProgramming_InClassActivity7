function check() {
    var id = document.getElementById('id').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    
    if(id=="")
    {
      alert("ID value is missing!");
      
    }
    if(fname=="")
    {
      alert("First Name value is missing!");
    }
    if(lname=="")
    {
      alert("Last Name value is missing!");
    }

    
}