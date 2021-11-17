import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const messages = {
    en:{
        search : 'Search',
        about : 'About',
        txtFound: 'No results found',
        txtSearchFound: 'Search songs',
        txtSearch: 'Search',
        txtLoader: 'Loading...',
        txtSongTitle: 'Songs that are great!',
        txtFind: 'Results found',
        txtReleaseDate: 'Release date',
        txtTotalTracks: 'Total tracks',
        txtPopularity: 'Popularity'
    },
    es:{
        search : 'Busqueda',
        about : 'Nosotros',
        txtFound: 'No se encontraron resultados',
        txtSearchFound: 'Buscar canciones',
        txtSearch: 'Buscar',
        txtLoader: 'Cargando...',
        txtSongTitle: 'Canciones que estan Vue-nisimas!',
        txtFind: 'Resultados encontrados',
        txtReleaseDate: 'Fecha de lanzamiento',
        txtTotalTracks: 'Total de canciones',
        txtPopularity: 'Popularidad'
    }
}

const i18n = new VueI18n({
    messages,
    locale : 'en'
})

export default i18n