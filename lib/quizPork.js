//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("BonelessRack", "BonelessRack"));
    AddNewDraggableObject(new DraggableObject("BostonButt", "BostonButt"));
    //AddNewDraggableObject(new DraggableObject("Blender", "Blender"));


    FinalizeItems("Game_Pork.glb", "empty_warehouse_01_1k copy.hdr", "Game", "Place the cuts on the correct part of the anatomy"); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();
    const light = new THREE.AmbientLight( 0xFFFFFF, 1.4 ); // soft white light
    AddLight(light);
}
