window.User = class User {

    static block(userId) {
        API.request(`/user/${userId}/block`, 'POST')
            .then(response => {
                if (!response.ok) {
                    return response.json().then(API.handleGenericError);
                }

                return response.json().then(data => {
                    //ToDo: do something
                    notyf.success(data.data.message);
                });
            })
            .catch(API.handleGenericError);
    }

    static unblock(userId) {
        API.request(`/user/${userId}/block`, 'DELETE')
            .then(response => {
                if (!response.ok) {
                    return response.json().then(API.handleGenericError);
                }

                return response.json().then(data => {
                    //ToDo: do something
                    notyf.success(data.data.message);
                });
            })
            .catch(API.handleGenericError);
    }

    static mute(userId) {
        API.request(`/user/${userId}/mute`, 'POST')
            .then(response => {
                if (!response.ok) {
                    return response.json().then(API.handleGenericError);
                }

                return response.json().then(data => {
                    //ToDo: do something

                    notyf.success(data.data.message);
                });
            })
            .catch(API.handleGenericError);
    }

    static unmute(userId) {
        API.request(`/user/${userId}/mute`, 'DELETE')
            .then(response => {
                if (!response.ok) {
                    return response.json().then(API.handleGenericError);
                }

                return response.json().then(data => {
                    //ToDo: do something
                    notyf.success(data.data.message);
                });
            })
            .catch(API.handleGenericError);
    }
}
