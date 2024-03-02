const parseExcel = function (file) {
  var reader = new FileReader();
  var listReturn = [];

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });

    workbook.SheetNames.forEach(function (sheetName) {
      // Here is your object
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );
      if (XL_row_object) {
        listReturn = XL_row_object;
      }
      var json_object = JSON.stringify(XL_row_object);
    });
    return listReturn;
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };
  reader.readAsBinaryString(file);
};
