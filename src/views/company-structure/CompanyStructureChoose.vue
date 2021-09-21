<template>
  <section class="pg-section registry-part company-structure">
    <div class="registry-part__inner company-structure__inner">
      <RegistryPartHeader/>
      <CompanyChoose/>
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