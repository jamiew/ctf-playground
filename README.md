CTF SSRF
========

This is a locally-runable copy of the SpaceML `ssrf.ts` file from the last problem (fetching w/ BASIC Auth password)

More context

> The best resource for modern SSRF is Orange Tsai's presentation on the matter. Orange is a member of the HITCON CTF team and is known for his innovative web exploitation. 
> * Here is his talk: https://www.youtube.com/watch?v=D1S-G8rJrEk
> * And the slides: https://www.blackhat.com/docs/us-17/thursday/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf


Installing/Running
------------------

```
npm install -g typescript
```

To run

```
tsc makeRequest.ts && node makeRequest.js
```

or aliased as

```
npm run ssrf
```

Cool
----

Dani's devtools request filter that I keep forgetting:

```
-current-tasks -images -upload-image -status-code:304
```
