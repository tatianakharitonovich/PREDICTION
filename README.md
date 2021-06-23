# PREDICTION

https://tatianakharitonovich.github.io/PREDICTION/

Даннный проект выполнен по заданию:

На главной странице проекта: https://tachyon-analytics.com/
в блоке под текстом “Try our prediction services We have an accurate online customer retention prediction available for free” есть зелёная кнопка:
See how it works

Необходимо, чтобы по этой кнопке открывалась страница предсказания удержания  пользователей. Бек-энд часть, которая непосредственно строит предсказания, готова и доступна по адресу https://api.tachyon-analytics.com/predict
Бек-энд принимает на вход форму с данными, и отправляет назад имя файла с картинкой-результатом (или небольшую веб-страничку с этой картинкой). Бэк-энд не работает с любыми произвольно взятыми данными, может падать. Но мы гарантируем, что он будет работать с числами из примера ниже.

Итак, нужно разработать для этого фронт-енд, а именно:
1. Скопировать себе верстку главной страницы;
2. Добавить в неё следующий функционал. По нажатию на кнопку See how it works должно открыться окно на странице в котором есть:
Поле ввода, которая предлагает ввести проценты вернувшихся пользователей для когорты на 1й, 2й, 3й день и так далее, через пробел. Числа разделяются пробелами.
Например 43.68 26.013 17.73 13.112 10.21 8.20 6.3 5.24
Поле ввода в которое нужно ввести число последних дней для проверки предсказания, например, 3
Кнопка отправки данных.
3. По нажатию кнопки сабмита, данные в строковом формате отсылаются на сервер;
4. Сервер обрабатывает данные и возвращает имя файла с картинкой - результатом;
5. Картинка отображается, и пользователь имеет возможность сделать ещё два предсказания.

