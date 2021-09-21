<template>
  <div>
    <Loader v-if="loading"/>
    <section class="login-modern" v-else="">
      <div class="container-fluid">
        <div class="col-md-6 col-sm-12">
          <div class="back-button">
            <a href="#" onclick="history.back()"> </a>
          </div>
          <div class="form-content">
            <header>
              <h1 class="page-title text-center">Welcome back to Safenetpay</h1>
            </header>
            <form id="login-form" action="/auth/login" method="post" role="form">
              <input type="hidden" name="_csrf"/>
              <div class="form-group field-loginform-loginname required">
                <label class="control-label" for="loginform-loginname">Email</label>
                <input type="text" id="loginform-loginname" class="form-control" name="LoginForm[loginname]"
                       autocomplete="off" aria-required="true" data-validation="email"/>

                <div class="help-block"></div>
              </div>
              <!-- Forgot password -->

              <div class="form-group field-loginform-password required">
                <div class="control-label-wrp">
                  <label class="control-label" for="loginform-password">Password</label>
                  <a href="#" class="login-form__forget">Forgot password?</a>
                </div>
                <input type="password" id="loginform-password" class="form-control" name="LoginForm[password]"
                       autocomplete="off" aria-required="true" data-validation="strength" data-validation-strength="2"/>

                <div class="help-block"></div>
              </div>
              <div class="login-bottom">
                <button type="submit"
                        class="btn login-bottom__btn btn-primary"
                        @click.prevent=""
                >Sign in
                </button>
                <router-link
                    class="link hidden-xs"
                    to="/register"
                    @click.prevent=""
                >Back to Sign up</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 visible-lg f-right">
          <!-- animation block begin -->
          <div class="anim-box">
            <div id="canvas-box">
              <!-- dynamic past -->
            </div>
            <div style="display: none" id="source-box">
              <div class="square">
                <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="pattern">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 0H99V1.38092L75.1904 25.1902L99 49V51L75.3535 74.6466L99 98.2929V98.9998H98.2927L74.6465 75.3537L51.0002 98.9998H48.9998L25.1904 75.1905L1.3811 98.9998H0V0ZM50 1.41394L26.0605 25.3535L49.8369 49.1298L73.7764 25.1902L50 1.41394ZM1 1.70709L24.6465 25.3535L1 49V1.70709ZM1.70703 1L25.3535 24.6464L49 1H1.70703ZM51 1L74.4834 24.4832L97.9668 1H51ZM1 97.9667L24.4834 74.4833L1 51V97.9667ZM1.41406 50L25.1904 73.7762L49.1299 49.8369L25.3535 26.0606L1.41406 50ZM50 98.5859L25.8975 74.4833L49.8369 50.544L73.9395 74.6466L50 98.5859ZM98.5859 50L74.6465 73.9395L50.5439 49.8369L74.4834 25.8974L98.5859 50Z"
                          fill="#2A5E97"/>
                    <rect id="dot" x="47" y="47" width="5" height="5" fill="#00ffff00"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <!-- animation block end -->

          <section class="brand">
            <div>
              <a class="" href="/" alt="Safenetpay">
                <img src="@/assets/images/src/icons/site-logo-login.svg" alt="" class="safenetpay-logo-icon-txt">
              </a>
            </div>

            <div class="brand-description">
              <div class="text-bold">Pay and get paid faster</div>
              <div>Save money</div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () =>  ({
    loading: true
  }),
  mounted() {
    setInterval( () => {
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>
.login-modern .btn-primary {
  color: #fff ;
}
.login-modern a.link {
  font-size: 12px;
  line-height: 20px;
}

</style>