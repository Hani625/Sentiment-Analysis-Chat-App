### Toy Chat App With Sentiment Analysis

Simple example to experiment with Next.js, Pusher, and Sentiment libraries.

You will need a Pusher application to run app. Free account and app can be set up quickly at [Pusher Dashboard].

Create a .env file following format of sample.env, and insert your Pusher credentials.


```
# download / clone repo

# install dependencies
npm install

# start dev server on localhost:3000
npm run dev
```


#### [Next.js]
- minimalistic framework for server-rendered React apps
- automatic code splitting
- simple client-side routing (page based)
- webpack based dev env w Hot Module Replacement support
- integrates well with Express

#### [Pusher]
- realtime communication through managed scalable websocket connections
- flexible event based pub/sub messaging api
- live user activity views
- channel authentication


#### [Sentiment]
- Node.js module for performing sentiment analysis 
- uses AFINN-165 wordlist and Emoji Sentiment Ranking


[Pusher Dashboard]:https://dashboard.pusher.com/
[Next.js]:https://github.com/zeit/next.js/
[Pusher]:https://pusher.com/docs
[Sentiment]:https://github.com/thisandagain/sentiment