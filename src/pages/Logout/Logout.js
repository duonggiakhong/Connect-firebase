import React from "react";
import { useHistory } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
function Logout() {
    const history = useHistory();
    const auth = getAuth();
    signOut(auth).then(() => {
        history.push("/")
    })
    return (
        <div></div>
    );
}


export default Logout;