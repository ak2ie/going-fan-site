<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right app bottom>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link :to="item.to" class="white--text text-decoration-none"
              ><v-list-item-title v-text="item.title"></v-list-item-title
            ></nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/" class="text-decoration-none white--text"
        ><v-toolbar-title v-text="title"></v-toolbar-title
      ></nuxt-link>
      <span class="text-subtitle-2 ml-5 d-none d-md-inline"
        >GOING UNDER GROUND 非公式ファンサイト</span
      >
      <v-spacer></v-spacer>
      <v-icon @click.stop="drawer = !drawer">{{ icon.mdiMenu }}</v-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mdiApps, mdiAccountMultiple, mdiWaveform, mdiMenu } from "@mdi/js";

export default {
  data() {
    return {
      icon: { mdiMenu },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: mdiApps,
          title: "Home",
          to: "/",
        },
        {
          icon: mdiAccountMultiple,
          title: "メンバー",
          to: "/member",
        },
        {
          icon: mdiWaveform,
          title: "ライブ",
          to: "/lives",
        },
        // {
        //   icon: 'mdi-information',
        //   title: 'About',
        //   to: '/about',
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "トワイライト",
    };
  },
};
</script>

<style>
#app {
  /* ----------------- Copyright ---------------------
   *  Background pattern from Toptal Subtle Patterns
   * ------------------------------------------------- */
  /* https://www.toptal.com/designers/subtlepatterns/dark-sharp-edges/ */
  background: repeat url("/footer_lodyas.png");

  font-family: "Open Sans";
}
</style>
