---
title: Quickstart React
---

## Intro
This example will show you how to build a simple user management app from scratch using Kontenbase and React. Before begin make sure that you are familiar with ReactJs basics.

 This also includes:
- Kontenbase [Database](/service/find): to store data, such as users and profiles.
- Kontenbase [SDK](/overview/sdk): this will make easier to handle auth and service features. 
- Kontenbase [Authentication & Authorization](/auth/register): users can sign in with username and password.
- Kontenbase [Storage](/storage/upload): users can upload a photo.

By the end, you'll have an application that is able to register a new user, login and update some basic profile details.

![](./assets/kontenbase-final-app.png)

## Project Set up
Before we start building we're going to set up our Database and get the API KEY.

### Create a Project
1. Go to [app.kontenbase.com](https://app.kontenbase.com) 
2. Click on `Create Project` button.
3. Enter your project details.
4. Wait for the new project to launch.

### Set up the Database Service
Now we are going to set `Profiles` and `Users` service.
1. Click on `Create New Service` button.
2. Fill in the service detail, give a name `Profiles`, select as private.
3. Click on `Profiles` service, select`Customize Fields`,  then add some fields following picture below. note, there is a field `Users` with data type `Link To Record`. It means we create a data relation between the service `Profiles` with the `Users`.

![](./assets/profile-field.png)

We need some configuration  in `Users` service to make both autheticated user and public can get or access users data. But don't worry, by default that will not return password, so user still secure.  
1. Click on `Authorization` button.
2. Change service to `Users` and turn on `GET` permission for role autheticated and public. 

![](./assets/user-service-permission.png)

3. Add new field called : `username`, select data type : `username`, then set field as required and unique.
4. Enable username as user identity when logging in:  click `Settings`, then `Configuration` on the sidebar, find `User identity field` and change to username. 

### Get the API KEY
1. Go to the `Settings`.
2. Click `API` on the sidebar.
3. Find your API KEY in this page.

### Building the App
To build the application you can set up your project on your local computer or [stackblitz](https://stackblitz.com), it depends on your prereferences. You can check out and try the completed project code on stackblitz, [click here](https://github-jcdvaq-ukv45g.stackblitz.io/).

#### Initialize a React App
We can use Create React App to initialize an App called kontenbase-react:
```cmd
npx create-react-app kontenbase-react
cd kontenbase-react
```
Let's install Kontenbase SDK and additional dependency react-router-dom,  simply use the command below:

```
npm install @kontenbase/sdk react-router-dom
```
Save the API KEY to environment variable. create `.env` file inside the root folder.

```cmd title=".env"
REACT_APP_KONTENBASE_API_KEY=YOUR_API_KEY
```

Once that is done, let's create a helper file to initialize the Kontenbase Client and configure your SDK with the API KEY:


```js  title="/src/lib/kontenbase.js"
import { KontenbaseClient } from '@kontenbase/sdk';

export const kontenbase = new KontenbaseClient({
  apiKey: process.env.REACT_APP_KONTENBASE_API_KEY,
});
```

An optional step is updating the CSS file on src/index.css to make the App look nice. Remove everything from the src/index.css and copy the css code that we have provided below:

```css title='/src/index.css'
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}
button {
    background-color: transparent;
    border: none;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
}
.button-ouline {
    border: 1px solid  gainsboro;
}
.button-primary {
    background-color: black;
    color: white;
}
.auth-page {
    margin: 0 auto;
    width: 560px;
    padding: 14px;
}
.auth-button {
    text-align: right;
    margin-bottom: 16px;
}
.auth-page h2 {
    text-align: center;
}
.form-group {
    margin-bottom: 12px;
    font-size: 16px;
}
.form-group label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 16px;
}
.form-group input {
    padding: 8px 12px;
    width: 100%;
    font-size: 16px;
}
.form-button {
    text-align: right;
}
.profile-page {
    margin: 0 auto;
    width: 560px;
}
.profile-wrapper {
    background-color: black;
    padding: 14px;
    color: white;   
}
.profile-header {
    text-align: center;
    padding: 24px 0;
}
.profile-title {
    margin: 8px 0;
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
}
.image-avatar {
    border-radius: 50px;
}
.card {
    background-color: white;
    color: black;
    border-radius: 2px;
    padding: 14px;
}
.card:not(:last-child){
    margin-bottom: 12px;
}
.card h3 {
    font-weight: 500;
    margin-bottom: 24px;
}
.card-field:not(:last-child){
    margin-bottom: 12px;
}
.card-field input {
    font-size: 16px;
}
.card span, .card label {
    display: block;
    font-size: 14px;
    color: gray;
    margin-bottom: 4px;
}
.card input {
    display: block;
    font-family: 16px;
    padding: 8px 8px 8px 0;
    color: black;
    width: 100%;
    border: none;
    border-bottom: 1px solid gainsboro;
    outline: none;  
}
.button-map {
    display: block;
    margin-top: 8px;
}
.website-link {
    text-decoration: none;
    color: black;
}
.logout-button {
    text-align: end;
}
input[type="file"] {
    display: none;
}
.label-file {
    display: block;
    margin-top: 2px;
    cursor: pointer;
}
.not-autheticated {
    margin-top: 30vh;
    text-align: center;
}
.not-autheticated button {
    border: 1px solid white;
    margin-top: 16px;
}
.button-top {
    display: flex;
    justify-content: space-between;
}
.share-contact {
    text-align: right;
}
.button-share {
    font-size: 12px;
    border: 1px solid gainsboro
}
.link-email{
    text-decoration: none;
    color: black;
}
```

#### Set up Login and Register Components
Let's set up the react components to manage login and register. We'll use username and password to login.

Create the folders inside the src which will be called `pages` and `components`, then create `Login.js` and `Register.js` file inside the `components` folder and copy the code below in each files.

```js title='/src/components/Login.js'
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { kontenbase } from '../lib/kontenbase';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await kontenbase.auth.login({
      username,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    navigate('/myaccount');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button className="button button-primary" type="sumbit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
```

```js title='/src/components/Register.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const { user, error } = await kontenbase.auth.register({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const { error: ErrorProfile } = await kontenbase.service('profile').create({
      Users: [user._id],
    });

    if (ErrorProfile) {
      alert(ErrorProfile.message);
      return;
    }

    navigate('/myaccount');
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-button">
          <button className="button button-primary" type="sumbit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
```

Create `Auth.js` file inside the `pages` folder, this will import `Login` and `Register` components. Copy the code below: 

```js title='/src/pages/Auth.js'
import * as React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [switchAuthForm, setSwitchAuthForm] = React.useState('login');

  React.useEffect(() => {
    (async () => {
      const { error } = await kontenbase.auth.user();

      if (error) {
        console.log(error);
        return;
      }

      navigate('myaccount');
    })();
  }, []);

  const handleRegisterForm = () => {
    setSwitchAuthForm('register');
  };

  const handleLoginForm = () => {
    setSwitchAuthForm('login');
  };

  return (
    <div className="auth-page">
      <div className="auth-button">
        <button onClick={handleLoginForm}>Login</button>
        <button onClick={handleRegisterForm}>Register</button>
      </div>
      {switchAuthForm === 'register' ? <Register /> : <Login />}
    </div>
  );
};

export default Auth;
```

Create a route for Auth page, then launch App.

```js title='/src/App.js'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

This is what we will see after doing the steps above.

![](./assets/auth-form.png)

#### Set up Account Page

To see our profile, let's create  `Account.js` file inside the `pages` folder, then copy the code below:

```js title='/src/pages/Account.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    (async () => {
      const { user, error } = await kontenbase.auth.user({
        lookup: '*',
      });

      if (error) {
        console.log(error);
        return;
      }

      setUser(user);
    })();
  }, []);

  const handleLogout = async () => {
    const { error } = await kontenbase.auth.logout();

    if (error) {
      console.log(error);
      return;
    }

    navigate('/');
  };

  const handleShareProfile = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(
      'REACT_APP_URL/profile/' + user?.username
    );
    alert('Link Copied!');
  };

  const handleLogin = () => {
    navigate('/');
  };

  const handleEditAccount = () => {
    navigate('/edit-account');
  };

  return (
    <>
      {!user ? (
        <div className="not-autheticated">
          <p>Your Are not autheticated!</p>
          <button onClick={handleLogin} className="button button-primary">
            Login
          </button>
        </div>
      ) : (
        <div className="profile-page">
          <div className="button-top">
            <button onClick={handleEditAccount}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="profile-wrapper">
            <div className="profile-header">
              <img
                className="image-avatar"
                width={90}
                height={90}
                src={
                  user?.profile?.[0]?.image ?? 'https://via.placeholder.com/90'
                }
                alt=""
              />
              <h3 className="profile-title">
                <span>{user?.firstName}</span>{' '}
                <span>{user?.lastName ?? ''}</span>
              </h3>
              <p>{user?.profile?.[0]?.position ?? 'position is null'}</p>
            </div>
            <div className="card">
              <div className="share-contact">
                <button className="button-share" onClick={handleShareProfile}>
                  Share
                </button>
              </div>
              <h3>Contact</h3>
              <div className="card-field">
                <span>Name</span>
                <p>
                  {user?.firstName} {user?.lastName ?? ''}
                </p>
              </div>
              <div className="card-field">
                <span>Mobile</span>
                <p>{user?.phoneNumber ?? 'phone number is null'}</p>
              </div>
              <div className="card-field">
                <span>Email</span>
                <a className="link-email" href="mailto:name@email.com">
                  {user?.email}
                </a>
              </div>
              <div className="card-field">
                <span>Company</span>
                <p>{user?.profile?.[0]?.company ?? 'company is null'}</p>
              </div>
            </div>
            <div className="card">
              <h3>Location</h3>
              <p>{user?.profile?.[0]?.location ?? 'location is null'}</p>
            </div>
            <div className="card">
              <h3>Web Links</h3>
              <a
                className="website-link"
                href={user?.profile?.[0]?.website ?? ''}
              >
                Website
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
```

Create  a route for Account page.

```js title='/src/App.js'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
// highlight-start
import Account from './pages/Account';
// highlight-end

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        // highlight-start
        <Route path="/myaccount" element={<Account />} />
        // highlight-end
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
If we register or login successfully we should be navigated to `Account` page. But there is a little problem, because some field will show null. Let's create `EditAccount.js` inside the `pages` folder to update our data.


```js title='/src/pages/EditAccount.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate } from 'react-router-dom';

const EditAccount = () => {
  const navigate = useNavigate();
  const [profileId, setProfileId] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [website, setWebsite] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const { user, error } = await kontenbase.auth.user({
        lookup: '*',
      });

      if (error) {
        console.log(error);
        return;
      }

      const profile = user?.profile?.[0];
      setProfileId(profile?._id);
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setphoneNumber(user?.phoneNumber);
      setImage(profile?.image);
      setCompany(profile?.company);
      setLocation(profile?.location);
      setPosition(profile?.position);
      setWebsite(profile?.website);
    })();
  }, []);

  const handleLogout = async () => {
    const { error } = await kontenbase.auth.logout();

    if (error) {
      console.log(error);
      return;
    }

    navigate('/');
  };

  const handleChangeImage = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const { data, error: uploadError } = await kontenbase.storage.upload(file);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const { error: updateError } = await kontenbase
      .service('profile')
      .updateById(profileId, {
        image: data?.url,
      });

    if (updateError) {
      alert(updateError.message);
      return;
    }

    setImage(data?.image);
    setLoading(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error: userError } = await kontenbase.auth.update({
      lastName,
      firstName,
      phoneNumber,
    });

    const { error: profileError } = await kontenbase
      .service('profile')
      .updateById(profileId, {
        company,
        location,
        position,
        website,
      });

    if (userError || profileError) {
      return;
    }

    navigate('/myaccount');
  };

  const handleGotoBack = () => {
    navigate('/myaccount');
  };

  return (
    <div className="profile-page">
      <div className="button-top">
        <button className="button-back" onClick={handleGotoBack}>
          Back
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="profile-wrapper">
        <div className="profile-header">
          <img
            className="image-avatar"
            width={90}
            height={90}
            src={image ? image : 'https://via.placeholder.com/90'}
            alt=""
          />
          <div>
            <label className="label-file" htmlFor="file">
              {loading ? 'Loading...' : 'Change Image'}
            </label>
            <input onChange={handleChangeImage} id="file" type="file" />
          </div>
        </div>
        <div className="card">
          <form onSubmit={handleUpdate}>
            <div className="card-field">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value) || ''}
              />
            </div>
            <div className="card-field">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value) || ''}
              />
            </div>
            <div className="card-field">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber || ''}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
            <div className="card-field">
              <label>Company</label>
              <input
                type="text"
                value={company || ''}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="card-field">
              <label>Position</label>
              <input
                type="text"
                value={position || ''}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="card-field">
              <label>Location</label>
              <input
                type="text"
                value={location || ''}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="card-field">
              <label>Website</label>
              <input
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="form-button">
              <button type="submit" className="button button-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
```
Create a route for Edit Account page.

```js title='/src/App.js'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import Account from './pages/Account';
// highlight-start
import EditAccount from './pages/EditAccount';
// highlight-end

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/myaccount" element={<Account />} />
      // highlight-start
         <Route path="/edit-account" element={<EditAccount />} />
           // highlight-end
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
Now you will able to update data and upload a picture.

![](./assets/kontenbase-final-app.png)

#### Set up Share Profile Page
You may notice if there is a share button. this button will copy our account link, then you can share to other user if they want to view your profile.
to make this work, let's create new page called `profile`, this page accept param to find user by username.
copy the code below:

```js title='/src/pages/Profile.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const [user, setUser] = React.useState();
  const [profile, setProfile] = React.useState();

  React.useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { username } = params;
    const { data: user } = await kontenbase.service('Users').find({
      where: {
        username,
      },
      lookup: '*',
    });
    setUser(user[0]);
    setProfile(user[0].profile[0]);
  };

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        <div className="profile-header">
          <img
            width={90}
            height={90}
            className="image-avatar"
            src={
              profile?.image ? profile?.image : 'https://via.placeholder.com/90'
            }
            alt=""
          />
          <h3 className="profile-title">
            <span>{user?.firstName}</span>
            {user?.lastName ? <span> {user?.lastName}</span> : ''}
          </h3>
          <p>{profile?.position ? profile.position : 'null'}</p>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <div className="card-field">
            <span>Name</span>
            <p>
              {user?.firstName}
              {user?.lastName ? ' ' + user?.lastName : ''}
            </p>
          </div>
          <div className="card-field">
            <span>Mobile</span>
            <p>{user?.phoneNumber ? user?.phoneNumber : 'null'}</p>
          </div>
          <div className="card-field">
            <span>Email</span>
            <a className="link-email" href="mailto:name@email.com">
              {user?.email}
            </a>
          </div>
          <div className="card-field">
            <span>Company</span>
            <p>{profile?.company ? profile?.company : 'null'}</p>
          </div>
        </div>
        <div className="card">
          <h3>Location</h3>
          <p>{profile?.location}</p>
        </div>
        <div className="card">
          <h3>Web Link</h3>
          {profile?.website ? (
            <a className="website-link" href={profile?.website}>
              {profile?.website}
            </a>
          ) : (
            'null'
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
```

Finally, create a route for Profile page.

```js title='/src/App.js'
import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import EditAccount from './pages/EditAccount';
import Account from './pages/Account';
//highlight-start
import Profile from './pages/Profile';
//highlight-end
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/myaccount" element={<Account />} />
        <Route path="/edit-account" element={<EditAccount />} />
        //highlight-start
        <Route path="/profile/:username" element={<Profile />} />
        //highlight-end
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

And we're done to complete our App! 