if (process.browser) {
  window.fbAsyncInit = function () {
    FB.init({
      appId: '340152526532469',
      cookie: true,
      xfbml: true,
      version: 'v3.2'
    });

    FB.AppEvents.logPageView();

  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

class Facebook {
  async status() {
    return new Promise(resolve => {
      FB.getLoginStatus(({ status }) => {
        resolve(status);
      });
    });
  }

  login() {
    return new Promise(resolve => {
      FB.login(response => {
        if (response.status === 'connected') {
          this.token = response.authResponse.accessToken;
          this.userId = response.authResponse.userID;
          resolve(this.token);
        }
      }, {
        scope: 'public_profile,email',
        auth_type: 'rerequest'
      });
    });
  }

  details() {
    return new Promise(resolve => {
      FB.api(this.userId, response => {
          if (response && !response.error) {
            resolve(response);
          }
        }
      );
    });
  }

  logout() {
    FB.api(`/${this.userId}/permissions`, 'delete', {
      access_token: this.token
    });
  }
}

export default new Facebook();
