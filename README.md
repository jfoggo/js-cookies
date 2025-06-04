# 🍪 js-cookies

A lightweight, vanilla JavaScript class for managing browser cookies with ease.

## Features

* ✅ Set cookies with optional expiration
* ✅ Get a cookie by name
* ✅ Delete a cookie
* ✅ Retrieve all cookies as key-value pairs
* ✅ Get all cookie names (keys)
* ✅ Get all cookie values (vals)

## Installation

Simply include the `cookies.js` file in your project:

```html
<script src="cookies.js"></script>
```

Or import it into a module-based JavaScript environment:

```js
import Cookies from './cookies.js';
```

## Usage

### Set a cookie

```js
Cookies.set('username', 'JohnDoe');
```

Set with a **custom expiration** (in days):

```js
Cookies.set('sessionToken', 'abc123', 7);
```

Set with a **custom path**:
- You can set cookies for other paths (outside of current page)
- But `Cookies.get(cname)` will only return cookies for current page/path

```js
Cookies.set('sessionToken', 'abc123', 7, '/index.html');
```

### Get a cookie

```js
const username = Cookies.get('username');
console.log(username); // "JohnDoe"
```

### Delete a cookie

```js
Cookies.del('username');
```

### Get all cookies

```js
const allCookies = Cookies.all();
console.log(allCookies); // { sessionToken: 'abc123' }
```

### Get all cookie keys

```js
const keys = Cookies.keys();
console.log(keys); // [ 'sessionToken' ]
```

### Get all cookie values

```js
const values = Cookies.vals();
console.log(values); // [ 'abc123' ]
```

## Notes

* This class only manages cookies available to JavaScript on the current domain/path.
* Expired or HTTP-only cookies cannot be accessed by JavaScript.

## License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this code with proper attribution.
