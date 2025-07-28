class Circle{
    constructor(radius){
        this._radius = radius

    }
    get area(){
        return Math.PI *(this._radius**2)
    }
    set radius(r){
        this._radius = r

    }
}

const c1 = new Circle(10)
console.log(c1.area)
c1.radius = 10
console.log(c1.are)