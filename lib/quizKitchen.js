//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("Pipe", "Pipe", 0));
    AddNewDraggableObject(new DraggableObject("Auger", "Auger", 1));
    AddNewDraggableObject(new DraggableObject("Blade", "Blade", 2));
    AddNewDraggableObject(new DraggableObject("Disc", "Disc", 3));
    AddNewDraggableObject(new DraggableObject("Cap", "Cap", 4));
    AddNewDraggableObject(new DraggableObject("Tray", "Tray", 5));

    //AddNewDraggableObject(new DraggableObject("Blender", "Blender"));


    FinalizeItems("Game_Blender2.glb", "empty_warehouse_01_1k copy.hdr", "BlenderGame", "Assemble the pieces in the correct order"); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();

    const light = new THREE.AmbientLight( 0xFFFFFF, 100 ); // soft white light
    AddLight(light);

    const overHeadLight = new THREE.PointLight(0xffffff, 10, 500);
    overHeadLight.position.set(0, 300, 0);
    AddLight(overHeadLight);

    const topLight = new THREE.PointLight(0xfff8eb, 0, 400);
    topLight.position.set(-350, 0, 0);
    AddLight(topLight);

    const bottomLight = new THREE.PointLight(0xc6e4ff, 0, 400);
    bottomLight.position.set(350, 0, 0);
    AddLight(bottomLight);

    const leftLight = new THREE.PointLight(0xc6e4ff, 25, 300);
    leftLight.position.set(0, 0, 250);
    AddLight(leftLight);

    const rightLight = new THREE.PointLight(0xc6e4ff, 13, 300);
    rightLight.position.set(0, 0, -250);
    AddLight(rightLight);

    const belowLight = new THREE.PointLight(0xc6e4ff, 0, 450);
    belowLight.position.set(0, -300, 0);
    AddLight(belowLight);
}