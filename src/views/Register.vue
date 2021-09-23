<template>
  <div class="outer-wrapper">
    <div class="wrapper wrapper_reg">
      <header class="page-header">
        <div class="container">
          <div class="page-header__inner">
            <div class="page-header__logo">
              <a href="#" class="site-logo">
                <img src="@/assets/images/src/icons/site-logo.svg" alt="Site-Logo"/>
              </a>
            </div>
            <div class="page-header__sign">
              <a href="#" class="page-header__btn btn">Resume registration</a>
            </div>
          </div>
        </div>
      </header>
      <section class="pg-section form-page">
        <div class="container">
          <div class="pg-section__inner">
            <div class="signup-page">
              <div class="signup-page__head">
                <h2 class="signup-page__title">Sign up now</h2>
                <span class="signup-page__subtitle">and get access to:</span>
              </div>
              <ul class="signup-page__list">
                <li class="signup-page__item">
                  <div class="signup-page__icon">
                    <img src="@/assets/images/src/icons/iban.svg" alt="">
                  </div>
                  <div class="signup-page__text">Multi currency corporate IBAN accounts</div>
                </li>
                <li class="signup-page__item">
                  <div class="signup-page__icon signup-page__icon_red">
                    <img src="@/assets/images/src/icons/fx.svg" alt="">
                  </div>
                  <div class="signup-page__text">Competitive FX rates for cross-border payments</div>
                </li>
                <li class="signup-page__item">
                  <div class="signup-page__icon signup-page__icon_yellow">
                    <img src="@/assets/images/src/icons/card.svg" alt="">
                  </div>
                  <div class="signup-page__text">Merchant account for accepting card payments</div>
                </li>
                <li class="signup-page__item">
                  <div class="signup-page__icon signup-page__icon_green">
                    <img src="@/assets/images/src/icons/chat.svg" alt="">
                  </div>
                  <div class="signup-page__text">Be part of an active payment community</div>
                </li>
              </ul>
              <div class="signup-page__footer">
                <span class="signup-page__footer-text">We will ask you some information about your company, its structure and transactions you are planning to make</span>
              </div>
            </div>
            <div class="form-page__wrapper">
              <h2 class="form-page__title">Sign up</h2>
              <form action="#" class="form-page__form" @submit.prevent="submitHandler">
                <div class="form-page__wrp">
                  <label class="form-page__label">Your Name and Surname <span
                      class="form-page__required">(required)</span></label>
                  <div class="form-page__pole">
                    <input
                        type="text"
                        class="form-page__input"
                        v-model.trim="name"
                        :class="{
                          invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength),
                          valid: ($v.name.$dirty && $v.name.required) && ($v.name.$dirty && $v.name.minLength)
                        }"
                    >
                  </div>
                  <small class="error-text"
                         v-if="$v.name.$dirty && !$v.name.required"
                  >
                    The name field must not be empty
                  </small>
                  <small class="error-text"
                         v-else-if="$v.name.$dirty && !$v.name.minLength"
                  >
                    The email field must not be empty {{ $v.name.$params.minLength.min }} digital now he {{ name.length }}
                  </small>
                </div>
                <div class="form-page__wrp">
                  <label class="form-page__label">Your email address <span class="form-page__required">(required)</span></label>
                  <div class="form-page__pole">
                    <input type="email"
                           class="form-page__input"
                           placeholder="ozodjon6@gmail.com"
                           v-model.trim="email"
                           :class="{
                             invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email),
                             valid: ($v.email.$dirty && $v.email.required) && ($v.email.$dirty && $v.email.email)
                           }"
                    >
                  </div>
                  <small class="error-text"
                         v-if="$v.email.$dirty && !$v.email.required"
                  >
                    The name field must not be empty
                  </small>
                  <small class="error-text"
                         v-else-if="$v.email.$dirty && !$v.email.email"
                  >
                    Ввидите корректный email
                  </small>
                </div>
                <div class="form-page__wrp">
                  <label class="form-page__label">Pick a password <span
                      class="form-page__required form-page__required_margin">(required)</span></label>
                  <div class="form-page__pole">
                    <input type="password"
                           class="form-page__input form-page__input_valid"
                           @focus="isOpen = true"
                           @blur="isOpen = false"
                           v-model.trim="password"
                           :class="{
                             invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.password),
                             valid: ($v.password.$dirty && $v.password.required) && ($v.password.$dirty && $v.password.password)
                           }"
                    >
                    <ul class="checker-list"
                        v-model="isOpen"
                        :class="{active: isOpen}"
                    >
                      <li class="checker-list__item"
                          :class="has_minimum_length ? 'success' : '' "
                          >
												  <span class="checker-list__icon">
													  <svg class="icon-check" width="6" height="5">
														  <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
													  </svg>
												  </span>
                        8 or more characters
                      </li>
                      <li class="checker-list__item"
                          :class="has_number ? 'success' : '' "
                      >
												  <span class="checker-list__icon">
													  <svg class="icon-check" width="6" height="5">
														  <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
													  </svg>
												  </span>
                        Numbers
                      </li>
                      <li class="checker-list__item"
                          :class="has_letters ? 'success' : '' "
                          >
												  <span class="checker-list__icon">
													  <svg class="icon-check" width="6" height="5">
														  <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
													  </svg>
												  </span>
                        Letters
                      </li>
                      <li class="checker-list__item"
                          :class="has_special ? 'success' : '' "
                      >
												  <span class="checker-list__icon">
													  <svg class="icon-check" width="6" height="5">
														  <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
													  </svg>
												  </span>
                        Special characters
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-page__wrp">
                  <label class="form-page__label">Confirm your password <span
                      class="form-page__required">(required)</span></label>
                  <div class="form-page__pole">
                    <input type="password"
                           class="form-page__input form-page__input-confirm"
                           v-model.trim="confirmPassword"
                           :class="{
                             invalid: ($v.confirmPassword.$dirty && !$v.confirmPassword.required) || ($v.confirmPassword.$dirty && !$v.confirmPassword.sameAsPassword),
                             valid: ($v.confirmPassword.$dirty && $v.confirmPassword.required) && ($v.confirmPassword.$dirty && $v.confirmPassword.sameAsPassword)
                           }"
                    >
                  </div>
                  <small class="error-text"
                         v-if="$v.confirmPassword.$dirty && !$v.confirmPassword.required"
                    >
                    Confirm Password is required
                  </small>
                  <small class="error-text"
                         v-else-if="$v.confirmPassword.$dirty && !$v.confirmPassword.sameAsPassword"
                  >
                    Passwords must match
                  </small>
                </div>
                <div class="form-page__wrp">
                  <div class="form-page__text">By signing up, you're confirming you're OK with our
                    <a href="#" class="form-page__text_link">Privacy Policy</a>
                  </div>
                </div>
                <div class="form-page__wrp">
                  <button type="submit"
                          class="form-page__btn btn"
                          :disabled="isDisabled"
                  >Sign up</button>
                </div>
                <div class="form-page__wrp">
                  <div class="form-page__text form-page__text_login">Already signed up?
                    <router-link
                        class="form-page__text_link"
                        to="/login"
                    >Log in
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__inner wow fadeInUp">
          <div class="site-footer__contact">
            <div class="site-footer__info">
              <svg class="site-footer__icon" width="16" height="10" viewBox="0 0 16 10" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 1C0 0.447716 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V9C16 9.55228 15.5523 10 15 10H1C0.447715 10 0 9.55229 0 9V1ZM3.89132 2L8 5.22825L12.1087 2H3.89132ZM14 3.05746L8 7.77175L2 3.05746V8H14V3.05746Z"
                      fill="#8C96A2"/>
              </svg>
              <a href="email:support@safenetpay.com" class="site-footer__email">support@safenetpay.com</a>
            </div>
            <span class="site-footer__text">Online support</span>
          </div>
          <div class="site-footer__bottom">Safenetpay Services Company Ltd is incorporated in England
            (company number 10259575) with its registered office at 18 King William Street, Monument,
            London, EC4N 7BP, United Kingdom. Safenetpay Services Company Ltd is authorised by Financial
            Conduct Authority as Authorised Payment Institution with reference 795257 trading as Safenetpay.
            By virtue of this license Safenetpay is licensed to provide payment services. Safenetpay is registered
            trademark of Safenetpay Services Company Ltd. This website is owned and maintained by Safenetpay.
            By using this website, you agree to our Terms and Conditions. If you do not agree to these Terms
            and Conditions, please refrain from using this website.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data: () => ({
    name: '',
    email: '',
    password: '',
    has_minimum_length: false,
    has_number: false,
    has_letters: false,
    has_special: false,
    confirmPassword: '',
    isOpen: false,
    // isDisabled: true
  }),
  validations: {
    name: {name, required, minLength: minLength(6)},
    email: {email, required},
    password: {required},
    confirmPassword: {required, sameAsPassword: sameAs('password')}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        console.log()
        return
      }
      this.$router.push('/login')
    },
  },
  watch: {
    password() {
      this.has_minimum_length = (this.password.length > 8);
      this.has_number = /\d/.test(this.password);
      this.has_letters = /[A-Za-z]/.test(this.password);
      this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
      this.confirmPassword = (this.password)
    },
  },
  computed: {
    isDisabled() {
      return (this.name.length < 6)
    }
  }
}
</script>

<style scoped>

</style>