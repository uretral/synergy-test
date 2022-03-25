
<template>
  <label class="form-item">
    <span>{{label}}:</span>
    <input type="text"
           class="no-border"
           :value="value"
           :disabled="disabled"
           :placeholder="placeholder"
           @focusout="$emit('focusout', $event.target.value)"/>
  </label>
</template>

<script>
export default {
  name: "InputText",
  props: ['label','placeholder','disabled','value'],
  model: {
    prop:'value',
    event: 'focusout'
  }
}
</script>
