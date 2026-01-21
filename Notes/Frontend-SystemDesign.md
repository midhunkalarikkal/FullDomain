# FRONTEND SYSTEM DESIGN
============================

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
        res.setHeader("Strict-Transport-Security", "max-age=31526000; includeSubDomains; preload");
        next();
    })
    ```

## 4. `Client Storage Security`
=================================

Client storage security focuses on protecting data stored on the user's browser or device, such as tokens, preferences, or cached content. Since client-side storage is inherently less secure than the server, only non-sensitive or minimal data should be stored locally.

1. Storing Sensitive Data in Client Storage
   - Avoid storing sensitive data (like passwords, tokens, or PII) in client-side storage.  
   - If there is any way to store sensitive information securely on the **server**, that should always be the **first priority**.  
   - If client-side storage is unavoidable, **encrypt** the data before storing it and ensure proper **token expiry** mechanisms are in place to limit exposure.

2. Authentication
   - Use secure authentication mechanisms like **JWT (JSON Web Tokens)** or **OAuth 2.0** for user sessions.  
   - Implement **session token expiry** to automatically invalidate old tokens, preventing reuse by attackers.  
   - Enable **Multi-Factor Authentication (MFA)** to add an extra layer of security beyond passwords or tokens.

3. Data Integrity
   - Maintain integrity of locally stored data by attaching a **checksum** or **hash** along with the encrypted data.  
   - This ensures the data has not been tampered with or corrupted when retrieved from client storage.

4. Storage Limits (Browser-based Storage)
   | Storage Type | Approx. Capacity | Notes |
   |---------------|------------------|-------|
   | Local Storage | 5–10 MB | Persistent data; accessible via JavaScript; avoid storing sensitive data. |
   | Session Storage | 5–10 MB | Temporary; cleared when the tab or window closes. |
   | IndexedDB | ~50 MB or more | Structured storage for large amounts of data; still client-accessible. |
   | Cookies | 4–20 KB | Small, automatically sent with requests; use `HttpOnly` and `Secure` flags for security. |
   | Cache Storage | ~100 MB (varies) | Used by Service Workers for offline capabilities; monitor usage and expiry. |

5. Session Management
   - Store only short-lived session tokens or minimal user state on the client.  
   - Always use **secure cookies** (`HttpOnly`, `Secure`, `SameSite`) for session handling instead of local storage when possible.  
   - Implement **automatic logout** or **token refresh mechanisms** for expired or idle sessions.  
   - On logout, **clear all local/session storage** to prevent reuse of cached credentials.



## 5. `Client Storage Security`
=================================

Client storage security focuses on protecting data stored on the user's browser or device, such as tokens, preferences, or cached content. Since client-side storage is inherently less secure than the server, only non-sensitive or minimal data should be stored locally.

1. Storing Sensitive Data in Client Storage
   - Avoid storing sensitive data (like passwords, tokens, or PII) in client-side storage.  
   - If there is any way to store sensitive information securely on the **server**, that should always be the **first priority**.  
   - If client-side storage is unavoidable, **encrypt** the data before storing it and ensure proper **token expiry** mechanisms are in place to limit exposure.

2. Authentication
   - Use secure authentication mechanisms like **JWT (JSON Web Tokens)** or **OAuth 2.0** for user sessions.  
   - Implement **session token expiry** to automatically invalidate old tokens, preventing reuse by attackers.  
   - Enable **Multi-Factor Authentication (MFA)** to add an extra layer of security beyond passwords or tokens.

3. Data Integrity
   - Maintain integrity of locally stored data by attaching a **checksum** or **hash** along with the encrypted data.  
   - This ensures the data has not been tampered with or corrupted when retrieved from client storage.

4. Storage Limits (Browser-based Storage)
   | Storage Type | Approx. Capacity | Notes |
   |---------------|------------------|-------|
   | Local Storage | 5–10 MB | Persistent data; accessible via JavaScript; avoid storing sensitive data. |
   | Session Storage | 5–10 MB | Temporary; cleared when the tab or window closes. |
   | IndexedDB | ~50 MB or more | Structured storage for large amounts of data; still client-accessible. |
   | Cookies | 4–20 KB | Small, automatically sent with requests; use `HttpOnly` and `Secure` flags for security. |
   | Cache Storage | ~100 MB (varies) | Used by Service Workers for offline capabilities; monitor usage and expiry. |

5. Session Management
   - Store only short-lived session tokens or minimal user state on the client.  
   - Always use **secure cookies** (`HttpOnly`, `Secure`, `SameSite`) for session handling instead of local storage when possible.  
   - Implement **automatic logout** or **token refresh mechanisms** for expired or idle sessions.  
   - On logout, **clear all local/session storage** to prevent reuse of cached credentials.



## 6. `Secure Communication — HTTPS`
=====================================

HTTPS (Hypertext Transfer Protocol Secure) ensures secure, encrypted communication between client and server over the internet. It prevents eavesdropping, tampering, and impersonation, protecting users’ data and building trust.

1. Data Encryption
   - Encryption ensures that data transmitted between client and server cannot be read or modified by attackers during transit.  
   - It uses SSL/TLS protocols to convert plain text into ciphertext, protecting sensitive information such as credentials, tokens, and personal details.

2. Authentication
   - HTTPS uses digital certificates issued by trusted Certificate Authorities (CAs) to verify the identity of the website and server.  
   - This prevents attackers from impersonating legitimate sites and ensures the client is communicating with the genuine server.

3. Data Integrity
   - HTTPS uses Message Authentication Codes (MAC) or cryptographic hashes to verify that the data was not altered during transmission.  
   - It guarantees that the content sent by the server is received exactly as intended by the client, ensuring tamper-proof communication.

4. Protection Against Phishing
   - HTTPS helps users identify legitimate websites through trusted certificates and secure padlock icons in browsers.  
   - Attackers cannot easily create fake HTTPS certificates, reducing the risk of phishing or redirection to malicious sites.

5. Data Privacy
   - HTTPS keeps user information private by preventing interception and monitoring of sensitive data like login credentials, payment info, and personal details.  
   - It enforces confidentiality, ensuring only authorized parties can view the data being exchanged.

6. Compliance with Security Standards
   - HTTPS is a requirement for meeting industry and legal standards such as GDPR, PCI-DSS, and ISO 27001.  
   - Compliance ensures the organization adheres to best practices in data protection, security, and privacy.

7. Trust and Reputation
   - Websites with HTTPS and valid SSL certificates appear more trustworthy to users and browsers.  
   - A secure connection builds customer confidence, enhances brand credibility, and encourages transactions or sign-ups.

8. Search Engine Ranking
   - Google and other search engines prioritize HTTPS websites in search results.  
   - Using HTTPS can improve SEO visibility and help attract more organic traffic.

9. Protection Against Browser Warnings
   - Modern browsers flag non-HTTPS sites as “Not Secure,” discouraging users from interacting with them.  
   - HTTPS prevents these warnings, ensuring a safe and professional user experience.

10. Faster Website Loading
    - Modern HTTPS implementations (HTTP/2 and TLS 1.3) improve connection speed and latency.  
    - These protocols enable multiplexing, header compression, and faster handshakes, making HTTPS sites load faster than older HTTP ones.

Best Practices:
- Always use HTTPS with HSTS (HTTP Strict Transport Security).  
- Redirect all HTTP



## 7. `Dependency Security`
============================

Dependency security ensures third-party packages your project uses are safe, up-to-date, and free from known vulnerabilities. Apply automated scanning, strict versioning, and periodic manual review as part of your CI/CD pipeline.

1. Regular Audit of Dependencies
   - Run `npm audit` (or equivalent `yarn audit`, `pip-audit`) to scan installed packages for known vulnerabilities and get a vulnerability report.  
   - Use the report to triage fixes: update, patch, or replace vulnerable packages and re-run tests before deploying.

2. Enforce Auditing
   - Enable automatic auditing (`npm set audit true`) so every `npm install`/`npm ci` triggers a security check and surfaces issues early.  
   - Use tools like Dependabot (configured via `dependabot.yml`) or custom GitHub Actions workflows to automatically open PRs for outdated or vulnerable dependencies, keeping your dependency graph healthy.

3. Code & Dependency Monitoring
   - Use static-analysis and code-scanning tools (e.g., CodeQL) to detect insecure patterns and dependency-related risks in pull requests and the codebase.  
   - Combine code scanning with dependency scanners that continuously monitor registries and your dependency tree for new CVEs and automatically alert or create remediation PRs.

4. Dependency Locking
   - Commit lockfiles (`package-lock.json`, `yarn.lock`, `poetry.lock`) to ensure reproducible installs and prevent accidental upgrades that may introduce vulnerabilities.  
   - Use strict semantic versioning policies and tooling (e.g., Renovate/Debendabot rules) to control when and how dependencies are updated.

5. Security Penetration Testing & Scanning Tools
   - Include automated application scanners in CI (SAST/DAST) to catch runtime and code-level security issues before release.  
   - Popular tools: **OWASP ZAP (Zed Attack Proxy)** for dynamic testing, **Burp Suite** for interactive web pentesting, and commercial/OSS app scanners for automated crawling and vulnerability discovery.


## 8. `Compliances and Regulations`
====================================
There are huge Fines that the big companies have given for GDPR Violations 

1. GDPR ( General Data Protection Regulation )
    Make sure to take the concern of the user for taking the data and storing like cookies
    and use strong algorithms to encrypt the data

2. HIPPA ( Health Insurance Portability and Accountability Act )
    Protect health related information of a user

3. PCI DSS ( Payment Card Industry Data Security Standard )
    Used by Financial Services
    Ensure the secure processing transmission and storage of credit card information

4. FISMA ( Federal Information Security Management Act )

5. ISO /IEC 27001
    An Internationsl Standard for information security management systems

6. WCAG ( Web Content Accessibility Guidelines )
    Ensure the webcontent is accessible to people with disabilities
    for example 
        providing alternative solution for accesseing data such as audiable transcirption of the video for users with eye problem
        Ensuring keyboard navigation and screen reader capabilities

7. CCPA ( California COnsumer Privacy Act )
    Grants California residents rights concerning their personal information
        for example : Option to opt out featues, ads and mails

8. NIST ( Cybersecurity Framework )

9. OWASP Top Ten ( Web Application Security That Every Application `Must Have ` )
    Highlights the most critical web application security risks
    1. Injection Attacks ( eg: sql injection )
    2. Cross-Site-Scripting ( XSS )
    3. Authentication and Session Management
    4. Insecure Deserialization
    5. Security Misconfiguration
    6. Sensitive Data Exposure
    7. XML External Entity ( XXE )
    8. Broken Access Control
    9. Security Headers Not Set
    10. Cross Site Request Forger


## 9. `Input Validation & Sanitization`
========================================

Input validation and sanitization are essential to protect applications from malformed or malicious input (XSS, injection, overflow, bad files). Validate as early as possible (client-side for UX, server-side for security), sanitize all untrusted data, and apply defense-in-depth (multiple layers).

1. Use Frameworks or Libraries
   Use well-maintained frameworks and libraries that provide built-in validation, encoding/escaping, and XSS protection (e.g., React’s automatic escaping of JSX). They handle many common pitfalls so you can focus on application-specific rules, but always apply server-side checks as a second line of defense.

2. Whitelist Validation
   Accept only explicitly allowed values or patterns; reject everything else. Whitelisting (positive validation) reduces the attack surface compared to blacklists because it only permits known-good inputs.

3. Use Regular Expressions
   Use concise, well-tested regular expressions to validate formats (emails, phone numbers, IDs), but avoid overly permissive patterns. Maintain regexes in a central place, document them, and add unit tests to ensure expected behavior.

4. Escape User Input
   Escape or encode data before inserting it into different output contexts (HTML, attributes, URLs, JavaScript, SQL). Proper escaping prevents interpreted input from becoming executable code and stops XSS and injection attacks.

5. Taking care of Parameterized URLs
   Build URLs using libraries or functions that correctly encode path segments and query parameters. Never concatenate raw user input into URLs — encode each parameter and validate allowed keys and values.

6. Validate Data Types
   Ensure inputs match expected types (string, number, boolean, date) before processing. Use TypeScript, runtime type-checking libraries, or explicit checks to avoid unexpected behavior and type-coercion vulnerabilities.

7. Length and Size Check
   Enforce minimum and maximum lengths for strings and limits for arrays, file sizes, and numeric ranges. This prevents buffer/DOM issues, resource exhaustion, overly large payloads, and helps catch malformed inputs early.

8. Check images and files the user is uploading
   Validate file type (MIME type and file signature), size, and dimensions; reject or sanitize unsafe files. Store uploads outside the web root (or use signed URLs / storage services) and scan for malware when needed.

9. Add Client-side Validations
   Implement client-side checks (HTML5 constraints, JS) for faster feedback and improved UX, but treat them as convenience — not security. Always mirror the same validations on the server to enforce security.

10. Error Handling
    Return clear, non-sensitive error messages to users (avoid exposing stack traces, DB details, or internal logic). Log full diagnostic details securely on the server for debugging and monitoring.

11. Security Headers
    Configure HTTP security headers such as Content-Security-Policy (CSP), X-Content-Type-Options, X-Frame-Options, and Referrer-Policy. These headers reduce risk from XSS, MIME-sniffing, clickjacking, and leakage of sensitive info.

12. Regular Updates and Patches of the Applications
    Keep frameworks, libraries, and runtimes up to date to receive security fixes and vulnerability patches. Automate dependency checks and schedule regular maintenance windows to apply critical updates.

13. Security Audits and Testing
    Perform static analysis, dependency scans, automated tests, and regular security audits (pen tests / code reviews). Include fuzzing, unit tests for validation logic, and integration tests that simulate malicious inputs.

14. Avoid using third-party libraries (or vet them thoroughly)
    Don’t use unvetted or abandoned third-party packages; prefer well-maintained, popular libraries with active communities and audited histories. When you must use external packages, pin versions, review their source, check vulnerability databases, and restrict privileges.


## 10. `Server-Side Request Forgery (SSRF)`
===========================================

**Definition (SSRF)**  
Server-Side Request Forgery (SSRF) is a vulnerability where an attacker causes a server-side application to make HTTP(S) (or other protocol) requests to unintended locations — including internal services, metadata endpoints, or other protected resources — which the attacker cannot directly access from their own network. Exploiting SSRF can lead to information disclosure, access to internal-only services, and pivoting deeper into an infrastructure.

**Example scenario (concise)**  
A public web app exposes an image-fetch endpoint that accepts a user-provided URL. An attacker supplies a URL pointing to an internal metadata service (for example `http://169.254.169.254/latest/meta-data/...`) and the server — which can reach that internal address — fetches it and returns sensitive data to the attacker.

