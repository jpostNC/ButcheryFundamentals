//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("Halibut", "Halibut"));
    AddNewDraggableObject(new DraggableObject("HalibutWrong", "HalibutWrong"));

    //AddNewDraggableObject(new DraggableObject("Blender", "Blender"));


    FinalizeItems("Game_Fish.glb", "empty_warehouse_01_1k copy.hdr", "FishGame", "Drop the Halibut in its natural waters, is it fresh or saltwater"); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();

 
    const light = new THREE.AmbientLight( 0xFFFFFF, .05 ); // soft white light
    AddLight(light);

    const overHeadLight = new THREE.PointLight(0xFFFFFF, 0, 0);
    overHeadLight.position.set(0, 300, 0);
    AddLight(overHeadLight);

    const topLight = new THREE.PointLight(0xFFFFFF, 0, 0);
    topLight.position.set(-350, 0, 0);
    AddLight(topLight);

    const bottomLight = new THREE.PointLight(0xFFFFFF, 0, 0);
    bottomLight.position.set(350, 0, 0);
    AddLight(bottomLight);

    const leftLight = new THREE.PointLight(0xFFFFFF, 1, 0);
    leftLight.position.set(0, 0, 250);
    AddLight(leftLight);

    const rightLight = new THREE.PointLight(0xFFFFFF, 0, 0);
    rightLight.position.set(0, 0, -250);
    AddLight(rightLight);

    const belowLight = new THREE.PointLight(0xFFFFFF, 0, 0);
    belowLight.position.set(0, -300, 0);
    AddLight(belowLight);
}