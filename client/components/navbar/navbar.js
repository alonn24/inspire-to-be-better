export default {
  data() {
    return {
      openBurger: false
    }
  },
  methods: {
    async toggleBurger() {
      this.openBurger = !this.openBurger;
    }
  }
}
