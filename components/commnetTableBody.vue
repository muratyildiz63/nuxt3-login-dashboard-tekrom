<template>

    <tr class="bg-gray-100 border-b">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {{commnetItem.postId}}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    {{commnetItem.name.substr(0, 10)}}...
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
     {{commnetItem.email}}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
     {{commnetItem.body.substr(0, 20)}}...
      </td>
    </tr>

</template>


<script>

export default{
    props:["commnetItem"]
}

</script>