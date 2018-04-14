export default class Node {

    private left: Node;
    private right: Node;
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    //dirty recursion
    public addNode(n: Node): void {
        if(n.value < this.value) {
            if(!this.left) {
                this.left = n;
            } 
            this.left.addNode(n);
        } else if (n.value > this.value) {
            if(!this.right) {
                this.right = n;
            } 
            this.right.addNode(n)   
        }
    }

    public visit(): void {
        if(this.left) {
            this.left.visit();
        }
        console.log(this.value);
        if(this.right){
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
}