<template>
  <div class="flex">
    <div
      class="w-2/12 transition-all layout-left-menu"
      :class="{ active: menuShow }"
    >
      <div
        class="w-full h-full shadow-md bg-white absolute"
        id="sidenavSecExample"
      >
        <div class="pt-4 pb-2 px-6">
          <a href="#!">
            <div class="flex items-center">
              <div class="shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  class="rounded-full w-10"
                  alt="Avatar"
                />
              </div>
              <div class="grow ml-3">
                <p class="text-sm font-semibold text-blue-600">
                  {{ name }} ({{ userName }})
                </p>
              </div>
            </div>
          </a>
        </div>
        <ul class="relative px-1">
          <li class="relative">
            <nuxt-link
              to="/"
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
              "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span>{{ $t('home') }}</span>
            </nuxt-link>
          </li>
          <li class="relative" id="sidenavSecEx2">
            <nuxt-link
              to="/referencePage"
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>{{ $t('Our_references') }}</span>
            </nuxt-link>
          </li>
           <li class="relative" id="sidenavSecEx2">
            <nuxt-link
              to="/commentPage"
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>{{ $t('comments') }}</span>
            </nuxt-link>
          </li>



          <li class="relative" id="sidenavSecEx3">
            <nuxt-link
              to="/personnelPage"
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx3"
            >
              <span>{{ $t('our_staff') }}</span>
            </nuxt-link>
          
          </li>
        </ul>

        <div class="menuClose" @click="menuShow = !menuShow">{{ $t('close') }}</div>
      </div>
    </div>
    <div class="w-full transition-all">
      <div>
        <nav
          class="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
          "
        >
          <div
            class="
              container-fluid
              w-full
              flex flex-wrap
              items-center
              justify-between
              px-6
            "
          >
            <button
              @click="menuShow = !menuShow"
              class="
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none
                focus:ring-0
                focus:shadow-none
                focus:no-underline
              "
              type="button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                class="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <div
              class="collapse navbar-collapse flex flex-grow items-center"
              id="navbarSupportedContent"
            >
              <nuxt-link
                to="/"
                class="
                  flex
                  items-center
                  text-gray-900
                  hover:text-gray-900
                  focus:text-gray-900
                  mt-2
                  lg:mt-0
                  mr-1
                "
              >
                <img
                  src="https://www.tsoft.com.tr/assets/images/logo/tsoft-logo-tr.svg"
                  style="height: 15px"
                  alt=""
                  loading="lazy"
                />
              </nuxt-link>
              <!-- Left links -->
              <ul class="navbar-nav flex pl-0 list-style-none mr-auto">
                <li class="nav-item p-2">
                  <nuxt-link
                    to="/personnelPage"
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    >{{ $t('our_staff') }}</nuxt-link
                  >
                </li>
                <li class="nav-item p-2">
                  <nuxt-link
                    to="/commentPage"
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    href="#"
                    >{{ $t('comments') }}</nuxt-link
                  >
                </li>
                <li class="nav-item p-2">
                  <nuxt-link
                    to="/referencePage"
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    >{{ $t('Our_references') }}</nuxt-link
                  >
                </li>
              </ul>
              <!-- Left links -->
            </div>
        
            <form>
              <label class=" px-2" for="locale-select">{{ $t("language") }}: </label> 
              <select class="w-12 border border-indigo-600 p-1 inline-block" id="locale-select" v-model="$i18n.locale">
                      <option value="en">en</option>
                       <option value="tr">tr</option>          
              </select>
            </form>
            <button class="bg-sky-900 p-2 rounded-lg ml-5 text-white" @click="logout">{{$t('logout')}}</button>

            <!-- Collapsible wrapper -->
          </div>
        </nav>
      </div>
      <div class="flex flex-wrap justify-center w-full">
        <slot />
      </div>

      <footer
        class="
          text-center
          lg:text-left
          bg-gray-100
          text-gray-600
          fixed
          bottom-0
          left-0
          right-0
        "
      >
        <div
          class="
            flex
            justify-center
            items-center
            lg:justify-between
            p-2
            border-b border-gray-300
          "
        ></div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import sessionControl from "../middlewares/sessionControl";
import apiRequest from "../services/apiRequest";



sessionControl.sessionControl();
let userID = ref(null);
let userName = ref("");
let name = ref("");
let surname = ref("");
let inlogin = ref(false);
let menuShow = ref(false);

userID = localStorage.getItem("userID");

console.log(localStorage.getItem("userID"));

apiRequest(`/user?id=${userID}`, "GET").then((resUser) => {
  if (resUser.length > 0) {
    name.value = resUser[0].name;
    surname.value = resUser[0].surname;
    userName.value = resUser[0].username;
    inlogin.value = true;
  }
});

const logout = () => {
  localStorage.removeItem("userID");
  sessionControl.sessionControl();
};
</script>