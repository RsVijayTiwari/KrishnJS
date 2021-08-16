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