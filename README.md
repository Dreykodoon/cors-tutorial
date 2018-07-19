# cors-tutorial

## Observations

1. When doing a CORS request to localhost for example, it is mandatory to add the protocol (a.k.a "http://").
Otherwise, you get a <b>Network error</b>. 

2. <b>CORS must be enabled on the server!</b> Header <b><i>Access-Control-Allow-Origin</i></b> must be placed on the HTTP response.
