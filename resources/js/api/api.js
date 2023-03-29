'use strict';

require('./admin/user');
window.API = class API {

    static request(path, method = 'GET', data = []) {
        return fetch('/api' + path, {
            method: method,
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(data),
        });
    }
}
