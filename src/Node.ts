import * as R from 'ramda';

export default class Node {

    private left: Node;
    private right: Node;
    private value: number;
    private position: p5.Vector;
    private parent: Node;
    public level: number;

    constructor(value: number, position: p5.Vector) {
        this.value = value;
        this.position = position;
    }

    public setPosition(vector: p5.Vector) {
        this.position = vector;
    }

    public addNode(n: Node, seperationFactor: number, level: number): void {
        level = level + 1;
        console.log('Seperation factor being passed is ', seperationFactor, level);
        // console.trace()
        if(n.value < this.value) {
            if(!this.left) {
                n.level = level;
                n.parent = this;
                this.left = n;
                this.left.position = new p5.Vector(this.position.x - seperationFactor, this.position.y + 100)
                return;
            }
            this.left.addNode(n, seperationFactor-(seperationFactor/level), level);
        } else if (n.value > this.value) {
            if(!this.right) {
                n.level = level;
                n.parent = this;
                this.right = n;
                this.right.position = new p5.Vector(this.position.x + seperationFactor, this.position.y + 100)
                return;
            }
            this.right.addNode(n, seperationFactor-(seperationFactor/level), level)
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
            if(this.left.parent){
                line(this.position.x, this.position.y, this.left.position.x, this.left.position.y)
            }
            this.left.draw();
        }
        if(this.right) {
            if(this.right.parent) {
                line(this.position.x, this.position.y, this.right.position.x, this.right.position.y)
            }
            this.right.draw();
        }
    }

    public getDepth(node: Node, number: number): number {
        if(!node) {
            return number
        }
        return max([this.getDepth(node.left, number+1), this.getDepth(node.right, number+1)])
    }

    public getNodeArray(node: Node, nodeArray: Array<any>): Array<Node> {
        nodeArray.push(node);
        if (node.left) {
            node.left.getNodeArray(node.left, nodeArray);
        }
        if (node.right) {
            node.right.getNodeArray(node.right, nodeArray);
        }

        return nodeArray;
    }

    public drawInOrder(nodes: Array<Node>) {
        return R.sortBy(R.prop('level'), nodes);
    }

    private drawLevel(nodes: Array<Node>) {

    }
}
