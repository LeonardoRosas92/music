<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") {{ $t("txtFound") }} 

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      .field.has-addons
        p.control.is-expanded
          input.input(
              type="text"
              :placeholder="$t('txtSearchFound')"
              v-model="searchQuery"
              @keyup.enter="search")
        p.control
          button.button.is-info(@click="search") {{ $t("txtSearch") }} 
        p.control
          button.button.is-danger(@click="deleteTracks") &times;

      .container
        span.is-size-7  {{ $t("txtFind") }} {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pm-track(
              v-blur="t.preview_url"
              :class="{'is-active' : t.id === selectedTrack}", 
              :track="t", 
              @select="setSelectedTrack")
</template>

<script>
import trackMixin from './../mixins/track'
import trackService from './../services/track';
import PmTrack from './Track.vue'
import PmLoader from './shared/Loader.vue'
import PmNotification from './shared/Notification.vue'
export default {   
  name: "App",
  mixins:[trackMixin],
  components: {PmTrack,PmLoader,PmNotification},
  data (){
    return {
      searchQuery : '',
      tracks : [],
      isLoading: false,
      selectedTrack: '',
      showNotification : false,
    }
  },
  methods:{
    search(){
      if(!this.searchQuery){ return }
      this.isLoading=true;
      this.tracks = trackService.search(this.searchQuery)
      .then(res => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading=false;
      })
    },
    setSelectedTrack(id){
      this.selectedTrack = id;
    },
    deleteTracks(){
      this.deleteTrack();
      this.tracks = [];
      this.searchQuery = ''
    }

  },
  computed:{
    searchMessage(){
      console.log('Entro')
      if(!this.tracks){ return 0 }
      return ` ${this.tracks.length}`

    }
  },
  watch:{
    showNotification(){
      if(this.showNotification){
        setTimeout(()=>{
          this.showNotification=false
        },3000);
      }
    }
  }
};
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}
.is-active{
  border: 3px #23d160 solid;
}
</style>
