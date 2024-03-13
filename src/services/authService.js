export const loginUser = async (loginData, navigate) => {
    try {
      const response = await fetch('https://shopinglistapi.onrender.com/api/v1/shl/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const authUser = await response.json();
  
      if (authUser.status === "Failed to login") {
        alert(authUser.message);
      } else {
        const userToken = String(authUser.token);
        const userName = String(authUser.data.name);
        const userId = String(authUser.data.id)
  
        localStorage.setItem('UserToken', userToken);
        localStorage.setItem('UserName', userName);
        localStorage.setItem('UserId', userId);

        navigate('/')
        //window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };

export const registerUser = async (registerData, navigate) => {
  console.log('Request Payload:', registerData);
    try {
        const response = await fetch('https://shopinglistapi.onrender.com/api/v1/shl/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        });

        const authUser = await response.json();

        if (authUser.status === "Successfull signup") {
            const userToken = String(authUser.data.token);
            const userName = String(authUser.data.newUser.name);
            const userId = String(authUser.data.newUser._id);
            
            localStorage.setItem('UserToken', userToken);
            localStorage.setItem('UserName', userName);
            localStorage.setItem('UserId', userId);

            navigate('/');
            alert("Registration successful!");
            window.location.reload()
        } else {
            alert("Fail to register new user");
        }
    } catch (error) {
        console.log(error);
    }
};

export const logout = ( navigate ) => {
    localStorage.removeItem('UserToken');
    localStorage.removeItem('UserName');
    localStorage.removeItem('UserId');
    navigate('/');
    window.location.reload();
    console.log('LocalStorage content after logout:', localStorage);
}