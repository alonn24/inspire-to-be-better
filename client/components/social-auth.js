export default {
  props: {
    vendor: {
      type: String,
      required: true,
      default: 'Unknown'
    }
  },
  data() {
    return {
      title: 'social auth'
    }
  },
  methods: {
    async toggleBurger() {
      this.openBurger = !this.openBurger;
    }
  }
}
