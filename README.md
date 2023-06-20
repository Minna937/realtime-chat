# Friendzone
a full-stack real-time messaging chat application.

Live site here: https://friendzone-minna.vercel.app/

## Features

- Realtime messaging
- Adding friends and sending friend requests via email
- Performant database queries with Redis
- Responsive UI built with TailwindCSS
- Protection of sensitive routes
- Google authentication
- Github authentication

- Built with TypeScript
- TailwindCSS
- Icons from Lucide

- Class merging with tailwind-merge
- Conditional classes with clsx
- Variants with class-variance-authority

## TechStack

### Languages

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Frameworks and Libraries

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Pusher](https://a11ybadges.com/badge?logo=pusher)

### Database:

![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

### Hosting:

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


# Getting started

1. Clone this repository (only this branch)

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```
   
3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the Redis database connection URL is in the **.env** file

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Home Page

The home page provides a user sign in and sign up options. By clicking on the buttons, a user will be taken to the sign in or sign up pages.

### Sign In

<img src="./records/login.gif" height=400>](https://github.com/Minna937/realtime-chat/blob/main/public/gifs/login.gif?raw=true)

### Sign Up

<img src="./records/signup.gif" height=400>

Upon a successful sign in or sign up, a user will be taken to the logged in landing page. The app automatically sign the user up for the 'general' channel upon sign in.

### After Log In

On the top of the page, users can search for messages and click on the profile icon to check their own status and logout.

### Search Messages

<img src="./records/search.gif" height=400>

### Logout

## Browse Channels

### Channel Sidebar

Users can see a list of their joined channels on the left hand sidebar.

<img src="./records/channel-sidebar.gif">

### All Channels

Users can also see a list of all available channels by clicking on the 'All channels' button on the sidebar.

<img src="./records/channel-all.gif">

### Add A Channel

Users can add a channel by clicking on the 'Add channels' button.

<img src="./records/channel-add.gif">

### Channel Banner

To see the details of a channel, users can click on the name of the channel in the channel banner on the right. The banner also includes summary of channel description and number of members.
<img src='./records/channel-banner.gif'>

### Channel Details

Under the channel details page, a member can edit the channel by clicking on the 'Edit channel' button. A member can also leave the channel by clicking on the 'Leave channel' button. An organizer of the channel can choose to delete the channel by clicking on the 'Delete channel' button. Upon leaving or deleting a channel, the user will be redirected to the 'general' channel page.

### Edit Channel

<img src="./records/channel-edit.gif">

On the channel member tab, a user can see all members of the channel and all more members by clicking on the 'Add people' button.

### Channel Details - Members

A user can search for usernames and click on the person they'd like to add.

### Add Members

<img src='./records/channel-add-member.gif'>

## Direct Messages

Users can search for a username and start a direct message to the member.

### Search Users

<img src="./records/search-user.gif" height=400>

### New Messages

<img src="./records/new-msg.gif" height=400>

Receivers of the message will see the name of senders showing up on their page once a message is sent from the sender.

### Direct Message Index

<img src="./records/dm-index.gif" height=400>

## ChannelMessages

### Read All Meesages

Message list will appear ordered by date and time. The newest messages will appear at the bottom of the feed while the oldest will appear at top.
<img src="./records/read-cm.png">

### Send Messages

Users can send new messages in channels they are subscribed to.
<img src="./records/send-cm.gif">

### Edit/Delete Messages

Edit button and delete button will appear when message authors stops or hover the mouse pointer above the message feed. Message authors can edit the message directly in the message feed.
<img src="./records/edit-cm.gif">
<img src="./records/delete-cm.gif">


