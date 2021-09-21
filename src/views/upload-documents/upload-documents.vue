<template>
  <section class="pg-section registry-part upload-doc">
    <div class="container">
      <div class="registry-part__inner upload-doc__inner">
        <RegistryPartHeader/>
        <div class="upload-doc__body">
          <div class="upload-doc__verification">
            <div class="company-verification">
              <div class="company-verification__head company-reg__head">
                <svg class="company-reg__icon icon-reports" width="16" height="16">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                </svg>
                <h2 class="company-reg__title title">Company verification documents</h2>
              </div>
              <div class="company-verification__body">
                <div class="company-verification__descr">
                  Upload your company's certificate of incorporation, licence, and other verification documents
                </div>
                <div class="company-verification__upload">
                  <input type="file" name="file" id="file" class="company-verification__input">
                  <label for="file" class="company-verification__label">
                    <div class="company-verification__icon">
                      <svg class="icon-upload icon-reports" width="16" height="13">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#dovnload"></use>
                      </svg>
                    </div>
                    <div class="company-verification__content">
                      <a href="#" class="company-verification__link">Drag & Drop files here or click to browse</a>
                      <span class="company-verification__name">PDF, JPG, PNG file formats</span>
                      <span class="company-verification__error-text">Error text</span>
                    </div> <br>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="upload-doc__passport">
            <div class="your-passport">
              <div class="company-verification__head company-reg__head">
                <svg class="company-reg__icon icon-reports" width="16" height="16">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                </svg>
                <h2 class="company-reg__title title">Your passport</h2>
              </div>
              <div class="your-passport__upload">
                <input type="file" name="file" id="file2" class="company-verification__input">
                <label for="file2" class="company-verification__label company-verification__label_yelow">
                  <div class="your-passport__icon">
                    <svg class="icon-upload_blue icon-reports" width="40" height="32.5">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#dovnload"></use>
                    </svg>
                  </div>
                </label>
              </div>
              <div class="company-verification__upload company-verification__upload_tablet">
                <input type="file" name="file" id="file3" class="company-verification__input">
                <label for="file3" class="company-verification__label">
                  <div class="company-verification__icon">
                    <svg class="icon-upload icon-reports" width="16" height="13">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#dovnload"></use>
                    </svg>
                  </div>
                  <div class="company-verification__content">
                    <a href="#" class="company-verification__link">Drag & Drop files here or click to browse</a>
                    <span class="company-verification__name">PDF, JPG, PNG file formats</span>
                    <span class="company-verification__error-text">Error text</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="upload-doc__another">
            <div class="another-doc">
              <div class="company-verification__head company-reg__head">
                <svg class="company-reg__icon icon-reports" width="16" height="16">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                </svg>
                <h2 class="company-reg__title title">Add another document type</h2>
              </div>
              <div class="another-doc__choose company-reg__choose">
                <select name="Country" class="company-reg__select">
                  <option value="Select company type" disabled="" selected="" class="country-reg__option">Select</option>
                  <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                  <option value="UK" class="country-reg__option">UK</option>
                </select>
                <svg class="company-reg__up icon-up" width="10" height="5">
                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistryPartHeader from "@/components/RegistryPartHeader";

export default {
  name: "upload-documents",
  components: {
    RegistryPartHeader
  }
}
</script>

<style scoped>

</style>