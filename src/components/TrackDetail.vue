<template lang="pug">
    .container(v-if="track && track.id")
        .columns
            .columm.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(:src="track.album.images[0].url")
                    p.button-bar
            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{trackTittle}}
                    .panel-block
                        article.media
                            .media-content 
                                .content
                                    ul
                                        li
                                            strong Album:&nbsp; {{track.album.name}}
                                        li
                                            strong {{ $t("txtReleaseDate") }}:&nbsp; {{track.album.release_date}}
                                        li
                                            strong {{ $t("txtTotalTracks") }}:&nbsp; {{track.album.total_tracks}}
                                        li
                                            strong {{ $t("txtPopularity") }}:&nbsp; {{track.popularity}}
                            nav.level
                                .level-left
                                    a.level-item
</template>
<script>
import {mapState , mapActions, mapGetters} from 'vuex'
import trackMixin from './../mixins/track'

export default {
    mixins:[trackMixin],
    computed:{
        ...mapState(['track']),
        ...mapGetters(['trackTittle'])
    },
    created(){
        const id = this.$route.params.id;
        if(!this.track || !this.track.id || !this.track.id !== id){
            this.getTrackById({id}).
                then(() => {
                    console.log('Track loaded...')
                })
        }
    },
    methods:{
        ...mapActions(['getTrackById'])
    },
    beforeDestroy(){
        this.deleteTrack();
    }
}
</script>
<style lang="scss" scoped>
.columns{
    margin:20px;
}
.button-bar{
    margin-top:20px;
}
</style>