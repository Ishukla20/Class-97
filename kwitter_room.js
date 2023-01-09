const firebaseConfig = {
      apiKey: "AIzaSyCEfgqZ05qjqmDlpLDVk_lEHhNQ8abYpt4",
      authDomain: "kwitter-edbf1.firebaseapp.com",
      databaseURL: "https://kwitter-edbf1-default-rtdb.firebaseio.com",
      projectId: "kwitter-edbf1",
      storageBucket: "kwitter-edbf1.appspot.com",
      messagingSenderId: "317884524414",
      appId: "1:317884524414:web:cf4cef574791481592f52f"
    };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"😁!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname= "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace=("index.html");
}