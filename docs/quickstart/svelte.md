---
title: Quickstart Svelte
---

<div class='container-link'>
  <a  class='button-stackblitz' href="https://stackblitz.com/fork/github/kontenbase/quickstart-svelte">
    <img
      src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
      alt="Open in StackBlitz"
    />
  </a>
  <a class='button-link button-github' href='https://github.com/kontenbase/quickstart-svelte'>View source
    <img src='/img/icon-github.svg' />
  </a>
</div>

## Intro

This example will show you how to build a simple user management app from scratch using Kontenbase and Svelte. Before begin make sure that you are familiar with Svelte basics.

This also includes:

- Kontenbase [Database](/service/find): to store data, such as users and profiles.
- Kontenbase [SDK](/overview/sdk): this will make easier to handle auth and service features.
- Kontenbase [Authentication & Authorization](/auth/register): users can sign in with username and password.
- Kontenbase [Storage](/storage/upload): users can upload a photo.

By the end, you'll have an application that is able to register a new user, login and update some basic profile details.

![](./assets//final-app.png)

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

![](./assets/database-profile.png)

We need some configuration in `Users` service to make both autheticated user and public can get or access users data. But don't worry, by default that will not return password, so user still secure.

1. Click on `Authorization` button.
2. Change service to `Users` and turn on `GET` permission for role autheticated and public.

![](./assets/profile-auth.png)

3. Add new field called : `username`, select data type : `username`, then set field as required and unique.
4. Enable username as user identity when logging in: click `Settings`, then `Configuration` on the sidebar, find `User identity field` and change to username.

### Get the API KEY

1. Go to the `Settings`.
2. Click `API` on the sidebar.
3. Find your API KEY in this page.

### Building the App

#### Initialize a Svelte App

We use Vite template to initialize a Svelte app called kontenbase-svelte:

```cmd
npm create vite@latest kontenbase-svelte -- --template svelte
cd kontenbase-svelte
npm install
```

Let's install Kontenbase SDK and additional dependency svelte-routing simply use the command below:

```
npm install @kontenbase/sdk svelte-routing
```

Save the API KEY to environment variable in a `.env` that you copied earlier.

```cmd title=".env"
VITE_SVELTE_APP_KONTENBASE_API_KEY=YOUR_KONTENBASE_API_KEY
```

Once that is done, let's create a helper file to initialize the Kontenbase Client and configure your SDK with the API KEY:

```js title="/src/lib/kontenbase.js"
import { createClient } from '@kontenbase/sdk';

export const kontenbase = createClient({
  apiKey: import.meta.env.VITE_SVELTE_APP_KONTENBASE_API_KEY,
});
```

An optional step is updating the CSS file to make the App look nice. Remove everything from the `app.css` and copy the css code that we have provided below:

```css title='/src/app.css'
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
a {
  text-decoration: none;
}
button,
.button {
  color: black;
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
  text-align: left;
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
.button-top {
  display: flex;
  justify-content: space-between;
}
.link-email {
  text-decoration: none;
  color: black;
}
```

#### Set up Login and Register Components

Let's set up the svelte components to manage login and register. We'll use username and password to login.
Create a folder inside the src which will be called `components`, then create `login.svelte` and `register.svelte` file inside the `components` folder and copy the code below in each files.

```js title='/src/components/login.svelte'
<script>
  import { navigate } from 'svelte-routing';
  import { kontenbase } from '../lib/kontenbase';

  let username;
  let password;

  const handleLogin = async () => {
    const { error, token } = await kontenbase.auth.login({
      // @ts-ignore
      username,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (token) {
      navigate('/profile');
    }
  };
</script>

<form on:submit|preventDefault={handleLogin}>
  <div class="form-group">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      bind:value={username}
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      bind:value={password}
    />
  </div>
  <div class="form-button">
    <button type="submit" class="button button-primary">Submit</button>
  </div>
</form>

```

```js title='/src/components/register.svelte'
<script>
  import { navigate } from 'svelte-routing';
  import { kontenbase } from '../lib/kontenbase';

  let firstName;
  let lastName;
  let username;
  let email;
  let password;

  const handleRegister = async () => {
    const { user, error } = await kontenbase.auth.register({
      firstName,
      lastName,
      // @ts-ignore
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
</script>

<form on:submit|preventDefault={handleRegister}>
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input
      type="text"
      id="firstname"
      name="firstname"
      required
      bind:value={firstName}
    />
  </div>
  <div class="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" name="lastname" bind:value={lastName} />
  </div>
  <div class="form-group">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      bind:value={username}
    />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required bind:value={email} />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      bind:value={password}
    />
  </div>
  <div class="form-button">
    <button type="submit" class="button button-primary">Submit</button>
  </div>
</form>
```

Create `home.svelte` file inside the `src` folder, this will import `Login` and `Register` components. Copy the code below:

```js title='/src/home.svelte'
<script>
  import Login from './components/login.svelte';
  import Register from './components/register.svelte';

  let switchAuthForm = 'login';

  const handleSwitchloginForm = () => {
    switchAuthForm = 'login';
  };

  const handleSwitchRegisterForm = () => {
    switchAuthForm = 'register';
  };
</script>

<div class="auth-page">
  <div class="auth-button">
    <button on:click={handleSwitchloginForm}>Login</button>
    <button on:click={handleSwitchRegisterForm}>Register</button>
    <div>
      {#if switchAuthForm === 'login'}
        <Login />
      {:else}
        <Register />
      {/if}
    </div>
  </div>
</div>
```

Now configure router for our app. Remove all code from `App.svelte`, copy the code below which is the router configuration.

```js title='/src/App.svelte'
<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './home.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={Home} />
</Router>
```

If we launch the App after doing the steps above, We'll see this page show:

![](./assets/auth-page.png)

#### Set up Profile Page

To view and edit our profile, let's create `edit-profile.svelte` file inside the `src` folder, then copy the code below:

```js title='/src/edit-profile.svelte'
<script>
  import { onMount } from 'svelte';
  import { Link, navigate } from 'svelte-routing';
  import { kontenbase } from './lib/kontenbase';

  let firstName;
  let lastName;
  let username;
  let profileId;
  let phoneNumber;
  let image;
  let company;
  let position;
  let location;
  let website;
  let loading;
  let files;

  const getProfile = async () => {
    const { user, error } = await kontenbase.auth.user({
      lookup: '*',
    });

    if (error) {
      console.log(error);
      return;
    }

    if (user) {
      const profile = user?.profile?.[0];
      firstName = user.firstName;
      lastName = user.lastName;
      phoneNumber = user.phoneNumber;
      username = user.username;
      profileId = profile._id;
      image = profile.image;
      company = profile.company;
      location = profile.location;
      position = profile.position;
      website = profile.website;
    }
  };

  const handleChangeImage = async () => {
    loading = true;
    const { data, error: uploadError } = await kontenbase.storage.upload(
      files[0]
    );

    const { error: updateError } = await kontenbase
      .service('profile')
      .updateById(profileId, {
        image: data?.url,
      });

    if (uploadError || updateError) {
      alert('Failed to change image profile');
      return;
    }

    image = data?.url;
    loading = false;
  };

  const handleUpdate = async () => {
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

  const handleLogout = async () => {
    const { error } = await kontenbase.auth.logout();

    if (error) {
      console.log(error);
      return;
    }

    navigate('/');
  };

  onMount(() => {
    getProfile();
  });
</script>

<div class="profile-page">
  <div class="button-top">
    <Link to={username} class="button">View Profile</Link>
    <button on:click={handleLogout}>Logout</button>
  </div>
  <div class="profile-wrapper">
    <div class="profile-header">
      <label class="label-file" for="file">
        <img
          class="image-avatar"
          width="90"
          height="90"
          src={image || 'https://via.placeholder.com/90'}
          alt=""
        />
        {#if loading}
          <span v-if="loading">Uploading...</span>
        {:else}
          <span v-else="loading">Change Image</span>
        {/if}
      </label>
      <input
        name="file"
        id="file"
        type="file"
        accept="image/*"
        bind:files
        on:change={handleChangeImage}
      />
    </div>
    <div class="card">
      <form on:submit|preventDefault={handleUpdate}>
        <div class="card-field">
          <label for="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            bind:value={firstName}
          />
        </div>
        <div class="card-field">
          <label for="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            bind:value={lastName}
          />
        </div>
        <div class="card-field">
          <label for="phonenumber">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            bind:value={phoneNumber}
          />
        </div>
        <div class="card-field">
          <label for="company">Company</label>
          <input type="text" id="company" name="company" bind:value={company} />
        </div>
        <div class="card-field">
          <label for="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            bind:value={position}
          />
        </div>
        <div class="card-field">
          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            bind:value={location}
          />
        </div>
        <div class="card-field">
          <label for="website">Website</label>
          <input type="url" id="website" name="website" bind:value={website} />
        </div>
        <div class="form-button">
          <button type="submit" class="button button-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

Create a route for Edit Profile page.

```js title='/src/App.svelte'
<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './home.svelte';
  // highlight-start
  import EditProfile from './edit-profile.svelte';
  // highlight-end

  export let url = '';
</script>
<Router {url}>
  <Route path="/" component={Home} />
  // highlight-start
  <Route path="/profile" component={EditProfile} />
  // highlight-end
</Router>
```

If we register or login successfully we should be navigated to `Profile` page. In this page we will able to edit profile and upload a picture.

![](./assets/update-profile.png)

#### Set up View Profile Based on the Username

Now we will create a page to show user profile based on the username defined in the URL. Example when user visit: `app_url/johndoe`,
this page will show user profile with username `johndoe`.

Create `profile.svelte` file inside the `src` folder, Copy the code below:

```js title='/src/profile.svelte'
<script>
  import { onMount } from 'svelte';
  import { Link, navigate } from 'svelte-routing';
  import { kontenbase } from './lib/kontenbase';

  export let params;

  let firstName;
  let lastName;
  let phoneNumber;
  let email;
  let profileId;
  let image;
  let company;
  let position;
  let location;
  let website;
  let isOwnProfile = false;

  const getProfile = async () => {
    if (!params) {
      return;
    }

    const { data, error } = await kontenbase.service('Users').find({
      where: {
        username: params,
      },
      lookup: '*',
    });

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      const user = data?.[0];
      const profile = user?.profile?.[0];
      firstName = user.firstName;
      lastName = user.lastName;
      phoneNumber = user.phoneNumber;
      email = user.email;
      profileId = profile._id;
      image = profile.image;
      company = profile.company;
      location = profile.location;
      position = profile.position;
      website = profile.website;

      const { user: authUser } = await kontenbase.auth.user();

      isOwnProfile = user.username === authUser?.username;
    }
  };

  const handleLogout = async () => {
    const { error } = await kontenbase.auth.logout();

    if (error) {
      console.log(error);
      return;
    }

    navigate('/');
  };

  onMount(() => {
    getProfile();
  });
