import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

const App = () => {

  const GoogleHandleSubmit = async () => {
    const googleProvider =  new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    console.log("Google User: ", user)
    

  }

  const FacebookHandleSubmit = async () => {
    const facebookProvider =  new FacebookAuthProvider();
    const result = await signInWithPopup(auth, facebookProvider )
    const user = result.user
    console.log("Facebook User: ", user)
  }
 
  return ( 
  <section className="auth-form">
    <h1>Login</h1>
    
   
    <div className="social-login">
      <button onClick={GoogleHandleSubmit}>Login with Google</button>
      <button onClick={FacebookHandleSubmit}>Login with Facebook</button>
    </div>
    

  </section> );
}
 
export default App;