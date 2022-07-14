---
title: Quickstart React
---

<a class='button-link' href='https://kontenbase-quickstart-react.stackblitz.io'>Try App
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="1em" height="1em"> <path d="M5.853 18.647h8.735L9.45 31l16.697-17.647h-8.735L22.55 1 5.853 18.647z"></path>
</svg>
</a>

<a class='button-link button-github' href='https://github.com/kontenbase/quickstart-react'>View Source
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
</a>

## Intro

This example will show you how to build a simple user management app from scratch using Kontenbase and React. Before begin make sure that you are familiar with ReactJs basics.

This also includes:

- Kontenbase [Database](/service/find): to store data, such as users and profiles.
- Kontenbase [SDK](/overview/sdk): this will make easier to handle auth and service features.
- Kontenbase [Authentication & Authorization](/auth/register): users can sign in with username and password.
- Kontenbase [Storage](/storage/upload): users can upload a photo.

By the end, you'll have an application that is able to register a new user, login and update some basic profile details.

![](./assets/final-app.png)

## Project Set up

Before we start building we're going to set up our Database and get the API KEY.

### Create a Project

1. Go to [app.kontenbase.com](https://app.kontenbase.com)
2. Click on `Create Project` button.
3. Enter your project details.
4. Wait for the new project to launch.

### Set up the Database Service

Now we are going to set `profile` and `Users` service.

1. Click on `Create New Service` button.
2. Fill in the service detail, give a name `profile`, select as private.
3. Click on `profile` service, select`Customize Fields`, then add some fields following picture below. note, there is a field `Users` with data type `Link To Record`. It means we create a data relation between the service `profile` with the `Users`.

![](./assets/field-profile.png)

We need some configuration in `Users` service to make both autheticated user and public can get or access users data. But don't worry, by default that will not return password, so user still secure.

1. Click on `Authorization` button.
2. Change service to `Users` and turn on `GET` permission for role autheticated and public.

![](./assets/profile-authorization.png)

3. Add new field called : `username`, select data type : `username`, then set field as required and unique.
4. Enable username as user identity when logging in: click `Settings`, then `Configuration` on the sidebar, find `User identity field` and change to username.

### Get the API KEY

1. Go to the `Settings`.
2. Click `API` on the sidebar.
3. Find your API KEY in this page.

### Building the App

To build the application you can set up your project on your local computer or [StackBlitz](https://stackblitz.com), it depends on your prereferences. You can check out and try the completed project code on StackBlitz, [click here](https://stackblitz.com/edit/kontenbase-quickstart-react).

#### Initialize a React App

We can use Create React App to initialize an App called kontenbase-react:

```cmd
npx create-react-app kontenbase-react
cd kontenbase-react
```

Let's install Kontenbase SDK and additional dependency react-router-dom, simply use the command below:

```
npm install @kontenbase/sdk react-router-dom
```

Save the API KEY to environment variable. create `.env` file inside the root folder.

```cmd title=".env"
REACT_APP_KONTENBASE_API_KEY=YOUR_API_KEY
```

Once that is done, let's create a helper file to initialize the Kontenbase Client and configure your SDK with the API KEY:

```js title="/src/lib/kontenbase.js"
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
  border: 1px solid gainsboro;
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
.card:not(:last-child) {
  margin-bottom: 12px;
}
.card h3 {
  font-weight: 500;
  margin-bottom: 24px;
}
.card-field:not(:last-child) {
  margin-bottom: 12px;
}
.card-field input {
  font-size: 16px;
}
.card span,
.card label {
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
input[type='file'] {
  display: none;
}
.label-file {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  cursor: pointer;
}
.label-file span {
  margin-top: 10px;
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
  border: 1px solid gainsboro;
}
.link-email {
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

    navigate('/profile');
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

    navigate('/profile');
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

      navigate('/profile');
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

![](./assets/auth-page.png)

#### Set up Profile Page

To view and edit our profile, let's create `EditProfile.js` file inside the `pages` folder, then copy the code below:

```js title='/src/pages/EditProfile.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [profileId, setProfileId] = React.useState('');
  const [image, setImage] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [loading, setLoading] = React.useState(false);

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

      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setphoneNumber(user?.phoneNumber);
      setUsername(user?.username);
      setProfileId(profile?._id);
      setImage(profile?.image);
      setCompany(profile?.company);
      setLocation(profile?.location);
      setPosition(profile?.position);
      setWebsite(profile?.website);
    })();
  }, []);

  const handleViewProfile = () => {
    navigate(`/${username}`);
  };

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
    const { error: updateError } = await kontenbase
      .service('profile')
      .updateById(profileId, {
        image: data?.url,
      });

    if (uploadError || updateError) {
      alert('Failed to change image profile');
      return;
    }

    setImage(data?.url);
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
      alert('Failed to update profile');
    } else {
      alert('Profile updated!');
    }
  };

  return (
    <div className="profile-page">
      <div className="button-top">
        <button onClick={handleViewProfile}>View Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="profile-wrapper">
        <div className="profile-header">
          <label className="label-file" htmlFor="file">
            <img
              className="image-avatar"
              width={90}
              height={90}
              src={image ? image : 'https://via.placeholder.com/90'}
              alt=""
            />
            <span>{loading ? 'Uploading...' : 'Change Image'}</span>
          </label>
          <input onChange={handleChangeImage} id="file" type="file" />
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

export default EditProfile;
```

Create a route for Profile page.

```js title='/src/App.js'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
// highlight-start
import EditProfile from './pages/EditProfile';
// highlight-end

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        // highlight-start
        <Route path="/profile" element={<EditProfile />} />
        // highlight-end
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

If we register or login successfully we should be navigated to `Profile` page. In this page we will able to edit profile and upload a picture.

![](./assets/update-profile.png)

#### Set up Profile Page

Now we will create a page to show user profile based on the username defined in the URL. Example when user visit: app_url/`johndoe`,
this page will show user profile with username `johndoe`.

Create `Profile.js` file inside the `pages` folder, Copy the code below:

```js title='/src/pages/Profile.js'
import * as React from 'react';
import { kontenbase } from '../lib/kontenbase';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [authUsername, setAuthUsername] = React.useState('');
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

      setAuthUsername(user?.username);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (!username) {
        return;
      }

      const { data, error } = await kontenbase.service('Users').find({
        where: {
          username,
        },
        lookup: '*',
      });

      if (error) {
        console.log(error);
        return;
      }

      setUser(data?.[0]);
    })();
  }, [username]);

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleLogout = async () => {
    const { error } = await kontenbase.auth.logout();

    if (error) {
      console.log(error);
      return;
    }

    navigate('/');
  };

  return (
    <>
      {user && (
        <div className="profile-page">
          {authUsername === username && (
            <div className="button-top">
              <button onClick={handleEditProfile}>Edit Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <div className="profile-wrapper">
            <div className="profile-header">
              <img
                className="image-avatar"
                width={90}
                height={90}
                src={
                  user.profile?.[0]?.image ?? 'https://via.placeholder.com/90'
                }
                alt=""
              />
              <h3 className="profile-title">
                <span>{user.firstName}</span> <span>{user.lastName ?? ''}</span>
              </h3>
              <p>{user.profile?.[0]?.position ?? 'position is null'}</p>
            </div>
            <div className="card">
              <h3>Contact</h3>
              <div className="card-field">
                <span>Name</span>
                <p>
                  {user.firstName} {user.lastName ?? ''}
                </p>
              </div>
              <div className="card-field">
                <span>Mobile</span>
                <p>{user.phoneNumber ?? 'phone number is null'}</p>
              </div>
              <div className="card-field">
                <span>Email</span>
                <a className="link-email" href="mailto:name@email.com">
                  {user.email}
                </a>
              </div>
              <div className="card-field">
                <span>Company</span>
                <p>{user.profile?.[0]?.company ?? 'company is null'}</p>
              </div>
            </div>
            <div className="card">
              <h3>Location</h3>
              <p>{user.profile?.[0]?.location ?? 'location is null'}</p>
            </div>
            <div className="card">
              <h3>Web Links</h3>
              <a
                className="website-link"
                href={user.profile?.[0]?.website ?? ''}
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

export default Profile;
```

Finally, create a route for this page.

```js title='/src/App.js'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import EditProfile from './pages/EditProfile';
//highlight-start
import Profile from './pages/Profile';
//highlight-end

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<EditProfile />} />
        //highlight-start
        <Route path="/:username" element={<Profile />} />
        //highlight-end
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

And we're done to complete our App!
