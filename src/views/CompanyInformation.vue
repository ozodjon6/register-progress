<template>
  <section class="pg-section registry-part">
    <div class="container">
      <div class="registry-part__inner">
        <RegistryPartHeader/>
        <!-- <div class="registry-aprt__error is-error">
          Some details are missing. Check the menu on the left to see which sections need your attention.
        </div> -->
        <div class="registry-part__body">
          <div class="registry-part__company">
            <div class="company-reg">
              <form action="#" class="company-reg__form">
                <div class="company-reg__default company-reg__information">
                  <div class="company-reg__head">
                    <svg class="company-reg__icon icon-reports" width="16" height="16">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                    </svg>
                    <h2 class="company-reg__title title">Company information</h2>
                  </div>
                  <div class="company-reg__wrp">
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Country of registration
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__choose">
                        <select name="Country" class="company-reg__select">
                          <option value="United Kingdom" class="country-reg__option">United Kingdom</option>
                          <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                        </select>
                        <svg class="company-reg__up icon-up" width="10" height="5">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Company name
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget select your name</div>
                      </div>
                    </div>
                    <div class="company-reg__field is-active">
                      <label class="company-reg__lable form-page__label">Registration number <span class="form-page__required form-page__required_margin">(required)</span></label>
                      <div class="form-page__question company-reg__question" id="question-btn">
                        <svg class="icon-question" width="6" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#question"></use>
                        </svg>
                        <div class="form-page__answer">
                          This is sample text for form hint. This text maybe long and hitn will be adapt
                        </div>
                      </div>
                      <div class="form-page__pole">
                        <input type="number" class="form-page__input company-reg__input" id="password-field" required="" placeholder="placeholder text">
                        <div class="error-text">Please, don't forget to select your country</div>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Date of registration
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="text" class="company-reg__input" required placeholder="MM/DD/YY">
                        <svg class="icon-data icon-svg" width="14" height="16">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-data"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="company-reg__default company-reg__adress">
                  <div class="company-reg__head">
                    <svg class="company-reg__icon icon-reports" width="16" height="16">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#location"></use>
                    </svg>
                    <h2 class="company-reg__title title">Registered address</h2>
                  </div>
                  <div class="company-reg__wrp">
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Number and street name
                        <span class="company-reg__rquired"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget to select your Number and street name</div>
                      </div>

                    </div>
                    <div class="company-reg__pole-wrp company-reg__field_adress">
                      <div class="company-reg__field mr24">
                        <label class="company-reg__lable"> City
                          <span class="company-reg__rquired"></span>
                        </label>
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget  your City</div>
                      </div>
                      <div class="company-reg__field">
                        <label class="company-reg__lable"> Postcode
                          <span class="company-reg__rquired">(optional)</span>
                        </label>
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget your Postcode</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="company-reg__default company-reg__trading-adress">
                  <div class="company-reg__head">
                    <svg class="company-reg__icon icon-reports" width="16" height="16">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#location"></use>
                    </svg>
                    <h2 class="company-reg__title title">Trading address</h2>
                  </div>
                  <div class="company-reg__wrp">
                    <div class="company-reg__field">
                      <label class="company-reg__lable company-reg__lable_checkbox">
                        <input type="checkbox" class="company-reg__input company-reg__input_checkbox" required>
                        <span class="company-reg__mask">
																<svg class="icon-mask icon-svg" width="12" height="9">
																	<use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
																</svg>
															</span>
                        <span class="company-reg__checkbox-text">Same as registered address </span>
                      </label>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Number and street name
                        <span class="company-reg__rquired"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget Number and street name</div>
                      </div>

                    </div>
                    <div class="company-reg__pole-wrp company-reg__field_adress">
                      <div class="company-reg__field mr24">
                        <label class="company-reg__lable"> City
                          <span class="company-reg__rquired"></span>
                        </label>
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget  your City</div>
                      </div>
                      <div class="company-reg__field">
                        <label class="company-reg__lable"> Postcode
                          <span class="company-reg__rquired">(optional)</span>
                        </label>
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget your Postcode</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="company-reg__default">
                  <!-- <div class="company-reg__head">
                    <svg class="company-reg__icon icon-reports" width="16" height="16">
                      <use xlink:href=@/assets/images/src/icons/sprite-all.svg#location"></use>
                    </svg>
                    <h2 class="company-reg__title title">Trading address</h2>
                  </div> -->
                  <div class="company-reg__wrp">
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Company E-mail
                        <span class="company-reg__rquired"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="email" class="company-reg__input" required="">
                        <div class="error-text">Please, don't forget your Email</div>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Company website
                        <span class="company-reg__rquired"></span>
                      </label>
                      <div class="company-reg__pole">
                        <input type="text" class="company-reg__input" required>
                        <div class="error-text">Please, don't forget your website</div>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Company type
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__choose">
                        <select name="Country" class="company-reg__select">
                          <option value="Select company type" disabled selected class="country-reg__option">Select company type</option>
                          <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                          <option value="UK" class="country-reg__option">UK</option>
                        </select>
                        <svg class="company-reg__up icon-up" width="10" height="5">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable"> Company size
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__choose">
                        <select name="Country" class="company-reg__select">
                          <option value="Select" disabled selected class="country-reg__option">Select</option>
                          <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                          <option value="UK" class="country-reg__option">UK</option>
                        </select>
                        <svg class="company-reg__up icon-up" width="10" height="5">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable">Industry
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__choose">
                        <select name="Country" class="company-reg__select">
                          <option value="Select" disabled selected class="country-reg__option">Select</option>
                          <option value="Uzbekistan" class="country-reg__option">Uzbekistan</option>
                          <option value="UK" class="country-reg__option">UK</option>
                        </select>
                        <svg class="company-reg__up icon-up" width="10" height="5">
                          <use xlink:href="@/assets/images/src/icons/sprite-all.svg#up-down"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable">Business description
                        <span class="company-reg__required"></span>
                      </label>
                      <div class="company-reg__pole">
                        <textarea cols="5" rows="5" class="company-reg__textarea" placeholder="Explain what your business does in a few words"></textarea>
                        <div class="error-text">Please, don't forget your description</div>
                      </div>
                    </div>
                    <div class="company-reg__field">
                      <label class="company-reg__lable company-reg__lable_checkbox company-reg__lable_buseness">
                        <input type="checkbox" class="company-reg__input company-reg__input_checkbox" id="public" required>
                        <span class="company-reg__mask">
																<svg class="icon-mask icon-svg" width="12" height="9">
																	<use xlink:href="@/assets/images/src/icons/sprite-all.svg#check"></use>
																</svg>
															</span>
                        <span class="company-reg__checkbox-text">My business is regulated  </span>
                      </label>
                    </div>
                    <div class="company-reg__business" id="business-js">
                      <div class="company-reg__field">
                        <label class="company-reg__lable"> Regulator's name
                          <span class="company-reg__rquired"></span>
                        </label>
                        <div class="company-reg__pole">
                          <input type="text" class="company-reg__input" required>
                          <div class="error-text">Please, don't forget your Regulator's name</div>
                        </div>

                      </div>
                      <div class="company-reg__field">
                        <label class="company-reg__lable"> Licence number
                          <span class="company-reg__rquired"></span>
                        </label>
                        <div class="company-reg__pole">
                          <input type="text" class="company-reg__input" required>
                          <div class="error-text">Please, don't forget your Licence name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </form>
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
  name: "CompanyInformation",
  components: {
    RegistryPartHeader
  }
}
</script>

<style scoped>

</style>