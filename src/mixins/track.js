const trackMixin = {
    methods:{
        selectTrack () {
            if(!this.track.preview_url){return}
            this.$store.commit('setTrack',this.track)  
        },
        deleteTrack (){
            this.$store.commit('deleteTrack')  
        }
    }

}       

export default trackMixin