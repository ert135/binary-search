import * as R from 'ramda';

import Node from './Node';

export default class Tree {
    private root: Node = null;
    private numberSeperationFactor: number;

    constructor(numberSeperationFactor: number) {
        this.numberSeperationFactor = numberSeperationFactor;
    }

    public add(number: number) : void {
        let n = new Node(number, new p5.Vector(window.innerWidth/2, 30));
        if(this.root === null) {
            this.root = n;
        } else {
            this.root.addNode(n, this.numberSeperationFactor, 1);
        }
    }

    public traverse(): void {
        this.root.visit();
    }

    public search(value: number): Node {
        return this.root.search(value)
    }

    public draw(treeHeight: number) {
        this.root.draw();
    }

    public getDepth() {
        return this.root.getDepth(this.root, 0);
    }

    public getNodeArray() : Array<Node> {
        return this.root.getNodeArray(this.root, []);
    }

    public sortTreeByLevel(nodes: Array<Node>) {
        return R.sortBy(R.prop('level'), nodes);
    }
}
