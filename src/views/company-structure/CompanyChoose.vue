<template>
  <div class="company-structure__type-of">
    <div class="type-of type-of__choose">
        <div class="trans-part__head company-reg__head">
          <svg class="trans-part__icon trans-part__icon_rotate" width="16" height="16">
            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-home"></use>
          </svg>
          <h2 class="company-reg__title title">Type of director or shareholder
            <span class="company-reg__title_required">(required)</span>
          </h2>
        </div>
        <div class="type-of__wrp">
          <div class="company-reg__field type-of__field d-flex a-center">
            <router-link
                class="type-of__checkbox company-reg__label"
                to="/company-individual"
                tag="label"
                active-class="active"
            >
              <input type="radio" name="theme" class="type-of__input company-reg__input company-reg__input_checkbox" required="">
              <span class="type-of__mask company-reg__mask"></span>
              <span class="company-reg__checkbox-text">Individual</span>
            </router-link>
            <router-link
                class="type-of__checkbox company-reg__label"
                to="/company-legal"
                tag="label"
                active-class="active"
            >
              <input type="radio" name="theme" class="type-of__input company-reg__input company-reg__input_checkbox" required="">
              <span class="type-of__mask company-reg__mask"></span>
              <span class="company-reg__checkbox-text">Legal Entity</span>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyChoose"
}
</script>

<style scoped>

</style>