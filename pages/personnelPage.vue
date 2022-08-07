<template>

    <dashboardLayout>
      <PersonnelInfo
        v-for="(personnel, index) in personnelData"
        :key="index"
        :personnelItem="personnel"
      />
    </dashboardLayout>
 
</template>
<script setup>

import PersonnelInfo from "../components/personnelInfo.vue";
import apiRequest from "../services/apiRequest";
import dashboardLayout from "../layouts/dashboardLayout";

let personnelData= ref([]);

apiRequest("/personnel", "GET").then((rest) => {
  personnelData.value = rest;
});
</script>
