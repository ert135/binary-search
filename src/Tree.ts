import Node from './Node';

export default class Tree {
    private root: Node = null;

    constructor() {

    }

    public add(number: number) : void {
        let n = new Node(number, new p5.Vector(window.innerWidth/2, 30));
        if(this.root === null) {
            this.root = n;
        } else {
            this.root.addNode(n);
        }
    }

    public traverse(): void {
        this.root.visit();
    }

    public search(value: number): Node {
        return this.root.search(value)
    }

    public draw() {
        this.root.draw();
    }

    public getDepth() {
        console.log('height is ', this.root.getDepth(this.root))
        this.root.getDepth(this.root);
    }
}
