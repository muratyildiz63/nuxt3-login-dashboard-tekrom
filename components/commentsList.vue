<template>
  <div class="p-1 w-full">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                    post id
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                    {{$t('name')}}
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                     {{$t('e-mail')}}
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                  {{$t('message')}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <commnetTableBody
                  v-for="(commnetItem, index) in commentData"
                  :key="index"
                  :commnetItem="commnetItem"
                />
              </tbody>
            </table>

            <div>{{$t('total')}} {{ commentData.length }} {{$t('commentList')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from "axios";
import CommnetTableBody from "./commnetTableBody.vue";
   let commentData=ref([])
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
    commentData.value = res.data;
    commentData.value.length=70
    });

</script>