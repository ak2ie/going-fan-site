<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h4">
        望郷東京2021〜春旅selection<v-spacer></v-spacer
        ><v-chip color="primary"
          ><v-avatar left><v-icon>mdi-account-circle</v-icon></v-avatar
          >配信あり</v-chip
        >
      </div>

      <div class="text-h5 mt-5">
        <v-icon>mdi-clock</v-icon> 開催日時：2021/04/03（土）
      </div>
      <div class="ml-9 mt-3">
        <div>1回目： 開場 13:30 / 開演 14:00</div>
        <div>2回目： 開場 16:00 / 開演 16:30（配信）</div>
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

      <h5 class="text-h5 mt-4"><v-icon>mdi-music</v-icon> セットリスト</h5>
      <v-simple-table class="mt-3">
        <template v-slot:default>
          <thead>
            <tr>
              <th>#</th>
              <th>曲名</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(music, index) in setlist" :key="index">
              <td>{{ music.no }}</td>
              <td>{{ music.title }}</td>
              <td>{{ music.comment }}</td>
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
      setlist: [
        {
          no: '1',
          title: '桜が咲いたら',
          comment: '',
        },
        {
          no: '2',
          title: 'アゲハ',
          comment: '',
        },
        {
          no: '3',
          title: 'アロー',
          comment: '',
        },
        {
          no: '4',
          title: '望郷東京2020',
          comment: '',
        },
        {
          no: '5',
          title: '口笛どろぼう',
          comment: '',
        },
        {
          no: '6',
          title: 'Teenage last',
          comment: '',
        },
        {
          no: '7',
          title: '潮騒',
          comment: '新曲',
        },
        {
          no: '8',
          title: 'ムーンダンス',
          comment: '新曲',
        },
        {
          no: '9',
          title: '南十字',
          comment: '',
        },
        {
          no: '10',
          title: 'STAND BY ME',
          comment: '',
        },
        {
          no: '11',
          title: 'いつまでたっても',
          comment: '',
        },
        {
          no: '12',
          title: 'グラフィティー',
          comment: '',
        },
        {
          no: 'en1',
          title: 'きもち',
          comment: '新曲',
        },
        {
          no: 'en2',
          title: 'ハミングライフ',
          comment: '',
        },
      ],
    }
  },
}
</script>
