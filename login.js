function validate()
{
    var username=document.getElementById("username").Value
    var password=document.getElementById("password").Value

    if(username=="admin"&&password=="userid")
    {
        alert("login succssfuly....... ");
        return false;
    }
    else{
        alert("login failed :");
    }
}