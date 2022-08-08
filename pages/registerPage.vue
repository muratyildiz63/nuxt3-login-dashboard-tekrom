<template>
  <div>
    <form  class="flex justify-center items-center p-1">
      <label class="px-2" for="locale-select">{{ $t("language") }}: </label>
      <select
        class="w-12 border border-indigo-600 p-1 inline-block"
        id="locale-select"
        v-model="$i18n.locale"
      >
        <option value="en">en</option>
        <option value="tr">tr</option>
      </select>
    </form>
    <div
      class="flex justify-center h-full gradient-form bg-gray-200 md:h-screen"
    >
      <section class="w-full flex justify-center">
        <div class="container py-12 px-6 h-full">
          <div
            class="
              flex
              justify-center
              items-center
              flex-wrap
              h-full
              g-6
              text-gray-800
            "
          >
            <div class="xl:w-10/12">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="text-center">
                        <img
                          class="mx-auto w-48"
                          src="https://www.tsoft.com.tr/assets/images/logo/tsoft-logo-tr.svg"
                          alt="logo"
                        />
                        <h4 class="text-xl font-semibold mt-3 mb-12 pb-1">
                          {{ $t("register") }}
                        </h4>
                      </div>
                      <div
                        class="
                          bg-red-100
                          rounded-lg
                          py-5
                          px-6
                          mb-4
                          text-base text-red-700
                          mb-3
                        "
                        role="alert"
                        v-if="userMessage"
                      >
                        {{ userMessage }}
                      </div>

                      <div
                        class="
                          bg-green-100
                          rounded-lg
                          py-5
                          px-6
                          mb-4
                          text-base text-green-700
                          mb-3
                        "
                        role="alert"
                        v-if="validUser"
                      >
                        {{ $t("registration_uccessful") }}
                      </div>
                      <form>
                        <p class="mb-1">{{ $t("username") }}</p>
                        <div class="mb-4">
                          <input
                            v-model="username"
                            type="text"
                            class="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700
                              focus:bg-white
                              focus:border-blue-600
                              focus:outline-none
                            "
                            :placeholder="$t('username')"
                          />
                        </div>
                        <p class="mb-1">{{ $t("name") }}</p>
                        <div class="mb-4">
                          <input
                            v-model="name"
                            type="text"
                            class="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700
                              focus:bg-white
                              focus:border-blue-600
                              focus:outline-none
                            "
                            :placeholder="$t('name')"
                          />
                        </div>
                        <p class="mb-1">{{ $t("surname") }}</p>
                        <div class="mb-4">
                          <input
                            v-model="surname"
                            type="text"
                            class="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700
                              focus:bg-white
                              focus:border-blue-600
                              focus:outline-none
                            "
                            :placeholder="$t('surname')"
                          />
                        </div>
                        <p class="mb-1">Şifreniz</p>
                        <div class="mb-4">
                          <input
                            v-model="password"
                            type="password"
                            class="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700
                              focus:bg-white
                              focus:border-blue-600
                              focus:outline-none
                            "
                            :placeholder="$t('password')"
                          />
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <div
                            @click="controls"
                            class="
                              inline-block
                              px-6
                              py-2.5
                              font-medium
                              text-xs text-white
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:shadow-lg
                              focus:shadow-lg focus:outline-none focus:ring-0
                              active:shadow-lg
                              transition
                              cursor-pointer
                              duration-150
                              ease-in-out
                              w-full
                              mb-3
                              bg-lime-600
                            "
                          >
                            {{ $t("register") }}
                          </div>

                          <nuxt-link
                            to="/loginPage"
                            class="
                              inline-block
                              px-6
                              py-2.5
                              bg-blue-400
                              font-medium
                              text-xs text-white
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:shadow-lg
                              focus:shadow-lg focus:outline-none focus:ring-0
                              active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                              w-full
                              mb-3
                            "
                          >
                            {{ $t("login") }}
                          </nuxt-link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="
                      login-right
                      lg:w-6/12
                      flex
                      items-center
                      lg:rounded-r-lg
                      rounded-b-lg
                      lg:rounded-bl-none
                    "
                  >
                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 class="text-xl font-semibold mb-6">Bilgi</h4>
                      <div class="text-sm">
                        <p>
                          Kayıt Olurken tüm alanları doldurmanız gerekmektedir
                        </p>
                        <p>
                          Daha önce kullanıcı adı ile yeniden kayıt
                          yapılmamaktadır
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import CryptoJs from "crypto-js";
import sessionControl from "../middlewares/sessionControl";
import apiRequest from "../services/apiRequest";

let username = ref(null);
let name = ref("");
let surname = ref("");
let password = ref("");
let userMessage = ref("");
let validUser = ref(false);
let userID = ref(null);

// middlewares ile kullanıcı aturum açtıysa index sayfasına dönlendiririyor
sessionControl.session2Index();

const controls = () => {
  // inputların boş olup olmadığını kontrol ediyor
  if (
    username.value == "" ||
    name.value == "" ||
    surname.value == "" ||
    password.value == ""
  ) {
    userMessage.value = "Boş alanlar Mevcut ";
    setTimeout(() => {
      userMessage.value = null;
    }, 3000);
  } else {
    // Daha önce böyle bir kullanıcı olup olmadığını kontrol ediyor
    apiRequest(`/user?username=${username.value}`, "GET").then((resUser) => {
      if (resUser.length > 0) {
        // kullanıcı varsa ekrana uyarı mesajı basıyor
        userMessage.value = "Bu Kullanıcı Adı Kullanılmaktadır.";
      } else {
        // böyle bir kullanıcı yoksa register fonksiyonunu çalıştırıyor
        register();
      }
    });
  }
};

const register = () => {
  const key = "tsoft123";

  //  inputlardan gelen  verilerii birbirleri ile eşleştiriyoruz
  const registerData = {
    username: username.value,
    name: name.value,
    surname: surname.value,
    //  gelen password alanını  CryptoJs ile şifreliyoruz
    password: CryptoJs.HmacSHA1(password.value, key).toString(),
  };
  apiRequest(`/user`, "POST", registerData).then((res) => {
    // kullanıcını ad'sini localStorage userID değişkeini altında ekliyor
    localStorage.setItem("userID", res.id);
    // Kayıt Başarılı mesajını ekrana basıyor
    validUser.value = true;
    // 1 saniye bekleyip index sayfasına yönlendiriyor
    setTimeout(() => {
      sessionControl.session2Index();
    }, 1000);
  });
};
</script>