<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Редактирования голосования</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="title-name" class="col-form-label">Название опроса:</label>
              <input type="text" class="form-control" id="title-name">
            </div>
            <div class="mb-3">
              <label for="title-name" class="col-form-label">Вопрос:</label>
              <textarea class="form-control area" id="floatingTextarea"></textarea>
            </div>
            <div class="mb-3">
              <label for="choice_count-name" class="col-form-label">Количество допустимых ответов:</label>
              <input type="number" class="form-control " id="choice_count-name" />
            </div>
            <div class="mb-3 d-flex flex-column">
              <label for="canvotersee-name" class="col-form-label">Может-ли голосующий видеть результат?:</label>
              <input type="checkbox"  id="canvotersee-name" />
            </div>
            <div class="mb-3 d-flex gap-2">
              <label for="date-text" class="col-form-label">Даты(старт/окончание):</label>
              <input type="date" />
              <input type="date" />
            </div>
            <div class="mb-3">
              <label for="bonus-name" class="col-form-label">Лидирующий вариант с показателем %:</label>
              <input type="number" class="form-control" id="bonus-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default mr-1" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary waves-effect waves-light">Редактировать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .area{
    resize: none;
  }
</style>