</script>

<div class="profile-page">
  {#if isOwnProfile}
    <div class="button-top">
      <Link to="/profile" class="button">Edit Profile</Link>
      <button on:click={handleLogout}>Logout</button>
    </div>
  {/if}
  <div class="profile-wrapper">
    <div class="profile-header">
      <img
        class="image-avatar"
        width="90"
        height="90"
        src={image || 'https://via.placeholder.com/90'}
        alt=""
      />
      <h3 class="profile-title">
        <span>{firstName}</span> <span>{lastName}</span>
      </h3>
      <p>{position || 'position is null'}</p>
    </div>
    <div class="card">
      <h3>Contact</h3>
      <div class="card-field">
        <span>Name</span>
        <p>{firstName} {lastName}</p>
      </div>
      <div class="card-field">
        <span>Mobile</span>
        <p>{phoneNumber || 'phone number is null'}</p>
      </div>
      <div class="card-field">
        <span>Email</span>
        <a class="link-email" href="'mailto:' + email">
          {email || 'email is null'}
        </a>
      </div>
      <div class="card-field">
        <span>Company</span>
        <p>{company || 'company is null'}</p>
      </div>
    </div>
    <div class="card">
      <h3>Location</h3>
      <p>{location || 'location is null'}</p>
    </div>
    <div class="card">
      <h3>Web Links</h3>
      <a class="website-link" href={website || ''}> Website </a>
    </div>
  </div>
</div>
```

Create a route for Profile page.

```js title='/src/App.svelte'
<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './home.svelte';
  import EditProfile from './edit-profile.svelte';
  // highlight-start
  import Profile from './profile.svelte';
  // highlight-end

  export let url = '';
</script>
<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/profile" component={EditProfile} />
    // highlight-start
      <Route path=":username" let:params>
    <Profile params={params?.username} />
  </Route>
  // highlight-end
</Router>
```

And we're done to complete our App!
