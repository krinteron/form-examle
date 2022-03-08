<template>
  <div class="container">
    <div class="person">
      <p class="title">Персональные данные</p>
      <p class="person-item">
        <span v-if="$store.state.person.name">
          {{ $store.state.person.name }}, {{ getAge($store.state.person.age) }}
        </span>
      </p>
    </div>
    <div class="children">
      <p class="title">Дети</p>
      <div class="flex-container">
        <div
          class="children-item"
          v-for="child in $store.state.children"
          :key="child.id"
        >
          {{ child.name }}, {{ getAge(child.age) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getAge(age) {
      const getExt = (n, str1, str2, str3) => {
        if (((n % 10) === 1) && ((n % 100) !== 11)) {
          return str1;
        }
        if ((((n % 10) >= 2) && ((n % 10) <= 4)) && (((n % 100) < 10) || ((n % 100) >= 20))) {
          return str2;
        }
        return str3;
      };
      const ext = getExt(age, 'год', 'года', 'лет');
      return `${age} ${ext}`;
    },
  },
};
</script>

<style scoped>
.container {
  width: 616px;
  align-content: center;
  display: inline-block;
}
.person {
  margin-bottom: 60px;
}
.title {
  margin: 0 0 20px 0;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #111111;
}
.person-item {
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}
.flex-container {
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.children-item {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  background-color: #F1F1F1;
}
</style>
