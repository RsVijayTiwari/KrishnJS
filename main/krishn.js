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
    }else if (change_array[i] === "color"){
        target.style.color = change_value_array[i];
    }else if (change_array[i] === "display"){
        target.style.display = change_value_array[i];
    }else if (change_array[i] === "backgroundImage"){
        target.style.backgroundImage = change_value_array[i];
    }else if (change_array[i] === "border"){
        target.style.border = change_value_array[i];
    }else if (change_array[i] === "opacity"){
        target.style.opacity = change_value_array[i];
    }else if (change_array[i] === "borderRadius"){
        target.style.borderRadius = change_value_array[i];
    }else if (change_array[i] === "padding"){
        target.style.padding = change_value_array[i];
    }else if (change_array[i] === "paddingLeft"){
        target.style.paddingLeft = change_value_array[i];
    }else if (change_array[i] === "paddingRight"){
        target.style.paddingRight = change_value_array[i];
    }else if (change_array[i] === "paddingTop"){
        target.style.paddingTop = change_value_array[i];
    }else if (change_array[i] === "paddingBottom"){
        target.style.paddingBottom = change_value_array[i];
    }else if (change_array[i] === "margin"){
        target.style.margin = change_value_array[i];
    }else if (change_array[i] === "marginTop"){
        target.style.marginTop = change_value_array[i];
    }else if (change_array[i] === "marginBottom"){
        target.style.marginBottom = change_value_array[i];
    }else if (change_array[i] === "marginLeft"){
        target.style.marginLeft = change_value_array[i];
    }else if (change_array[i] === "marginRight"){
        target.style.marginRight = change_value_array[i];
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