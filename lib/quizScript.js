import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { TextureLoader, Vector3 } from 'three';

let container;
let camera, scene, renderer;
let controls, group;
let enableSelection = false;

let particlesArray = [];

let totalScoreCount = 3;

const objects = [];
const draggableObjectTypes = [];

const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();

let sound;

let hasLocatedModel = false;

let currentDragOrder = 0;

let currentScore;

let currentQuestionIndex;

export class DraggableObject {
    constructor(_ModelName, _DisplayName, _DragOrder = -1) {
        this.modelName = _ModelName;
        this.displayName = _DisplayName;
        this.dragOrder = _DragOrder;
        this.originalPosition;
        this.targetPosition = [];

        this.isDragGoalOnly = false;

        this.hasNoDragGoal = false;


        this.draggableMeshObject;


        this.isHeld = false;
        this.wasHeld = false;
        this.hasBeenDraggedToLocation = false;

        this.markerObject = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshLambertMaterial({ color: 0x09C618 }));

        /*this.markerObject.position.x = new THREE.Vector3(100, 70, -200).x;
        this.markerObject.position.y = new THREE.Vector3(100, 70, -200).y;
        this.markerObject.position.z = new THREE.Vector3(100, 70, -200).z;

        this.draggableMeshObject.position.x = new THREE.Vector3(-100, 70, -200).x;
        this.draggableMeshObject.position.y = new THREE.Vector3(-100, 70, -200).y;
        this.draggableMeshObject.position.z = new THREE.Vector3(-100, 70, -200).z;*/

        //GenerateText(_DisplayName,  this.markerObject, _ModelName);

        //_Scene.add(this.markerObject);
    }

    Init() {
        //Find the text generated, make that the clickable object
        let ObjectToDrag;
        let NameToFind = this.modelName

        let StartDragPos;
        let EndDragPos = [];

        let HasNoDragGoal = true;

        scene.traverse(function (child) {
            console.log(child.name);
            if (child.name == NameToFind) {
                //console.log(child.name);
                ObjectToDrag = child;
            }

            if (child.name == NameToFind + "_StartDragPos") {
                //console.log(child.name);
                StartDragPos = child.position;
            }

            if (child.name.includes(NameToFind + "_EndDragPos")) {
                //console.log(child.name);
                HasNoDragGoal = false;
                EndDragPos.push(child.position);
            }

        });

        this.draggableMeshObject = ObjectToDrag;
        this.originalPosition = StartDragPos;

        if(HasNoDragGoal){ //Give it crazy far value if not added
            this.hasNoDragGoal = true;
            EndDragPos.push(new Vector3(-5000, -5000, 0));
        }

        this.targetPosition = EndDragPos;


        if(this.draggableMeshObject != null){
            this.draggableMeshObject.position.x = StartDragPos.x;
            this.draggableMeshObject.position.y = StartDragPos.y;
            this.draggableMeshObject.position.z = StartDragPos.z;

            objects.push(this.draggableMeshObject);
        }else{
            this.isDragGoalOnly = true;
        }
    }

    //function to return bool if is within target range
    IsWithinRangeOfTarget() {
        if (!hasLocatedModel || this.hasNoDragGoal) {
            return false;
        }

        //console.log(this.draggableMeshObject.name + " " + this.targetPosition.distanceTo(this.draggableMeshObject.position));

        for (let i = 0; i < this.targetPosition.length; i++) { //Check all lengths in array
            if(this.targetPosition[i].distanceTo(this.draggableMeshObject.position) < 0.5){
                return true;
            }
        }

        return false;
    }

    IsIncorrect() {
        if(this.isDragGoalOnly){
            return false;
        }

        if(!this.IsWithinRangeOfTarget() && this.originalPosition.distanceTo(this.draggableMeshObject.position) > 1){ //Mkaes it incorrect if it is dragged randomly on screen, does not give incorrect if dragged into start position
            console.log(this.originalPosition.distanceTo(this.draggableMeshObject.position))
            return true;
        }

        if (this.dragOrder == -1) {
            for (let i = 0; i < draggableObjectTypes.length; i++) {
                if (draggableObjectTypes[i] != this) {
                    for (let j = 0; j < draggableObjectTypes[i].targetPosition.length; j++) {
                        if (draggableObjectTypes[i].targetPosition[j].distanceTo(this.draggableMeshObject.position) < 0.5) {
                            return true;
                        }
                    }                   
                }
            }
            return false;
        } else {
            if (this.IsWithinRangeOfTarget() && this.dragOrder != currentDragOrder) {
                return true;
            }
            return false;
        }

    }

    LerpToOrgPosition() {
        if (hasLocatedModel && !this.isDragGoalOnly) {
            this.draggableMeshObject.position.x = this.lerp(this.draggableMeshObject.position.x, this.originalPosition.x, 0.05);
            this.draggableMeshObject.position.y = this.lerp(this.draggableMeshObject.position.y, this.originalPosition.y, 0.05);
        }
    }

    LerpToTargetPosition() {
        if (hasLocatedModel && !this.isDragGoalOnly) {
            let ClosestTarget = this.targetPosition[0];
            for (let i = 0; i < this.targetPosition.length; i++) {
                if(this.targetPosition[i].distanceTo(this.draggableMeshObject.position) < ClosestTarget.distanceTo(this.draggableMeshObject.position)){
                    ClosestTarget = this.targetPosition[i];
                }
            }

            this.draggableMeshObject.position.x = this.lerp(this.draggableMeshObject.position.x, ClosestTarget.x, 0.05);
            this.draggableMeshObject.position.y = this.lerp(this.draggableMeshObject.position.y, ClosestTarget.y, 0.05);
        }
    }

    lerp(start, end, amt) {
        return (1 - amt) * start + amt * end
    }

    RotateModel(){
        if(!this.isDragGoalOnly){
            this.draggableMeshObject.rotation.y += 0.005;
        }
    }
    
    SnapToZeroRoation(){
        if(!this.isDragGoalOnly){
            this.draggableMeshObject.rotation.y = 0;
        }
    }
}

