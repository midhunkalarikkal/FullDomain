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

Vulnerabilities are
- User session hijacking
- Unathorized activities
- Capturing Keystrokes
- Stealing critical information
- Phishing attacks

Mitigations
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
