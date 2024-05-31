sử dụng ('express')
engine ('express-handlebars');
git add .
git commit -m "push code"
git push

// Router , controller
1/ route nhận biến app từ index main
2/ truyền vào folder Routes --> app vào index.js
3/ index.js dò tìm nếu đúng cái path thì dẫn tới file Router tương ứng
4/ file Router tương ứng dò các slug rồi dẫn đến file controller thực hiện các chức năng
