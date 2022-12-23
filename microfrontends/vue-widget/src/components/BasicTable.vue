<script setup>
const people = [
  {
    id: 1,
    name: 'Cy Ganderton',
    job: 'Quality Control Specialist',
    color: 'Blue'
  },
  {
    id: 2,
    name: 'Hart Hagerty',
    job: 'Desktop Support Technician',
    color: 'Purple'
  },
  {
    id: 3,
    name: 'Brice Swyre',
    job: 'Tax Accountant',
    color: 'Red'
  }
];
</script>
<template>
  <table class="table w-full mb-8">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in people" :key="item.id">
        <th>{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.job}}</td>
        <td>{{item.color}}</td>
      </tr>
    </tbody>
  </table>
</template>