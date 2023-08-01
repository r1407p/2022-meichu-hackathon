<template>
    <div class = "project_intro_front">
        <p class = "project_intro_text_title"> 作品介紹
            
        </p>
        <p class = "project_intro_textsss"  >
            {{Team.project_intro}}
        </p> 
        
        <div class = "project_intro_back">

        </div>
    </div>


</template>


<script>
export default{
    data(){
        return{
            Team:{
                project_intro:"因應COVID-19疫情高峰，本校基於降低校園感染密度、確保校園師生安全，提供足夠「安心宿舍」量能、尊重教學自主、確保教學評量成效等考量，訂定以下措施：\n1、遠距上課延伸至本學期結束（6/17）。\n2、實驗、實作、體育、服務學習等課程，請授課教師規劃，引導學生自主學習。\n3、期末考由授課教師視疫情及公平性並參考學生意見，得採實體考試、線上多元評量或取消期末考。\n4、考量實驗室的人員密度，在指導教授的同意及環境安全無虞前提下，研究生得進入實驗室進行研究。\n5、住宿同學可提早退宿並申請退還部分宿費。\n"
            }
        }
    }
}


</script>

<style>
    .project_intro_back{
        position: absolute;
        z-index: -1;
        left:15px;
        right:-15px;
        top:11px;
        bottom:-11px;
		background: linear-gradient(259deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius: 32px;
    }
    .project_intro_front{
        z-index:auto;
        position: relative;
        height:auto;
		width:50vh;
		background: #F5F5F5;
		box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1), -8px -8px 8px rgba(0, 0, 0, 0.1);
		border-radius: 32px;
    }
    .project_intro_text_title{
        padding-top: 10px;
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
    .project_intro_textsss{
        font-family: 'Noto Sans SC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 23px;
		align-items: center;
		text-align: justify;
		margin-left:10%;
        margin-right:10%;
        margin-bottom: 71px;
		color: #787878;  
        padding-bottom: 40px; 
        white-space: pre-wrap;
    }
    

</style>