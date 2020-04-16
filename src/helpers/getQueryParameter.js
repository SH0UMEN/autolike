export default function(param) {
    let found;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param ==  item.split("=")[0]) {
            found = item.split("=")[1];
        }
    });
    return found;
}