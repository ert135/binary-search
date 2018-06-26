import * as R from 'ramda';

export default class Node {

    private left: Node;
    private right: Node;
    private value: number;
    private position: p5.Vector;
    private parent: Node;
    private level: number;

    constructor(value: number, position: p5.Vector) {
        this.value = value;
        this.position = position;
    }

    public setPosition(vector: p5.Vector) {
        this.position = vector;
    }

    public addNode(n: Node, seperationFactor: number, level: number): void {
        this.parent = n;
        n.level = level

        if(n.value < this.value) {
            if(!this.left) {
                this.left = n;
            }
            this.left.addNode(n, seperationFactor+30, level+1);
        } else if (n.value > this.value) {
            if(!this.right) {
                this.right = n;
            }
            this.right.addNode(n, seperationFactor+30, level+1)
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
        return max([this.getDepth(node.left, number+1), this.getDepth(node.right, number+1)])
    }

    public getNodeArray(node: Node, nodeArray: Array<any>): Array<Node> {
        nodeArray.push(node);
        if (node.left) {
            console.log('Here is ', node.left.getNodeArray(node.left, nodeArray));
            node.left.getNodeArray(node.left, nodeArray);
        }
        if (node.right) {
            console.log('Right is ', node.right.getNodeArray(node.right, nodeArray))
            node.right.getNodeArray(node.right, nodeArray);
        }

        // return nodeArray
    }

    public drawInOrder(nodes: Array<Node>) {
        return R.sortBy(R.prop('level'), nodes);
    }

    private drawLevel(nodes: Array<Node>) {

    }
}
