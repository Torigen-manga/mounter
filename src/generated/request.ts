import type { Cookie } from "./cookie";

/**
 * Represents an HTTP request configuration.
 * This interface is used to define the structure of a request that will be made.
 */
interface AppRequest {
  /**
   * The URL for the request.
   * This is the endpoint the request will be sent to.
   */
  url: string;

  /**
   * The HTTP method to be used in the request.
   * Supported methods include:
   * - `GET` - To retrieve data from the server.
   * - `POST` - To send data to the server.
   * - `PUT` - To update data on the server.
   * - `DELETE` - To delete data from the server.
   * - `PATCH` - To partially update data on the server.
   */
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

  /**
   * Optional headers to be sent with the request.
   * This is a key-value pair where the key is the header name, and the value is the header value.
   * **Example:** `{ "Authorization": "Bearer token" }`
   */
  headers?: Record<string, string>;

  /**
   * Optional URL parameters to be sent with the request.
   * These parameters are typically appended to the URL in the query string.
   * **Example:** `{ "page": 1, "limit": 10 }`
   */
  params?: Record<string, any>;

  /**
   * Optional data to be sent with the request.
   * This is typically used with methods like "POST", "PUT", or "PATCH".
   * If the request method expects data (e.g., JSON body), this field holds the request body.
   * **Example:** `{ "username": "john", "password": "secret" }` or a JSON string.
   */
  data?: Record<string, any> | string;

  /**
   * Optional cookies to be sent with the request.
   * This is an array of cookies, where each cookie is an object representing the cookie's properties.
   * **Example:** `[{ name: "session", value: "xyz" }]`
   */
  cookies?: Cookie[];
}

export type { AppRequest };
