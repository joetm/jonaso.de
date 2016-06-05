function browserSupportsCSSProperty(propertyName) {
    'use strict';
    var elm = document.createElement('div'),
        i,
        propertyNameCapital,
        domPrefixes;
    propertyName = propertyName.toLowerCase();
    if (elm.style[propertyName] !== undefined) {
        return true;
    }
    propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1);
    domPrefixes = ['Webkit', 'Moz', 'ms', 'O']; // 'Webkit Moz ms O'.split(' ');
    for (i = 0; i < domPrefixes.length; i = i + 1) {
        if (elm.style[domPrefixes[i] + propertyNameCapital] !== undefined) {
            return true;
        }
    }
    return false;
}//browserSupportsCSSProperty