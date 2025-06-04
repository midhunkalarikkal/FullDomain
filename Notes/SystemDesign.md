SYSTEM DESIGN
=============

-xss [Cross Site Scripting];
-CSRF []
-Authentication / Authorization
-Input validation / sanitization
-HTTPS
-Security Headers
-IFrames protection
-Dependency Injection
-Client Storage Security
-Compliances and regulations
-SSRF
-SSJI
-Feature Flag
-Subresource Integrity
-CORS




Client Storage Security
==========================

1. Storing sensitive datain client storage
 
1. 1 .If anyway to store these sensitive data in server , the first priority is it.

1. 2. Encrypt data

1. 3. Token expiry

2. Authentication

2. 1. JWT/ OAUTH

2. 2. Session token expiry

2. 3. Multi Factor Authentication

3. Data Integrity

3. 1. Checksum in the encrypted data that is storing in the client side

4. Storage Limit

4. 1. Local storage [5-10mb]

4. 2. Session storage [5-10mb]

4. 3. Indexed DB [50MB]

4. 4. Cookie [4kb - 20kb]

4. 5. Cache [100mb]

5. Session Management