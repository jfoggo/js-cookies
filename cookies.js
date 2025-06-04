export class Cookies {

    // Save new cookie
    static set(cname, cvalue, exdays = 365, path = "/") {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

        const cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=${path}`;
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
            const c = ca[i];
            const [cname, cvalue] = c.split('=').map(s => s.trim());
            cookies[cname] = cvalue;
        }
        return cookies;
    }

    // Retrieve all cookie keys
    static keys() {
        const cookies = Cookies.all();
        return Object.keys(cookies);
    }

    // Retrieve all cookie values
    static vals() {
        const cookies = Cookies.all();
        return Object.values(cookies);
    }

}
