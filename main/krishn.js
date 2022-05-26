/*
KrishnJS The DOM Manipulation Javascript Library
Created by Vijay Tiwari
 */
function session_status() {
    if (localStorage["SESSION"] === undefined) {
        return false
    } else {
        return true
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
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
        return true;
    } else {
        return true;
    }
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

function run_progress(times) {
    for (let i = 0; i < times; i++) {
        $("#progress").animate({width: "100%"}, 2000);
        $("#progress").animate({width: "0%", marginLeft: "100%"}, 2000);
        $("#progress").animate({width: "0%", marginLeft: "0%"}, 10);
    }
}

function custom_progress(times, c_n) {
    for (let i = 0; i < times; i++) {
        $("." + c_n).animate({width: "100%"}, 2000);
        $("." + c_n).animate({width: "0%", marginLeft: "100%"}, 2000);
        $("." + c_n).animate({width: "0%", marginLeft: "0%"}, 10);
    }
}

function calculates_vote(d) {
    if (d > 1001) {
        return d / 1000 + "K";
    } else {
        return d;
    }
}

function isVisible(ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    // The element is fully visible in the container
    return (
        (eleTop >= containerTop && eleBottom <= containerBottom) ||
        // Some part of the element is visible in the container
        (eleTop < containerTop && containerTop < eleBottom) ||
        (eleTop < containerBottom && containerBottom < eleBottom)
    );
}

/*
KrishnJS START!
 */
function process_time(d) {
    let ct = new Date();
    let sd = new Date(convertTZ(d));
    let hr = Math.floor(Math.abs(ct - sd) / 36e5);
    let time = sd.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true});
    //console.log("CT: " + ct  + " | SD: " + sd + " | HR: " + hr);
    if (hr < 0) {
        return time + " | Just Now";
    } else if (hr < 1) {
        return time + " | " + Math.round(((ct - sd % 86400000) % 3600000) / 60000) + " minute ago";
    } else if (hr < 48) {
        return time + " | " + Math.round(parseInt(hr)).toString() + " hours ago";
    } else {
        return time + " | " + sd.getDate().toString() + " " + (
            sd.toLocaleString("default", {month: "long"}).toString()
        ) + " " + sd.getFullYear().toString();
    }
}

function convertTZ(date) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}));
}

function check_m() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function extract(d, p, qi, tp) {
    for (let k = 0; k < d.length; k++) {
        if (d[k][tp] === qi) {
            return d[k][p];
        }
    }
}

function fetch_resource(src, status, type, ref) {
    let settings;
    if (type === "js") {
        settings = document.createElement("script");
        settings.src = src;
        settings.type = "text/javascript";
    } else if (type === "css") {
        settings = document.createElement("link");
        settings.setAttribute("rel", "stylesheet");
        settings.setAttribute("type", "text/css");
        settings.setAttribute("href", src);
    }
    settings.setAttribute("ref", ref);
    document.head.appendChild(settings);
    settings.onload = function () {
        status(true);
    };
}

