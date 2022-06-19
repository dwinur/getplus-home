<template>
<div>
  <div class="section-kata-gita uk-section section-benefit">
    <div class="uk-container">
      <div class="uk-grid" uk-grid>
        <div class="uk-width-expand">
          <h2 class="uk-text-center">
            #KATAGITA
          </h2>
        </div>
        <div class="uk-width-1-1">
          <div uk-slider class="uk-slider slider-container-offset">
            <ul class="uk-slider-items uk-grid">
              <li
                v-for="(item1, key) in heroSliderData.katagita"
                :key="key"
                class="uk-width-4-5 uk-width-1-3@s"
              >
                <a :href="item1.url" class="uk-link-reset article-card">
                  <div class="photo">
                    <img :src="item1.imageUrl" alt="Photo" />
                  </div>
                  <div class="detail">
                    <div class="name">
                      <a :href="item1.url" target="_blank">
                        {{item1.title}}
                      </a>
                    </div>
                    <div class="date">1 Jan 2022</div>
                    <div class="organization">{{`${item1.description.substring(0,100)}...`}}</div>
                    <a :href="item1.url" class="uk-margin-top uk-button uk-button-secondary uk-width-1-1">Selengkapnya</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-1 uk-text-center">
          <a href="#" class="uk-button uk-button-primary uk-width-1-2 uk-width-1-5@m">View More</a>
        </div>
      </div>
    </div>
    <div class="uk-container uk-margin-large-top">
      <div class="uk-grid" uk-grid>
        <div class="uk-width-expand">
          <h2 class="uk-text-center">
            NEWS
          </h2>
        </div>
        <div class="uk-width-1-1">
          <div uk-slider class="uk-slider slider-container-offset">
            <ul class="uk-slider-items uk-grid">
              <li
                v-for="(item2, key2) in heroSliderData.news"
                :key="key2"
                class="uk-width-4-5 uk-width-1-3@s"
              >
                <a :href="item2.url" class="uk-link-reset article-card">
                  <div class="photo">
                    <img :src="item2.imageUrl" alt="Photo" />
                  </div>
                  <div class="detail">
                    <div class="name">
                      <a :href="item2.url" target="_blank">
                        {{item2.title}}
                      </a>
                    </div>
                    <div class="date">1 Jan 2022</div>
                    <div class="organization">{{`${item2.description.substring(0,100)}...`}}</div>
                    <a :href="item2.url" class="uk-margin-top uk-button uk-button-secondary uk-width-1-1">Selengkapnya</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-1 uk-text-center">
          <a href="#" class="uk-button uk-button-primary uk-width-1-2 uk-width-1-5@m">View More</a>
        </div>
      </div>
    </div>
    <div class="uk-container uk-margin-large-top">
      <div class="uk-grid" uk-grid>
        <div class="uk-width-expand">
          <h2 class="uk-text-center">
            Promo
          </h2>
        </div>
        <div class="uk-width-1-1">
          <div uk-slider class="uk-slider slider-container-offset">
            <ul class="uk-slider-items uk-grid">
              <li
                v-for="(item3, key3) in heroSliderData.promo"
                :key="key3"
                class="uk-width-4-5 uk-width-1-3@s"
              >
                <a :href="item3.url" class="uk-link-reset article-card">
                  <div class="photo">
                    <img :src="item3.imageUrl" alt="Photo" />
                  </div>
                  <div class="detail">
                    <div class="name">
                      <a :href="item3.url" target="_blank">
                        {{item3.title}}
                      </a>
                    </div>
                    <div class="date">1 Jan 2022</div>
                    <div class="organization">{{`${item3.description.substring(0,100)}...`}}</div>
                    <a :href="item3.url" class="uk-margin-top uk-button uk-button-secondary uk-width-1-1">Selengkapnya</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-1 uk-text-center">
          <a href="#" class="uk-button uk-button-primary uk-width-1-2 uk-width-1-5@m">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="section-reasons uk-section">
    <div class="uk-container">
      <div class="uk-grid" uk-grid>
        <div class="uk-width-1-1">
          <h2 class="uk-text-center">
            PROMO
          </h2>
        </div>
        <div class="uk-width-1-1 uk-width-1-2@s">
          <SharedImage
            :url="heroSlider[activeIndex]['imageUrl']"
            alt="Sample Image"
          />
        </div>
        <div class="uk-width-1-1 uk-width-1-2@s">
          <div
            id="reasons-slideshow"
            uk-slideshow="animation: fade;"
            class="uk-position-relative"
          >
            <div
              class="uk-position-relative uk-visible-toggle uk-light"
              tabindex="-1"
            >
              <ul class="uk-slideshow-items">
                <li v-for="(item, idx) in heroSlider" :key="idx">
                  <h2>
                    {{item.title}}
                  </h2>
                  <p>{{`${item.description.substring(0, 100)}...`}}</p>
                </li>
              </ul>

              <div class="slideshow-nav uk-slidenav-container">
                <a
                  href="#"
                  class="icon-slideshow-nav"
                  @click.prevent="changeActiveIndex(activeIndex - 1)"
                >
                  <span uk-icon="icon: chevron-left"></span>
                </a>
                <a
                  href="#"
                  class="icon-slideshow-nav"
                  @click.prevent="changeActiveIndex(activeIndex + 1)"
                >
                  <span uk-icon="icon: chevron-right"></span>
                </a>
              </div>
            </div>

            <ul class="slideshow-dotnav">
              <li
                v-for="slides in totalSlideshow"
                :key="slides"
                :class="[activeIndex === slides - 1 ? 'active' : '']"
              >
                <a href="#" @click.prevent="changeActiveIndex(slides - 1)"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'default',
  computed: {
    ...mapState('hero-slider', {
      heroSlider: 'heroSlider'
    })
  },
  data() {
    return {
      heroSliderData: {
        katagita: [
          {
            id: 1,
            imageUrl: '/assets/images/katagita-1.jpeg',
            url: 'https://info.mygetplus.id/tukar-poin-membership-lain-convert/',
            title: 'Tips Cermat Kelola Tabungan di masa Pandemik',
            description: 'Teman Gita, kamu ngerasa nggak sih kalau pengeluaran di masa pandemik ini semakin banyak? Meskipun sebagian dari kamu bisa memangkas pengeluaran karena sedang bekerja dari rumah, tapi ternyata, banyak juga kebutuhan tidak terduga yang berdatangan. Well, kamu nggak sendirian kok! Di masa seperti ini, kita justru disadarkan bahwa mengelola keuangan itu penting banget, apalagi dengan menyiapkan dana darurat di tabungan kamu.',
          },
          {
            id: 2,
            imageUrl: '/assets/images/katagita-2.jpeg',
            url: 'https://info.mygetplus.id/getplus-2-0-tampilan-baru/',
            title: 'Berpikir Money Can’t Buy Happiness? Pasti Belum Tahu Ini!',
            description: 'Ada istilah yang mengatakan money can’t buy happiness. Ah, masa sih? Tiap ada suara “Pakeeeet” di depan rumah, bukannya udah bikin senang ya?',
          },
          {
            id: 3,
            imageUrl: '/assets/images/katagita-3.jpeg',
            url: 'https://info.mygetplus.id/fitur-convert-reward-bca/',
            title: '5 Kegiatan Sederhana Ini Tingkatkan Quality Time Bareng Si Kecil',
            description: 'Bagi teman Gita yang sudah punya buah hati, kondisi pandemi bisa jadi tantangan tersendiri. Kamu perlu memutar otak untuk menciptakan kegiatan seru yang bikin si kecil gak mudah bosan. Betul gak?',
          },
        ],
        news: [
          {
            id: 4,
            imageUrl: '/assets/images/news-1.jpeg',
            url: 'https://info.mygetplus.id/tukar-poin-membership-lain-convert/',
            title: 'Tukar Poin Membership Lain Gak Ribet via Convert​',
            description: 'Tukar jadi Poin GetPlus (atau sebaliknya) dan nikmati asiknya redeem rewards favoritmu. Lewat fitur Convert, proses penukaran poin bisa kamu lakukan di mana pun dan kapan pun. Yuk cek ada membership apa aja!',
          },
          {
            id: 5,
            imageUrl: '/assets/images/news-2.jpeg',
            url: 'https://info.mygetplus.id/getplus-2-0-tampilan-baru/',
            title: 'Tampilan Baru GetPlus Sempurnakan Pengalamanmu Rasain #MagnetnyaReward',
            description: 'Tahun baru saatnya tampilan baru. Say hi to the new look of GetPlus~',
          },
          {
            id: 6,
            imageUrl: '/assets/images/news-3.jpeg',
            url: 'https://info.mygetplus.id/fitur-convert-reward-bca/',
            title: 'Tukar Reward BCA jadi Poin GetPlus, Nggak Ribet Lewat Fitur Convert!​',
            description: 'Hai member GetPlus. Kenalan yuk sama fitur Convert! Fitur ini ada di aplikasi GetPlus loh. Tukar Reward BCA jadi Poin GetPlus kini bisa dilakukan kapan pun dan di mana pun. Nggak sabar untuk cobain?',
          }
        ],
        promo: [
          {
            id: 7,
            imageUrl: '/assets/images/promo-1.jpeg',
            url: 'https://info.mygetplus.id/traktiran-nannys-pavillon-pancake-waffle/',
            title: 'Traktiran GetPlus x Nanny’s Pavillon: Promo Voucher Buy 1 Get 1​ Pancake/Waffle',
            description: 'Sikasiiikk~ Modal 500 poin bisa ngafe cantik. Pas banget buat traktir teman atau pasangan, yuk redeem voucher Buy 1 Get 1 FREE Pancake/Waffle Nanny’s Pavillon dan pakai di outlet berikut:',
          },
          {
            id: 8,
            imageUrl: '/assets/images/promo-2.jpeg',
            url: 'https://info.mygetplus.id/tukar-poin-dapat-super-rewards-airasia/',
            title: 'GetPlus x airasia: Tukar Poin Dapat Super Rewards​',
            description: 'Hai member GetPlus. Sekarang tukar poinmu pakai fitur Convert di GetPlus, pasti dapet bonus:',
          },
          {
            id: 9,
            imageUrl: '/assets/images/promo-3.jpeg',
            url: 'https://info.mygetplus.id/voucher-jumpstart-coffee-locale-popup-grand-indonesia/',
            title: 'Ngopi Enak di LOCALE POP UP, Grand Indonesia​ cuma 500 Poin GetPlus',
            description: 'Ngopi enak cuma perlu keluar 500 Poin GetPlus aja loh. Mau?​ Yuk mampir ke JumpStart Coffee di LOCALE POP UP – Grand Indonesia, West Mall 3rd Floor mulai 23 Mei –12 Juni 2022. Cari vending machine JumpStart Coffee dan nikmati sensasi penyajian yang super cepat dengan pilihan menu yang beragam.​',
          }
        ],

        count: 9,
      },
      totalSlideshow: 6,
      activeIndex: 0,
      url: '',
    }
  },

  methods: {
    changeActiveIndex(index) {
      this.activeIndex = index === this.totalSlideshow ? 0 : index;
      // this.url = this.heroSlider[index + 1].find((item) => item.imageUrl ? item.imageUrl : '/assets/images/sample-image.png');
      this.$UIkit.slideshow('#reasons-slideshow').show(index);
    },
  },
}
</script>
<style lang="less">

