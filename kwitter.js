var firebaseConfig = {
    apiKey: "AIzaSyAeHsyIcx_qVsx0MDryWEOCYBoqFqg4HTk",
    authDomain: "kwillter.firebaseapp.com",
    databaseURL:"https://kwillter-default-rtdb.firebaseio.com/",
    projectId: "kwillter",
    storageBucket: "kwillter.appspot.com",
    messagingSenderId: "50273170779",
    appId: "1:50273170779:web:7e28f3b69a01297909d67e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   //Start code

   console.log("Room Name - " + Room_names);
      row = "< div class = 'room_name' id = " +Room_names+ " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function redirectToRoomName(name){

  console.log(name);
  locatStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function YOGO(){

  alert("HI");

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"

  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitterpage.html";

}

function logout(){

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";


}