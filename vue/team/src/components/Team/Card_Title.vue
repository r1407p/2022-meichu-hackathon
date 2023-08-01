<template>
    <div>
    <div class = "card_title_team_name">
        
            {{Team.group}} | {{Team.team_name}}
        
        <p class = "card_title_like_number">
            <img src = "@/assets/heart.svg">
            {{Team.like}}
        </p>
    </div>
    <p class = "card_title_teammate">
        {{Team.teammate_1}}、{{Team.teammate_2}}、{{Team.teammate_3}}
    </p>
    </div>
</template>

<script>
export default{
    data () {
        return {
            Team:{
                group:"參賽組別",
                team_name:"隊名隊名",
                like:1000,
                teammate_1:"隊員1",
                teammate_2:"隊員2",
                teammate_3:"隊員3"
            }
        }
    }

}

</script>

<style >
    .card_title_team_name{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 52px;
        display: flex;
		align-items: center;
		margin-left:26px;
        margin-right:26px;
		color: #000000;
        padding-right:30px;
    }
    .card_title_like_number{
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color:#000000;
        margin-left:48px;
    }
    .card_title_teammate{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        display: flex;
        align-items: center;
        margin-left:26px;
        color: #000000;
    }








</style>
