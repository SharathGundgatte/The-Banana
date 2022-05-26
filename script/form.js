const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAoebKtETZLMbw_S89PqKKrMM5k2fNl2ns",
    authDomain: "thebanana-123.firebaseapp.com",
    databaseURL: "https://thebanana-123-default-rtdb.firebaseio.com",
    projectId: "thebanana-123",
    storageBucket: "thebanana-123.appspot.com",
    messagingSenderId: "181549529584",
    appId: "1:181549529584:web:8d6d25d0e7a51e63344535",
    measurementId: "G-EKR7B7MJPY"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
