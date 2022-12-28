<template>
  <tr class="text-columns">
    <th class="title-responsive">
      <!-- <img :src="require($store.state.forms.logo)" /> -->
    </th>
    <th class="title-responsive">{{ $store.state.forms.name }}</th>
    <th class="title-responsive">{{ $store.state.forms.starts_at }} / {{ $store.state.forms.ends_at }}</th>
    <th class="title-responsive">{{ $store.state.forms.bonus }}</th>
    <th>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
        <ul class="dropdown-menu">
          <li v-for="items in $store.state.edit" :key="items.id">
            <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ items.title }}</button>
          </li>
        </ul>
      </div>
    </th>
  </tr>
</template>

<script>

</script>

<style scoped>
  .text-columns{
    text-align: center;
  }
  .v-select{
    position: relative;
    width: 200px;
  }
  .options{
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .options > button {
    font-size: 14px;
  }
  @media screen and (max-width: 768px){
 .title-responsive{
  font-size: 12px;
 }
}
</style>