<template>
  <dashboardLayout>
    <div class="p-5 flex w-full">
      <div class="w-1/2">
        <CommentsList />
      </div>
      <div class="w-1/2 flex">
        <div class="w-2/3">
          <h1 class="flex justify-center my-4">Personelleriniz</h1>
          <PersonnelInfo
            v-for="(personnel, index) in personnelData"
            :key="index"
            :personnelItem="personnel"
          />
        </div>
        <div class="w-1/3">
          <h1 class="flex justify-center my-4">Referanslarımız</h1>
          <ReferenceCustumer
            v-for="(reference, index) in referenceData"
            :key="index"
            :referenceItem="reference"
          />
        </div>
      </div>
    </div>
  </dashboardLayout>
</template>

<script setup>



import dashboardLayout from "../layouts/dashboardLayout";
import PersonnelPage from "./personnelPage.vue";
import apiRequest from "../services/apiRequest";

let personnelData = ref([]);
apiRequest("/personnel", "GET").then((rest) => {
  personnelData.value = rest;
});


let referenceData = ref([]);
apiRequest("/reference", "GET").then((res) => {
  referenceData.value = res;
});


</script>