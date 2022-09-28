var firebaseConfig = {
      apiKey: "AIzaSyCSkoGBCezeLFSDryVjhefpd7musKZ1OZU",
      authDomain: "kwitter-b397a.firebaseapp.com",
      databaseURL: "https://kwitter-b397a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b397a",
      storageBucket: "kwitter-b397a.appspot.com",
      messagingSenderId: "348432089824",
      appId: "1:348432089824:web:172e4a3e20db709ee10685",
      measurementId: "G-M92HBL313F"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     username=localStorage.getItem("user name");
     document.getElementById("user_name").innerHTML="Welcome  " + username + " !" ;


     function addroom(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose  : "bhavya"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";


     }
                






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+ Room_names+"onclick='redirecttoroomname(this.id)'> #"+ Room_names + "</div><hr> ";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem('room_name' ,name);
      window.location='kwitter_page.html';
}
function logout(){
      localStorage.removeItem("user name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}