<template>
  <div class="registry-part__header">
    <div class="registry-part__mobile">
      <div class="mobile-heading">
        <ul class="mobile-heading__list">
          <li class="mobile-heading__item active">
            <h2 class="mobile-heading__title company-reg__title title">Company information</h2>
            <span class="mobile-heading__name"> <i class="mobile-heading__name_next">Next:</i>Transaction information</span>
          </li>
          <router-link class="mobile-heading__item"
                       to="/transaction-information"
                       tag="li"
          >
            <h2 class="mobile-heading__title company-reg__title title">Transaction information</h2>
            <span class="mobile-heading__name"> <i class="mobile-heading__name_next">Next:</i>Company structure</span>
          </router-link>
          <li class="mobile-heading__item">
            <h2 class="mobile-heading__title company-reg__title title">Company structure</h2>
            <span class="mobile-heading__name"> <i class="mobile-heading__name_next">Next:</i>Upload documents</span>
          </li>
          <li class="mobile-heading__item">
            <h2 class="mobile-heading__title company-reg__title title">Upload documents</h2>
            <!-- <span class="mobile-heading__name"> <i class="mobile-heading__name_next">Next:</i>Transaction information</span> -->
          </li>
        </ul>
      </div>
    </div>
    <div class="registry-part__conditions conditions">
      <ul class="conditions__list">
        <router-link
            class="conditions__item is-active"
            to="/company-information"
            tag="li"
        >
          <div class="conditions__click">
            <div class="conditions__number">1
              <div class="conditions__number-icons">
                <i class="click-page__warning conditions__warning">
                  <svg class="icon-warning icon-svg" width="4" height="10">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                  </svg>
                </i>
                <i class="click-page__success conditions__success">
                  <svg class="icon-success icon-svg" width="10" height="8">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
                  </svg>
                </i>
              </div>
            </div>
            <div class="conditions__name">Company information</div>
          </div>
        </router-link>
        <router-link
            class="conditions__item"
            to="/transaction-information"
            tag="li"
        >
          <div class="conditions__click">
            <div class="conditions__number">2
              <div class="conditions__number-icons">
                <i class="click-page__warning conditions__warning">
                  <svg class="icon-warning icon-svg" width="4" height="10">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                  </svg>
                </i>
                <i class="click-page__success conditions__success">
                  <svg class="icon-success icon-svg" width="10" height="8">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
                  </svg>
                </i>
              </div>
            </div>
            <div class="conditions__name">Transaction information</div>
          </div>
        </router-link>
        <li class="conditions__item">
          <a href="#" class="conditions__click">
            <div class="conditions__number">3
              <div class="conditions__number-icons">
                <i class="click-page__warning conditions__warning">
                  <svg class="icon-warning icon-svg" width="4" height="10">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                  </svg>
                </i>
                <i class="click-page__success conditions__success">
                  <svg class="icon-success icon-svg" width="10" height="8">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
                  </svg>
                </i>
              </div>
            </div>
            <div class="conditions__name">Company structure</div>
          </a>
        </li>
        <li class="conditions__item">
          <a href="#" class="conditions__click">
            <div class="conditions__number">4
              <div class="conditions__number-icons">
                <i class="click-page__warning conditions__warning">
                  <svg class="icon-warning icon-svg" width="4" height="10">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                  </svg>
                </i>
                <i class="click-page__success conditions__success">
                  <svg class="icon-success icon-svg" width="10" height="8">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
                  </svg>
                </i>
              </div>
            </div>
            <div class="conditions__name">Upload documents</div>
          </a>
        </li>
        <li class="conditions__item">
          <a href="#" class="conditions__click">
            <div class="conditions__number">5
              <div class="conditions__number-icons">
                <i class="click-page__warning conditions__warning">
                  <svg class="icon-warning icon-svg" width="4" height="10">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                  </svg>
                </i>
                <i class="click-page__success conditions__success">
                  <svg class="icon-success icon-svg" width="10" height="8">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
                  </svg>
                </i>
              </div>
            </div>
            <div class="conditions__name">Review and submit</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistryPartHeader"
}
</script>

<style scoped>

</style>