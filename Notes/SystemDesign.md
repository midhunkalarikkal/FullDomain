# SYSTEM DESIGN

=================

## `xss [Cross Site Scripting]`

## `CSRF []`

## `Authentication / Authorization`

## `Input validation / sanitization`

## `HTTPS`

## `Security Headers`

## `IFrames protection`

## `Dependency Injection`

## `Client Storage Security`

## C`ompliances and regulations`

## `SSRF`

## `SSJI`

## `Feature Flag`

## `Subresource Integrity`

## `CORS`


## 1. `Cross Site Scripting`
==============================
A vulnerability where attackers inject malicious scripts into a website 
through URLs, form inputs, or other entry points. These scripts can 
execute in the victim's browser and lead to serious security risks.
and in some cases the victims ( the user ) private credentails like access tokens are stolen

### Vulnerabilities
- User session hijacking
- Unathorized activities
- Capturing Keystrokes
- Stealing critical information
- Phishing attacks

### Mitigations
- Validate and sanitize all user inputs (from forms, URLs, headers, etc.)
- Avoid using innerHTML; prefer textContent or innerText
- Use escaping mechanisms (e.g., regex-based sanitization)
- Use libraries like React (auto-escapes inputs)
- Avoid dangerouslySetInnerHTML in React
- Sanitize with libraries like DOMPurify
- Apply CSP (Content Security Policy) headers
- Avoid using eval() as it executes arbitrary code

`CSP` Content Security Policy
------------------------------
- Allowed Sources: Define which domains can serve resources
- Script Nonces: Allow specific inline scripts using nonces
- Report-only Mode: Test policies and log violations without enforcement
- Reporting: Send CSP error reports to a specified endpoint
- Middleware: Set CSP headers at the server level

`Example`

        ```js
        app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
    ),
    next();

})
```
CSP Directive Explanations
--------------------------
default-src 'self'      → Fallback rule: allow all resources only from the same origin
script-src              → Defines which sources JavaScript can be loaded from
'self'                  → Allows scripts from your own domain
'nonce-randomKey'       → Allows inline scripts with the matching nonce="randomKey"
'unsafe-inline'         → Allows all inline scripts (weakens security, avoid if possible)
http://unsecure.com     → Explicitly allows scripts to be loaded from this domain





## 2. `IFrame Security Threats`
=================================

### Vulnerabilities
- Clickjacking
- Data theft via javascript
- Session and cookie theft

### Mitigations
- X-Frame-Options: Deny
- Adding sandbox attribute `allow-same-origin` in the iframes that we are suing inside our website avoid using `allow-script`
- setting headers in server middleware
    csp with `iframe-ancestors none
- Set three main fields in cookies
    - httpOnly: true -> for making this site content is not accessible by js
    - secure: true -> only send the pages through https
    - sameSite: "strict" -> only use the same frontend url

```js
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "iframe-ancestors 'none'");
    next();
});
```


## 3. `Security Headers`
=========================

1. X-Powered-By
   This header reveals which server is serving the request (for example, Express, PHP, etc.). Exposing this information can create a security risk, as attackers may exploit known vulnerabilities in that server technology. Therefore, it is considered a best practice to remove this header using middleware.

2. Referrer-Policy
   The HTTP Referrer-Policy response header controls how much referrer information (sent with the Referer header) should be included with requests. This determines how much of the URL data is exposed when navigating from one application to another, or even within the same domain. 

   Examples of Referrer-Policy values:
   - Referrer-Policy: no-referrer
   - Referrer-Policy: no-referrer-when-downgrade
   - Referrer-Policy: origin
   - Referrer-Policy: origin-when-cross-origin
   - Referrer-Policy: same-origin
   - Referrer-Policy: strict-origin
   - Referrer-Policy: strict-origin-when-cross-origin
   - Referrer-Policy: unsafe-url

3. X-Content-Type-Options
   When a client requests a file, some browsers attempt "MIME type sniffing," guessing the file type for convenience. If an attacker tampers with the file during transmission, the browser may misinterpret the file type and fail to detect the attack. 
   The X-Content-Type-Options header instructs the browser not to perform MIME type sniffing and to strictly follow the declared Content-Type of the file. 
   Example value: nosniff

4. X-XSS-Protection
   This HTTP header was used in older browsers like Internet Explorer, Chrome, and Safari to prevent pages from loading when reflected cross-site scripting (XSS) attacks were detected. However, it is now deprecated and largely unnecessary because modern browsers rely on Content-Security-Policy (CSP) to prevent XSS attacks. 

5. HSTS (Strict-Transport-Security)
   The Strict-Transport-Security header ensures that browsers always connect to the server using HTTPS, even if the user initially types or clicks an HTTP link. 
   How it works:
   - The first time a client requests the site over HTTP, the server responds with a redirect to HTTPS and includes the Strict-Transport-Security header.
   - For all future requests, the browser automatically enforces HTTPS and does not allow insecure HTTP connections to the server.
   - This prevents protocol downgrade attacks and cookie hijacking.

   Example middleware to enforce HTTPS:
   
   ```js
   const redirectToHTTPS = (req, res, next) => {
       if (req.headers['x-forwarded-proto'] !== 'https') {
           return res.redirect(['https://', req.get('Host'), req.url].join(''));
       }
       next();
   };
    ```

    `All five Examples of Headers`
    ------------------------------

     ```js
    app.use((req,res,next) => {
        res.removeHeader("X-Powered-By");
        res.setHeader("Referrer-Policy", "origin");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("X-XSS-Protection: 1; mode=block");
        res.setHeader("Strict-Transport-Security", "max-age=31526000; includeSubDoamins; preload");
        next();
    })
    ```



# Client Storage Security

1. Storing sensitive datain client storage

1. 1 .If anyway to store these sensitive data in server , the first priority is it.

1. 2. Encrypt data

1. 3. Token expiry

1. Authentication

1. 1. JWT/ OAUTH

1. 2. Session token expiry

1. 3. Multi Factor Authentication

1. Data Integrity

1. 1. Checksum in the encrypted data that is storing in the client side

1. Storage Limit

1. 1. Local storage [5-10mb]

1. 2. Session storage [5-10mb]

1. 3. Indexed DB [50MB]

1. 4. Cookie [4kb - 20kb]

1. 5. Cache [100mb]

1. Session Management
