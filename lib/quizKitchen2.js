//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score, 2);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("KnifeFish", "KnifeFish"));
    AddNewDraggableObject(new DraggableObject("KnifeFishMeatWrong", "KnifeFishMeatWrong"));
    AddNewDraggableObject(new DraggableObject("KnifeFishRabbitWrong", "KnifeFishRabbitWrong"));

    //AddNewDraggableObject(new DraggableObject("Blender", "Blender"));


    FinalizeItems("Game_Orientation2.glb", "empty_warehouse_01_1k copy.hdr", "OrientationGame", "Match the knife to the protein it is designed for"); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();

    const light = new THREE.AmbientLight( 0xFFFFFF, 1.2 ); // soft white light
    AddLight(light);

}
