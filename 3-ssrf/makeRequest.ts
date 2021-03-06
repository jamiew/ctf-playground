// THIS FILE IS AUTO GENERATED BY SPACE ML
// DO NOT EDIT

import { URI, open } from "open-all";
// import { SafeError } from "../third-party/marshal";

export async function makeRequest(uriString: string) {
    let uri = new URI(uriString);
    console.log(uri.pass);
    console.log(uri.scheme);
    console.log(uri);
    if (uri.pass !== undefined && uri.pass.toLowerCase() === "supersecret") {
        return "Stop, please";
    }

    if (uri.scheme.toLowerCase() === "http") {
        return "Uhh, how about no";
    }

    return open(uri);
}

// console.log(makeRequest("http://example.com"));
// console.log(makeRequest("http://0.0.0.0"));
// console.log(makeRequest("https://127.0.0.1:1010"));

/*
http://127.0.0.1 / &@127.0.0.1:2020
http://127.0.0.1 /:2020
*/

// http://127.0.0.1:11211#@google.com:80/
// http://ß.orange.tw/
// http://127.0.0.1:6379/\r\nSLAVEOF orange.tw 6379\r\n
// http://foo@127.0.0.1@google.com/
// http://foo@evil.com:80@google.com/

// console.log(makeRequest("http://foo@evil.com:80@google.com/"));

// console.log(makeRequest("http://%3Asupersecret@localhost:1010/?confirm=yes"));

// console.log(makeRequest("https://google.com@ http://%3Asupersecret@localhost:1010/?confirm=yes"));

// console.log(makeRequest("ftp:// &@http://%3Asupersecret@localhost:1010/?confirm=yes"));

// console.log(makeRequest("https://example.com &@http://%3Asupersecret@localhost:1010/?confirm=yes"));

// console.log(makeRequest("base64://aHR0cDovLyUzQXN1cGVyc2VjcmV0QGxvY2FsaG9zdDoxMDEwLz9jb25maXJtPXllcw== &@https://example.com"));

// TODO muck with the scheme parsing
// ://http:// ????

// console.log(new URI( "://http://localhost:1010" ));

// console.log(new URI( "supersecret@localhost:1010/?confirm=yes ://" ));

// console.log(new URI( "http://supersecret@localhost:1010/?confirm=yes ://" ));

// console.log(new URI( "http://supersecret@localhost:1010/?confirm=yes :// lol" ));

console.log(new URI( "://:supersecret@localhost:1010/?confirm=yes ://" ));

// http://:supersecret@localhost:1010/?confirm=yes ://
// ://:supersecret@localhost:1010/?confirm=yes ://
// http%3A%2F%2F:supersecret@localhost:1010/?confirm=yes ://example.com
// http%3A%2F%2F://:supersecret@localhost:1010/?confirm=yes ://example.com
