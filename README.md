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

mongodb+srv://thien:thien@cluster0.zagj8b5.mongodb.net/?retryWrites=true&w=majority/ESTEC
mongodb+srv://ESTEC:ESTEC@cluster0.8zgf5nk.mongodb.net/?retryWrites=true&w=majority/Estec_intern_dev/Estec

  var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      label:'red',
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false,
    }, { 
      label:'green',
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      label:'blue',
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false,
    }]
  },
  options: {
    legend: {display: true,}
    
  }
});