export function SetScore(_Score, _CurrentQuestionIndex = 1){
    currentScore = _Score;
    currentQuestionIndex = _CurrentQuestionIndex;

    //DisplayScoreValue(currentScore);
    document.getElementById("TopTextRight").textContent = "Question: " + _CurrentQuestionIndex + "/10";
}

export function AddLight(_Light) {
    scene.add(_Light);
}

export function AddDefaultLights(_Light) {
    const overHeadLight = new THREE.PointLight(0xf7f5ba, 20, 900);
    overHeadLight.position.set(0, 300, 0);
    AddLight(overHeadLight);

    const topLight = new THREE.PointLight(0xebd19b, 12, 400);
    topLight.position.set(-350, 0, 0);
    AddLight(topLight);

    const bottomLight = new THREE.PointLight(0xebd19b, 8, 400);
    bottomLight.position.set(350, 0, 0);
    AddLight(bottomLight);

    const leftLight = new THREE.PointLight(0xebd19b, 8, 300);
    leftLight.position.set(0, 0, 250);
    AddLight(leftLight);

    const rightLight = new THREE.PointLight(0xebd19b, 8, 300);
    rightLight.position.set(0, 0, -250);
    AddLight(rightLight);

    const belowLight = new THREE.PointLight(0xebd19b, 8, 450);
    belowLight.position.set(0, -300, 0);
    AddLight(belowLight);
}

class Particle {
    constructor() {
        let Colors = [0xff0000, 0x00ff00, 0x00ff, 0xfff000];
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0);
        const material = new THREE.MeshBasicMaterial({ color: Colors[THREE.MathUtils.randInt(0, Colors.length - 1)] }); //Pick random color
        const cube = new THREE.Mesh(geometry, material);

        cube.position.x = THREE.MathUtils.randFloat(-7.5, 7.5);
        cube.position.y = THREE.MathUtils.randFloat(5, 10);

        this.fallSpeed = THREE.MathUtils.randFloat(0.025, 0.05);
        this.rotationXSpeed = THREE.MathUtils.randFloat(0.05, 0.1);

        this.ParticleMesh = cube;
        scene.add(cube);
    }

    Update() {
        this.ParticleMesh.position.y -= this.fallSpeed;
        this.ParticleMesh.rotation.x += this.rotationXSpeed;
    }
}


