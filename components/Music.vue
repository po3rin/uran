<template lang="pug">
  section.music.hi__section
    h2 Music
    .content
      .demo-card-wide.mdl-card.mdl-shadow--2dp
        .mdl-card__title.pic3
        .mdl-card__supporting-text Believe
        .mdl-card__actions.mdl-card--border
          a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(@click="play3") Play
        .mdl-card__menu
      .demo-card-wide.mdl-card.mdl-shadow--2dp
        .mdl-card__title.pic2
        .mdl-card__supporting-text RainyDay
        .mdl-card__actions.mdl-card--border
          a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(@click="play2") Play
        .mdl-card__menu
      .demo-card-wide.mdl-card.mdl-shadow--2dp
        .mdl-card__title.pic1
        .mdl-card__supporting-text あなたのもとへ
        .mdl-card__actions.mdl-card--border
          a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(@click="play1") Play
        .mdl-card__menu
      .demo-card-wide.mdl-card.mdl-shadow--2dp
        .mdl-card__title.pic4
        .mdl-card__supporting-text Energy
        .mdl-card__actions.mdl-card--border
          a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(@click="play4") Play
        .mdl-card__menu
    md-dialog(:md-active.sync="showDialog1")
      .space
      md-dialog-title Believe
      video(src="~assets/Believe.mp4" type="video/mp4" controls="controls" width="100%" autoplay preload)
      md-dialog-actions
        md-button.md-primary(@click="showDialog1 = false") Close
    md-dialog(:md-active.sync="showDialog2")
      .space
      md-dialog-title RainyDay
      video(src="~assets/RainyDay.mp4" type="video/mp4" controls="controls" width="100%" autoplay preload)
      md-dialog-actions
        md-button.md-primary(@click="showDialog2 = false") Close
    md-dialog(:md-active.sync="showDialog3")
      .space
      md-dialog-title あなたのもとへ
      video(src="~assets/anatanomotohe.mp4" type="video/mp4" controls="controls" width="100%" autoplay preload)
      md-dialog-actions
        md-button.md-primary(@click="showDialog3 = false") Close
    md-dialog(:md-active.sync="showDialog4")
      .space
      md-dialog-title Energy
      video(src="~assets/energy.mp4" type="video/mp4" controls="controls" width="100%" autoplay preload)
      md-dialog-actions
        md-button.md-primary(@click="showDialog4 = false") Close
</template>

<script>
  export default {
    data: () => ({
      showDialog1: false,
      showDialog2: false,
      showDialog3: false,
      showDialog4: false,
      videoLabel: false
    }),
    methods: {
      play1 () {
        this.showDialog1 = true
      },
      play2 () {
        this.showDialog2 = true
      },
      play3 () {
        this.showDialog3 = true
      },
      play4 () {
        this.showDialog4 = true
      }
    }
  }
</script>

<style scoped lang="scss">
.demo-card-wide.mdl-card {
  margin: 20px 0;
  width: 45%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}
.pic1 {
  background: url('~assets/works1.png') center / cover;
}
.pic2 {
  background: url('~assets/works2.png') center / cover;
}
.pic3 {
  background: url('~assets/works3.png') center / cover;
}
.pic4 {
  background: url('~assets/works4.png') center / cover;
}
.space {
  @media screen and (max-width: 480px) {
    padding-top: 44px;
  }
}
</style>
