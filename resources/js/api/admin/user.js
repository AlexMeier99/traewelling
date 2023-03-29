'use strict';
window.AdminUser = class AdminUser {

    static update(id, data) {
        return API.request('/admin/user/' + id, 'PUT', data);
    }
}
