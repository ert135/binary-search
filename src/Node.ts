export default class Node {

    private left: Node;
    private right: Node;
    private value: number;
    private position: p5.Vector;

    constructor(value: number, position: p5.Vector) {
        this.value = value;
        this.position = position;
    }

    public setPosition(vector: p5.Vector) {
        this.position = vector;
    }

    //Recursion
    public addNode(n: Node): void {
        if(n.value < this.value) {
            n.setPosition(new p5.Vector(this.position.x-20, this.position.y + 30))
            if(!this.left) {
                this.left = n;
            }
            this.left.addNode(n);
        } else if (n.value > this.value) {
            n.setPosition(new p5.Vector(this.position.x+20, this.position.y + 30))
            if(!this.right) {
                this.right = n;
            }
            this.right.addNode(n)
        }
    }

    public visit(): void {
        if (this.left) {
            this.left.visit();
        }
        if (this.right) {
            this.right.visit();
        }
    }

    public search(number: number): Node {
        if(this.value === number) {
            return this;
        } else if (number < this.value && this.left) {
            return this.left.search(number);
        } else if (number > this.value && this.right) {
            return this.right.search(number);
        }

        return null;
    }

    public draw(): void {
        textSize(32);
        text(this.value.toString(), this.position.x, this.position.y);
        if(this.left) {
            this.left.draw();
        }
        if(this.right){
            this.right.draw();
        }
    }

    public getDepth(node: Node): number {
        if(!node.left && !node.right) {
            return -1;
        }
        return 1 + max([this.getDepth(node.left), this.getDepth(node.right)]);
    }
}
