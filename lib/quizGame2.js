//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score, 2);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("Bacon", "Bacon"));
    AddNewDraggableObject(new DraggableObject("Cheese", "Cheesee"));
    AddNewDraggableObject(new DraggableObject("Lettuce", "Lettuce"));


    FinalizeItems("Rabbit_Game01.glb", "empty_warehouse_01_1k copy.hdr", "Game", "In order to bard this rabbit farce, drag on the item you would use to add flavour and moistness for roasting."); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();
    const light = new THREE.AmbientLight( 0xFFFFFF, 1.1 ); // soft white light
    AddLight(light);
}
