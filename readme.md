Тестовое задание на позицию frontend developer

1. Необходимо отрисовать страницу. https://www.figma.com/file/3lj6aQtyOdmlsWIiDYHzyJ/Untitled?node-id=1-1062&t=KLmO8wyO6eYyGrC9-0
2. Необходино создать модальное окно. https://www.figma.com/file/3lj6aQtyOdmlsWIiDYHzyJ/Untitled?node-id=1-1224&t=KLmO8wyO6eYyGrC9-0
3. Запрос на получение картинок (По факту в задание не забочая api)
4. При нажатии на картинку можно оставить комментарий

Содержание:
Приложение запучкается только локо локально. При запуске происходит запрос за категориями.
При нажатии на нужную категорию, делаю GET запрос с подстановкой категории в запрос.
При нажатии на картинку открываем Модалку на основе Portal, в нее проспрами уходит ссылка на каринку.
Модалку можно закрыть нажав на delay(за приделы контента) или нажав кнопку "отправить".
Отправка происходит вейково (промис резолвится результатом ввода и в консоли будет видно результат через 2 сек).
На момент отправки блокируется кнопка.

НЕ использовал CRA, делал конфигурацию webpack с нуля, по webpack сделано минимум для запуска приложения
с typescript.
В рерстке придерживался макета. Но пришлось немного подстроиться под другую api.

Технологии:
- Typescript
- React
- Javascript
- scss
- Axios
- Webpack
- Babel

Начало работы:
- клонировать репозиторий 
- yarn 
- yarn start


