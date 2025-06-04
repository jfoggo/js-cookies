class Cookies {

    // Save new cookie
    static set(cname, cvalue, exdays = 365) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

        const cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
        document.cookie = cookie;
    }

    // Retrieve cookie (if exists)
    static get(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    // Delete cookie (if exists)
    static del(cname) {
        Cookies.set(cname, "", 0);
    }

    // Retrieve all cookies
    static all() {
        const ca = document.cookie.split(';');
        const cookies = {};
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            let [cname, cvalue] = c.split('=').map(s => s.trim());
            cookies[cname] = cvalue;
        }
        return cookies;
    }

    // Retrieve all cookie keys
    static keys() {
        const ca = document.cookie.split(';');
        const cookie_keys = [];
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            let [cname, cvalue] = c.split('=').map(s => s.trim());
            cookie_keys.push(cname);
        }
        return cookie_keys;
    }

    // Retrieve all cookie values
    static values() {
        const ca = document.cookie.split(';');
        const cookie_values = [];
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            let [cname, cvalue] = c.split('=').map(s => s.trim());
            cookie_values.push(cvalue);
        }
        return cookie_values;
    }

}