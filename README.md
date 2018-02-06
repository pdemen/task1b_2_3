# task1b_2_3
Приложение на node.js. 
## Задание 1б:
### При запуске приложения включается веб-сервер, которому можно передать путь к директории (через GET или POST запрос), приложение в ответ возвращает список файлов и их размер в формате JSON.

## Задание 2:
### Создайте браузерное приложение (страницу) c HTML полем ввода для указания пути и кнопкой, по нажатию которой, к приложению на node.js из предыдущего задания будет сделан запрос - ответ должен появится под кнопкой в виде HTML таблицы с двумя столбцами - с названием и размером файла.

Для заданий 1б, 2 используются файлы /views/index.pug и /views/filelist.pug для генерации HTML-страниц, а также файлы /routes/index.js и /routes/users.js для реализации логики работы приложения.

`res.send(JSON.stringify(jsonbuf));` - для задания 1б

`res.render("filelist", {
       title: "File list view",
       response: jsonbuf
     })` - для задания 2
     
## Задание 3:
### Написать такой запрос (один), который вернет фасет по моделям самолетов (model) и количеству полетов (flights). Для этого Нужно использовать данные из таблиц flights и aircrafts_data.

Запрос реализован в файле task3.sql. С помощью SQL-запроса создается виртуальная таблица count_flight.
