<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h4">"with YOU"15th anniversary LIVE!</div>

      <div class="text-h5 mt-5">
        <v-icon>mdi-clock</v-icon> 開催日時：2021/06/26（土）
      </div>
      <div class="ml-9 mt-3">
        <div>1回目： 開場 13:30 / 開演 14:00</div>
        <div>2回目： 開場 16:00 / 開演 16:30</div>
      </div>
      <div class="text-h5 mt-5">
        <v-icon>mdi-map-marker</v-icon> 場所：下北沢SHELTER
      </div>
      <div class="ml-9 mt-3">
        <div>
          <a href="http://www.loft-prj.co.jp/SHELTER/" target="_blank"
            >公式サイト</a
          >
        </div>
        <div>最寄駅：下北沢駅（京王井の頭線、小田急小田原線）</div>
        <div>
          <a
            href="http://www.loft-prj.co.jp/SHELTER/access.html"
            target="_blank"
            >下北沢駅（南口）からのアクセス</a
          >
        </div>
      </div>

      <h5 class="text-h5 mt-4"><v-icon>mdi-music</v-icon> 収録曲一覧</h5>
      <v-simple-table class="mt-3">
        <template v-slot:default>
          <thead>
            <tr>
              <th>#</th>
              <th>曲名</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(music, index) in musics" :key="index">
              <td>{{ music.no }}</td>
              <td>
                {{ music.title }}

                <a
                  v-if="music.youtube"
                  :href="music.youtube"
                  target="_blank"
                  class="pl-3 text-decoration-none"
                  ><v-icon>mdi-youtube</v-icon></a
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      musics: [
        {
          no: '01',
          title: 'my dear',
          youtube: '',
        },
        {
          no: '02',
          title: 'トワイライト',
          youtube: 'https://www.youtube.com/watch?v=4X5U6OsVC-4',
        },
        {
          no: '03',
          title: 'VISTA',
          youtube: '',
        },
        {
          no: '04',
          title: 'グラフティー（album mix）',
          youtube: 'https://www.youtube.com/watch?v=Jh5fs5Zl9GQ',
        },
        {
          no: '05',
          title: 'アゲハ　alternate version　“アゲハとトカゲ”',
          youtube: '',
        },
        {
          no: '06',
          title: 'ダイアリー',
          youtube: 'https://www.youtube.com/watch?v=avrdpPNsufo',
        },
        {
          no: '07',
          title: 'かよわきエナジー ～ Take Me Home, Country Roads',
          youtube: '',
        },
        {
          no: '08',
          title: '同じ月を見てた',
          youtube: '',
        },
        {
          no: '09',
          title: 'ランブル',
          youtube: 'https://www.youtube.com/watch?v=cL4yqdrya2M',
        },
        {
          no: '10',
          title: 'タッシ',
          youtube: '',
        },
        {
          no: '11',
          title: 'ハートビート',
          youtube: 'https://www.youtube.com/watch?v=CiYmBg-99nA',
        },
        {
          no: '12',
          title: '南十字',
          youtube: 'https://www.youtube.com/watch?v=h6VUYtksclw',
        },
        {
          no: '13',
          title: 'kodama',
          youtube: '',
        },
        {
          no: '14',
          title: '東京',
          youtube: '',
        },
        {
          no: '15',
          title: 'STAND BY ME',
          youtube: 'https://www.youtube.com/watch?v=4XshEr4RDm8',
        },
        {
          no: '16',
          title: 'ハミングライフ',
          youtube: 'https://www.youtube.com/watch?v=o75fxV0LBNU',
        },
      ],
    }
  },
}
</script>

