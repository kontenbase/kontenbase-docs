---
title: Login with Google
---

# Login with Facebook
To enable Facebook Auth for your project, you need to set up a Facebook OAuth application and add the application credentials to your Kontenbase Dashboard.

## Overview
Setting up Facebook logins for your application consists of 3 parts:

- Create and configure a Facebook Application on the [Facebook Developers Site](https://developers.facebook.com/)
- Add your Facebook keys to your [Kontenbase Project]()
- Add the login code to your [Kontenbase JS Client App]()

## Access your Facebook Developer account
- Go to developers.facebook.com.
- Click on Log In at the top right to log in.

## Create a Facebook App
- Click on `My Apps` at the top right.
- Click `Create App` near the top right.
- Select your app type and click `Continue`.
- Fill in your app information, then click `Create App`.
- This should bring you to the screen: `Add Products to Your App`.
    - (Alternatively you can click on `Add Product` in the left sidebar to get to this screen.)

## Set up FaceBook Login for your Facebook App
From the `Add Products` to your App screen:

- Click `Setup` under `Facebook Login`
- Skip the Quickstart screen, instead, in the left sidebar, click `Settings` under `Facebook Login`
- Enter your callback URI under `Valid OAuth Redirect URIs` on the `Facebook Login Settings` page
- Enter this in the `Valid OAuth Redirect URIs` box
- Click `Save Changes` at the bottom right

Be aware that you have to set the right access levels on your Facebook App to enable 3rd party applications to read the email address. From the `App Review -> Permissions and Features` screen:

- Click the button `Request Advanced Access` on the right side of `public_profile` and `email`

You can read more about access levels [here](https://developers.facebook.com/docs/graph-api/overview/access-levels/)

## Copy your Facebook App ID and Secret
- Click `Settings / Basic` in the left sidebar
- Copy your App ID from the top of the `Basic Settings` page
- Under `App Secret` click `Show` then copy your secret
- Make sure all required fields are completed on this screen.

## Enter your Facebook credentials into your Kontenbase Project
- Go to your project `Settings`
- Hover to `Configurations` menu
- Enable the toggle `Facebook enabled`
- Fill the `Faceboook client ID` and `Facebook Secret`
- Click `Save`

## Ensure Login with Facebook is ready to use
- Hover back to `API` menu
- In `Authentication` section, looks for `/login/facebook`
- Now, login with Facebook (OAuth) is ready to use