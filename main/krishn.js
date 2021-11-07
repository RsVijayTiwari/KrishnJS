/*
KrishnJS The DOM Manipulation Javascript Library
Create by Vijay Tiwari
 */
function chunkFetch() {
    let z, i, elmnt, file, xhttp, js;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("chunks");
        js = elmnt.getAttribute("handler")
        js2 = elmnt.getAttribute('handlerI')
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        elmnt.innerHTML = this.responseText;
                        if (js === null) {
                        } else {
                            attach_js(js, 'js');
                        }
                        if (js2 === null) {
                        } else {
                            attach_js(js2, 'js')
                        }

                    }
                    if (this.status === 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("chunks");
                    includeHTML();

                }
            }
            xhttp.open("GET", file, true);
            xhttp.responseType = 'text';
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

function attach_js(filename, filetype) {
    let fileref;
    if (filetype === "js") { //if filename is a external JavaScript file
        fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    } else if (filetype === "css") { //if filename is an external CSS file
        fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function quillGetHTML(inputDelta) {
    var tempCont = document.createElement("div");
    (new Quill(tempCont)).setContents(inputDelta);
    return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function defineElement(e, attr, value, append) {
    let el = document.createElement(e);
    for (let i = 0; i < attr.length; i++) {
        if (attr[i] === "class") {
            el.className = value[i];
        } else if (attr[i] === "backgroundColor") {
            el.style.backgroundColor = value[i];
        } else if (attr[i] === "innerHTML") {
            el.innerHTML = value[i];
        } else if (attr[i] === "value") {
            el.value = value[i];
        } else if (attr[i] === "src") {
            el.src = value[i];
        } else if (attr[i] === "color") {
            el.style.color = value[i];
        } else if (attr[i] === "display") {
            el.style.display = value[i];
        } else if (attr[i] === "html") {
            el.insertAdjacentHTML("beforeend", value[i]);
        } else if (attr[i] === "marginTop") {
            el.style.marginTop = value[i];
        } else if (attr[i] === "onclick") {
            el.setAttribute("onclick", value[i]);
        }else if (attr[i] === "href") {
            el.href = value[i];
        }else if (attr[i] === "target") {
            el.setAttribute("target", value[i]);
        }else if (attr[i] === "textDecoration"){
            el.style.textDecoration = value[i];
        }else if (attr[i] === "transform"){
            el.style.transform = value[i];
        }else if (attr[i] === "setAttribute"){
            let split = value[i].split(".");
            el.setAttribute(split[0], split[1]);
        }
    }
    for (let i = 0; i < append.length; i++) {
        el.appendChild(append[i]);
    }
    return el;
}

function parse_date(date) {
    let new_date = new Date(date);
    return new_date.getDate() + " " + new_date.toLocaleString('default', {month: 'long'}) + " " + new_date.getFullYear();
}
function append_session_data(e, key, where) {
    let key_data = localStorage.getItem(key);
    if (where === "src") {
        e.src = key_data;
    } else if (where === "innerHTML") {
        e.innerHTML = key_data;
    }
    e.removeAttribute("onload");
    console.log(e);
}

function attach_data_one(element_array, is_class_array, position, data) {
    for (let i = 0; i < element_array.length; i++) {
        let target;
        if (is_class_array[i] === true) {
            target = document.getElementsByClassName(element_array[i])[0];
        } else {
            target = document.getElementById(element_array[i]);
        }
        if (position === "innerHTML") {
            target.innerHTML = data;
        } else if (position === "src") {
            target.src = data;
        }
    }
}

function attach_data(element_array, is_class_array, where_array, data_array) {
    for (let i = 0; i < element_array.length; i++) {
        let target;
        if (is_class_array[i] === true) {
            target = document.getElementsByClassName(element_array[i])[0];
        } else {
            target = document.getElementById(element_array[i]);
        }
        if (where_array[i] === "innerHTML") {
            target.innerHTML = data_array[i];
        } else if (where_array[i] === "src") {
            target.src = data_array[i];
        }
    }
}

function change_style(element_array, is_class_array, change_array, change_value_array) {
    for (let i = 0; i < element_array.length; i++) {
        if (is_class_array[i] === true) {
            let target = document.getElementsByClassName(element_array[i])[0];
            continue_change_style(change_array, target, change_value_array, i);
        } else {
            let target = document.getElementById(element_array[i]);
            continue_change_style(change_array, target, change_value_array, i);
        }
    }
}

function continue_change_style(change_array, target, change_value_array, i) {
    if (change_array[i] === "backgroundColor") {
        target.style.backgroundColor = change_value_array[i];
    } else if (change_array[i] === "color") {
        target.style.color = change_value_array[i];
    } else if (change_array[i] === "display") {
        target.style.display = change_value_array[i];
    } else if (change_array[i] === "backgroundImage") {
        target.style.backgroundImage = change_value_array[i];
    } else if (change_array[i] === "border") {
        target.style.border = change_value_array[i];
    } else if (change_array[i] === "opacity") {
        target.style.opacity = change_value_array[i];
    } else if (change_array[i] === "borderRadius") {
        target.style.borderRadius = change_value_array[i];
    } else if (change_array[i] === "padding") {
        target.style.padding = change_value_array[i];
    } else if (change_array[i] === "paddingLeft") {
        target.style.paddingLeft = change_value_array[i];
    } else if (change_array[i] === "paddingRight") {
        target.style.paddingRight = change_value_array[i];
    } else if (change_array[i] === "paddingTop") {
        target.style.paddingTop = change_value_array[i];
    } else if (change_array[i] === "paddingBottom") {
        target.style.paddingBottom = change_value_array[i];
    } else if (change_array[i] === "margin") {
        target.style.margin = change_value_array[i];
    } else if (change_array[i] === "marginTop") {
        target.style.marginTop = change_value_array[i];
    } else if (change_array[i] === "marginBottom") {
        target.style.marginBottom = change_value_array[i];
    } else if (change_array[i] === "marginLeft") {
        target.style.marginLeft = change_value_array[i];
    } else if (change_array[i] === "marginRight") {
        target.style.marginRight = change_value_array[i];
    } else if (change_array[i] === "filter"){
        target.style.filter = change_value_array[i];
    }
}

function container_visibility(type, element_array, is_class) {
    for (let i = 0; i < element_array.length; i++) {
        if (is_class[i] === true) {
            let target = document.getElementsByClassName(element_array[i])[0]
            if (type === "show") {
                target.style.display = "block";
            } else if (type === "hide") {
                target.style.display = "none";
            }
        } else {
            let target = document.getElementById(element_array[i]);
            if (type === "show") {
                target.style.display = "block";
            } else if (type === "hide") {
                target.style.display = "none";
            }
        }
    }
}

function simple_request(request_type, url_string, async_boolean, json_data, send_data_boolean) {
    let send_auth = new XMLHttpRequest();
    send_auth.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log({"status": "success", "url": url_string, "response": this.responseText});
        }
    };
    send_auth.open(request_type, url_string, async_boolean);
    if (send_data_boolean === true) {
        send_auth.send(JSON.stringify(json_data));
    } else {
        send_auth.send();
    }
}
function send_file(form_data, csrf_boolean, request_type, url_string, async_boolean, send_data_boolean, done) {
    let csrf = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let send_auth = new XMLHttpRequest();
    send_auth.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            done(JSON.parse(this.responseText));
        }
    };
    send_auth.open(request_type, url_string, async_boolean);
    if (csrf_boolean === true) {
        send_auth.setRequestHeader('X-CSRFToken', csrf)
    }
    if (send_data_boolean === true) {
        send_auth.send(form_data);
    } else {
        send_auth.send();
    }
}
function send_request(csrf_boolean, request_type, url_string, async_boolean, json_data, send_data_boolean, done) {
    let csrf = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let send_auth = new XMLHttpRequest();
    send_auth.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            done(JSON.parse(this.responseText));
        }
    };
    send_auth.open(request_type, url_string, async_boolean);
    if (csrf_boolean === true) {
        send_auth.setRequestHeader('X-CSRFToken', csrf)
    }
    if (send_data_boolean === true) {
        send_auth.send(JSON.stringify(json_data));
    } else {
        send_auth.send();
    }
}

/*
KrishnJS END!
 */