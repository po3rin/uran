<template lang="pug">
  div
    layout
      section.hi__section(v-if="post")
        .blog-header
          h1 {{ post.title }}
          p {{ ShapedDate(post.dateAndTime, post.authors[0].name) }}
          .blog-header__chip
            md-chip(v-for="tag in post.tags")
              small {{ tag }}
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>
        main.blog-content
        vue-markdown {{ post.content }}
        md-button.md-icon-button.md-raised.fix-button.fix-button_p1(@click="goHome")
          md-icon home
        md-button.md-icon-button.md-raised.fix-button.fix-button_p2(@click="goTop")
          md-icon publish
      section.hi__section(v-else)
</template>

<script>
import Layout from '~/components/Layout'
import gql from 'graphql-tag'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'
const post = gql`
    query post($slug: String!) {
      post: Post(slug: $slug) {
        id
        slug
        tags
        title
        content
        dateAndTime
        authors {
          name
        }
      }
    }
  `
export default {
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    post: {
      query: post,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: {
    Layout,
    VueMarkdown
  },
  methods: {
    ShapedDate: (data, person) => {
      return `${moment(data).format('YYYY-MM-DD')} | ${person}`
    },
    goHome () {
      this.$router.push({ path: '/home' })
    },
    goTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
.hi__section {
  padding-top: 48px;
}
.blog-content {
  margin: auto;
  width: 80%;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
}
h2 {
  padding: 28px 0;
}
.fix-button {
  position: fixed;
  margin: 0;
  &_p1 {
    bottom: 50%;
    left: 8%;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: 3%;
    }
  }
  &_p2 {
    bottom: calc(50% - 48px);
    left: 8%;
    @media screen and (max-width: 480px) {
      bottom: 3%;
      left: calc(3% + 48px);
    }
  }
}
</style>
