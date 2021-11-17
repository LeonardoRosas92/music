<template>
  <section class="hero is-info">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item">
          🎧 📻 <span class="txt">Music</span>🎶🎶</h1>
          <router-link :to="{ name: 'search' }" class="navbar-item">
            {{ $t("search") }}
          </router-link>
        <div class="buttons">
          <a class="button is-light" @click="selectLang('en')"> EN 🇬🇧 </a>
          <a class="button is-light" @click="selectLang('es')"> ES 🇪🇸 </a>
        </div>
      </div>
    </nav>
    

    <nav class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Music
        </h1>
        <h2 class="subtitle">{{ $t("txtSongTitle") }} </h2>
        <pm-player />
      </div>
    </nav>
  </section>
</template>

<script>
import PmPlayer from "@/components/Player.vue";

export default {
  components: { PmPlayer },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style scoped>
.txt{
  margin-left: 10px;
  margin-right: 10px;
}
</style>