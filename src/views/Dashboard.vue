<template>
  <div>
    <section class="pg-section welcome-page">
      <div class="container">
        <div class="welcome-page__inner">
          <div class="welcome-page__logo">
            <a href="#" class="snp-logo">
              <img src="@/assets/images/src/icons/snp-logo.svg" alt="">
            </a>
          </div>
          <h2 class="welcome-page__title title">Hey Farkhod, welcome to Safenetpay</h2>
          <div class="welcome-page__descr descr">Your account is almost ready to go. We need some more information to activate it.</div>
        </div>
      </div>
    </section>
    <section class="pg-section activate-page">
      <div class="container perfect-container">
        <div class="activate-page__inner">
          <div class="activate-page__header">
            <h2 class="activate-page__title title">Activate your account</h2>
            <div class="activate-page__descr descr">Complete in any order you like</div>
          </div>
          <div class="activate-page__body">
            <div class="active-account">
              <div class="active-account__list">
                <router-link
                    class="active-account__item br-top br-bottom"
                    to="/company-information"
                    tag="div"
                    >
                  <div class="click-page d-flex a-center">
                    <div class="click-page__numbers is-success">
                      <span class="click-page__number">1</span>
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success active">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                    </div>
                    <div class="click-page__name active">
                      <h3 class="click-page__title title">Company information</h3>
                      <!-- <span class="click-page__descr descr"></span> -->
                    </div>
                    <div class="click-page__icons is-right">
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                      <i class="click-page__right">
                        <svg class="icon-right icon-svg" width="9" height="16">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#back-icon"></use>
                        </svg>
                      </i>
                    </div>
                  </div>
<!--                  <a href="#" class="active-account__click-to"></a>-->
                </router-link>
                <router-link
                    class="active-account__item br-bottom"
                    to="/transaction-information"
                    tag="div"
                >
                  <div class="click-page d-flex a-center">
                    <div class="click-page__numbers is-active">
                      <span class="click-page__number active">2</span>
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                    </div>
                    <div class="click-page__name">
                      <h3 class="click-page__title title">Transaction information</h3>
                      <span class="click-page__descr descr">Tell us how you'll use your account</span>
                    </div>
                    <div class="click-page__icons is-right">
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                      <i class="click-page__right">
                        <svg class="icon-right icon-svg" width="9" height="16">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#back-icon"></use>
                        </svg>
                      </i>
                    </div>
                  </div>
                </router-link>
                <router-link
                    class="active-account__item br-bottom"
                    to="/company-structure"
                    tag="div"
                    >
                  <div class="click-page d-flex a-center">
                    <div class="click-page__numbers is-active">
                      <span class="click-page__number active">3</span>
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                    </div>
                    <div class="click-page__name">
                      <h3 class="click-page__title title">Company structure</h3>
                      <span class="click-page__descr descr">Tell us about your directors and shareholders</span>
                    </div>
                    <div class="click-page__icons is-right">
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                      <i class="click-page__right active">
                        <svg class="icon-right icon-svg" width="9" height="16">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#back-icon"></use>
                        </svg>
                      </i>
                    </div>
                  </div>
                </router-link>
                <router-link
                    class="active-account__item br-bottom"
                    to="/upload-documents"
                    tag="div"
                >
                  <div class="click-page d-flex a-center">
                    <div class="click-page__numbers is-active">
                      <span class="click-page__number active">4</span>
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                    </div>
                    <div class="click-page__name">
                      <h3 class="click-page__title title">Upload documents</h3>
                      <span class="click-page__descr descr">Upload supporting documents</span>
                    </div>
                    <div class="click-page__icons is-right">
                      <i class="click-page__warning">
                        <svg class="icon-warning icon-svg" width="4" height="10">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                        </svg>
                      </i>
                      <i class="click-page__success">
                        <svg class="icon-success icon-svg" width="10" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                        </svg>
                      </i>
                      <i class="click-page__right active">
                        <svg class="icon-right icon-svg" width="9" height="16">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#back-icon"></use>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <a href="index-dashboard-10.html" class="active-account__click-to"></a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>