<script type="module">
  // Import the functions you need from the SDKs you ""need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  import{getFirestore,setDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
   apiKey: "AIzaSyCn2_Gvv-SyWhixHCEudCx4kCRyp2SHx7g",
    authDomain: "login-form-48f2a.firebaseapp.com",
    projectId: "login-form-48f2a",
    storageBucket: "login-form-48f2a.appspot.com",
    messagingSenderId: "312553129587",
    appId: "1:312553129587:web:9e4b68baca81aba31dcc06"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const signUp=document.getElementById('submitSignUp');
  signUp.addEventListener('click', (event)=>{
     Event.preventDefault();
  }
  </script>