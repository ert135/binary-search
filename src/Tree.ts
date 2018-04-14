import Node from './Node';

export default class Tree {
    private root: Node = null;

    constructor() {

    }

    public add(number: number) : void {
        let n = new Node(number);
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
}