if (process.browser) {
  // client secret = QkOIPxzlY_cJ4V7sMHL0si8r
  gapi.load('auth2', () =>
    gapi.auth2.init({
      client_id: `792143907991-v6jcpqgvvpncgt14hjv4s65l2gq7s5fk.apps.googleusercontent.com`,
      fetch_basic_profile: true
    }));
}

class Google {
  async status() {
    return await gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  async login() {
    const auth = gapi.auth2.getAuthInstance();
    this.user = await auth.signIn({
      prompt: 'consent',
      fetch_basic_profile: true
    });
    const authResponse = this.user.getAuthResponse();
    this.token = authResponse.id_token;

    return this.token;
  }

  async details() {
    const auth = await gapi.auth2.getAuthInstance();
    if (!this.user) {
      this.user = auth.currentUser.get();
    }
    if (this.user && auth.isSignedIn.get()) {
      return { name: this.user.getBasicProfile().getName() };
    }
  }

  logout() {
    gapi.auth2.getAuthInstance().disconnect();
  }
}

export default new Google();
