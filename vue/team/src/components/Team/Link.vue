<template>
    <div class = "link_box">
        <p class = "link_text_title"> 
            相關連結
        </p>
        <hr class = "link_line"/>
        <p class = "link_text_title" v-for = "link in Team.links">
            <a :href="link" class = "link_link">
            {{link}}
            </a>
        </p>
   </div>
</template>


<script>
export default{
    data(){
        return{
            Team:{
                links:[
                    "https://2019-ncov.site.nthu.edu.tw/p/406-1499-228372,r8258.php?Lang=zh-tw",
                    
                ]
            }
        }
    }
}

</script>

<style>
    .link_box{
        width:629px;
        height:auto;
    }
    .link_text_title{
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
    .link_line{
		width:629px;
		height:3px;
		background: linear-gradient(259deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius:3px;
		margin:26px;
		color:#7190FE;
	}
    .link_link{
        
        font-family: 'Noto Sans SC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        text-align: left;
        color: #787878;
        padding-bottom:20px;
    }
</style>