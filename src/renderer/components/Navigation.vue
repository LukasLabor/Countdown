<template>
  <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
    <tab-button
      first
      :selected="selectedTab === 'main'"
      @click="$router.replace('/control/main')"
    >
      Countdown
    </tab-button>
    <tab-button
      :selected="selectedTab === 'settings'"
      @click="$router.replace('/control/settings')"
    >
      Einstellungen
    </tab-button>
    <!-- <tab-button
      :selected="selectedTab === 'remote'"
      @click="$router.replace('/control/remote')"
    >
      Fernsteuerung
    </tab-button> -->
    <tab-button
      last
      :selected="selectedTab === 'windows'"
      @click="$router.replace('/control/windows')"
    >
      Fenster
    </tab-button>
  </nav>
</template>

<script>
import TabButton from "./TabButton";

export default {
  name: "Navigation",
  components: {
    TabButton,
  },
  props: {
    selectedTab: String,
  }
}
</script>

<style scoped>

</style>
