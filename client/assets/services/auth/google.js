if (process.browser) {
  gapi.load('auth2', () =>
    gapi.auth2.init({
      client_id: process.env.googleClientId,
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
