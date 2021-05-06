<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <h4 class="text-h4">メンバー</h4>
      <h5 class="text-h5 mt-4 mb-2">松本　素生 / So Matsumoto</h5>
      <div class="ml-5">
        <ul>
          <li class="text">1978/12/22 生まれ</li>
          <li class="text">ボーカル・ギター・作詞・作曲</li>
        </ul>
        <v-icon>{{ icon.mdiTwitter }}</v-icon>
        <a href="https://twitter.com/sou_matsumoto" target="_blank"
          >@sou_matsumoto</a
        ><br />
        <v-icon>{{ icon.mdiInstagram }}</v-icon>
        <a href="https://www.instagram.com/sou_matsumoto/" target="_blank"
          >@sou_matsumoto</a
        >
      </div>
      <h5 class="text-h5 mt-4 mb-2">中澤 寛規 / Hiroki Nakazawa</h5>
      <div class="ml-5">
        <ul>
          <li class="text">1978/12/19 生まれ</li>
          <li class="text">ギター</li>
        </ul>
        <v-icon>{{ icon.mdiTwitter }}</v-icon>
        <a href="https://twitter.com/nakaza_nkz" target="_blank">@nakaza_nkz</a
        ><br />
      </div>

      <h5 class="text-h5 mt-4 mb-2">石原 聡 / Satoshi Ishihara</h5>
      <div class="ml-5">
        <ul>
          <li class="text">1978/8/14 生まれ</li>
          <li class="text">ベース</li>
        </ul>
        <v-icon>{{ icon.mdiTwitter }}</v-icon>
        <a href="https://twitter.com/satotosato" target="_blank">@satotosato</a
        ><br />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiTwitter, mdiInstagram } from '@mdi/js'

export default {
  data() {
    return {
      icon: { mdiTwitter, mdiInstagram },
    }
  },
}
</script>
