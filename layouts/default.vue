<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: Roboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
p, small, a, h1, h2, h3, h4{
  font-family: Roboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
  font-weight: 100;
  margin: 0;
}
p {
  font-size: .8rem;
}
small {
  font-size: .9rem;
}
h1 {
  font-size: 2.2rem;
  font-weight: 400;
}
h2 {
  font-size: 2.0rem;
  margin-bottom: 24px;
  margin: 0;
  font-weight: 300;
}
h3 {
  font-size: 1.5rem;
  font-weight: 200;
}
.hi {
  &__section {
    padding: 24px 25%;
    @media screen and (max-width: 480px) {
      padding: 24px 8%;
    }
  }
}
.blog-header {
  border-left: 2px solid gray;
  padding: 12px;
  margin: 24px auto;
  width: 100%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  &__chip {
    padding: 4px 0 10px 0;
  }
}
</style>
