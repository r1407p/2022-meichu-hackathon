<template>
  <div class="yearintro">
    <div class="card" @mouseenter="enter" @mouseleave="leave">
      <transition name="fade"><img src="@/assets/card_pic.svg" class="card_pic" v-show="!flip"></transition>
      <transition name="fade"><img src="@/assets/year_frame.svg" class="year_frame1" v-show="!flip"></transition>
      <transition name="fade"><p class="year_text2" v-show="flip">{{numOfYear}}</p></transition>
      <transition name="fade"><p class="yearintro_content" v-show="flip">{{yearintro_content}}</p></transition>
      <transition name="fade">
        <a href="" v-show="flip">
          <div class="more_block">
          <img src="@/assets/more_border.svg">
          </div>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearIntro',
  data(){
    return{
      numOfYear: "2020",
      flip: false,
      yearintro_content: "動機，可以說是最單純的力量。科技的出現，必將帶領人類走向更高的巔峰。"
    }
  },
  methods:{
    enter(){
      this.flip = true;
    },
    leave(){
      this.flip = false;
    }
  }
}
</script>

<style scope>
  .yearintro{
    position: absolute;
    width: 977px;
    height: 379px;
    border: solid gray;
    border-radius: 16px 16px;
  }
  .card{
    position: absolute;
    width: 299px;
    height: 379px;
    border: solid gray;
    border-radius: 16px 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .card_pic{
    position: absolute;
    width: 260.6px;
    height: 171.25px;
    left: 50%;
    top: 32%;
    transform: translate(-50%, -50%);
  }
  .year_text1{
    position: absolute;
    margin: 0px;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Noto Sans CJK TC';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    /* key visual/text/100 */

    color: #7190FE;
  }
  .year_text2{
    position: absolute;
    margin: 0px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Noto Sans CJK TC';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    /* key visual/text/100 */

    color: #7190FE;
  }
  .year_frame1{
    position: absolute;
    margin: 0px;
    top: 68%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .year_frame2{
    position: absolute;
    margin: 0px;
    top: 20%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .yearintro_content{
    position: absolute;
    Width: 175px;
    Height: 189px;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    font-family: 'Noto Sans CJK TC';
    font-style: normal;
    font-weight: 350;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;

    /* key visual/text/100 */

    color: #7190FE;
  }

  /*指定進場*/
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  /*指定出場*/
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /*進出場 中間的過度*/
  .move-enter-active {
    transition: all 1s;
  }
  .move-leave-active {
    transition: all 1s;
  }
  /*進、出場*/
  .move-enter,
  .move-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  /* blog 進出場 */
  /*進出場 中間的過度*/
  .bloc-enter-active,
  .bloc-leave-active {
    transition: all 0.8s ease;
    width: 100px;
    height: 100px;
    background-color: rgb(208, 255, 80);
  }
  .bloc-enter {
    transform: translateY(-50px);
    opacity: 0;
  }
  .bloc-enter-to,
  .bloc-leave {
    opacity: 1;
  }

  .bloc-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
  /* 使用Animation 動畫 */
  .bounce-enter-active {
    animation: bounce-in 1s;
  }
  .bounce-leave-active {
    animation: bounce-in 1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
