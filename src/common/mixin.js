import BackTop from "components/content/BackTop"


export const backTOPMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backTotop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
}