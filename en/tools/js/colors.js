function rgb_to_hex() { 
    hexcode = "#"; 
    for (x = 0; x < 3; x++) {
        var n = $("input[name='rgb2hex']")[x].value; 
        if (n == "") n = "0"; 
        if (parseInt(n) != n) 
            return alert("The input RGB value should be a number"); 
        if (n > 255) 
            return alert("The input RGB value should be in range [0, 255]"); 
        var c = "0123456789ABCDEF", b = "", a = n % 16; 
        b = c.substr(a, 1); 
        a = (n - a) / 16; 
        hexcode += c.substr(a, 1) + b
    }
    $("#hex-result").html(hexcode);
    $("#hex-result").css('color', hexcode);
    $("#copy-hex").css('display', 'inline')
}

function hex_to_rgb() {
    var hexcode = $("input[name='hex2rgb']")[0].value; 
    if (hexcode.substr(0, 1) == "#") hexcode = hexcode.substring(1); 
    var len = hexcode.length; 
    if (len != 6 && len != 3) return alert("The input hex color code should be 6 or 3 digits"); 
    else if (/[^0-9a-f]/i.test(hexcode)) return alert("Incorrect input hexadecimal color code"); 
    hexcode = hexcode.toLowerCase(); 
    rgb = new Array(); 
    for (x = 0; x < 3; x++) { 
        rgb[0] = len == 6 ? hexcode.substr(x * 2, 2) : hexcode.substr(x * 1, 1) + hexcode.substr(x * 1, 1); 
        rgb[3] = "0123456789abcdef"; 
        rgb[1] = rgb[0].substr(0, 1); 
        rgb[2] = rgb[0].substr(1, 1); 
        rgb[20 + x] = rgb[3].indexOf(rgb[1]) * 16 + rgb[3].indexOf(rgb[2]) 
    }
    var rgb_result = '[' + rgb[20] + ', ' + rgb[21] + ', ' + rgb[22] + ']';
    $("#rgb-result").html(rgb_result);
    $("#rgb-result").css('color', '#' + hexcode);
    $("#copy-rgb").css('display', 'inline');
}

function copy_hex() {
    navigator.clipboard.writeText($("#hex-result").text())
        .then(() => {
            $("#copy-hex").text("Copied!");
            setTimeout(() => {
                $("#copy-hex").text("Copy");
            }, 500);
        })
}

function copy_rgb() {
    navigator.clipboard.writeText($("#rgb-result").text())
        .then(() => {
            $("#copy-rgb").text("Copied!");
            setTimeout(() => {
                $("#copy-rgb").text("Copy");
            }, 500);
        })
}

function keydown(event, num) {
    var keynum; 
    if (window.event) keynum = event.keyCode; 
    else if (event.which) keynum = event.which; 
    if (keynum == 13) { 
        if (num == 0) rgb_to_hex();
        else hex_to_rgb();
    } 
}

function color_to_rgb() {
    var hexcode = $("input[name='color']")[0].value.substring(1);
    var len = hexcode.length;
    rgb = new Array(); 
    for (x = 0; x < 3; x++) { 
        rgb[0] = len == 6 ? hexcode.substr(x * 2, 2) : hexcode.substr(x * 1, 1) + hexcode.substr(x * 1, 1); 
        rgb[3] = "0123456789abcdef"; 
        rgb[1] = rgb[0].substr(0, 1); 
        rgb[2] = rgb[0].substr(1, 1); 
        rgb[20 + x] = rgb[3].indexOf(rgb[1]) * 16 + rgb[3].indexOf(rgb[2]) 
        $("input[name='color2rgb']")[x].value = rgb[20 + x];
    }
}

function changeColor() {
    $("input[name='color2hex']")[0].value = $("input[name='color']")[0].value.toUpperCase();
    color_to_rgb();
}

function copy_color_hex() {
    navigator.clipboard.writeText($("input[name='color']")[0].value.toUpperCase())
        .then(() => {
            $("#copy-color-hex").text("Copied!");
            setTimeout(() => {
                $("#copy-color-hex").text("Copy");
            }, 500);
        })
}
