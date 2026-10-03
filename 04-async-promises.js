function fetchuserdata(madarchod){
    setTimeout(function(){let user={id:1, name:'saad'};madarchod(user);},500)
}

fetchuserdata(function(loro){console.log('all good betta', loro)})