<template>
	<div>
	<div class = "card_block">
		<div class = "card_back">

		</div>
		<div class = "card_front" @mouseenter="card_enter" @mouseleave="card_leave">
			<transition name="card_fade"><img :src="Team.picture" class="card_front_pic" v-show="!card_flip"></transition>
			<transition name="card_fade">
				<div class = "card_inbox" v-show="card_flip">
					<img src = "@/assets/heart_white.svg"/>
					<p class = "card_inbox_text">{{Team.like}}</p>
					<img src = "@/assets/letter.svg"/>
					<p class = "card_inbox_text">{{Team.share}}</p>
				</div>
			</transition>
		</div>
	</div>
	<h1 class = "card_team_name">{{Team.team_name}}</h1>
	<div class = "card_property_block">
		<div class = "card_property">
			<div class = "card_property_out">

			</div>
			<div class = "card_property_text">
				{{Team.year}}
			</div>
		</div>
		<div class = "card_property">
			<div class = "card_property_out">

			</div>
			<div class = "card_property_text">
				{{Team.group}}
			</div>
		</div>
	</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			card_flip:false,
			Team:{
				like:1000,
				share:1000,
				picture:"https://i.pinimg.com/564x/d3/8b/44/d38b4411851a836eec16be340d408aec.jpg",
				team_name:"隊名隊名隊名隊名隊名隊名",
				year:2021,
				group:"黑客組"
			}
		}
	},
	methods:{
    card_enter(){
      this.card_flip = true;
    },
    card_leave(){
      this.card_flip = false;
    }
  }

}



</script>

<style>
	.card_inbox_text{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 24px;
		display: flex;
		align-items: center;
		text-align: center;

		color: #FFFFFF;
	}
	.card_inbox{
		position:absolute;

		width:100%;
		
		line-height:282.37px;
		display:flex;
  		justify-content:space-around;	

	}
	.card_front_pic{
		max-height: 100%;  
		max-width: 100%; 
		width: auto;
		height: auto;
		border-radius: 32px;
	}
	.card_block{
		width:302px;
		height:302px;
		position: relative;
	}
	.card_front{
		position: absolute;
		left: 0%;
		right: 6.5%;
		top: 0%;
		bottom: 6.21%;
		background: #F5F5F5;
		box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1), -8px -8px 8px rgba(0, 0, 0, 0.1);
		border-radius: 32px;
		display: flex;
		align-items: center;
		transition-duration:2s; 
	}
	.card_front:hover{
		
		background: #b8b8b8;
		
	}
	.card_back{
		position: absolute;
		left: 13.31%;
		right: 0%;
		top: 6.21%;
		bottom: 0%;
		background: linear-gradient(259deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius: 32px;
		
	}
	.card_team_name{
		width:302px;
		height:auto;

		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		
		align-items: center;
		text-align: center;
		color: #7190FE;
	}
	.card_property_block{
		width:302px;
		height:auto;
		display:flex;
		
		justify-content:space-around;
		align-items: center;
	}
	.card_property{
		width:117px;
		height:48.23px;
		position: relative;
	}
	.card_property_out{
		
		
		position: absolute;
		left: 0%;
		right: 0%;
		top: 0%;
		bottom: 0%;
		background: linear-gradient(180deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius: 24.115px;
	}
	.card_property_text{	
		position: absolute;
		color:#7190FE;
		left: 5px;
		right: 5px;
		top: 5px;
		bottom: 5px;
		background: #F5F5F5;
		border-radius: 19.115px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		align-items: center;
		text-align: center;
		line-height:38.43px;
	}
	.card_fade-enter-active,
	.card_fade-leave-active {
		transition: opacity 1s;
	}
	/*指定出場*/
	.card_fade-enter,
	.card_fade-leave-to {
		transition: 1s;
		opacity: 0;
	}

	
</style>
