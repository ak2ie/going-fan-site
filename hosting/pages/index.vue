<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">ライブ</div>
      <v-card class="mt-2">
        <v-card-title
          ><nuxt-link to="live/20210403-bokyotokyo"
            >望郷東京2021〜春旅selection</nuxt-link
          ><v-spacer></v-spacer
          ><v-chip color="primary">
            <v-avatar left><v-icon>mdi-account-circle</v-icon></v-avatar
            >配信あり</v-chip
          ></v-card-title
        >
        <v-card-subtitle>2021/04/03(土) 14:00 / 16:30</v-card-subtitle>
        <v-card-actions>
          <v-btn href="https://eplus.jp/gug/" target="_blank" color="primary"
            >会場チケット</v-btn
          ><v-btn
            href="https://eplus.jp/st-gug/"
            target="_blank"
            color="success"
            >配信チケット</v-btn
          >
        </v-card-actions>
      </v-card>

      <v-card class="mt-2">
        <v-card-title>
          <nuxt-link to="live/20210505-arakawawatare">
            荒川わたれ〜2021 in 熊谷</nuxt-link
          ></v-card-title
        >
        <v-card-subtitle>2021/05/05(水・祝) 16:00</v-card-subtitle>
        <v-card-actions>
          <v-btn href="https://eplus.jp/gug/" target="_blank" color="primary"
            >会場チケット</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">About</div>
      <div class="text">
        ロックバンドGOING UNDER GROUNDの非公式ファンサイトです。
      </div>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">SNS</div>
      <div class="text">
        <v-icon>mdi-twitter</v-icon
        ><a href="https://twitter.com/going_twilight" target="_blank"
          >@going_twilight</a
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
