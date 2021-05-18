<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h4">荒川わたれ〜2021 in 熊谷</div>

      <div class="text-h5 mt-5">
        <v-icon>{{ icon.mdiClock }}</v-icon> 開催日時：2021/07/11（日）
      </div>
      <div class="ml-9 mt-3">
        <div>
          開場 15:30 / 開演 16:00<br />
          緊急事態宣言発令のため、開催日変更
        </div>
      </div>
      <div class="text-h5 mt-5">
        <v-icon>{{ icon.mdiMapMarker }}</v-icon> 場所：熊谷八木橋デパート（8F
        カトレアホール ）
      </div>
      <div class="ml-9 mt-3">
        <div>
          <a href="https://www.yagihashi.co.jp/" target="_blank">公式サイト</a>
        </div>
        <div>
          最寄駅：熊谷駅（JR高崎線、上越・北陸新幹線）、上熊谷駅（秩父鉄道）
        </div>
        <div>
          <a href="https://www.yagihashi.co.jp/access/" target="_blank"
            >アクセス</a
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiClock, mdiMapMarker } from "@mdi/js";

export default {
  data() {
    return {
      icon: {
        mdiClock,
        mdiMapMarker,
      },
    };
  },
};
</script>
