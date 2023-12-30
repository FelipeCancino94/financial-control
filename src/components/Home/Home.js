import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import SpentList from "../SpentList/SpentList";
import AddSpent from "../AddSpent/AddSpent";
import { useState } from "react";

function Home() {
  const [logged, setLogged] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const login = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          console.log(token);
          console.log(user);
          setLogged(true);
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        window.location.reload();
      }).catch((error) => {
        // An error happened.
      });
    } catch (error) {
      console.error(error);
    }
  };


  if (!logged) {
    return (
      <div className="home">
        <div className="flex items-center flex-col gap-4 min-h-screen	justify-center	">
          <iframe src="https://giphy.com/embed/YO3icZKE2G8OoGHWC9" width="480" height="400" frameBorder="0" className="giphy-embed" title="login gif" allowFullScreen></iframe>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg transition ease-in-out hover:bg-blue-300	hover:text-black" onClick={ () => login() }>Log in</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="home">
        <AddSpent></AddSpent>
        <SpentList></SpentList>
        <button className="absolute top-0 end-0 px-5 py-3 text-blue-600 hover:text-blue-100 transition ease-in-out" onClick={ () => logout() }>Log out</button>
      </div>
    )
  }
}

export default Home;