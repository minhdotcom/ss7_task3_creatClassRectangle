var rectangleClass = function (width, height){
    this.getWidth = width;
    this.getHeight = height;
    this.setWidth = function () {
        width = Number(prompt("Nhap chieu dai"));
    }
    this.setHeight = function(){
        height = Number(prompt("Nhap chieu rong"));
    }
    this.area = function () {
        return width * height;
    }
    this.chuvi = function () {
        return (width + height) * 2;
    }
    this.display = function () {
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.moveTo(width, 0);
        ctx.lineTo(width, height);
        ctx.moveTo(width, height);
        ctx.lineTo(0, height)
        ctx.moveTo(0, height);
        ctx.lineTo(0, 0);
        ctx.stroke();
    }
}

// rectangleClass.prototype.area = function(){
//     return this.width * this.height;
// }
// rectangleClass.prototype.chuvi = function(){
//     return (this.width + this.height) * 2;
// }

var rectangle1 = new rectangleClass (200,100);
rectangle1.display();
rectangle1.setWidth();
rectangle1.setHeight();
var area1 = rectangle1.area();
var chuvi1 = rectangle1.chuvi();
alert(area1 + " " + chuvi1);

