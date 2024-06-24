# Informational Responses (100-199)
### 100 Continue
    Initial part of a request has been received and client can continue with the rest of the request.
### 101 Switching Protocol
    The server is switching protocols as requested by the client.
### 102 Processing
    The server has received and is processing the request but no response is available yet.

# Successful Responses (200-299) 
### 200 OK
    The request has succeded. The meaning of success depends on the HTTP method.
### 201 Created
    The request has been fullfilled and has resulted in the creation of a new resource.
### 202 Accepted
    The request has been accepted for processing, but the processing has not been completed.
### 204 No Content
    The server successfully processed the request, but is not returning any content.

# Redirection Messages (300-399)
### 301 Moved Permanently
    The requested resource has been permanently moves to a new URL.
### 302 Found
    The requested resource resided temporarily under a different URL.
### 302 Not Modified
    Indicates that the resource has not been modified since the version specified by the request headers.

# Client Error Responses (400-499)
### 400 Bad Request
    The server couldn't understand the request due to invalid syntax.
### 401 Unauthorized
    The client must authenticate itself to get the requested response.
### 403 Forbidden
    The client doesn't have access rights to the content.
### 404 Not Found
    The server cannot find the requested resource.
### 429 Too Many Requests
    The user has sent too many requests in a given amount of time.

# Server Error Responses
### 500 Internal Server Error
    The server encountered an unexpected condition that prevented it from fulfilling the request.
### 502 Bad Gateway
    The server, while acting as a gateway or proxy, received an invalid response from upstream server.
### 503 Service Unavailable
    The server is not ready to handle the request. Common causes are server overload or maintenance.
### 504 Gateway Timeout
    The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
