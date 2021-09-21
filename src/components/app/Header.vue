<template>
  <header class="page-header header-1">
    <div class="container custom-container">
      <div class="page-header__inner page-header__dashboard">
        <div class="page-header__tab-logo">
          <a href="#" class="site-logo site-logo__tab">
            <img src="@/assets/images/src/icons/site-logo.svg" alt="">
          </a>
        </div>
        <div class="page-header__left d-flex a-center">
          <div class="account-view d-flex a-center">
            <div class="account-view__title">GBP account:</div>
            <div class="account-view__count">
              £ <strong class="count-strong">28,900.10</strong>
              <svg class="account-view__count-icon icon-up" width="7" height="3.5">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
              </svg>
              <div class="account-view__currency">
                <div class="currency-country">
                  £ <strong class="count-strong">28,900.10</strong>
                  <span class="currency-country__image">
                    <img src="@/assets/images/src/icons/flag-uk.svg" alt="">
                  </span>
                </div>
                <div class="currency-country">
                  € <strong class="count-strong">00.00</strong>
                  <span class="currency-country__image">
                    <img src="@/assets/images/src/icons/flag-eu.svg" alt="">
                  </span>
                </div>
                <a href="#" class="account-view__btn btn">Open acconts</a>
              </div>
            </div>
            <svg class="account-view__icon icon-svg icon-easy">
              <use xlink:href="images/src/icons/sprite-all.svg#icon-easy"></use>
            </svg>
          </div>
          <div class="page-header__application">
            <div class="app-status d-flex a-center">
              <div class="app-status__name">Application status:</div>
              <div class="app-status__box is-active">
                <svg class="app-status__icon status-icon">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#under-review"></use>
                </svg>
                <div class="app-status__text">Under review</div>
              </div>
              <div class="app-status__box app-status__box_orange">
                <svg class="app-status__icon">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#warrning-yellow"></use>
                </svg>
                <div class="app-status__text">Update required</div>
              </div>
              <div class="app-status__box app-status__box_red">
                <svg class="app-status__icon status-icon">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#error-x"></use>
                </svg>
                <div class="app-status__text">Declined</div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-header__right">
          <div class="account-user d-flex a-center">
            <a href="#" class="account-user__activate btn">Activate business account</a>
            <div class="account-user__wrp">
              <div class="account-user__logo">
                <img src="@/assets/images/src/img/user-jpeg.jpg" alt="">
              </div>
              <span class="account-user__name">Welcome, User</span>
            </div>
            <div class="account-user__message">
              <svg class="account-user__icon icon-svg icon-message">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#message"></use>
              </svg>
              <div class="message-inbox">
                <div class="mesasge-inbox__title title">Inbox</div>
                <div class="message-inbox__subtitle">You have 1 new message</div>
                <a href="#" class="message-inbox__btn btn">Open message center</a>
              </div>
            </div>
            <div class="account-user__moon">
              <svg class="account-user__icon icon-svg icon-moon">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#moon"></use>
              </svg>
            </div>
            <div class="account-user__hamburger" @click.prevent="$emit('isOpenMenu')">
              <svg class="account-user__icon icon-svg icon-moon">
                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#humburger"></use>
              </svg>
            </div>
            <router-link
                class="account-user__logout"
                to="/login"
                tag="span"
            >Log out</router-link>
          </div>
        </div>
      </div>
      <div class="page-header__mobile"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({

  }),
}
</script>

<style scoped>

</style>