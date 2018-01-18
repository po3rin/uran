<template lang="pug">
  div
    layout
      top
      music.music
      profile.profile
      blog.blog
      sns
      md-button.md-icon-button.md-raised.fix-button.fix-button_p1(@click="goTop")
        md-icon publish
      md-button.md-icon-button.md-raised.fix-button.fix-button_p2(@click="goMusic")
        md-icon queue_music
      md-button.md-icon-button.md-raised.fix-button.fix-button_p3(@click="goBlog")
        md-icon library_books
      md-button.md-icon-button.md-raised.fix-button.fix-button_p4(@click="goProfile")
        md-icon person
</template>

<script>
import Layout from '~/components/Layout'
import Top from '~/components/Top'
import Profile from '~/components/Profile'
import Music from '~/components/Music'
import Blog from '~/components/Blog'
import Sns from '~/components/Sns'

export default {
  components: {
    Layout,
    Top,
    Profile,
    Music,
    Blog,
    Sns
  },
  methods: {
    goTop: () => {
      window.scrollTo(0, 0)
    },
    goMusic: () => {
      const musicPosition = document.getElementsByClassName('music')[0].offsetTop
      window.scrollTo(0, musicPosition)
    },
    goBlog: () => {
      const blogPosition = document.getElementsByClassName('blog')[0].offsetTop
      window.scrollTo(0, blogPosition)
    },
    goProfile: () => {
      const profilePosition = document.getElementsByClassName('profile')[0].offsetTop
      window.scrollTo(0, profilePosition)
    }
  }
}
</script>

<style lang="scss">
.fix-button {
  position: fixed;
  margin: 0;
  &_p1 {
    bottom: 50%;
    left: 8%;
    z-index: 80;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: 3%;
    }
  }
  &_p2 {
    bottom: calc(50% - 48px);
    left: 8%;
    z-index: 80;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: calc(3% + 48px);
    }
  }
  &_p3 {
    bottom: calc(50% - 96px);
    left: 8%;
    z-index: 80;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: calc(3% + 96px);
    }
  }
  &_p4 {
    bottom: calc(50% - 144px);
    left: 8%;
    z-index: 80;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: calc(3% + 144px);
    }
  }
}
</style>
