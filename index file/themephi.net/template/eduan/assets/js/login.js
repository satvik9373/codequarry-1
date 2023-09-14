 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBGOiD2xlgQQ_xz11simOcRvsd51uW_ijA",
    authDomain: "codequarry-login-and-signup-db.firebaseapp.com",
    projectId: "codequarry-login-and-signup-db",
    storageBucket: "codequarry-login-and-signup-db.appspot.com",
    messagingSenderId: "819041306735",
    appId: "1:819041306735:web:9a4af90d497c874404259a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

  // set up our register function
  function register () {
    // get all our input fields 
    email = document.getElementById('email')
  }