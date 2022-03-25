<template>
  <div class="container">
    <div>
      <div class="addForm">

        <label for="name">
          <span>Имя:</span>
          <input type="text" placeholder="введите имя" id="name" class="no-border"/>
        </label>
        <label for="surname">
          <span>Фамилия:</span>
          <input type="text" placeholder="введите фамилия" id="surname" class="no-border"/>
        </label>
        <label for="middle">
          <span>Отчество:</span>
          <input type="text" placeholder="введите отчество" id="middle" class="no-border"/>
        </label>
        <label for="phone">
          <span>Телефон:</span>
          <input type="text" placeholder="введите телефон" id="phone" class="no-border"/>
        </label>
        <label for="email">
          <span>Email:</span>
          <input type="text" placeholder="введите email" id="email" class="no-border"/>
        </label>
        <label for="date">
          <span>День рождения:</span>
          <input type="text" placeholder="введите день рождения" id="date" class="no-border"/>
        </label>

        <label for="photo" id="photoLabel">
          <span>Фото:</span>
          <i></i>
          <input type="file" id="photo"/>
        </label>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "UserAdd"
}
</script>