.section-kata-gita {
  .article-card {
    display: block;
    background: #fff;
    box-shadow: 0px 4px 8px rgb(0 51 102 / 15%);
    border-radius: 16px;
    overflow: hidden;
    .photo {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      height: 0px;
      background: @global-muted-color;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    .detail {
      padding: 30px;
      .name {
        margin-bottom: 5px;
        font-family: 'PlusJakartaSans', sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
      .date {
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 400;
        color: #999;
      }
      @media (max-width: 639px) {
        padding: 15px;
        .name {
          font-size: 16px;
        }
      }
    }
  }
  .slider-container-offset {
    margin: -11px -15px -10px -25px;
    padding: 11px 25px 10px 25px;
    @media (max-width: 639px) {
      margin: -11px -15px -10px -25px !important;
    }
    @media (max-width: 959px) {
      margin: -11px -30px -10px -25px;
    }
  }
}
.section-reasons {
  background: url(/assets/images/home/reasons-background.png);
  background-size: cover;
  .slideshow-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    .icon-slideshow-nav {
      margin: 0 10px 0 0;
      padding: 1px 2px;
      background: #fff;
      border: 1px solid @global-emphasis-color;
      border-radius: 50%;
      &:last-child {
        margin: 0;
      }
      span {
        color: @global-emphasis-color;
      }
    }
  }
  .slideshow-dotnav {
    position: absolute;
    margin: 0;
    bottom: 5px;
    right: 0;
    li {
      padding-left: 5px;
      list-style: none;
      display: inline-block;
      a {
        display: block;
        width: 32px;
        height: 4px;
        background: #fff;
        border-radius: 10px;
      }
      &.active {
        a {
          background: linear-gradient(90deg, #0073e5 0%, #bb33ff 100%);
        }
      }
    }
  }
}
</style>
