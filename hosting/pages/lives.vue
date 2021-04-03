<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2" class="mt-4">
      <div class="text-h4">ライブ一覧</div>

      <v-simple-table class="mt-3">
        <template v-slot:default>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>開催日</th>
              <th>コメント</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(live, index) in lives"
              :key="index"
              @click="gotoPage(live.to)"
            >
              <td>{{ live.title }}</td>
              <td>{{ live.date }}</td>
              <td>{{ live.comment }}</td>
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
      lives: [
        {
          title: '望郷東京2021〜春旅selection',
          date: '2021/04/03',
          comment: '',
          to: 'live/20210403-bokyotokyo',
        },
        {
          title: '荒川わたれ〜2021 in 熊谷',
          date: '2021/05/05',
          comment: '地元凱旋ライブ',
          to: 'live/20210505-arakawawatare',
        },
        {
          title: '"with YOU"15th anniversary LIVE!"',
          date: '2021/06/26',
          comment: '初ベストアルバム発売15周年記念',
          to: 'live/20210626-withyou15th',
        },
      ],
    }
  },
  methods: {
    gotoPage(link) {
      this.$router.push(link)
    },
  },
}
</script>
