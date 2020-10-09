<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" @change="changeoptionValue"/>
    </van-dropdown-menu>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          :placeholder="$t('m.searchtext')"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div>
      <van-button type="primary" @click="changeLangEvent">
        {{$t('m.switch')}}
      </van-button>
      <span class="padding-10">{{$t('m.music')}}</span>
      <span class="padding-10">{{$t('m.findMusic')}}</span>
      <span class="padding-10">{{$t('m.myMusic')}}</span>
      <span class="padding-10">{{$t('m.friend')}}</span>
      <span class="padding-10">{{$t('m.musician')}}</span>
      <span class="padding-10">{{$t('m.download')}}</span>
    </div>    
  </div>
</template>

<script>
import {Locale} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhTW from 'vant/lib/locale/lang/zh-TW'

export default {
  name: 'App',
  data(){
    return{
      lang:'zh-CN',
      value:'',
      value1: 'zh-CN',
      option1: [
        { text: this.$t('m.language.zh'), value: 'zh-CN' },
        { text: this.$t('m.language.zh_TW'), value: 'zh-TW' },
        { text: this.$t('m.language.en'), value: 'en-US' },
      ],
    }
  },  
  methods:{
      /**
        * 切换语言 
        */ 
      changeLangEvent(){
        console.log("切换语言~");
        if ( this.lang === 'zh-CN' ) {
          this.lang = 'en-US';
          Locale.use(this.lang, enUS);
          this.$i18n.locale = this.lang;//关键语句
        }else {
          this.lang = 'zh-CN';
          Locale.use(this.lang, zhCN);
          this.$i18n.locale = this.lang;//关键语句
        }    
        this.option1= [
        { text: this.$t('m.language.zh'), value: 'zh-CN' },
        { text: this.$t('m.language.zh_TW'), value: 'zh-TW' },
        { text: this.$t('m.language.en'), value: 'en-US' },
      ]
        
        this.value1 = this.lang;
        this.$toast( this.$t('m.success'));
      },
      changeoptionValue(value1){
        if ( value1 === 'zh-CN' ) {
          Locale.use(value1, zhCN);
        }else if(value1 === 'en-US'){
          Locale.use(value1, enUS);
        }else if(value1 === 'zh-TW'){
          Locale.use(value1, zhTW);
        }
        this.value1 = value1;
        this.$i18n.locale =value1;//关键语句
        this.option1=[
        { text: this.$t('m.language.zh'), value: 'zh-CN' },
        { text: this.$t('m.language.zh_TW'), value: 'zh-TW' },
        { text: this.$t('m.language.en'), value: 'en-US' },
        ]
        this.$toast( this.$t('m.success'));
      },
      onSearch(val){
        this.$toast(val);
      },
      onCancel(){
        console.log("取消")
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.padding-10{
  padding: 10px;
}
</style>
