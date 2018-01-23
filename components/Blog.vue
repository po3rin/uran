<template lang="pug">
  section.blog.hi__section
    h2 Blog
    .blog-header(v-for="post in allPosts")
      h3
        router-link(:to="`/blogs/${post.slug}`") {{ post.title }}
      p {{ ShapedDate(post.dateAndTime, post.authors[0].name) }}
      .blog-header__chip
        md-chip(v-for="tag in post.tags")
          small {{ tag }}
      .blog-header__content
        router-link(:to="`/blogs/${post.slug}`")
          p {{ SliceContent(post.content) }}
</template>

<script>
import gql from 'graphql-tag'
import moment from 'moment'
const allPosts = gql`
  query allPosts {
    allPosts(orderBy: dateAndTime_DESC) {
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
  apollo: {
    $loadingKey: 'loading',
    allPosts: {
      query: allPosts,
      variables: {
        skip: 0
      }
    },
    postCount: {
      query: gql`{ _allPostsMeta { count } }`,
      update: ({ _allPostsMeta }) => _allPostsMeta.count
    }
  },
  methods: {
    ShapedDate: (data, person) => {
      return `${moment(data).format('YYYY-MM-DD')} | ${person}`
    },
    SliceContent: (data) => {
      return `${data.slice(0, 80)}...(続きを読む)`
    }
  }
}
</script>

<style scoped lang="scss">
.blog {
  padding-bottom: 64px;
}
.blog-header {
  border-left: 4px solid gray;
  padding: 0 12px;
  margin: 24px auto;
  width: 90%;
  transition: all .4s ease;
  &__chip {
    padding: 5px 0;
  }
  &__content {
    padding-top: 8px;
  }
  &:hover {
    border-left: #448aff 4px solid ;
  }
}
.md-theme-default a:not(.md-button) {
  color: black;
  text-decoration: none;
}
</style>
