<template lang="pug">
  .error
    .error__content
      h2 {{ error.statusCode }}
      small(v-if="error.statusCode === 404") ページが見つかりません
      small(v-else) エラーが発生しました
      p {{ error.message }}
      nuxt-link(to="/home")
        md-button.md-icon-button.md-raised.md-primary
          md-icon home
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
<style scoped lang="scss">
  .error {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      margin: auto;
      text-align: center;
    }
  }
</style>
