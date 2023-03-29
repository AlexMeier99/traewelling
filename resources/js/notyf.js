import {Notyf} from "notyf";

document.addEventListener("DOMContentLoaded", function () {
    window.notyf = new Notyf({
        duration: 5000,
        position: {x: "right", y: "top"},
        dismissible: true,
        ripple: true,
        types: [
            {
                type: 'info',
                background: '#0dcaf0',
                icon: {
                    className: 'fa-solid fa-circle-info',
                    color: 'white',
                    tagName: 'i',
                }
            },
            {
                type: 'warning',
                background: '#ffc107',
                icon: {
                    className: 'fa-solid fa-triangle-exclamation',
                    tagName: 'i',
                    color: 'white',
                }
            },
        ]
    });
});
