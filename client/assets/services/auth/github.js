import axios from 'axios'
import {openPopup} from '../../browser/window-utils'

class Github {
  async status() {
    return this.token ? 'connected' : 'not connected'
  }

  async login() {
    return new Promise(resolve => {
      const popup = openPopup(`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.githubClientId}`, {
        name: 'githubLogin',
        width: 540,
        height: 716
      })

      window.clearInterval(this.popupInterval)
      this.popupInterval = window.setInterval(async () => {
        if (popup.socialLoginCode) {
          window.clearInterval(this.popupInterval)
          const {data} = await axios.get(`/_api/provider/_functions/onGithubLogin?code=${popup.socialLoginCode}`)
          this.token = data.access_token
          resolve(this.token)
          popup.close()
        }
      }, 1000)
    })
  }

  async details() {
    if (!this.token) {
      return
    }
    const response = await axios.get(`https://api.github.com/user?access_token=${this.token}`)
    return response.data
  }

  logout() {
    this.token = null
  }
}

export default new Github()
