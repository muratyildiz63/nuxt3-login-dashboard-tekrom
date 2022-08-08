<template>
  <div>
    <form class="flex justify-center items-center p-1">
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
                          {{ $t("User_login") }}
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
                        v-if="userInfo"
                      >
                        {{ $t("ErorLogin") }}
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
                        {{ $t("login_successful") }}
                      </div>

                      <p class="mb-4">{{ $t("username") }}</p>
                      <div class="mb-4">
                        <input
                          v-model="username"
                          @keydown.enter="login"
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
                      <p class="mb-1">{{ $t("password") }}</p>
                      <div class="mb-4">
                        <input
                          v-model="password"
                          @keydown.enter="login"
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
                        <button
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-lime-600
                            text-white
                            font-medium
                            text-xs
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
                          @click="login"
                        >
                          {{ $t("login") }}
                        </button>
                        <nuxt-link
                          to="/registerPage"
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
                          {{ $t("register") }}
                        </nuxt-link>
                      </div>
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
                      <h4 class="text-xl font-semibold mb-6">
                        Penele Giriş Bilgileri
                      </h4>
                      <div class="text-sm">
                        <p>Kullanıcı Adı: admin</p>
                        <p>Şifre: admin</p>
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
import sessionControl from "../middlewares/sessionControl";
import apiRequest from "../services/apiRequest";
import CryptoJs from "crypto-js";

// const user = [
//   {
//     id: 1,
//     username: "Murat",
//     name: "Murat",
//     surname: "Yıldız",
//     password: "123",
//   },
// ];

sessionControl.session2Index();

const username = ref("admin");
const password = ref("admin");
let validUser = ref(false);
let userInfo = ref(false);

const login = () => {
  const key = "tsoft123";
  console.log();
  const cryPassword = CryptoJs.HmacSHA1(password.value, key).toString();
  apiRequest(
    `/user?username=${username.value}&password=${cryPassword}`,
    "GET"
  ).then(async (res) => {
    console.log(res);

    if (res.length > 0) {
      await localStorage.setItem("userID", res[0].id);

      // Giriş başarılı mesajını ekrana yazıyor
      validUser.value = true;
      //  index sayfasına yönlendiriyor
      setTimeout(() => {
        sessionControl.session2Index();
      }, 1000);
    } else {
      // yanlış bilgiler girdiniz mesajını ekrana basıyor
      userInfo.value = true;
      // verilen mesajı 4 saniye sonra ekranda kaldırıyor
      setTimeout(() => {
        userInfo.value = false;
      }, 4000);
    }
  });
};
</script>