---
title: Login with Google
---

# Login with Google
To enable Google Auth for your project, you need to set up a Google OAuth application and add the application credentials to your Kontenbase Dashboard.

## Overview
Setting up Google logins for your application consists of 3 parts:

- Create and configure a Google Project on the Google Cloud Platform Console
- Add your Google OAuth keys to your Kontenbase Project
- Add the login code to your Kontenbase JS Client App

## Access your Google Cloud Platform account
- Go to cloud.google.com.
- Click on `Sign in` at the top right to log in.

## Create a Google Cloud Platform Project
- Click on `Select a Project` at the top left.
    - (Or, if a project is currently selected, click on the current project name at the top left.)
- Click `New Project` at the top right.
- Fill in your app information, then click `Create`.
    - (This can take a few minutes.)
- This should bring you to the dashboard for your new project.

## Create the OAuth Keys for your project
From your project's dashboard screen:

- In the search bar at the top labeled `Search products and resources` type `OAuth`.
- Click on `OAuth consent screen` from the list of results.
- On the `OAuth consent screen` page select `External`.
- Click `Create`.

## Edit your app information
On the `Edit app registration` page fill out your app information.
Click `Save and continue` at the bottom.

## Create your Google credentials
- Click `Credentials` at the left to go to the `Credentials` page on the Google Cloud Platform console.
- Click `Create Credentials` near the top then select `OAuth client ID`
- On the `Create OAuth client ID` page, select your application type. If you're not sure, choose `Web application`.
- Fill in your app name.
- At the bottom, under `Authorized redirect URIs` click `Add URI`.
- Enter your callback URI under `Authorized redirect URIs` at the bottom.
- Enter your callback URI in the `Valid OAuth Redirect URIs` box.
- Click `Save Changes` at the bottom right.
- Click `Create`.

Copy your new OAuth credentials

- A box will appear called `OAuth client created`.
- Copy and save the values under `Your Client ID` and `Your Client Secret`.

## Enter your Google credentials into your Kontenbase Project
- Go to your project `Settings`
- Hover to `Configurations` menu
- Enable the toggle `Google enabled`
- Fill the `Google client ID` and `Google Secret`
- Click `Save`

## Ensure Login with Google is ready to use
- Hover back to `API` menu
- In `Authentication` section, looks for `/login/google`
- Now, login with Google (OAuth) is ready to use
