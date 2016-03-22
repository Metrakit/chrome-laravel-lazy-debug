
document.addEventListener('DOMContentLoaded', function () {

  var storage_key = "lld_" + location.hostname;

  if (localStorage.getItem(storage_key)) {
    $('#form-add').addClass('hide');
    $('#done').removeClass('hide');
  } else {
    $('#form-add').removeClass('hide');
    $('#done').addClass('hide');
  }

  $('#form-add').submit(function(e) {
    e.preventDefault();
    var project_path = $(this).find('.project_path').val();
    var local_path   = $(this).find('.local_path').val();
    if (project_path != "" && local_path != "") {
      var obj_storage  = {
        project_path : project_path,
        local_path : local_path
      };
      localStorage.setItem(storage_key, JSON.stringify(obj_storage));
      $('#form-add').addClass('hide');
      $('#done').removeClass('hide');
    }
  })

});
