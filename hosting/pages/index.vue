<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">ライブ</div>
      <v-card v-for="(live, index) in futureLives" :key="index" class="mt-2">
        <v-card-title>
          <nuxt-link
            v-if="live.detailPagePath"
            :to="live.detailPagePath"
            class="info--text font-weight-bold"
          >
            {{ live.title }}</nuxt-link
          >
          <span v-else>
            {{ live.title }}
          </span>
          <!-- <v-spacer
            v-if="live.isStreaming || live.actor !== 'GOING'"
          ></v-spacer> -->
          <v-chip
            v-if="live.isStreaming"
            class="ma-2"
            color="indigo"
            text-color="white"
          >
            <v-icon left>{{ icon.mdiMonitorCellphone }}</v-icon>
            配信あり
          </v-chip>
          <v-chip
            v-if="live.actor !== 'GOING'"
            class="ma-2"
            color="indigo"
            text-color="white"
          >
            <v-icon left>{{ icon.mdiAccountMultiple }}</v-icon>
            {{ live.actor }}
          </v-chip>
        </v-card-title>
        <v-card-subtitle
          >{{ live.dateDisplay }} @{{ live.place }}</v-card-subtitle
        >
        <v-card-text class="text-subtitle-1">
          {{ live.comment }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="live.ticketUrl"
            :href="live.ticketUrl"
            target="_blank"
            color="primary"
            >会場チケット</v-btn
          >
          <v-btn
            v-if="live.streamingUrl"
            :href="live.streamingUrl"
            target="_blank"
            color="primary"
            >配信チケット</v-btn
          >
          <v-btn
            v-if="live.fanclubTicketUrl"
            :href="live.fanclubTicketUrl"
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

<script lang="ts">
import { mdiTwitter, mdiMonitorCellphone, mdiAccountMultiple } from "@mdi/js";
import Vue from "vue";

export type Live = {
  title: String;
  dateDisplay: String;
  date: Date;
  place: String;
  comment: String;
  actor: String;
  ticketUrl: String;
  fanclubTicketUrl: String;
  detailPagePath: String;
  isStreaming: boolean;
};

export type DataType = {
  icon: any;
  lives: Array<Live>;
};

export default Vue.extend({
  data(): DataType {
    return {
      icon: { mdiTwitter, mdiMonitorCellphone, mdiAccountMultiple },
      lives: [
        {
          title: "荒川わたれ～2021 in 熊谷",
          dateDisplay: "2021/07/11（日） 16:00",
          date: new Date(2021, 6, 11),
          place: "熊谷八木橋デパート",
          comment:
            "メンバーの地元埼玉凱旋ライブ（緊急事態宣言発令のため開催日変更）",
          actor: "GOING",
          ticketUrl: "",
          fanclubTicketUrl: "",
          detailPagePath: "live/20210505-arakawawatare",
          isStreaming: false,
        },
        {
          title: '"with YOU"15th anniversary LIVE!',
          dateDisplay: "2021/06/26(土) 14:00 / 16:30",
          date: new Date(2021, 5, 26),
          place: "下北沢SHELTER",
          comment: "ベストアルバム発売15周年ライブ",
          actor: "GOING",
          ticketUrl: "https://eplus.jp/gug/",
          fanclubTicketUrl: "https://goingunderground.tokyo/contents/417170",
          detailPagePath: "live/20210626-withyou15th",
          isStreaming: true,
        },
        {
          title: "クリトリック・リスとナカザタロウ 春の2マン",
          dateDisplay: "2021/04/10(土) 16:00",
          date: new Date(2021, 3, 10),
          place: "埼玉熊谷モルタルレコード",
          comment: "",
          actor: "中澤のみ",
          ticketUrl:
            "https://twitter.com/nakaza_nkz/status/1379723423283179522",
          fanclubTicketUrl: "",
          detailPagePath: "",
          isStreaming: false,
        },
        {
          title: "宮川企画「マイセルフ,ユアセルフ」",
          dateDisplay: "2021/04/18(日) 14:30",
          date: new Date(2021, 3, 18),
          place: "TSUTAYA O-EAST",
          comment: "",
          actor: "松本のみ",
          ticketUrl: "https://eplus.jp/miyagawakikaku/",
          fanclubTicketUrl: "",
          detailPagePath: "",
          isStreaming: false,
        },
        {
          title: "YATSUI FESTIVAL! 2021",
          dateDisplay: "2021/06/19(土) 11:30",
          date: new Date(2021, 5, 19),
          place: "TSUTAYA O-EAST他",
          comment: "",
          actor: "GOING",
          ticketUrl: "https://eplus.jp/yatsuifes/",
          fanclubTicketUrl: "",
          detailPagePath: "",
          isStreaming: true,
        },
        {
          title: "Sou’s fountain in 「あぼわぁーる」 〜実家で歌う松本素生〜",
          dateDisplay: "2021/06/05（土） 13:30",
          date: new Date(2021, 5, 5), // 月は -1 する
          place: "cafeあぼわぁーる（京都府南丹市）",
          comment: "松本さんご実家のカフェでのライブ",
          actor: "松本のみ", // 全員：GOING
          ticketUrl:
            "https://select-type.com/ev/?ev=gPvVJbNuQnU&tl=&tl=&eventPageID=",
          fanclubTicketUrl: "",
          detailPagePath: "",
          isStreaming: false,
        },
        {
          title: "群青の花びら",
          dateDisplay: "2021/06/06（日） 13:30",
          date: new Date(2021, 5, 6), // 月は -1 する
          place: "Live House nano（京都府京都市）",
          comment: "",
          actor: "松本のみ", // 全員：GOING
          ticketUrl: "https://eplus.jp/sf/detail/3423950001",
          fanclubTicketUrl: "",
          detailPagePath: "",
          isStreaming: false,
        },
        // {
        //   title: "",
        //   dateDisplay: "",
        //   date: new Date(), // 月は -1 する
        //   place: "",
        //   comment: "",
        //   actor: "",  // 全員：GOING
        //   ticketUrl: "",
        //   fanclubTicketUrl: "",
        //   detailPagePath: "",
        //   isStreaming: false,
        // },
      ],
    };
  },
  computed: {
    /**
     * 今後のライブリスト
     */
    futureLives(): Array<Live> {
      const compare = (x: Live, y: Live) => x.date.getTime() - y.date.getTime();
      // 今日以降のライブを降順に並び替え
      return this.lives
        .filter((live: Live) => {
          return live.date.getTime() >= new Date().getTime();
        })
        .sort(compare);
    },
  },
});
</script>