export function FinalizeItems(_NameOfModelToLoad, _SkyboxToLoad, _CameraLocator, _InstructionsText) {
    document.getElementById("BottemTextLeft").textContent = _InstructionsText;
    UpdateMistakeDisplay();
    container = document.getElementById("webGLembed");

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);

    const listener = new THREE.AudioListener();
    camera.add(listener);
    sound = new THREE.Audio(listener);


    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb0b0b0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.shadowMap.enabled = true;
    //renderer.toneMapping = THREE.ACESFilmicToneMapping;
    //renderer.toneMappingExposure = 1;
    //renderer.outputEncoding = THREE.sRGBEncoding;
    //renderer.domElement.width = "100%";
    //renderer.domElement.height = "100%";

    container.appendChild(renderer.domElement);

    LoadModel(_NameOfModelToLoad, _SkyboxToLoad, _CameraLocator);


    //controls.addEventListener( 'drag', render );

    //

    window.addEventListener('resize', onWindowResize);
    // Force renderer resizing once
	onWindowResize();
    //document.addEventListener( 'click', onClick );

    //const light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
    //scene.add( light );

    console.log('done finalizing');

    console.log(draggableObjectTypes, 'types')
    animate();
    render();
    console.log(scene, 'scene')
}

export function AddNewDraggableObject(_DraggableObject) {
    draggableObjectTypes.push(_DraggableObject);
}

