class TargetingSolution {
    constructor({x, y, z}) {
        this.x = x;
        this.y = y;
        this.z = z;
        }

    target() {
        return '('+ this.x +', '+ this.y +', ' + this.z +')';
    }
}

const sln = new TargetingSolution({
    y: 10,
    x: 15,
    z: 900
  });
console.log(sln.target());