### Common causes and mitigations

1. **Unvalidated user input**  
   - Problem: Accepting arbitrary URLs from users (e.g., `?imgURL=...`) and directly fetching them.  
   - Mitigation: Validate and normalize input. Parse URLs and enforce scheme, host, and port constraints. Reject or canonicalize inputs that use redirects, encoded characters, or uncommon schemes (file://, gopher://, ftp://, dict://). Prefer fetching only known-good resources or proxying requests through a strict server side fetcher.

2. **Lack of whitelisting (allow-list)**  
   - Problem: Allowing requests to any destination increases attack surface (including internal IPs and cloud metadata).  
   - Mitigation: Use a host allow-list: only permit requests to a small set of trusted domains or domain patterns. If you must allow more, implement strict deny rules for private IP ranges and cloud metadata IPs.

3. **Insufficient access control / overly-privileged fetcher**  
   - Problem: The server process has broad network access or elevated privileges, so a fetched request can access internal services.  
   - Mitigation: Run fetchers with least privilege: separate network zones, use egress firewall rules, and restrict which services the app can reach. Implement RBAC at each layer (app, network, database, OS). Use internal proxies that enforce policy rather than letting application code perform arbitrary outbound requests.

4. **Insecure use of HTTP client libraries (redirects & DNS)**  
   - Problem: Libraries may follow redirects or resolve DNS to internal addresses without checks. Attackers can use redirects or DNS rebinding to bypass naive checks.  
   - Mitigation: Disable automatic redirects or inspect and revalidate redirect targets. Resolve hostnames and verify the resolved IP is allowed. Use DNS pinning or validate both hostname and resolved IP against allow/deny lists.

5. **Failure to block private / link-local IP ranges**  
   - Problem: Requests to `127.0.0.1`, `10.0.0.0/8`, `169.254.169.254`, or `::1` can expose sensitive hosts.  
   - Mitigation: Explicitly deny requests to private, loopback, link-local, and cloud metadata IP ranges. Check both literal IPs and the resolved IP for domain names.

6. **XML External Entity (XXE) and related protocols**  
   - Problem: Input that looks like XML or other serialized formats may be processed by parsers that fetch external entities (XXE) or external DTDs, allowing SSRF-style access or file read.  
   - Mitigation: Disable external entity resolution in XML parsers, validate and sanitize XML inputs, and prefer safe parsing libraries/configs.

7. **Improper error handling and verbose responses**  
   - Problem: Returning full error details (stack traces, response headers, internal IPs) helps attackers craft SSRF payloads.  
   - Mitigation: Return generic error messages to clients and log detailed diagnostics server-side. Rate-limit suspicious endpoints.

8. **Missing monitoring and alerting**  
   - Problem: SSRF exploitation may go unnoticed if there’s no unusual-egress monitoring.  
   - Mitigation: Monitor outbound requests, unusual destinations, and high error rates. Alert on requests to blocked ranges or metadata endpoints.



## 11. `Server-Side JavaScript Injection` (SSJI)
================================================

**Definition (SSJI)**  
Server-Side JavaScript Injection (SSJI) is a vulnerability where an attacker is able to inject and cause execution of arbitrary JavaScript on the server (for example in a Node.js process). This can happen when untrusted input is evaluated, deserialized, or passed to APIs that execute code — leading to remote code execution (RCE), data theft, or full server compromise.

### Common causes, examples and mitigations

1. **Inadequate input validation**  
   - Problem: Accepting raw input (strings, templates, JSON, or code snippets) without validation lets attackers craft payloads that lead to execution.  
   - Mitigation: Validate and canonicalize all inputs. Use strict allow-lists for expected values and types; reject or sanitize anything outside the known good set.

2. **Direct execution of user-provided code**  
   - Problem / Example: Evaluating user text with `eval()` or `new Function(userInput)` (e.g., in in-browser or server-side editors, plugin engines, or expression evaluators) runs arbitrary code.  
   - Mitigation: **Never** use `eval()` or `new Function()` on untrusted input. If you must support user expressions, use a safe expression evaluator (a vetted parser that only allows a limited grammar) or run evaluation in a tightly sandboxed process with strict resource limits.

3. **Using dangerous APIs / functions**  
   - Problem: Some globals or APIs can be abused — for example passing a **string** to `setTimeout()` or `setInterval()` causes the string to be interpreted like `eval()` (executed as code), enabling injection. Global exception handlers or global scope modification can be abused to escalate or persist attacks.  
   - Mitigation: Always pass functions (not strings) to timers: `setTimeout(() => doWork(), 1000)` not `setTimeout("doWork()", 1000)`. Avoid exposing sensitive globals; lock down prototypes and avoid monkey-patching global objects. Use linters and code reviews to flag risky APIs.

4. **Insecure deserialization**  
   - Problem: Deserializing attacker-controlled payloads (for example using `vm`, `eval`, or custom deserializers that recreate functions/objects) can create executable objects or prototype pollution. This may allow arbitrary code execution or privilege escalation.  
   - Mitigation: Only deserialize trusted formats (JSON) and avoid deserializing functions. Use safe libraries, validate schemas (e.g., JSON Schema), and apply integrity checks (signatures/HMAC) to serialized payloads before accepting them. Use libraries that are known to avoid prototype pollution.

5. **Insufficient sandboxing / wrong sandbox choices**  
   - Problem: Naive sandboxes (weak `vm` usage, relying only on `vm.runInThisContext()` without resource limits) can be escaped to access server internals.  
   - Mitigation: Use robust sandbox solutions (dedicated, actively maintained libraries or external isolation strategies such as separate processes, containers, or microVMs). Apply CPU/memory/time limits, drop privileges, and restrict network / filesystem access for the sandbox.

6. **Excessive privileges & poor process isolation**  
   - Problem: Code executing via injection often runs with the same privileges as the app and can access secrets, DBs, or the OS.  
   - Mitigation: Run services with least privilege, store secrets in protected stores, and separate responsibilities across processes. Use capability-restricted users and network egress controls.

7. **Poor logging, detection, and response**  
   - Problem: No monitoring means SSJI attempts go unnoticed. Attackers can persist or pivot if there’s no alerting.  
   - Mitigation: Log suspicious inputs, execution attempts, and sandbox failures; monitor for anomalous outgoing connections and unexpected child processes. Alert and rate-limit suspicious endpoints.

### Practical defenses summary / checklist
- **Ban `eval()` and `new Function()`** in server code; enforce via lint rules.  
- **Never pass strings to `setTimeout`/`setInterval`**, always pass functions.  
- **Validate input types & schemas** aggressively (JSON Schema / typed DTOs).  
- **Use safe expression evaluators** or restricted DSLs when user logic is required.  
- **Isolate execution** (separate process / container / microVM) with strict resource and network limits.  
- **Avoid deserializing untrusted objects** that can recreate executable behavior; only accept JSON and validate it.  
- **Harden runtime**: drop privileges, restrict filesystem & network, and keep dependencies updated.  
- **Static analysis &**
