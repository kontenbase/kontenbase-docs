---
title: Quick Start
---

This quickstart guide is aimed to help new User to build backend API using Kontenbase. Starting by creating a workspace, creating service with its fields, try the service. To get started, you need to [log in](app.kontenbase.com) with your google account.

### Create Workspace
After logging in, this page will be displayed 



Enter your workspace name then click `Continue` to start creating services.

### Create Service
The project has neither data nor services. All you have to do is create your first service. Two buttons are provided to create the first service. Top right button or center of page button. Any of them is fine.



For this quickstart guide, we will make simple `todos` application using a **Private Service**.



We will talk about the difference between *public* and *private* service later.

### Customize Fields
Click the `Customize Fields` button to expand the service details and display two automatic fields. 



When configuring the service, make sure that the field types are properly organized according to your project needs. To edit or delete a field, click the field to see options.



Create some fields by clicking `Add New` button.



Only 1 minute and you had created your service and its fields, auth, and storage. Let's start to try your service!

### Auth
Authorization section will check who you are and authorization will check what you can do.



Navigate to the authorization button and yo will know any permissions of each role. Beside, there is also settings and search bar.

- Authenticating as Public
    

- Authenticated
    

### Try Service



Each try service displays the API of the service. You may try your service directly on Kontenbase, or copy the API and try the service on any API testing platform.

Let's begin to try service on Kontenbase!

#### POST
Expand the service and select `Create Record`. Try content entry using the ***simple*** method.



Oops, an error response : `Unauthorized` . It looks we should register a user to access the service.



You get a token as the response message from register reuqest. But we will pass it for now because we will use *simple* method. Navigate back to create record section.

Don't forget to choose `authenticated as bar` with the user we recently added.


Entry record.



The detail response :

````json
detail response
````

From the response, we know that the service also has storage to store the record. That's way the post request is succeed.

Let's add more recordies, buddy!

### GET
Still on simple method GET section, there are some conditions displayed to find records: filter, sort, limit.

  - Filter 
 

    Response Message :

    ````json
    filter
    ````

  - Sort


    Response Message :

    ````json
    sort
    ````

  - Limit

    Response Message :

    ````json
    limit
    ````
## Frontend Setup
We had setup the backend. Next,let's do the frontend part. In fact, you may choose any technologies the frontend part.

In case of consumed Kontenbase API on frontend, We had prepared a frontend using NextJS. Simply clone [here](github.com/kontenbase/kontenbase) and follow the instruction written there.



Then, let's discuss [Kontenbase SDK](https://www.npmjs.com/package/@kontenbase/sdk) implementation on the frontend.

### Usage
Configure package with your account's API key obtained from your Kontenbase Dashboard.

/lib/kontenbase.ts

```
import { KontenbaseClient } from '@kontenbase/sdk'

const kontenbase = new KontenbaseClient({
  apiKey: process.env.NEXT_PUBLIC_KONTENBASE_API_KEY || '',
})

```

This will direct you to your Kontenbase API KEY. So, you copy your API KEY from your app.

### Authentication
Use kontenbase auth services for manage your user.

#### Login
```
const { data } = await kontenbase.auth.login({
  email: 'user@gmail.com',
  password: 'password',
})
```

### Storage
#### Get
```
const { data } = await kontenbase.service('New Service').find()
```

For more detail explanation, you may visit Kontenbase SDK Documentation.

# Overview

## Creating Workspace

Upon login, this is the beginning. Create workspace where the project development environment will be happened.

## Creating Public Service
A service is place to manage and store records based on the field arrangement. There are 2 types of service on Kontenbase : Public Service and Private Service.

In Public Service, users are free to search, create, update, and even delete records without being authenticated.
