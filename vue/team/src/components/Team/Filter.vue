<template>
  <div class = "filter_background">	
		<p class = "filter_text_title" > 篩選條件 </p>
		<hr class = "filter_line"/>
		<p class = "filter_text_title"> 年份 
			<img src = "@/assets/minus.svg" class = "filter_plus_minus" v-if = "is_show_year" @click = "click_show_year">
			<img src = "@/assets/plus.svg" class = "filter_plus_minus" v-else @click = "click_show_year">
		</p>
		
		<ul  v-if = is_show_year>
			<p class = "filter_text" v-for = "year in yearList" :key = "year">
			<input type="radio" @click = "click_on_radio_year($event)"  :id = "year.text" :value = "year.text" v-model = "year_select">
			{{year.text}}
			</p>
		</ul>	
		<hr class = "filter_line"/>
		<p class = "filter_text_title"> 組別 
			<img src = "@/assets/minus.svg" class = "filter_plus_minus" v-if = "is_show_group" @click = "click_show_group">
			<img src = "@/assets/plus.svg" class = "filter_plus_minus" v-else @click = "click_show_group">
		</p>
		<ul  v-if = is_show_group>
			<p class = "filter_text" v-for = "group in groupList" :key = "group">
				<input type="radio" @click = "click_on_radio_group($event)"  :id = "group.text" :value = "group.text" v-model = "group_select">
				{{group.text}}
			</p>
		</ul>
		<hr class = "filter_line"/>
		<p class = "filter_text_title"> 得獎作品 
			<img src = "@/assets/minus.svg" class = "filter_plus_minus" v-if = "is_show_price" @click = "click_show_price">
			<img src = "@/assets/plus.svg" class = "filter_plus_minus" v-else @click = "click_show_price">
		</p>
		<ul  v-if = is_show_price>
			<p class = "filter_text" v-for = "price in priceList" :key = "price">
				<input type="radio" @click = "click_on_radio_price($event)"  :id = "price.text" :value = "price.text" v-model = "price_select">
				{{price.text}}
			</p>
		</ul>
		
	</div>
	
  

</template>

<script>



export default {
	data () {
    return {
      yearList: [
        { text:2012 },
        { text:2013 },
		{ text:2014 },
		{ text:2015 },
		{ text:2016 },
		{ text:2017 },
		{ text:2018 },
		{ text:2019 },
		{ text:2020 },
		{ text:2021 },
		{ text:2022 }
      ],
      	is_show_year: false,
		groupList:[
			{text:"黑客組"},
			{text:"交流組"}
		],
		is_show_group: false,
		priceList:[
			{text:"得獎作品"}
		],
		is_show_price:false,
		year_select:'',
		group_select:'',
		price_select:''

    } 	
	},
	methods:{
    click_show_year(){
			this.is_show_year = !this.is_show_year
		},
	click_show_group(){
		this.is_show_group = !this.is_show_group
	},
	click_show_price(){
		this.is_show_price = !this.is_show_price
	},
	click_on_radio_year($event){
		if(this.year_select == $event.target._value){
			this.year_select = '';
		}
	},
	click_on_radio_group($event){
		if(this.group_select == $event.target._value){
			this.group_select = '';
		}
	},
	click_on_radio_price($event){
		if(this.price_select == $event.target._value){
			this.price_select = '';
		}
	},
  }
}
</script>

<style>
	.filter_background{
		background:#F5F5F5;
		padding-top:13px;
		padding-bottom:13px;
		width: 302px;
		height: auto;
		box-shadow: inset -4px -4px 8px rgba(221, 220, 220, 0.8), inset 4px 4px 8px rgba(187, 187, 187, 0.8);
		border-radius: 32px;
		
    }
	.filter_plus_minus{
		float:right;
		margin-right:26px;
		text-align: right;
	}
	.filter_text{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		align-items: center;
		text-align: left;
		margin-left:26px;
		color: #7190FE;
	}
	.filter_text_title{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		display: flex;
		align-items: center;
		margin-left:26px;
		color: #7190FE;
		justify-content:space-between;
	}
	.filter_line{
		width:250px;
		height:3px;
		background: linear-gradient(259deg, #D39CFF -9.61%, rgba(180, 197, 254, 0.852278) 62.12%, rgba(147, 241, 254, 0.695417) 102.26%, rgba(240, 222, 255, 0.32) 121%);
		border-radius:3px;
		margin:26px;
		color:#7190FE;
	}
	
</style>