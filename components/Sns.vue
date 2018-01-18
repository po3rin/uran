<template lang="pug">
  section.sns.hi__section
    .content
      .content_box
        a(href='https://twitter.com/catch_top_dream')
          img.content_box_icon(src="~assets/twitter-icon.png")
        a(href='https://twitter.com/catch_top_dream')
          h3 Twitter
      .content_box
        a(href='https://twitter.com/catch_top_dream')
          img(width="180px" src="~assets/twitter.jpg")
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  &_box {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    &_icon {
      width: 44px;
    }
  }
}
h3 {
  margin: 8px;
  @media screen and (max-width: 800px) {
    display: none
  }
}
.md-theme-default a:not(.md-button) {
  color: black;
  text-decoration: none;
}
</style>
