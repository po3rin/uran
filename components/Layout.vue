<template lang="pug">
  div
    header.layout__header
      nav.layout__header_right
        ul.layout__header_right
          li.layout__header_right-region(@click="goHome")
            md-button
              span Home
          li.layout__header_right-region(@click="goMusic")
            md-button
              span Music
          li.layout__header_right-region(@click="goBlog")
            md-button
              span Blog
    main.layout__main
      slot
    footer.layout__footer
      p
        small Copyright&copy;Uran All right reserved.
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push({ path: '/home' })
    },
    goMusic () {
      this.$router.push({ path: '/musics' })
    },
    goBlog () {
      this.$router.push({ path: '/blogs' })
    }
  }
}
</script>

<style scoped lang="scss">
  .md-icon {
    margin-right: 8px;
  }
  .hi__section {
    padding-top: 64px;
  }
  .layout {
    &__header {
      background-color: white;
      display: flex;
      justify-content: flex-end;
      position: fixed;
      opacity: .9;
      width: 100%;
      z-index: 100;
      &_right {
        display: flex;
        flex-direction: row;
        &-region {
          align-items: center;
          cursor: pointer;
          display: flex;
          justify-content: center;
          height: 44px;
          width: 100px;
          @media screen and (max-width: 480px) {
            width: 80px;
          }
        }
      }
    }
    &__main {
      min-height: 100vh;
    }
    &__footer {
      align-items: center;
      background-color: gray;
      color: white;
      display: flex;
      font-size: 1.4rem;
      justify-content: center;
      height: 256px;
    }
  }
</style>
