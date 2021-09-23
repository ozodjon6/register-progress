<template>
  <section class="pg-section registry-part company-structure">
    <div class="registry-part__inner company-structure__inner">
      <RegistryPartHeader/>
      <div style="display: flex">
        <router-link
            class="back-to__btn"
            to="/company-structure"
        >
          <svg class="icon-svg back-to__btn--icon" width="9" height="16">
            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#back-icon"></use>
          </svg>
        </router-link>
        <CompanyChoose/>
      </div>
    </div>
  </section>
</template>

<script>
import RegistryPartHeader from '@/components/RegistryPartHeader'
import CompanyChoose from '@/views/company-structure/CompanyChoose'

export default {
  name: "CompanyStructureChoose",
  components: {
    RegistryPartHeader,
    CompanyChoose
  }
}
</script>

<style scoped>

</style>