function onWindowResize() {
    camera.aspect = (container.clientWidth / container.clientHeight);
    camera.fov = camera.aspect < 1.3 ? 100 : 70; //For mobile
    //console.log(camera.fov);
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function LoadModel(_NameOfModelToLoad, _SkyboxToLoad, _CameraLocator) {

                const loader = new GLTFLoader();
                loader.load("/" +_NameOfModelToLoad, function (gltf) {

                        scene.add(gltf.scene);

                        gltf.scene.traverse(function (child) {
    
                            if (child.isSkinnedMesh) child.castShadow = true;
                        });
    
                        scene.traverse(function (child) {
                            console.log(child.name);
                        });

                    for (let i = 0; i < draggableObjectTypes.length; i++) {
                        draggableObjectTypes[i].Init();
                    }

                    scene.traverse(function (child) {
                        if (child.name == _CameraLocator + "_CameraLocator") {
                            camera.position.x = child.position.x;
                            camera.position.y = child.position.y;
                            camera.position.z = child.position.z;

                            camera.rotation.x = child.rotation.x;
                            camera.rotation.y = child.rotation.y;
                            camera.rotation.z = child.rotation.z;
                        }
                    });

                    hasLocatedModel = true;

                    MakeNewDragControls(objects);

                    /*draggableObjectTypes.push(new DraggableObject("Leg", "Leg", new THREE.Vector3(-100, 70, -200), new THREE.Vector3(100, 70, -200), scene));
                    draggableObjectTypes.push(new DraggableObject("Crown", "Crown", new THREE.Vector3(-100, 0, -200), new THREE.Vector3(100, 0, -200), scene));
                    draggableObjectTypes.push(new DraggableObject("Drumstick", "Drumstick", new THREE.Vector3(-100, -70, -200), new THREE.Vector3(100, -70, -200),  scene));
            
                    let ObjectNotPartOfTest = ["Chicken", "BreastWing", "FrenchedBreast", "Wing", "Wingette", "WingTip", "Tender", "LegsBack", "FrenchedDrumstick"];
                    
                    MakeNewDragControls(objects);
            
                    scene.traverse(function(child) {
                            for (let i = 0; i < ObjectNotPartOfTest.length; i++) {
                                if(ObjectNotPartOfTest[i] == child.name){
                                    child.visible = false;
                                }
                            }
                        });*/

                });


}



function MakeNewDragControls(_ListOfObjects) {
    /*for (let i = 0; i < _ListOfObjects.length; i++) {
        console.log(_ListOfObjects[i]);
    }*/

    controls = new DragControls([..._ListOfObjects], camera, renderer.domElement);

    controls.addEventListener('dragstart', function (event) {
        console.log("Start Drag " + event.object.name);
        SetIfHeld(event.object, true);
    });

    controls.addEventListener('dragend', function (event) {
        console.log("Finish Drag " + event.object.name);
        SetIfHeld(event.object, false);
    });
}

function SetIfHeld(_Object, _IsHeld) {
    for (let i = 0; i < draggableObjectTypes.length; i++) {
        if (draggableObjectTypes[i].draggableMeshObject == _Object) {
            draggableObjectTypes[i].wasHeld = draggableObjectTypes[i].isHeld;
            draggableObjectTypes[i].isHeld = _IsHeld;
        }
    }
}

function GetCurrentScollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

/*function DisplayScoreValue(_ScoreToDisplay){
    document.getElementById("TopTextLeft").textContent = "Score: " + _ScoreToDisplay + "/14";
}*/

async function OnQuizComplete() { 
    SpawnCelebrationParticles();
    let DisplayScore = currentScore + totalScoreCount;
    //DisplayScoreValue(DisplayScore);

    console.log("QUIZ COMPLETE");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("s", currentScore); // USE SCORE HERE
    urlencoded.append("as", totalScoreCount); // USE additonal SCORE HERE
    const requestOptions = { 
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    await fetch("/api/completeModule", requestOptions)

}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    if (hasLocatedModel) {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].Update();
        }

        for (let i = 0; i < draggableObjectTypes.length; i++) {
            if (!draggableObjectTypes[i].isHeld) {
                let WasCorrect;
                if (draggableObjectTypes[i].wasHeld && draggableObjectTypes[i].IsWithinRangeOfTarget() && !draggableObjectTypes[i].hasBeenDraggedToLocation) {

                    if (draggableObjectTypes[i].dragOrder == -1 || (draggableObjectTypes[i].dragOrder != -1 && draggableObjectTypes[i].dragOrder == currentDragOrder)) {
                        if (draggableObjectTypes[i].dragOrder != -1) {
                            currentDragOrder++;
                        }

                        PlaySound('/audio/CorrectAnswer.wav');
                        WasCorrect = true;
                        draggableObjectTypes[i].hasBeenDraggedToLocation = true;

                        //If in position, remove object from array and make new drag class
                        let ObjectsNotDraggedYet = [];
                        for (let j = 0; j < draggableObjectTypes.length; j++) {
                            if (!draggableObjectTypes[j].hasBeenDraggedToLocation && !draggableObjectTypes[j].isDragGoalOnly && !draggableObjectTypes[j].hasNoDragGoal) {
                                ObjectsNotDraggedYet.push(draggableObjectTypes[j].draggableMeshObject);
                            }
                        }


                        if (ObjectsNotDraggedYet.length == 0) {
                            OnQuizComplete();
                        }

                        console.log("Count" + controls.getObjects.length);

                        //objects = ObjectsNotDraggedYet;

                        controls.dispose();

                        MakeNewDragControls(ObjectsNotDraggedYet);
                    }
                }

                if (draggableObjectTypes[i].wasHeld) { //Is contained within !draggableObjectTypes[i].isHeld check 
                    if (draggableObjectTypes[i].IsIncorrect() && !WasCorrect) { //Only if was just held
                        totalScoreCount--;
                        if(totalScoreCount<0)
                            totalScoreCount = 0;
                        PlaySound('/audio/IncorrectAnswer.wav');
                        //console.log("incorrect" + totalScoreCount);
                        UpdateMistakeDisplay();
                    }
                    draggableObjectTypes[i].wasHeld = false; // to reset
                }


                if (!draggableObjectTypes[i].hasBeenDraggedToLocation) {
                    if (!draggableObjectTypes[i].isHeld) {
                        draggableObjectTypes[i].LerpToOrgPosition();
                    }
                    //draggableObjectTypes[i].RotateModel(); //For now disable rotation
                } else {
                    if (!draggableObjectTypes[i].isHeld) {
                        draggableObjectTypes[i].LerpToTargetPosition();
                    }
                    draggableObjectTypes[i].SnapToZeroRoation();
                }

            }
        }
    }

    render();
    requestAnimationFrame(animate);
}

function UpdateMistakeDisplay() {
    document.getElementById("TopTextLeft").textContent = "Section Score: " + totalScoreCount;
}

function PlaySound(_SoundFileLocation) {
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(_SoundFileLocation, function (buffer) {
        if (sound.isPlaying) {
            sound.stop();
        }
        sound.setBuffer(buffer);
        sound.play();
    });
}

function SpawnCelebrationParticles() {
    for (let i = 0; i < 500; i++) {
        particlesArray.push(new Particle());
    }
}
