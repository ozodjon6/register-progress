<template>
  <section class="pg-section registry-part review-page">
    <div class="container">
      <div class="registry-part__inner review-page__inner">
        <RegistryPartHeader/>
        <div class="review-page__compliance">
          <div class="compliance-page">
            <div class="compliance-page__list">
              <div class="compliance-page__item">
                <div class="compliance-page__admin">
                  <div class="compliance-page__head">
                    <div class="compliance-page__title">Compliance:</div>
                    <span class="compliance-page__time">22.04.2020 15:58</span>
                  </div>
                  <div class="compliance-page__text">We need more information</div>
                </div>
              </div>
              <div class="compliance-page__content">
                <div class="compliance-page__item">
                  <div class="compliance-page__user">
                    <div class="compliance-page__head">
                      <div class="compliance-page__title compliance-page__title_red">You:</div>
                      <span class="compliance-page__time">22.04.2020 16:44</span>
                    </div>
                    <div class="compliance-page__text">Please recheck my information</div>
                  </div>
                </div>
                <div class="compliance-page__item">
                  <div class="compliance-page__admin">
                    <div class="compliance-page__head">
                      <div class="compliance-page__title">Compliance:</div>
                      <span class="compliance-page__time">22.04.2020 15:58</span>
                    </div>
                    <div class="compliance-page__text">Thank You! You information accepted!</div>
                  </div>
                </div>
                <form action="#" class="compliance-page__form">
                  <div class="compliance-page__form-wrp">
                    <div class="compliance-page__field is-error">
                      <label class="compliance-page__label">
                        <textarea class="compliance-page__textarea" placeholder="Write here"></textarea>
                      </label>
                      <span class="error-text">Error sample</span>
                      <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                    </div>
                  </div>
                </form>
                <div class="compliance-page__documents">
                  <div class="loaded-docs">
                    <ul class="loaded-docs__list">
                      <li class="loaded-docs__item loaded-docs__item_circle">
                        <div class="loaded-docs__loading">
                          <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                            <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                            <circle cx="12" cy="12" r="11" class="spinner__circle spinner__circle_compliance"></circle>
                          </svg>
                        </div>
                      </li>
                      <li class="loaded-docs__item">
                        <div class="loaded-docs__view d-flex a-center">
                          <div class="loaded-docs__name">mydocuments.pdf</div>
                          <div class="loaded-docs__close">
                            <svg class="icon-svg" width="10" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li class="loaded-docs__item">
                        <div class="loaded-docs__view d-flex a-center">
                          <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                          <div class="loaded-docs__close">
                            <svg class="icon-svg" width="10" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li class="loaded-docs__item">
                        <div class="loaded-docs__view d-flex a-center">
                          <div class="loaded-docs__name">mydocuments.pdf</div>
                          <div class="loaded-docs__close">
                            <svg class="icon-svg" width="10" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <span class="error-text">File size more than 5 MB</span>
                    </ul>
                  </div>
                </div>
                <form action="#" class="compliance-page__form">
                  <div class="compliance-page__form-wrp">
                    <div class="compliance-page__field">
                      <input type="file" name="file" id="file3" class="compliance-page__input">
                      <label for="file" class="compliance-page__label">
                        <div class="compliance-page__label-file">
                          <svg class=" icon-svg" width="10" height="20">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                          </svg>
                          <div class="compliance-page__label-text">Attach files</div>
                        </div>
                        <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                      </label>
                    </div>
                    <div class="compliance-page__field">
                      <button type="submit" class="compliance-page__btn btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <button class="compliance-page__reply btn">Reply</button>
          </div>
        </div>
        <div class="review-page__body">
          <div class="review-page__company-info mb72">
            <div class="review-ci">
              <div class="review-ci__header">
                <h2 class="review-ci__title title">
                  <span>1.</span>
                  <div class="review-ci__title__name">Company infomation</div>
                </h2>
                <div class="review-ci__icons">
                  <i class="review-ci__edit">
                    <svg class="company-reg__icon icon-edit" width="11" height="11">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                    </svg>
                  </i>
                  <i class="click-page__warning review-ci__icons-warning">
                    <svg class="icon-warning icon-svg" width="5" height="14">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                    </svg>
                  </i>
                  <i class="click-page__success review-ci__icons-success">
                    <svg class="icon-success icon-svg" width="10" height="8">
                      <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                    </svg>
                  </i>
                </div>
              </div>
              <div class="review-ci__list">
                <div class="review-ci__reference user-info__reference">
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Name:</dt>
                    <dd class="reference-list__dd">Farkhod</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Surename:</dt>
                    <dd class="reference-list__dd">Saydullayev</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Country of residence:</dt>
                    <dd class="reference-list__dd">f.saydullayev@safen <br> etpay.com</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Nationality:</dt>
                    <dd class="reference-list__dd">missed</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Adress:</dt>
                    <dd class="reference-list__dd">Farkhod</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">City:</dt>
                    <dd class="reference-list__dd">Product designer</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Postal code:</dt>
                    <dd class="reference-list__dd">Safenetpay</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">DOB:</dt>
                    <dd class="reference-list__dd">Public limited company</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">Mobile phone number:</dt>
                    <dd class="reference-list__dd">Small</dd>
                  </dl>
                  <dl class="review-ci__item reference-list">
                    <dt class="reference-list__dt">E-mail:</dt>
                    <dd class="reference-list__dd">www.safenetpay.com</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="review-page__trans-info mb72">
            <div class="review-ti">
              <div class="review-ci__header">
                <h2 class="review-ci__title title">
                  <span>1. 2.</span>
                  <div class="review-ci__title__name">Transaction information</div>
                </h2>
                <div class="review-ci__icons is-error">
                  <i class="review-ci__edit">
                    <svg class="company-reg__icon icon-edit" width="11" height="11">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                    </svg>
                  </i>
                  <i class="click-page__warning review-ci__icons-warning active">
                    <svg class="icon-warning icon-svg" width="5" height="14">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                    </svg>
                  </i>
                  <i class="click-page__success review-ci__icons-success">
                    <svg class="icon-success icon-svg" width="10" height="8">
                      <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                    </svg>
                  </i>
                </div>
              </div>
              <div class="review-ti__list">
                <div class="review-ci__reference user-info__reference">
                  <dl class="review-ti__item reference-list">
                    <dt class="reference-list__dt">Transaction volume (in EUR):</dt>
                    <dd class="review-ti__dd reference-list__dd">€ 1,000,000 - € 4,999,999</dd>
                  </dl>
                  <dl class="review-ti__item reference-list">
                    <dt class="reference-list__dt">What will you use the account for?:</dt>
                    <dd class="review-ti__dd reference-list__dd">Broadly, accounts opened with the purpose of holding
                      credit balances are referred to as deposit accounts,
                      whereas accounts opened with the purpose
                    </dd>
                  </dl>
                  <dl class="review-ti__item reference-list">
                    <dt class="reference-list__dt">What will you use the account for?:</dt>
                    <dd class="review-ti__dd reference-list__dd">No</dd>
                  </dl>
                  <dl class="review-ti__item reference-list">
                    <dt class="reference-list__dt">Payments will be coming from:</dt>
                    <dd class="review-ti__dd reference-list__dd">United Kingdom, United States of Amerika, Russian
                      Federation
                    </dd>
                    <dl class="review-ti__item review-ti__item_compliance">
                      <dt class="reference-list__dt"></dt>
                      <dd class="review-ti__dd review-ti__dd_compliance">
                        <div class="review-ti__compliance compliance-page">
                          <div class="compliance-page__list">
                            <div class="compliance-page__item">
                              <div class="compliance-page__admin">
                                <div class="compliance-page__head">
                                  <div class="compliance-page__title">Compliance:</div>
                                  <span class="compliance-page__time">22.04.2020 15:58</span>
                                </div>
                                <div class="compliance-page__text">We need more information</div>
                              </div>
                            </div>
                            <div class="compliance-page__content">
                              <div class="compliance-page__item">
                                <div class="compliance-page__user">
                                  <div class="compliance-page__head">
                                    <div class="compliance-page__title compliance-page__title_red">You:</div>
                                    <span class="compliance-page__time">22.04.2020 16:44</span>
                                  </div>
                                  <div class="compliance-page__text">Please recheck my information</div>
                                </div>
                              </div>
                              <div class="compliance-page__item">
                                <div class="compliance-page__admin">
                                  <div class="compliance-page__head">
                                    <div class="compliance-page__title">Compliance:</div>
                                    <span class="compliance-page__time">22.04.2020 15:58</span>
                                  </div>
                                  <div class="compliance-page__text">Thank You! You information accepted!</div>
                                </div>
                              </div>
                              <form action="#" class="compliance-page__form">
                                <div class="compliance-page__form-wrp">
                                  <div class="compliance-page__field is-error">
                                    <label class="compliance-page__label">
                                      <textarea class="compliance-page__textarea" placeholder="Write here"></textarea>
                                    </label>
                                    <span class="error-text">Error sample</span>
                                    <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                                  </div>
                                </div>
                              </form>
                              <div class="compliance-page__documents">
                                <div class="loaded-docs">
                                  <ul class="loaded-docs__list">
                                    <li class="loaded-docs__item loaded-docs__item_tab loaded-docs__item_circle">
                                      <div class="loaded-docs__loading">
                                        <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                          <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                          <circle cx="12" cy="12" r="11"
                                                  class="spinner__circle spinner__circle_compliance"></circle>
                                        </svg>
                                      </div>
                                    </li>
                                    <li class="loaded-docs__item loaded-docs__item_tab">
                                      <div class="loaded-docs__view d-flex a-center">
                                        <div class="loaded-docs__name">mydocuments.pdf</div>
                                        <div class="loaded-docs__close">
                                          <svg class="icon-svg" width="10" height="10">
                                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                          </svg>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="loaded-docs__item loaded-docs__item_tab">
                                      <div class="loaded-docs__view d-flex a-center">
                                        <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                                        <div class="loaded-docs__close">
                                          <svg class="icon-svg" width="10" height="10">
                                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                          </svg>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="loaded-docs__item loaded-docs__item_tab">
                                      <div class="loaded-docs__view d-flex a-center">
                                        <div class="loaded-docs__name">mydocuments.pdf</div>
                                        <div class="loaded-docs__close">
                                          <svg class="icon-svg" width="10" height="10">
                                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                          </svg>
                                        </div>
                                      </div>
                                    </li>
                                    <span class="error-text">File size more than 5 MB</span>
                                  </ul>
                                </div>
                              </div>
                              <form action="#" class="compliance-page__form">
                                <div class="compliance-page__form-wrp">
                                  <div class="compliance-page__field">
                                    <label class="compliance-page__label">
                                      <input type="file" name="file" class="compliance-page__input">
                                      <svg class=" icon-svg" width="10" height="20">
                                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                                      </svg>
                                      <div class="compliance-page__label-text">
                                        Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                                      </div>
                                    </label>
                                  </div>
                                  <div class="compliance-page__field">
                                    <button type="submit" class="compliance-page__btn btn">Send</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <button class="compliance-page__reply btn">Reply</button>
                        </div>
                      </dd>
                    </dl>
                  </dl>
                  <dl class="review-ti__item reference-list">
                    <dt class="reference-list__dt">Payments will be going to:</dt>
                    <dd class="review-ti__dd reference-list__dd">Uzbekistan</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="review-page__company-structure mb72">
            <div class="review-cs">
              <div class="review-ci__header review-ci__header_structure">
                <h2 class="review-ci__title title">
                  <span></span>
                  <div class="review-ci__title__name review-ci__title__name_structure">Structure</div>
                </h2>
                <div class="review-ci__icons review-ci__icons__structure">
                  <i class="review-ci__edit review-ci__edit_share">
                    <svg class="company-reg__icon icon-edit" width="16" height="16">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-share"></use>
                    </svg>
                  </i>
                  <i class="click-page__warning review-ci__icons-warning">
                    <svg class="icon-warning icon-svg" width="5" height="14">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                    </svg>
                  </i>
                  <i class="click-page__success review-ci__icons-success">
                    <svg class="icon-success icon-svg" width="10" height="8">
                      <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                    </svg>
                  </i>
                </div>
              </div>
              <div class="compliance-page mb24">
                <div class="compliance-page__list">
                  <div class="compliance-page__item">
                    <div class="compliance-page__admin">
                      <div class="compliance-page__head">
                        <div class="compliance-page__title">Compliance:</div>
                        <span class="compliance-page__time">22.04.2020 15:58</span>
                      </div>
                      <div class="compliance-page__text">We need more information</div>
                    </div>
                  </div>
                  <div class="compliance-page__content">
                    <div class="compliance-page__item">
                      <div class="compliance-page__user">
                        <div class="compliance-page__head">
                          <div class="compliance-page__title compliance-page__title_red">You:</div>
                          <span class="compliance-page__time">22.04.2020 16:44</span>
                        </div>
                        <div class="compliance-page__text">Please recheck my information</div>
                      </div>
                    </div>
                    <div class="compliance-page__item">
                      <div class="compliance-page__admin">
                        <div class="compliance-page__head">
                          <div class="compliance-page__title">Compliance:</div>
                          <span class="compliance-page__time">22.04.2020 15:58</span>
                        </div>
                        <div class="compliance-page__text">Thank You! You information accepted!</div>
                      </div>
                    </div>
                    <form action="#" class="compliance-page__form">
                      <div class="compliance-page__form-wrp">
                        <div class="compliance-page__field is-error">
                          <label class="compliance-page__label">
                            <textarea class="compliance-page__textarea" placeholder="Write here"></textarea>
                          </label>
                          <span class="error-text">Error sample</span>
                          <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                        </div>
                      </div>
                    </form>
                    <div class="compliance-page__documents">
                      <div class="loaded-docs">
                        <ul class="loaded-docs__list">
                          <li class="loaded-docs__item loaded-docs__item_circle">
                            <div class="loaded-docs__loading">
                              <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                <circle cx="12" cy="12" r="11"
                                        class="spinner__circle spinner__circle_compliance"></circle>
                              </svg>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">mydocuments.pdf</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">mydocuments.pdf</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <span class="error-text">File size more than 5 MB</span>
                        </ul>
                      </div>
                    </div>
                    <form action="#" class="compliance-page__form">
                      <div class="compliance-page__form-wrp">
                        <div class="compliance-page__field">
                          <input type="file" name="file" id="file2" class="compliance-page__input">
                          <label for="file" class="compliance-page__label">
                            <svg class=" icon-svg" width="10" height="20">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                            </svg>
                            <div class="compliance-page__label-text">
                              Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                            </div>
                          </label>
                        </div>
                        <div class="compliance-page__field">
                          <button type="submit" class="compliance-page__btn btn">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <button class="compliance-page__reply btn">Reply</button>
              </div>
              <div class="review-cs__body">
                <div class="user-info__titles">
                  <div class="user-info__titles-name">Name</div>
                  <div class="user-info__others user-info__others_tab d-flex a-center">
                    <div class="user-info__titles-position">Position</div>
                    <div class="user-info__titles-ownership">Ownership</div>
                    <div class="user-info__titles-signatory">Signatory
                      <div class="form-page__question user-info__question" id="question-btn">
                        <svg class="icon-question" width="6" height="8">
                          <use xlink:href="@/assets/images/src/icons/sprite.svg#question"></use>
                        </svg>
                        <div class="form-page__answer">
                          This is sample text for form hint. This text maybe long and hitn will be adapt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="review-cs__list user-info__list">
                  <div class="user-info__item active" id="user-info">
                    <div class="user-info__user d-flex a-center">
                      <div class="user-info__person d-flex a-center">
                        <div class="user-info__person-left d-flex a-center">
                          <div class="user-info__i user-info__i_mobile">
                            <i class="user-info__success click-page__success is-active">
                              <svg class="icon-success" width="10" height="8">
                                <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                              </svg>
                            </i>
                            <i class="user-info__warning click-page__warning">
                              <svg class="icon-warning" width="4" height="10">
                                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                              </svg>
                            </i>
                          </div>
                          <svg class="user-info__person-avatar icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#person"></use>
                          </svg>
                          <h2 class="user-info__person-name">Farkhod Saydullayev</h2>
                          <svg class="user-info__person-icon active" width="12" height="7">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#top-icon"></use>
                          </svg>
                        </div>
                        <div class="user-info__person-right">
                          <label class="user-info__signatory user-info__signatory_mobile">
                            <input type="radio" name="theme"
                                   class="user-info__input company-reg__input company-reg__input_checkbox"
                                   id="user-input-js" required="">
                            <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                          </label>
                        </div>

                      </div>
                      <div class="user-info__others user-info__others_margin d-flex a-center">
                        <div class="user-info__others_mobile">
                          <div class="user-info__titles-position user-info__titles-position_mobile">Position:</div>
                          <div class="user-info__position">Director</div>
                        </div>
                        <div class="user-info__others_mobile user-info__others_mobile_width">
                          <div class="user-info__titles-ownership user-info__titles-ownership_mobile">Ownership:</div>
                          <div class="user-info__ownership"> —</div>
                        </div>
                        <label class="user-info__signatory">
                          <input type="radio" name="theme"
                                 class="user-info__input company-reg__input company-reg__input_checkbox" required=""
                                 checked>
                          <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                        </label>
                      </div>
                      <div class="user-info__icons d-flex a-center">
                        <i class="user-info__delete">
                          <svg class="icon-delete icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                          <span class="user-info__delete-text">delete</span>
                        </i>
                        <i class="user-info__edit">
                          <svg class="icon-edit icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                          <span class="user-info__delete-text">edit</span>
                        </i>
                        <div class="user-info__i">
                          <i class="user-info__success click-page__success">
                            <svg class="icon-success" width="10" height="8">
                              <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                            </svg>
                          </i>
                          <i class="user-info__warning click-page__warning is-active">
                            <svg class="icon-warning" width="4" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>
                    <div class="user-info__content">
                      <div class="user-info__reference">
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Name:</dt>
                          <dd class="reference-list__dd">Farkhod</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Surename:</dt>
                          <dd class="reference-list__dd">Saydullayev</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Country of residence:</dt>
                          <dd class="reference-list__dd">f.saydullayev@safen <br> etpay.com</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile is-error">
                          <dt class="reference-list__dt">Nationality:</dt>
                          <dd class="reference-list__dd">missed</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Adress:</dt>
                          <dd class="reference-list__dd">Farkhod</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">City:</dt>
                          <dd class="reference-list__dd">Product designer</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Postal code:</dt>
                          <dd class="reference-list__dd">Safenetpay</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">DOB:</dt>
                          <dd class="reference-list__dd">Public limited company</dd>
                          <dl class="review-ti__item review-ti__item_compliance">
                            <dt class="reference-list__dt"></dt>
                            <dd class="review-ti__dd review-ti__dd_compliance">
                              <div class="review-ti__compliance compliance-page">
                                <div class="compliance-page__list">
                                  <div class="compliance-page__item">
                                    <div class="compliance-page__admin">
                                      <div class="compliance-page__head">
                                        <div class="compliance-page__title">Compliance:</div>
                                        <span class="compliance-page__time">22.04.2020 15:58</span>
                                      </div>
                                      <div class="compliance-page__text">We need more information</div>
                                    </div>
                                  </div>
                                  <div class="compliance-page__content">
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__user">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title compliance-page__title_red">You:</div>
                                          <span class="compliance-page__time">22.04.2020 16:44</span>
                                        </div>
                                        <div class="compliance-page__text">Please recheck my information</div>
                                      </div>
                                    </div>
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__admin">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title">Compliance:</div>
                                          <span class="compliance-page__time">22.04.2020 15:58</span>
                                        </div>
                                        <div class="compliance-page__text">Thank You! You information accepted!</div>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field is-error">
                                          <label class="compliance-page__label">
                                            <textarea class="compliance-page__textarea"
                                                      placeholder="Write here"></textarea>
                                          </label>
                                          <span class="error-text">Error sample</span>
                                          <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                                        </div>
                                      </div>
                                    </form>
                                    <div class="compliance-page__documents">
                                      <div class="loaded-docs">
                                        <ul class="loaded-docs__list">
                                          <li class="loaded-docs__item loaded-docs__item_tab loaded-docs__item_circle">
                                            <div class="loaded-docs__loading">
                                              <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                                <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                                <circle cx="12" cy="12" r="11"
                                                        class="spinner__circle spinner__circle_compliance"></circle>
                                              </svg>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <span class="error-text">File size more than 5 MB</span>
                                        </ul>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field">
                                          <label class="compliance-page__label">
                                            <input type="file" name="file" class="compliance-page__input">
                                            <svg class=" icon-svg" width="10" height="20">
                                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                                            </svg>
                                            <div class="compliance-page__label-text">
                                              Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                                            </div>
                                          </label>
                                        </div>
                                        <div class="compliance-page__field">
                                          <button type="submit" class="compliance-page__btn btn">Send</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <button class="compliance-page__reply btn">Reply</button>
                              </div>
                            </dd>
                          </dl>
                        </dl>
                        <dl class="reference-list">
                          <dt class="reference-list__dt">Mobile phone number:</dt>
                          <dd class="reference-list__dd">Small</dd>
                        </dl>
                        <dl class="reference-list">
                          <dt class="reference-list__dt">E-mail:</dt>
                          <dd class="reference-list__dd">www.safenetpay.com</dd>
                        </dl>
                      </div>
                      <div class="user-info__btns">
                        <button class="user-info__btn user-info__btn-edit btn d-flex a-center">
                          <span class="user-info__btn-text">Edit</span>
                          <svg class="icon-edit icon-svg" width="12" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                        </button>
                        <button class="user-info__btn user-info__btn-delete btn d-flex a-center">
                          <span class="user-info__btn-text user-info__btn-text--red">Delete</span>
                          <svg class="icon-delete icon-svg" width="10" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="user-info__item">
                    <div class="user-info__user d-flex a-center">
                      <div class="user-info__person d-flex a-center">
                        <div class="user-info__person-left d-flex a-center">
                          <div class="user-info__i user-info__i_mobile">
                            <i class="user-info__success click-page__success">
                              <svg class="icon-success" width="10" height="8">
                                <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                              </svg>
                            </i>
                            <i class="user-info__warning click-page__warning is-active">
                              <svg class="icon-warning" width="4" height="10">
                                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                              </svg>
                            </i>
                          </div>
                          <svg class="user-info__person-avatar icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-home"></use>
                          </svg>
                          <h2 class="user-info__person-name">FLASH DIAMIND BUSINESS LTD</h2>
                          <svg class="user-info__person-icon" width="12" height="7">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#top-icon"></use>
                          </svg>
                        </div>
                        <div class="user-info__person-right">
                          <label class="user-info__signatory user-info__signatory_mobile">
                            <input type="radio" name="theme"
                                   class="user-info__input company-reg__input company-reg__input_checkbox" required="">
                            <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                          </label>
                        </div>
                      </div>
                      <div class="user-info__others user-info__others_margin mr0 d-flex a-center">
                        <!-- <div class="user-info__position">Director, Shareholder</div>
                        <div class="user-info__ownership user-info__ownership_width"> 89% </div> -->
                        <div class="user-info__others_mobile">
                          <div class="user-info__titles-position user-info__titles-position_mobile">Position:</div>
                          <div class="user-info__position">Shareholder</div>
                        </div>
                        <div class="user-info__others_mobile user-info__others_mobile_width">
                          <div class="user-info__titles-ownership user-info__titles-ownership_mobile">Ownership:</div>
                          <div class="user-info__ownership"> 89%</div>
                        </div>
                        <label class="user-info__signatory">
                          <input type="radio" name="theme"
                                 class="user-info__input company-reg__input company-reg__input_checkbox" required="">
                          <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                        </label>
                      </div>
                      <div class="user-info__icons d-flex a-center">
                        <i class="user-info__delete">
                          <svg class="icon-delete icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                          <span class="user-info__delete-text">delete</span>
                        </i>
                        <i class="user-info__edit">
                          <svg class="icon-edit icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                          <span class="user-info__delete-text">edit</span>
                        </i>
                        <div class="user-info__i">
                          <i class="user-info__success click-page__success is-active">
                            <svg class="icon-success" width="10" height="8">
                              <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                            </svg>
                          </i>
                          <i class="user-info__warning click-page__warning">
                            <svg class="icon-warning" width="4" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>
                    <div class="user-info__content">
                      <div class="user-info__reference">
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Name:</dt>
                          <dd class="reference-list__dd">Farkhod</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Surename:</dt>
                          <dd class="reference-list__dd">Saydullayev</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Country of residence:</dt>
                          <dd class="reference-list__dd">f.saydullayev@safen <br> etpay.com</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile is-error">
                          <dt class="reference-list__dt">Nationality:</dt>
                          <dd class="reference-list__dd">missed</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Adress:</dt>
                          <dd class="reference-list__dd">Farkhod</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">City:</dt>
                          <dd class="reference-list__dd">Product designer</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Postal code:</dt>
                          <dd class="reference-list__dd">Safenetpay</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">DOB:</dt>
                          <dd class="reference-list__dd">Public limited company</dd>
                          <dl class="review-ti__item review-ti__item_compliance">
                            <dt class="reference-list__dt"></dt>
                            <dd class="review-ti__dd review-ti__dd_compliance">
                              <div class="review-ti__compliance compliance-page">
                                <div class="compliance-page__list">
                                  <div class="compliance-page__item">
                                    <div class="compliance-page__admin">
                                      <div class="compliance-page__head">
                                        <div class="compliance-page__title">Compliance:</div>
                                        <span class="compliance-page__time">22.04.2020 15:58</span>
                                      </div>
                                      <div class="compliance-page__text">We need more information</div>
                                    </div>
                                  </div>
                                  <div class="compliance-page__content">
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__user">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title compliance-page__title_red">You:</div>
                                          <span class="compliance-page__time">22.04.2020 16:44</span>
                                        </div>
                                        <div class="compliance-page__text">Please recheck my information</div>
                                      </div>
                                    </div>
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__admin">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title">Compliance:</div>
                                          <span class="compliance-page__time">22.04.2020 15:58</span>
                                        </div>
                                        <div class="compliance-page__text">Thank You! You information accepted!</div>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field is-error">
                                          <label class="compliance-page__label">
                                            <textarea class="compliance-page__textarea"
                                                      placeholder="Write here"></textarea>
                                          </label>
                                          <span class="error-text">Error sample</span>
                                          <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                                        </div>
                                      </div>
                                    </form>
                                    <div class="compliance-page__documents">
                                      <div class="loaded-docs">
                                        <ul class="loaded-docs__list">
                                          <li class="loaded-docs__item loaded-docs__item_tab loaded-docs__item_circle">
                                            <div class="loaded-docs__loading">
                                              <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                                <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                                <circle cx="12" cy="12" r="11"
                                                        class="spinner__circle spinner__circle_compliance"></circle>
                                              </svg>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <span class="error-text">File size more than 5 MB</span>
                                        </ul>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field">
                                          <label class="compliance-page__label">
                                            <input type="file" name="file" class="compliance-page__input">
                                            <svg class=" icon-svg" width="10" height="20">
                                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                                            </svg>
                                            <div class="compliance-page__label-text">
                                              Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                                            </div>
                                          </label>
                                        </div>
                                        <div class="compliance-page__field">
                                          <button type="submit" class="compliance-page__btn btn">Send</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <button class="compliance-page__reply btn">Reply</button>
                              </div>
                            </dd>
                          </dl>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Mobile phone number:</dt>
                          <dd class="reference-list__dd">Small</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">E-mail:</dt>
                          <dd class="reference-list__dd">www.safenetpay.com</dd>
                        </dl>
                      </div>
                      <div class="user-info__btns">
                        <button class="user-info__btn user-info__btn-edit btn d-flex a-center">
                          <span class="user-info__btn-text">Edit</span>
                          <svg class="icon-edit icon-svg" width="12" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                        </button>
                        <button class="user-info__btn user-info__btn-delete btn d-flex a-center">
                          <span class="user-info__btn-text user-info__btn-text--red">Delete</span>
                          <svg class="icon-delete icon-svg" width="10" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="user-info__item">
                    <div class="user-info__user d-flex a-center">
                      <div class="user-info__person d-flex a-center">
                        <div class="user-info__person-left d-flex a-center">
                          <div class="user-info__i user-info__i_mobile">
                            <i class="user-info__success click-page__success">
                              <svg class="icon-success" width="10" height="8">
                                <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                              </svg>
                            </i>
                            <i class="user-info__warning click-page__warning is-active">
                              <svg class="icon-warning" width="4" height="10">
                                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                              </svg>
                            </i>
                          </div>
                          <svg class="user-info__person-avatar icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#person"></use>
                          </svg>
                          <h2 class="user-info__person-name">John Smit</h2>
                          <svg class="user-info__person-icon" width="12" height="7">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#top-icon"></use>
                          </svg>
                        </div>
                        <div class="user-info__person-right">
                          <label class="user-info__signatory user-info__signatory_mobile">
                            <input type="radio" name="theme"
                                   class="user-info__input company-reg__input company-reg__input_checkbox" required="">
                            <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                          </label>
                        </div>
                      </div>
                      <div class="user-info__others user-info__others_margin mr0 d-flex a-center">
                        <!-- <div class="user-info__position">Director, Shareholder</div>
                        <div class="user-info__ownership user-info__ownership_width"> 89% </div> -->
                        <div class="user-info__others_mobile">
                          <div class="user-info__titles-position user-info__titles-position_mobile">Position:</div>
                          <div class="user-info__position">Director</div>
                        </div>
                        <div class="user-info__others_mobile user-info__others_mobile_width">
                          <div class="user-info__titles-ownership user-info__titles-ownership_mobile">Ownership:</div>
                          <div class="user-info__ownership"> 89%</div>
                        </div>
                        <label class="user-info__signatory">
                          <input type="radio" name="theme"
                                 class="user-info__input company-reg__input company-reg__input_checkbox" required="">
                          <span class="review-cs__mask type-of__mask company-reg__mask"></span>
                        </label>
                      </div>
                      <div class="user-info__icons d-flex a-center">
                        <i class="user-info__delete">
                          <svg class="icon-delete icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                          <span class="user-info__delete-text">delete</span>
                        </i>
                        <i class="user-info__edit">
                          <svg class="icon-edit icon-svg" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                          <span class="user-info__delete-text">edit</span>
                        </i>
                        <div class="user-info__i">
                          <i class="user-info__success click-page__success is-active">
                            <svg class="icon-success" width="10" height="8">
                              <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                            </svg>
                          </i>
                          <i class="user-info__warning click-page__warning">
                            <svg class="icon-warning" width="4" height="10">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>
                    <div class="user-info__content">
                      <div class="user-info__reference">
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Name:</dt>
                          <dd class="reference-list__dd">John</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Surename:</dt>
                          <dd class="reference-list__dd">Smit</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Country of residence:</dt>
                          <dd class="reference-list__dd">f.saydullayev@safen <br> etpay.com</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile is-error">
                          <dt class="reference-list__dt">Nationality:</dt>
                          <dd class="reference-list__dd">missed</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Adress:</dt>
                          <dd class="reference-list__dd">Farkhod</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">City:</dt>
                          <dd class="reference-list__dd">Product designer</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Postal code:</dt>
                          <dd class="reference-list__dd">Safenetpay</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">DOB:</dt>
                          <dd class="reference-list__dd">Public limited company</dd>
                          <dl class="review-ti__item review-ti__item_compliance">
                            <dt class="reference-list__dt"></dt>
                            <dd class="review-ti__dd review-ti__dd_compliance">
                              <div class="review-ti__compliance compliance-page">
                                <div class="compliance-page__list">
                                  <div class="compliance-page__item">
                                    <div class="compliance-page__admin">
                                      <div class="compliance-page__head">
                                        <div class="compliance-page__title">Compliance:</div>
                                        <span class="compliance-page__time">22.04.2020 15:58</span>
                                      </div>
                                      <div class="compliance-page__text">We need more information</div>
                                    </div>
                                  </div>
                                  <div class="compliance-page__content">
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__user">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title compliance-page__title_red">You:</div>
                                          <span class="compliance-page__time">22.04.2020 16:44</span>
                                        </div>
                                        <div class="compliance-page__text">Please recheck my information</div>
                                      </div>
                                    </div>
                                    <div class="compliance-page__item">
                                      <div class="compliance-page__admin">
                                        <div class="compliance-page__head">
                                          <div class="compliance-page__title">Compliance:</div>
                                          <span class="compliance-page__time">22.04.2020 15:58</span>
                                        </div>
                                        <div class="compliance-page__text">Thank You! You information accepted!</div>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field is-error">
                                          <label class="compliance-page__label">
                                            <textarea class="compliance-page__textarea"
                                                      placeholder="Write here"></textarea>
                                          </label>
                                          <span class="error-text">Error sample</span>
                                          <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                                        </div>
                                      </div>
                                    </form>
                                    <div class="compliance-page__documents">
                                      <div class="loaded-docs">
                                        <ul class="loaded-docs__list">
                                          <li class="loaded-docs__item loaded-docs__item_tab loaded-docs__item_circle">
                                            <div class="loaded-docs__loading">
                                              <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                                <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                                <circle cx="12" cy="12" r="11"
                                                        class="spinner__circle spinner__circle_compliance"></circle>
                                              </svg>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="loaded-docs__item loaded-docs__item_tab">
                                            <div class="loaded-docs__view d-flex a-center">
                                              <div class="loaded-docs__name">mydocuments.pdf</div>
                                              <div class="loaded-docs__close">
                                                <svg class="icon-svg" width="10" height="10">
                                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                          <span class="error-text">File size more than 5 MB</span>
                                        </ul>
                                      </div>
                                    </div>
                                    <form action="#" class="compliance-page__form">
                                      <div class="compliance-page__form-wrp">
                                        <div class="compliance-page__field">
                                          <label class="compliance-page__label">
                                            <input type="file" name="file" class="compliance-page__input">
                                            <svg class=" icon-svg" width="10" height="20">
                                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                                            </svg>
                                            <div class="compliance-page__label-text">
                                              Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                                            </div>
                                          </label>
                                        </div>
                                        <div class="compliance-page__field">
                                          <button type="submit" class="compliance-page__btn btn">Send</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <button class="compliance-page__reply btn">Reply</button>
                              </div>
                            </dd>
                          </dl>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">Mobile phone number:</dt>
                          <dd class="reference-list__dd">Small</dd>
                        </dl>
                        <dl class="reference-list reference-list__mobile">
                          <dt class="reference-list__dt">E-mail:</dt>
                          <dd class="reference-list__dd">www.safenetpay.com</dd>
                        </dl>
                      </div>
                      <div class="user-info__btns">
                        <button class="user-info__btn user-info__btn-edit btn d-flex a-center">
                          <span class="user-info__btn-text">Edit</span>
                          <svg class="icon-edit icon-svg" width="12" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                          </svg>
                        </button>
                        <button class="user-info__btn user-info__btn-delete btn d-flex a-center">
                          <span class="user-info__btn-text user-info__btn-text--red">Delete</span>
                          <svg class="icon-delete icon-svg" width="10" height="12">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#icon-delete"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review-page__documents mb72">
            <div class="review-doc">
              <div class="review-ci__header">
                <h2 class="review-ci__title title">
                  <span>1. 4.</span>
                  <div class="review-ci__title__name">Documents</div>
                </h2>
                <div class="review-ci__icons is-error">
                  <i class="review-ci__edit">
                    <svg class="company-reg__icon icon-edit" width="11" height="11">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#shape"></use>
                    </svg>
                  </i>
                  <i class="click-page__warning review-ci__icons-warning">
                    <svg class="icon-warning icon-svg" width="5" height="14">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#mark-icon"></use>
                    </svg>
                  </i>
                  <i class="click-page__success review-ci__icons-success">
                    <svg class="icon-success icon-svg" width="10" height="8">
                      <use xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                    </svg>
                  </i>
                </div>
              </div>
              <div class="compliance-page mb24">
                <div class="compliance-page__list">
                  <div class="compliance-page__item">
                    <div class="compliance-page__admin">
                      <div class="compliance-page__head">
                        <div class="compliance-page__title">Compliance:</div>
                        <span class="compliance-page__time">22.04.2020 15:58</span>
                      </div>
                      <div class="compliance-page__text">We need more information</div>
                    </div>
                  </div>
                  <div class="compliance-page__content">
                    <div class="compliance-page__item">
                      <div class="compliance-page__user">
                        <div class="compliance-page__head">
                          <div class="compliance-page__title compliance-page__title_red">You:</div>
                          <span class="compliance-page__time">22.04.2020 16:44</span>
                        </div>
                        <div class="compliance-page__text">Please recheck my information</div>
                      </div>
                    </div>
                    <div class="compliance-page__item">
                      <div class="compliance-page__admin">
                        <div class="compliance-page__head">
                          <div class="compliance-page__title">Compliance:</div>
                          <span class="compliance-page__time">22.04.2020 15:58</span>
                        </div>
                        <div class="compliance-page__text">Thank You! You information accepted!</div>
                      </div>
                    </div>
                    <form action="#" class="compliance-page__form">
                      <div class="compliance-page__form-wrp">
                        <div class="compliance-page__field is-error">
                          <label class="compliance-page__label">
                            <textarea class="compliance-page__textarea" placeholder="Write here"></textarea>
                          </label>
                          <span class="error-text">Error sample</span>
                          <span class="compliance-page__message">For security reason, we don't accept documents uploaded on third party servers. Please use "Attach" function below.</span>
                        </div>
                      </div>
                    </form>
                    <div class="compliance-page__documents">
                      <div class="loaded-docs">
                        <ul class="loaded-docs__list">
                          <li class="loaded-docs__item loaded-docs__item_circle">
                            <div class="loaded-docs__loading">
                              <svg class="cancel-upload__spinner cancel-upload__spinner_mobile spinner">
                                <!-- <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt">11%</text> -->
                                <circle cx="12" cy="12" r="11"
                                        class="spinner__circle spinner__circle_compliance"></circle>
                              </svg>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">mydocuments.pdf</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">screenshot_12_13_233333333333_jpg</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li class="loaded-docs__item">
                            <div class="loaded-docs__view d-flex a-center">
                              <div class="loaded-docs__name">mydocuments.pdf</div>
                              <div class="loaded-docs__close">
                                <svg class="icon-svg" width="10" height="10">
                                  <use xlink:href="@/assets/images/src/icons/sprite-all.svg#close"></use>
                                </svg>
                              </div>
                            </div>
                          </li>
                          <span class="error-text">File size more than 5 MB</span>
                        </ul>
                      </div>
                    </div>
                    <form action="#" class="compliance-page__form">
                      <div class="compliance-page__form-wrp">
                        <div class="compliance-page__field">
                          <input type="file" name="file" id="file" class="compliance-page__input">
                          <label for="file" class="compliance-page__label">
                            <svg class=" icon-svg" width="10" height="20">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#skripka"></use>
                            </svg>
                            <div class="compliance-page__label-text">
                              Attach files <span class="compliance-page__label-format">(png, jpg, pdf, max file size 5 MB)</span>
                            </div>
                          </label>
                        </div>
                        <div class="compliance-page__field">
                          <button type="submit" class="compliance-page__btn btn">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <button class="compliance-page__reply btn">Reply</button>
              </div>
              <div class="review-doc__body">
                <div class="review-doc__passport your-passport">
                  <div class="company-verification__head company-reg__head">
                    <!-- <svg class="company-reg__icon icon-reports" width="16" height="16">
                        <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                    </svg> -->
                    <h2 class="review-doc__title company-reg__title title">Passport</h2>
                  </div>
                  <div class="your-passport__inner">
                    <ul class="your-passport__list mb24">
                      <li class="review-doc__item your-passport__item d-flex a-center">
                        <div class="review-doc__info your-passport__info d-flex">
                          <div class="review-doc__icon your-passport__icon">
                            <svg class="company-reg__icon icon-reports" width="34" height="34">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#xls-icon"></use>
                            </svg>
                          </div>
                          <div class="review-doc__name your-passport__name">
                            <div class="your-passport__name-text">reports.xls</div>
                            <div class="review-doc__name-size your-passport__name-size">10 Mb</div>
                          </div>
                        </div>
                      </li>
                      <li class="review-doc__item your-passport__item d-flex a-center">
                        <div class="review-doc__info your-passport__info d-flex">
                          <div class="review-doc__icon your-passport__icon">
                            <svg class="company-reg__icon icon-reports" width="34" height="34">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#docx-icon"></use>
                            </svg>
                          </div>
                          <div class="review-doc__name your-passport__name">
                            <div class="your-passport__name-text">filename_my-document.docx</div>
                            <div class="review-doc__name-size your-passport__name-size">128 Mb</div>
                          </div>
                        </div>
                      </li>
                      <li class="review-doc__item your-passport__item d-flex a-center">
                        <div class="review-doc__info your-passport__info d-flex">
                          <div class="review-doc__icon your-passport__icon">
                            <svg class="company-reg__icon icon-reports" width="34" height="34">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#pdf-icon"></use>
                            </svg>
                          </div>
                          <div class="review-doc__name your-passport__name">
                            <div class="your-passport__name-text">mydocuments.pdd</div>
                            <div class="review-doc__name-size your-passport__name-size">302 Кб</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul class="your-passport__list mb24">
                      <div class="company-verification__head company-reg__head">
                        <!-- <svg class="company-reg__icon icon-reports" width="16" height="16">
                            <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                        </svg> -->
                        <h2 class="review-doc__title company-reg__title title">Company documents</h2>
                      </div>
                      <li class="review-doc__item your-passport__item d-flex a-center">
                        <div class="review-doc__info your-passport__info d-flex">
                          <div class="review-doc__icon your-passport__icon">
                            <svg class="company-reg__icon icon-reports" width="34" height="34">
                              <use xlink:href="@/assets/images/src/icons/sprite-all.svg#tiff-icon"></use>
                            </svg>
                          </div>
                          <div class="review-doc__name your-passport__name">
                            <div class="your-passport__name-text">scanned_document_DCS_1.tiff</div>
                            <div class="review-doc__name-size your-passport__name-size">302 Кб</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- <div class="review-doc__other">
                        <div class="company-verification__head company-reg__head">
                            <svg class="company-reg__icon icon-reports" width="16" height="16">
                                <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                            </svg>
                            <h2 class="review-doc__title company-reg__title title">Other documents</h2>
                        </div>
                        <div class="review-doc__other-content">
                            <button class="review-doc__other-result btn">missed</button>
                        </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review-page__confirm">
            <div class="review-confirm">
              <form action="#" class="review-confirm__form">
                <div class="company-verification__head company-reg__head mb24">
                  <!-- <svg class="company-reg__icon icon-reports" width="16" height="16">
                      <use xlink:href="@/assets/images/src/icons/sprite-all.svg#reports"></use>
                  </svg> -->
                  <h2 class="review-doc__title company-reg__title title">Disclaimers</h2>
                </div>
                <div class="review-confirm__wrp">
                  <div class="company-reg__field">
                    <label class="review-confirm__label company-reg__lable company-reg__lable_checkbox">
                      <input type="checkbox" class="company-reg__input company-reg__input_checkbox" required="" checked>
                      <span class="company-reg__mask">
                                                            <svg class="icon-mask icon-svg" width="12" height="9">
                                                                <use
                                                                    xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                      <span class="review-confirm__text company-reg__checkbox-text">I confirm I'm authorised to complete this application on the company's behalf</span>
                    </label>
                  </div>
                  <div class="company-reg__field">
                    <label class="review-confirm__label company-reg__lable company-reg__lable_checkbox">
                      <input type="checkbox" class="company-reg__input company-reg__input_checkbox" required="" checked>
                      <span class="company-reg__mask">
                                                            <svg class="icon-mask icon-svg" width="12" height="9">
                                                                <use
                                                                    xlink:href="@/assets/images/src/icons/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                      <span class="review-confirm__text company-reg__checkbox-text">I'm OK with your <a href="#"
                                                                                                        class="review-confirm__link">terms and conditions</a> </span>
                    </label>
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
  name: "review-submit",
  components: {
    RegistryPartHeader
  }
}
</script>

<style scoped>

</style>