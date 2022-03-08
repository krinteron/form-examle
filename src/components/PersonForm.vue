<template>
  <div class="container">
    <div class="person">
      <p class="title">Персональные данные</p>
      <div class="input-form flex-container">
        <div
          class="input-form-item input-name"
          :class="errors.person && !errors.person.name && 'invalid'"
        >
          <label for="name">
            <p class="input-label">Имя</p>
            <input
              v-model="personData.name"
              class="input"
              type="text"
              id="name"
            />
          </label>
        </div>
        <div
          class="input-form-item input-age"
          :class="errors.person && !errors.person.age && 'invalid'"
        >
          <label for="age">
            <p class="input-label">Возраст</p>
            <input
              v-model="personData.age"
              class="input"
              type="number"
              id="age"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="children">
      <div class="flex-container title-wrapper">
        <span class="">Дети (макс. 5)</span>
        <button
          class="add-btn flex-container"
          :class="(Object.keys(childrenData).length > 4) && 'hidden'"
          @click="addChild"
        >
          <span class="plus-wrapper">
            <div class="plus-horizontal"></div>
            <div class="plus-vertical"></div>
          </span>
          <span class="add-btn-label">Добавить ребенка</span>
        </button>
      </div>
      <div class="input-form flex-container">
        <div
          class="flex-container children-wrap"
          v-for="child in childrenData"
          :key="child.id"
        >
          <div
            class="input-form-item input-name"
            :class="errors[child.id] && !errors[child.id].name && 'invalid'"
          >
            <label for="name">
              <p class="input-label">Имя</p>
              <input
                v-model="childrenData[child.id].name"
                class="input"
                type="text"
                id="name"
              />
            </label>
          </div>
          <div
            class="input-form-item input-age"
            :class="errors[child.id] && !errors[child.id].age && 'invalid'"
          >
            <label for="age">
              <p class="input-label">Возраст</p>
              <input
                v-model="childrenData[child.id].age"
                class="input"
                type="number"
                id="age"
              />
            </label>
          </div>
          <a href="#" class="remove-btn" @click="delete childrenData[child.id]">Удалить</a>
        </div>
      </div>
    </div>
    <div class="save-btn-wrapper">
      <button class="save-btn" @click="saveForm">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personData: {},
      childrenData: {},
      errors: {},
      newData: {},
    };
  },
  beforeMount() {
    this.importData();
  },
  methods: {
    importData() {
      this.personData = JSON.parse(JSON.stringify(this.$store.state.person));
      this.childrenData = JSON.parse(JSON.stringify(this.$store.state.children));
    },
    addChild() {
      const id = Math.random().toString(16).slice(2);
      const newChild = {
        id,
        name: '',
        age: '',
      };
      this.childrenData[id] = newChild;
    },
    validate() {
      this.errors = {};
      this.newData = {};
      Object.values(this.childrenData)
        .forEach((child) => {
          if (child.name && child.age) this.newData[child.id] = child;
          if (!child.name && !child.age) return;
          if (!child.name || !child.age) {
            this.errors[child.id] = { ...child };
          }
        });
      if (!this.personData.name || !this.personData.age) {
        this.errors.person = { ...this.personData };
      }
    },
    saveForm() {
      this.validate();
      if (!Object.keys(this.errors).length) {
        this.$store.commit('saveForm', {
          personData: this.personData,
          childrenData: this.newData,
        });
        this.importData();
      }
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
  margin-bottom: 33px;
}
.children {
  margin-bottom: 30px;
}
.title {
  margin: 0 0 20px 0;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #111111;
}
.flex-container {
  display: flex;
  justify-content:space-between;
}
.input-form {
  flex-direction: column;
  gap: 10px;
}
.input-form-item {
  box-sizing: border-box;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  height: 56px;
  padding: 6px 16px;
  text-align: left;
}
.children
.input-form-item {
  width: 260px;
}
.input-label {
  display: inline-block;

  font-size: 13px;
  color: #1111117A;
  margin: 2px 0;
}
.input {
  box-sizing: border-box;
  width: 100%;
  height: 24px;
  border: none;
  outline: none;

  font-size: 14px;
  line-height: 24px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.remove-btn {
  min-width: 60px;
  margin: auto 0;

  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  color: #01A7FD;
}
.title-wrapper {
  align-items: center;
}
.add-btn {
  box-sizing: border-box;
  color: #01A7FD;
  text-align: center;
  margin-bottom: 11px;
  padding: 8px 18px;
  border: 2px solid #01A7FD;
  border-radius: 100px;
  font-size: 14px;
  line-height: 24px;
  background: none;
}
.add-btn-label {
  min-width: 136px;
}
.plus-wrapper {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
.plus-horizontal {
  position: relative;
  top: 11px;
  left: 4px;
  height: 2px;
  width: 16px;
  background-color: #01A7FD;
  border-radius: 138.148px;
}
.plus-vertical {
  position: relative;
  left: 11px;
  top: 2px;
  height: 16px;
  width: 2px;
  background-color: #01A7FD;
  border-radius: 138.148px;
}
.hidden {
  visibility: hidden;
}
.save-btn-wrapper {
  text-align: left;
}
.save-btn {
  min-width: 78px;
  background: #01A7FD;
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
button {
  cursor: pointer;
}
button:hover {
  opacity: 0.7;
}
button:active {
  opacity: 1;
}
.invalid {
  border: 2px solid red;
}
</style>
