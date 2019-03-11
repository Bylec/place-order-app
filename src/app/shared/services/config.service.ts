export class ConfigService {

    siteUrl = 'http://localhost/dinner-rest/public/api/';

    getBackendUrl(admin = true) {
        let url = this.siteUrl;
        if (admin !== null) {
            url = `${this.siteUrl}${admin ? 'admin' : 'user'}/`;
        }

        return url;
    }
}
