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
const numberSeperationFactor = 20;

let setup = function() {
    tree = new Tree(numberSeperationFactor);
    tree.add(500);
    tree.getDepth();
    const depth = tree.getDepth();
    for(var i = 0; i < 150; i++){
        tree.add(Math.floor((Math.random() * 10000) + 1))
    }
    tree.setPositions(tree.getDepth());
    console.log(tree);
    createCanvas(3000, window.innerHeight);
    console.log('treedepth is ', tree.getDepth());
    console.log('Node array is ', tree.sortTreeByLevel(tree.getNodeArray()));
    console.log('initial seperation factor is ', tree.getInitialSeperationFactor());
}

let draw = function() {
    tree.draw();
}

window.setup = setup;
window.draw = draw;