function isElementPartiallyInViewport(el) {
    if (typeof jQuery !== 'undefined' && el instanceof jQuery)
        el = el[0];
    let rect = el.getBoundingClientRect();
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    let windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    let vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    let horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
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
        } else if (attr[i] === "paddingRight") {
            el.style.paddingRight = value[i];
        }else if (attr[i] === "innerHTML") {
            el.innerHTML = value[i];
        } else if (attr[i] === "value") {
            el.value = value[i];
        } else if (attr[i] === "filter") {
            el.style.filter = value[i];
        } else if (attr[i] === "marginRight") {
            el.style.marginRight = value[i];
        } else if (attr[i] === "flexWrap") {
            el.style.flexWrap = value[i];
        } else if (attr[i] === "src") {
            el.src = value[i];
        } else if (attr[i] === "justifyContent") {
            el.style.justifyContent = value[i];
        } else if (attr[i] === "color") {
            el.style.color = value[i];
        } else if (attr[i] === "display") {
            el.style.display = value[i];
        } else if (attr[i] === "html") {
            el.insertAdjacentHTML("beforeend", value[i]);
        } else if (attr[i] === "marginTop") {
            el.style.marginTop = value[i];
        } else if (attr[i] === "marginLeft") {
            el.style.marginLeft = value[i];
        } else if (attr[i] === "marginBottom") {
            el.style.marginBottom = value[i];
        } else if (attr[i] === "onclick") {
            el.setAttribute("onclick", value[i]);
        } else if (attr[i] === "onload") {
            el.setAttribute("onload", value[i]);
        } else if (attr[i] === "href") {
            el.href = value[i];
        } else if (attr[i] === "target") {
            el.setAttribute("target", value[i]);
        } else if (attr[i] === "textDecoration") {
            el.style.textDecoration = value[i];
        } else if (attr[i] === "transform") {
            el.style.transform = value[i];
        } else if (attr[i] === "fontWeight") {
            el.style.fontWeight = value[i];
        } else if (attr[i] === "boxShadow") {
            el.style.boxShadow = value[i];
        } else if (attr[i] === "border") {
            el.style.border = value[i];
        } else if (attr[i] === "borderTop") {
            el.style.borderTop = value[i];
        } else if (attr[i] === "borderBottom") {
            el.style.borderBottom = value[i];
        } else if (attr[i] === "borderLeft") {
            el.style.borderLeft = value[i];
        } else if (attr[i] === "borderRight") {
            el.style.borderRight = value[i];
        } else if (attr[i] === "borderRadius") {
            el.style.borderRadius = value[i];
        } else if (attr[i] === "transform") {
            el.style.transform = value[i];
        } else if (attr[i] === "fontSize") {
            el.style.fontSize = value[i];
        } else if (attr[i] === "position") {
            el.style.position = value[i];
        } else if (attr[i] === "top") {
            el.style.top = value[i];
        } else if (attr[i] === "left") {
            el.style.left = value[i];
        } else if (attr[i] === "height") {
            el.style.height = value[i];
        } else if (attr[i] === "right") {
            el.style.right = value[i];
        } else if (attr[i] === "bottom") {
            el.style.bottom = value[i];
        } else if (attr[i] === "maxHeight") {
            el.style.maxHeight = value[i];
        } else if (attr[i] === "padding") {
            el.style.padding = value[i];
        } else if (attr[i] === "margin") {
            el.style.margin = value[i];
        } else if (attr[i] === "textAlign") {
            el.style.textAlign = value[i];
        } else if (attr[i] === "fontFamily") {
            el.style.fontFamily = value[i];
        } else if (attr[i] === "float") {
            el.style.float = value[i];
        } else if (attr[i] === "width") {
            el.style.width = value[i];
        } else if (attr[i] === "visibility") {
            el.style.visibility = value[i];
        } else if (attr[i] === "overflowX") {
            el.style.overflowX = value[i];
        } else if (attr[i] === "overflowY") {
            el.style.overflowY = value[i];
        } else if (attr[i] === "paddingTop") {
            el.style.paddingTop = value[i];
        } else if (attr[i] === "borderBottomRightRadius") {
            el.style.borderBottomRightRadius = value[i];
        } else if (attr[i] === "borderBottomLeftRadius") {
            el.style.borderBottomLeftRadius = value[i];
        } else if (attr[i] === "cursor") {
            el.style.cursor = value[i];
        } else if (attr[i] === "id") {
            el.id = value[i];
        } else if (attr[i] === "placeholder") {
            el.setAttribute('placeholder', value[i]);
        } else if (attr[i] === "setAttribute") {
            let split = value[i].split(".");
            el.setAttribute(split[0], split[1]);
        } else if (attr[i] === "setAttributeDO") {
            let split = value[i].split("..");
            el.setAttribute(split[0], split[1]);
        }
    }
    for (let i = 0; i < append.length; i++) {
        el.appendChild(append[i]);
    }
    return el;
}

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function parse_date(date) {
    let new_date = new Date(date);
    return new_date.getDate() + " " + new_date.toLocaleString('default', {month: 'long'}).slice(0, 3) + " " + new_date.getFullYear();
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
        } else if (is_class_array[i] === undefined) {
            continue_change_style(change_array, element_array[i], change_value_array, i);
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
    } else if (change_array[i] === "filter") {
        target.style.filter = change_value_array[i];
    } else if (change_array[i] === "opacity") {
        target.style.opacity = change_value_array[i];
    }
}

function element_loop(element, parent_element, data_array, insert_position, append) {
    for (let k = 0; k < data_array.length; k++) {
        parent_element.appendChild(defineElement(element, [insert_position], [data_array[k]], append));
    }
    return parent_element;
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
/*
KrishnJS END!
 */