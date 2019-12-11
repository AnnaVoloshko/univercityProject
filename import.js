window.btn.onclick = function () {
    ImportExcel('C:\\test.xlsx');
}
 
function ImportExcel(path) {

    var app = new ActiveXObject("Excel.Application"),
        book = app.Workbooks.Open(path);
    //Если хотим увидеть эксель ставим 1 если нет 0
    //app.Visible = 1;
    // Тут через штатные свойства самого экселя, узнаем последнюю строку
    var rows = book.Sheets(1).Range("A:A").SpecialCells(11).Row  // 11 соответствует
    //Путь на лист обычно пишут так книга.лист(интедкс листа).Ячейка(x-ось,y-ось).значение
    var div = document.getElementById('test_div');

    for (var i = 1; i <= rows; i++) {
        //созжаем новый элемент
      var newElem = document.createElement('div');
//вообще по хорошему лучше вытащить массив, но мы просто будем обращаться по адресу
        newElem.innerText = book.Sheets(1).Cells(i, 1).Value;
        div.appendChild(newElem);
    }
    //Нужно закрыть файл, а то будет в памяти компьютера
    app.Quit();
}