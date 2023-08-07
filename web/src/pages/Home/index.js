import React, { useCallback, useEffect, useState } from "react";

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT } =
  process.env;

const Home = () => {
  const [username, setUsername] = useState(localStorage.getItem('goggleFirstName'))

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_goggle");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    
    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = new URLSearchParams({
      response_type: "code",
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: `${REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT}/google`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    });

    const url = `${googleAuthUrl}?${params}`;

    window.location.href = url;
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage when the button is clicked
    setUsername("")
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       {!username &&  <button
           
           className="bg-white text-gray-800 font-bold py-2 px-4 border rounded shadow  focus:outline-none  mb-8  mb-4"
           onClick={openGoogleLoginPage}
         >
           <div className="flex items-center justify-center">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 48 48"
               width="48px"
               height="48px"
             >
               <path
                 fill="#FFC107"
                 d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
               />
               <path
                 fill="#FF3D00"
                 d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
               />
               <path
                 fill="#4CAF50"
                 d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
               />
               <path
                 fill="#1976D2"
                 d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
               />
             </svg>
             Sign in with Google
           </div>
         </button>
     
      }
      {username ? (
        <div className="text-center">
          <small className="text-primary-600">User is logged as: {username}</small>
          <br/>
          <button onClick={handleLogout} className="bg-red-400 hover:bg-red-200 text-white font-semibold py-2 px-4 rounded mt-2">
      Logout
    </button>
        </div>
      ) : (
        <small className="text-primary-600">Ops not Logged in yet</small>
      )}
     

    </div>
  );
};

export default Home;
