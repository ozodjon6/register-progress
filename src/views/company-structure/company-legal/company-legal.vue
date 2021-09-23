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
        <div class="company-structure__type-of">
          <div class="type-of">
            <form action="#" class="type-of__form">
              <CompanyChoose/>
              <div class="type-of__personal">
                <div class="type-of__head company-reg__head">
                  <svg class="company-reg__icon icon-reports" width="16" height="16">
                    <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                  </svg>
                  <h2 class="company-reg__title title">Company information</h2>
                </div>
                <div class="type-of__wrp">
                  <div class="type-of__field  trans-part__field">
                    <label class="trans-part__label">Country of registration</label>
                    <div class="trans-part__choose company-reg__choose">
                      <select id="country" name="country" class="trans-part__select company-reg__select">
                        <option value="Select" disabled="" selected="" class="country-reg__option">Select</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                      </select>
                      <svg class="company-reg__up icon-up" width="10" height="5">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                      </svg>
                    </div>
                    <!-- <span class="trans-part__text">Choose all the countries that apply</span> -->
                  </div>
                  <div class="type-of__field company-reg__field">
                    <label class="company-reg__label"> Legal name
                      <span class="company-reg__required"></span>
                    </label>
                    <div class="company-reg__pole">
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget select your name</div>
                    </div>
                  </div>
                  <div class="company-reg__field is-active">
                    <label class="company-reg__label form-page__label">Registration number <span
                        class="form-page__required form-page__required_margin">(required)</span></label>
                    <div class="form-page__question company-reg__question">
                      <svg class="icon-question" width="6" height="8">
                        <use xlink:href="@/assets/images/src/icons/sprite.svg#question"></use>
                      </svg>
                      <div class="form-page__answer">
                        This is sample text for form hint. This text maybe long and hitn will be adapt
                      </div>
                    </div>
                    <div class="form-page__pole">
                      <input type="number" class="form-page__input company-reg__input" id="password-field" required=""
                             placeholder="placeholder text">
                      <div class="error-text">Please, don't forget to select your country</div>
                    </div>
                  </div>
                  <div class="type-of__field company-reg__field">
                    <label class="company-reg__label"> Date of registration
                      <span class="company-reg__required"></span>
                    </label>
                    <div class="company-reg__pole">
                      <input type="text" class="company-reg__input" required="" placeholder="MM/DD/YY">
                      <svg class="icon-data icon-svg" width="14" height="16">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-data"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="company-reg__field">
                    <label class="company-reg__label"> Registered address
                      <span class="company-reg__rquired"></span>
                    </label>
                    <div class="company-reg__pole">
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget to select your Number and street name</div>
                    </div>

                  </div>
                  <div class="company-reg__pole-wrp company-reg__field_adress">
                    <div class="company-reg__field mr24">
                      <label class="company-reg__label"> City
                        <span class="company-reg__rquired"></span>
                      </label>
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget your City</div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__label"> Postcode
                        <span class="company-reg__rquired">(optional)</span>
                      </label>
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget your Postcode</div>
                    </div>
                  </div>
                  <div class="type-of__field  trans-part__field">
                    <label class="trans-part__label">Country of residence</label>
                    <div class="trans-part__choose company-reg__choose">
                      <select name="Country" class="company-reg__select">
                        <option value="Select" disabled="" selected="" class="country-reg__option">Select</option>
                        <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                        <option value="UK" class="country-reg__option">UK</option>
                      </select>
                      <svg class="company-reg__up icon-up" width="10" height="5">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                      </svg>
                    </div>
                    <!-- <span class="trans-part__text">Choose all the countries that apply</span> -->
                  </div>
                  <div class="type-of__field  trans-part__field">
                    <label class="trans-part__label">Nationality</label>
                    <div class="trans-part__choose company-reg__choose">
                      <select id="country" name="country" class="trans-part__select company-reg__select">
                        <option value="Select" disabled="" selected="" class="country-reg__option">Select</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                      </select>
                      <svg class="company-reg__up icon-up" width="10" height="5">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                      </svg>
                    </div>
                    <!-- <span class="trans-part__text">Choose all the countries that apply</span> -->
                  </div>
                  <div class="type-of__field company-reg__field">
                    <label class="company-reg__label"> Address
                      <span class="company-reg__required"></span>
                    </label>
                    <div class="company-reg__pole">
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget select your Address</div>
                    </div>
                  </div>
                  <div class="type-of__field company-reg__pole-wrp company-reg__field_adress">
                    <div class="company-reg__field mr24">
                      <label class="company-reg__label"> City
                        <span class="company-reg__rquired"></span>
                      </label>
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget your City</div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__label"> Postcode
                        <!-- <span class="company-reg__rquired">(optional)</span> -->
                      </label>
                      <input type="text" class="company-reg__input" required="">
                      <div class="error-text">Please, don't forget your Postcode</div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistryPartHeader from '@/components/RegistryPartHeader'
import CompanyChoose from '@/views/company-structure/CompanyChoose'

export default {
  name: "company-legal",
  components: {
    RegistryPartHeader,
    CompanyChoose
  }
}
</script>

<style scoped>

</style>