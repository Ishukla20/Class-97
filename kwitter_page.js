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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         //Star Code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

//End Code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on the like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=" "; 
}