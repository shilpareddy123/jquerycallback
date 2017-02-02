function getUsers(cb){
  $.get("json/users.json",function(data) {
    console.log('normal - ',data);
    cb(data);
  });
}
function printUsers(data){
  console.log('callback - ',data);
   data.user.forEach(function(user) {
    $("#myList ul").append('<li>'+user.name+'</li>');
  });
  $("#myList ul").append("<li>Done..</li>");
}
getUsers(printUsers);
