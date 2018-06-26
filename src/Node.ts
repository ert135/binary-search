import * as R from 'ramda';

export default class Node {

    private left: Node;
    private right: Node;
    private value: number;
    private position: p5.Vector;
    private parent: Node;

    constructor(value: number, position: p5.Vector) {
        this.value = value;
        this.position = position;
    }

    public setPosition(vector: p5.Vector) {
        this.position = vector;
    }

    public addNode(n: Node, seperationFactor: number): void {
        this.parent = n;

        if(n.value < this.value) {
            if(!this.left) {
                this.left = n;
            }
            this.left.addNode(n, seperationFactor+30);
        } else if (n.value > this.value) {
            if(!this.right) {
                this.right = n;
            }
            this.right.addNode(n, seperationFactor+30)
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

    public getDepth(node: Node, number: number): any {
        if(!node) {
            return number
        }
        // if(!node.left && !node.right) {
        //     return -1;
        // }
        // console.log('value is ', node.value, {
        //     left: node.left,
        //     right: node.right

        // })
        return max([this.getDepth(node.left, number+1), this.getDepth(node.right, number+1)])
    }

    private drawLevel(nodes: Array<Node>) {

    }

    private drawInOrder(nodes: Array<Node>) {
        return R.sortBy(R.prop('silver'), array);
    }
}
