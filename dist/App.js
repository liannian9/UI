var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
function App() {
    var clickevent = {
        onClick: function () { return console.log('clickevent'); }
    };
    var handleChangeFile = function (e) {
        console.log(e.target.files);
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("div", __assign({}, clickevent), "clickevent"),
            React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Large, disabled: true }, "button"),
            React.createElement("hr", null),
            React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Small, disabled: true }, "button"),
            "        ",
            React.createElement("hr", null),
            React.createElement(Button, { disabled: true }, "button"),
            React.createElement("hr", null),
            React.createElement(Button, { btnType: ButtonType.Link, href: 'https://www.baidu.cn', target: "_blank", size: ButtonSize.Large }, "button"),
            "        ",
            React.createElement("hr", null),
            React.createElement(Button, { btnType: ButtonType.Link, href: 'https://www.baidu.cn', disabled: true, size: ButtonSize.Large }, "button"),
            React.createElement("input", { type: "file", onChange: handleChangeFile }))));
}
export default App;
