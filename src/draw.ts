///<reference path='../p5-global-mode.d.ts'/>

import Node from './Node';
import Tree from './Tree';

//extend existing window property, we have to put the draw and setup functions of the global window object for p5 to work in global mode
declare global {
    interface Window { 
        setup: any;
        draw: any;
        mousePressed: any;
        mouseReleased: any;
        preload: any;
        mouseClicked: any;
        started: boolean;
    }
}

let tree : Tree;
let n: Node

let setup = function() {
    tree = new Tree();
    tree.add(5);
    tree.add(6);
    tree.add(12);
    tree.add(11);
    tree.add(3);
    console.log(tree);
    tree.traverse();
    let result = tree.search(3);
    console.log('Result is ', result);
}

let draw = function() {
}

window.setup = setup;
window.draw = draw;
