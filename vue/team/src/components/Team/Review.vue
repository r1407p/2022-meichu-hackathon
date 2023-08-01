<template>
    <div class = "review_front">
        <p class = "review_text_title"> 參賽心得
            <img src = "@/assets/teampage/minus.svg" class = "review_plus_minus" v-if = "is_show_review" @click = "click_show_review">
            <img src = "@/assets/plus.svg" class = "review_plus_minus" v-else @click = "click_show_review">
        </p>
        
        <p class = "review_text" v-if="is_show_review" >
            {{Team.review}}
        </p> 
        
        <div class = "review_back">

        </div>
    </div>
    
    
    

</template>


<script>
export default{
    data (){
        return{
            Team:{
                review:"如與確診者有接觸史，或有發燒、呼吸道症狀、嗅覺異常或不明原因腹瀉等疑似COVID-19症狀或類流感症狀，請儘速就醫或篩檢，不要到辦公室上班。並請同仁以休假、病假及加班補休等方式辦理；或視業務性質、資（通）訊設備狀況及人力配置情形申請居家辦公。"
            },
            is_show_review :false
        }
    },
    methods:{
        click_show_review(){
            this.is_show_review =!this.is_show_review
        }
    }
}

</script>

<style>
    
    .review_block{
        width:640px;
        height:auto;
        background: #cfcfcf;
        position: relative;
    }
    .review_back{
        position: absolute;
        z-index: -1;
        left:15px;
        right:-15px;
        top:11px;
        bottom:-11px;
		background: linear-gradient(259deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius: 32px;
    }
    .review_front{
        z-index:auto;
        position: relative;
        height:auto;
        
		width:640px;
		background: #F5F5F5;
		box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1), -8px -8px 8px rgba(0, 0, 0, 0.1);
		border-radius: 32px;
    }
    .review_text_title{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 50px;
		display: flex;
		align-items: center;
		margin-left:26px;
        margin-right:26px;
		color: #7190FE;
		justify-content:space-between;
	}
    .review_text{
        font-family: 'Noto Sans SC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 23px;
		align-items: center;
		text-align: justify;
		margin-left:10%;
        margin-right:10%;
        padding-bottom: 40px;
		color: #787878;
        white-space: pre-wrap;
        height: 115px;
        overflow: auto;
    }
    

</style>