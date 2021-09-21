<template>
  <aside class="sidebar-menu" :class="{open: value}">
    <div class="sidebar-menu__head">
      <div class="sidebar-menu-logo">
        <a href="#" class="site-logo" @click.prevent="toMenu">
          <img src="@/assets/images/src/icons/site-logo.svg" alt="">
        </a>
        <a href="#" class="snp-logo snp-logo__sidebar">
          <img src="@/assets/images/src/icons/snp-logo.svg" alt="">
        </a>
      </div>
      <div class="account-user account-user__sidebar d-flex a-center">
        <div class="account-user__logo">
          <img src="@/assets/images/src/img/user-jpeg.jpg" alt="">
        </div>
        <span class="account-user__name">Welcome, User</span>
        <div class="account-user__sidebar-close" id="close-sidebar">
          <svg class=" icon-svg" width="12" height="12">
            <use xlink:href="images/src/icons/sprite-all.svg#close"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="sidebar-menu__body">
      <div class="company-info">
        <div class="company-info__list">
          <div class="company-info__item">
            <div class="company-info__inner">
              <a href="#" class="company-info__link">1. Company information</a>
              <svg class="company-info__icon icon-svg" width="10" height="7.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check-green"></use>
              </svg>
              <i class="company-info__warning">
                <svg class="icon-warning icon-svg" width="2" height="8">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                </svg>
              </i>
            </div>
          </div>
          <div class="company-info__item">
            <div class="company-info__inner">
              <a href="#" class="company-info__link">2. Transaction information</a>
              <svg class="company-info__icon icon-svg" width="10" height="7.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check-green"></use>
              </svg>
              <i class="company-info__warning">
                <svg class="icon-warning icon-svg" width="2" height="8">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                </svg>
              </i>
            </div>
          </div>
          <div class="company-info__item ">
            <div class="company-info__inner">
              <a href="#" class="company-info__link">3. Company structure</a>
              <svg class="company-info__icon icon-svg" width="10" height="7.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check-green"></use>
              </svg>
              <i class="company-info__warning">
                <svg class="icon-warning icon-svg" width="2" height="8">
                  <use xlink:href="images/src/icons/sprite-all.svg#mark-icon"></use>
                </svg>
              </i>
            </div>
          </div>
          <div class="company-info__item">
            <div class="company-info__inner">
              <a href="#" class="company-info__link">4. Upload documents</a>
              <svg class="company-info__icon icon-svg" width="10" height="7.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check-green"></use>
              </svg>
              <i class="company-info__warning">
                <svg class="icon-warning icon-svg" width="2" height="8">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                </svg>
              </i>
            </div>
          </div>
          <div class="company-info__item">
            <div class="company-info__inner">
              <a href="#" class="company-info__link">5. Review and submit</a>
              <svg class="company-info__icon icon-svg" width="10" height="7.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check-green"></use>
              </svg>
              <i class="company-info__warning">
                <svg class="icon-warning icon-svg" width="2" height="8">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div class="company-info__content">
          <a href="#" class="company-info__save btn">Save your progress</a>
          <button class="company-info__restart btn">Restart your application</button>
          <div class="company-info__percent">0%</div>
        </div>

      </div>
      <div class="dashboard-menu">
        <ul class="dashboard-menu__list">
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#dashboard"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Dashboard</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Transfer money</a>
                      </li>
                      <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Active page item</a>
                      </li>
                      <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Reports</a>
                      </li>
                      <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Hover item</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-home"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Accounts</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#arrow-right"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Send money</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#person"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Beneficiaries</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#crypto"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Crypto</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#exchange"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Exchange</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#merchant-account"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Merchant account</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Reports</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#message"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Messages</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#community"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Community</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#faq"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">FAQ</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mobile-phone"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Mobile application</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#settings"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <div class="dashboard-menu__title-text">Settings</div>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item">
            <ul class="dashboard-menu__inner">
              <li class="dashboard-menu__type">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#log-out"></use>
                  </svg>
                </a>
              </li>
              <li class="dashboard-menu__content">
                <div class="dashboard-menu__content-wrap">
                  <div class="dashboard-menu__title">
                    <router-link
                        class="dashboard-menu__title-text"
                        to="/login"
                        tag="div"
                    >Log out</router-link>
                  </div>
                  <div class="dashboard-menu__wrapper">
                    <ul class="dropdown-list">
                      <!-- <li class="dropdown-list__item">
                        <a href="#" class="dropdown-list__link">Item-1</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dashboard-menu__item dashboard-menu__item_next" @click.prevent="$emit('isOpenMenu')">
            <ul class="dashboard-menu__inner dashboard-menu__inner_next">
              <li class="dashboard-menu__type dashboard-menu__type_next">
                <a href="#" class="dashboard-menu__icon">
                  <svg class="sidebar-icon sidebar-icon_open" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#arrow-right"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: ['value'],
  data: () => ({

  }),
  methods: {
    toMenu() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>