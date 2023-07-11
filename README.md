# Friendzone
a full-stack real-time messaging chat application.

Live site here: https://friendzone-one.vercel.app

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
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
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
   

### Sign In

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/login.gif?raw=true" height=400>



### After Log In

On the dashboard, users can add new friends, check friend requests, click on the latest messages to enter the chat and log out.

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/dashboard.gif?raw=true" height=400>



### Adding friend

The friend request is shown in real-time on another user's page.

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/adding%20friend.gif?raw=true" height=400>



### New message toast

Users will get a notification if new messages are coming in. By clicking the toast, the user will enter the chat.

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/message%20toast.gif?raw=true" height=400>



### Real-time chat

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/realtime%20message.gif?raw=true" height=400>



### Mobile version

Users with a smaller screen have a slide-over menu.

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/mobileslideover.gif?raw=true" height=400>


### Log out

<img src="https://github.com/Minna937/realtime-chat/blob/main/public/gifs/logout.gif?raw=true" height=400>

