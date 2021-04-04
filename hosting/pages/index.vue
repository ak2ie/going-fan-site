<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">ライブ</div>
      <v-card class="mt-2">
        <v-card-title>
          <nuxt-link
            to="live/20210505-arakawawatare"
            class="info--text font-weight-bold"
          >
            荒川わたれ〜2021 in 熊谷</nuxt-link
          ></v-card-title
        >
        <v-card-subtitle
          >2021/05/05（水・祝） 16:00 @熊谷八木橋デパート</v-card-subtitle
        >
        <v-card-text class="text-subtitle-1">
          メンバーの地元埼玉凱旋ライブ
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="https://eplus.jp/gug/" target="_blank" color="primary"
            >会場チケット</v-btn
          >
        </v-card-actions>
      </v-card>

      <v-card class="mt-2">
        <v-card-title>
          <nuxt-link
            to="live/20210626-withyou15th"
            class="info--text font-weight-bold"
          >
            "with YOU"15th anniversary LIVE!</nuxt-link
          ></v-card-title
        >
        <v-card-subtitle
          >2021/06/26(土) 14:00 / 16:30 @下北沢SHELTER</v-card-subtitle
        >
        <v-card-text class="text-subtitle-1">
          初のベストアルバム「GOING UNDER GROUND with
          YOU」（2006年6月）リリース15周年記念ライブ
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            href="https://goingunderground.tokyo/contents/417170"
            target="_blank"
            color="error"
            >ファンクラブ先行チケット</v-btn
          >
        </v-card-actions>
      </v-card>
      <div class="mt-3">
        <router-link to="/lives" class="info--text">過去のライブ</router-link>
      </div>
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
        <v-icon>{{ icon.mdiTwitter }}</v-icon
        ><a href="https://twitter.com/going_twilight" target="_blank"
          >@going_twilight</a
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiTwitter } from '@mdi/js'

export default {
  data() {
    return {
      icon: { mdiTwitter },
    }
  },
}
</script>
