# Full Domain

### Sample codes and notes


# REST PRINCIPLES
==================

# Use HTTP Methods correctly

1. GET - Retrieve a resourse, it is idempotent
2. POST - Create a new resource, it is not idempotent
3. PUT - Update an exising resource entirely, it is idempotent ( update entiry if the resource exist, else create a new one)
4. PATCH - Partially updating an existing resource, it is not idempotent
5. DELETE - Delete a resource, it is idempotent

# Structure Urls, USE nouns for resources

1. Good -  to use nounse of the resouces example /customers, /laptops
2. Bad - to use action verbs instead of nouns example, /getCustomers, /getLaptops
    why: Because the api http method itself is providing the exact meaning or action of the url, so if we use the actions verbs it will be redundant
3. Hierarchical URI : /customers/123/orders

# USE appropriate status codes in the response

200 OK Success

201 Created - Resource created

204 No Content - Success, no content to return

400 Bad Request - Invalid client input

401 Unauthorized - Authentication required

403 Forbidden - Client is authenticated but doesn't have permission

404 Not Found - Resourse not found

500 Internal Server Error - Server-side error

# USE of error handling using make the user experience more smooth and easy handling of errors

# Validating the request is important for ensuring what is in that request is equals to what we are expecting in that request

# Versioning

1. URI Versioning - adding the version number directly in the url example, /v1/customers
2. Header versioning - Using a custom header like Accept-Version: V1

# USE Pagination, filtering and sorting, use query params for adding these data in the url in the end with ? starting and in key=value pairs and seperated by &

# HATEOAS : Hypermedia as the engine of application state

# SECURITY
