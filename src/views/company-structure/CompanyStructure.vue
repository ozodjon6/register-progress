<template>
  <section class="pg-section registry-part company-structure">
    <div class="container">
      <div class="registry-part__inner company-structure__inner">
        <RegistryPartHeader/>
        <div class="company-structure__body">
          <div class="company-structure__wrapper">
            <form action="#" class="company-structure__form">
              <div class="trans-part__head company-reg__head">
                <svg class="trans-part__icon trans-part__icon_rotate" width="16" height="16">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-share"></use>
                </svg>
                <h2 class="company-reg__title title">Company structure</h2>
              </div>
              <div class="company-structure__wrp">
                <div class="company-structure__field">
                  <label class="company-structure__label">No information yet</label>
                </div>
                <router-link
                    class="company-structure__pole"
                    to="/company-structure-choose"
                >
                  <svg class="company-structure__icon" width="14" height="14">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-plus"></use>
                  </svg>
                  <div class="company-structure__title title">Add a director or shareholder</div>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistryPartHeader from "@/components/RegistryPartHeader";
export default {
  name: "company-structure",
  components: {
    RegistryPartHeader
  }
}
</script>

<style scoped>

</style>