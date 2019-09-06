document.querySelector('#subscribe-form').addEventListener('submit' , function(e){
    e.preventDefault()
    submitproduct()
})
var firebaseConfig = {
    apiKey: "AIzaSyBvu-Kwa9eunAZZzkQA02PUcfpdzDg59Cw",
    authDomain: "amin-8e0f5.firebaseapp.com",
    databaseURL: "https://amin-8e0f5.firebaseio.com",
    projectId: "amin-8e0f5",
    storageBucket: "",
    messagingSenderId: "810556948345",
    appId: "1:810556948345:web:ddaa6e95a8e32e7eabb9a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database()
  function submitproduct(){


  let ref = database.ref('users/' + document.querySelector("#course").value , )



  let data ={
    Name : document.querySelector("#name").value ,
    Email : document.querySelector("#email").value ,
    Phone : document.querySelector("#phone").value ,
    Shool : document.querySelector("#Shool").value ,
    Course : document.querySelector("#course").value ,
    sub : document.querySelector("#sub").value ,

  }
   
ref.push(data)
}