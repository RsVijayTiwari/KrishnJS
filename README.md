
# KrishnJS The DOM Manipulation Javascript Library

The KrishnJS is a dom-manipulation library it helps the developer to develop interactive web pages without writing a huge line of code.


To Load the KrishnJS library from the URL,
https://cdn.jsdelivr.net/gh/RsVijayTiwari/KrishnJS@1.0.2/main/krishn.js

To support the development of KrishnJS Library, Please buy me coffee https://www.buymeacoffee.com/vijaytiwari

### To install the KrishnJS via npm use the following command:
```bash
npm install krishnjs
```

## Example Code of KrishnJS
#1. To Show an element in DOM, The function should be attach on the onclick listner in the DOM.

```bash
container_visibility('show', ['class_name'], [true]);
```
To Hide an element in DOM
```bash
container_visibility('hide', ['class_name'], [true]);
```
#2. To change the style of element by onclick listner follow then write below code.
```bash
change_style(['element_class'], [true], ['backgroundColor'], ['#000']);

```
#3. To send **Post** request to the backend server associated with the **Django CSRF Token** and post the **JSON DATA**
```bash
send_request(false, "POST", "url", true, {
    "parameter": "value"
}, false, function (response) {
    console.log(response);
});
```
In above the example the parameter are **csrf_token**, **request_type**, **url_string**, **async_boolean**, **json_data**, **send_data_boolean**, **function(reverse_callback)**

See the source code for detailed instruction!

**Project Maintainer: Vijay Tiwari**
