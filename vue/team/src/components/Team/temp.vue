<template>
    <p>osdfigoijdsgf</p>
    <select v-model="cellphone">
    <!--有value傳value，沒有value就傳包含的文字-->
    <option disabled value="">請選擇</option>
    <option>三星</option>
    <option>蘋果</option>
    <option>oppo</option>
  </select>
</template>

<script>
export default{
    data(){
        return{
            el: '#demo',
            show: false,
            cellphone:''
  
        }
    }
}

</script>

<style>
.fade-leave { opacity: 1; }
.fade-leave-active { transition: opacity .5s }
.fade-leave-to { opacity: 0; }

.fade-enter { opacity: 0; }
.fade-enter-active  { transition: opacity .5s }
.fade-enter-to { opacity: 1; }

</style>