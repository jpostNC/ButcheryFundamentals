//import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import * as THREE from 'three';
import { Start, AddItem, AddNewDraggableObject, DraggableObject, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetScore   } from './quizScript.js';

export function InitGame(score){
    SetScore(score);
    //http://localhost:3000/
    AddNewDraggableObject(new DraggableObject("Lollipop", "Lollipop"));
    AddNewDraggableObject(new DraggableObject("Breast", "Breast"));
    AddNewDraggableObject(new DraggableObject("Leg", "Leg"));

    //AddNewDraggableObject(new DraggableObject("Blender", "Blender"));


    FinalizeItems("Game_Chicken.glb", "empty_warehouse_01_1k copy.hdr", "ChickenGame", "The Chef asks for a Lollipop, which item do you present? Place correct item in the centre of the cutting board"); //, "temp", "Reassemble Blender In Order"

    //AddDefaultLights();
 
  const light = new THREE.AmbientLight( 0xFFFFFF, .2 ); // soft white light
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
