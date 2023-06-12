import * as THREE from '../build/three.module.js';

//import Stats from './jsm/libs/stats.module.js';
import { GUI } from './jsm/libs/dat.gui.module.js';
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { SVGLoader } from './jsm/loaders/SVGLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';

import { EffectComposer } from './jsm/postprocessing/EffectComposer.js';
import { SSAOPass } from './jsm/postprocessing/SSAOPass.js';

class IDHotSpot {
	constructor(_ItemID, _HotSpotDisplayName, _HotSpotClickableType, _ArrayOfHotSpotsToShow, _HTMLURL, _VideoURL, _VideoSubtitlesURL, _VideoOrder, _MeatCutAnimationTransition) {
		this.itemID = _ItemID;
		this.hotSpotDisplayName = _HotSpotDisplayName;
		this.hotSpotClickableType = _HotSpotClickableType;
		this.arrayOfHotSpotsToShow = _ArrayOfHotSpotsToShow;
		this.hotSpotGlobalIndex = iDHotSpots.length;
		this.hTMLURL = _HTMLURL;
		this.videoURL = _VideoURL;
		//fetch('/3DApp/videoPath.env')
		//.then(response => response.text())
		//.then((data) => {
		//	this.videoURL = data + _VideoURL;
		//})

		this.videoSubtitlesURL = _VideoSubtitlesURL;
		this.videoOrder = _VideoOrder;
		this.meatCutAnimationTransition = _MeatCutAnimationTransition;
	}

	GetGlobalDisplayNum() {
		return this.hotSpotGlobalIndex + 1;
	}

	GetDisplayName() {
		return (this.videoOrder == -1 ? "" : (this.videoOrder + ". ")) + this.hotSpotDisplayName;//this.GetGlobalDisplayNum() + ". " + this.hotSpotDisplayName;
	}
}

class ClickableHotspot {
	constructor(_ItemID) {
		this.clickableObject = new THREE.Object3D();
		let parent;
		scene.traverse(function (child) {
			if (child.name == _ItemID + "_HotSpotAnchor") {
				parent = child;
			}
		});

		console.log("Finding" + (_ItemID + "_HotSpotAnchor").toString());
		this.clickableObject.position.x = parent.position.x;
		this.clickableObject.position.y = parent.position.y;
		this.clickableObject.position.z = parent.position.z;

		this.clickableObject.scale.x = 0.2;
		this.clickableObject.scale.y = 0.2;
		this.clickableObject.scale.z = 0.2;

		this.clickableObject.parent = parent;

		this.clickableObject.visible = false;

		for (let i = 0; i < iDHotSpots.length; i++) {
			if (iDHotSpots[i].itemID == _ItemID) {
				this.hotSpotDisplayText = iDHotSpots[i].GetDisplayName();
				this.hotSpotClickableType = iDHotSpots[i].hotSpotClickableType;
			}
		}

		this.itemID = _ItemID;

		this.Reset();

		this.index = ClickableHotspots.length;

		this.clickableObject.name = "Spawned Clickable Hot Spot " + this.index;
		GenerateText(new TextDisplayInfo(this.hotSpotDisplayText, this.clickableObject, this.itemID, this.hotSpotClickableType));
		ClickableHotspots.push(this)
	}

	Update() {
		this.clickableObject.lookAt(camera.position);
		this.clickableObject.rotation.x = camera.rotation.x;
		this.clickableObject.rotation.y = camera.rotation.y;
		this.clickableObject.rotation.z = camera.rotation.z;
	}

	Reset() {
		scene.add(this.clickableObject);
	}

	Delete() {
		//document.getElementById("buttonMenu").removeChild(this.htmlButton);

		scene.remove(TextHotSpots[this.index]); //Removes the proper text object

		let NameToRemove = GetButtonName(this.itemID);

		let ObjectToRemove = [];


		//this.clickableObject.geometry.dispose();
		//this.clickableObject.material.dispose();
		scene.traverse(function (child) {
			if (child.name == NameToRemove) {
				ObjectToRemove.push(child); //scene.remove(child);
			}
		});

		for (let i = 0; i < ObjectToRemove.length; i++) {
			scene.remove(ObjectToRemove[i]);
		}

		scene.remove(this.clickableObject);
	}

	SetVisible(_IsVisible) {
		let NameToRemove = GetButtonName(this.itemID);
		let TextName = this.itemID + "Text";
		scene.traverse(function (child) {
			if (child.name == NameToRemove || child.name == TextName) {
				child.visible = _IsVisible;
			}
		});

		this.clickableObject.visible = false;
		//console.log(this.index);
		//TextHotSpots[this.index].visible = false;
	}

}

class TextDisplayInfo {
	constructor(_DisplayMessage, _ParentObject, _GameObjectName = "", _HotSpotClickableType) {
		this.displayMessage = _DisplayMessage;
		this.parentObject = _ParentObject;
		this.gameObjectName = _GameObjectName;
		this.hotSpotClickableType = _HotSpotClickableType;
	}
}

export let HotSpotClickableType = {
	Clickable3DModel: 'Clickable3DModel',
	ClickableInfo: 'ClickableInfo',
	NonClickable: 'NonClickable',
	LoadingScreen: 'LoadingScreen',
	StartButton: 'StartButton',
	HTMLButton: 'HTMLButton'
}

export class ModalDisplayData {
	constructor(_ImageURL, _AltText, _ImageDescription, _htmlFile) {
		this.imageURL = _ImageURL;
		this.altText = _AltText;
		this.imageDescription = _ImageDescription;
		this.htmlFile = _htmlFile;
	}
}

export function AddModalData(_ModalDisplayData) {
	for (let i = 0; i < _ModalDisplayData.length; i++) {
		modalPopups.push(new ModalPopup(_ModalDisplayData[i].imageURL, _ModalDisplayData[i].altText, _ModalDisplayData[i].imageDescription, _ModalDisplayData[i].htmlFile));
	}
}

export class MeatCutAnimationTransition {
	constructor(_NameOfAnimation, _NameOfObjectsToFadeIfNeeded, _TimeInSecondsToFadeOutIfNeeded, _NameOfModelsToFadeOutIfNeeded, _IsLooppable = false) {
		this.nameOfAnimation = _NameOfAnimation;
		this.nameOfObjectsToFadeIfNeeded = _NameOfObjectsToFadeIfNeeded;
		this.timeInSecondsToFadeOutIfNeeded = _TimeInSecondsToFadeOutIfNeeded;
		this.nameOfModelsToFadeOutIfNeeded = _NameOfModelsToFadeOutIfNeeded;
		this.isloopable = _IsLooppable;
	}

	/*InitMeatCut(){
		for (let i = 0; i < this.nameOfModelsToFadeOutIfNeeded.length; i++) {
			scene.traverse(function(child) {
				if(child.name == this.nameOfModelsToFadeOutIfNeeded[i]){
					SetObjectAlpha(child, 0);
				}
			} );						
		}
	}*/
}

class ModalPopup {
	constructor(_ImageURL, _AltText, _ImageDescription, _htmlFile) {
		const container = document.getElementById('imgGal');

		let title = document.createElement('span');
		title.classList.add('title')
		title.innerHTML = _ImageDescription;

		const htmlFile = _htmlFile

		this.clickableImg = document.createElement('div');
		this.clickableImg.classList.add('imgTile')


		let imgHtml = document.createElement('img');
		imgHtml.src = _ImageURL;
		imgHtml.alt = _AltText;

		this.clickableImg.appendChild(imgHtml)
		this.clickableImg.appendChild(title)
		container.appendChild(this.clickableImg);


		// // Get the modal
		var modal = document.getElementById("myModal");

		// // Get the image and insert it inside the modal - use its "alt" text as a caption

		this.clickableImg.onclick = function () {
			fetch('modal.htm')
				.then(data => data.text())
				.then(html => modal.innerHTML = html)
				.then(() => {
					fetch(htmlFile)
						.then(data => data.text())
						.then(htmlContent => {
							document.getElementById('modalContainer').innerHTML = htmlContent;
						})

					// Get the <span> element that closes the modal
					var closeModal = document.getElementById("clickableExit");
					var exitButton = document.getElementById("exitButton");
					exitButton.onclick = function () {
						modal.removeChild(modal.childNodes[0]);
					}
					closeModal.onclick = function () {
						modal.removeChild(modal.childNodes[0]);
					}
				});
		}

		// // When the user clicks on <span> (x), close the modal
		// span.onclick = function () {
		// 	modal.style.display = "none";
		// }
	}

	Remove() {
		document.getElementById("imgGal").removeChild(this.clickableImg);
	}
}

let stats, mixer, camera, scene, renderer, clock, controls;

const raycaster = new THREE.Raycaster();

let loadedAnimation;

const ClickableHotspots = [];
const TextHotSpots = []; //Need to keep in sperate list, or lost refs to text

let htmlButtonArray = [];

let iDHotSpots = [];

let currentDisplayingHotSpotType;

let currentDisplayingHotSpot;

let cameraTargetLookAtPosition;
let cameraTargetPosition;

let renderWindowSizeDamp = 0.4;

//let originalListOfModels = ["Chicken", "Crown", "LegsBack", "Drumstick"];

let listOfObjectToFadeOut = [];
let listOfObjectToFadeIn = [];

let colorOfHTMLButtonNormal = "#03fca9";
let colorOfHTMLButtonSelected = "#4da183";

let composer, renderPass, saoPass;

let modalPopups = [];

let loadingScreenText;
let loadingScreenObject;

let hasStartIntroAnimation = false;
let hasFinishedIntroAnimation = false;

let speedOfPan = 16;

let hasFadedOutModel;

let currentlyPlayingAnimation;

let animationsInScene = [];

let introAnimation;

let hasFadingStarted;

let hotspotStartedClick;

let lastHotspotClicked;

let container;
let videoContainer;

let startButton;

let isScreenReaderActive;

let isViewAllVideosActive;

let allVideosArray = [];

let buttonDisplayUnder3DWindowArray = [];

let isAnimationLocked;

let isCaneraPanning;

let loopCounter = 0;

let loopableAnimationCache;

let textClickable3DSizeMultiplier = 1;

let reverseFadeOfCompatibility;

init();
animate();
SpawnLoadingScreen();

function SpawnLoadingScreen() {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	cube.visible = false;
	scene.add(cube);
	GenerateText(new TextDisplayInfo("Loading", cube, "LoadingScreen", HotSpotClickableType.LoadingScreen));
}

export function AddItem(_ItemID, _DisplayName, _HotSpotClickableType, _ArrayOfHotSpotsToShow, _HTMLPageAddress, _VideoURL, _VideoSubtitlesURL, _VideoOrder, _MeatCutAnimationTransition = null) {
	iDHotSpots.push(new IDHotSpot(_ItemID, _DisplayName, _HotSpotClickableType, _ArrayOfHotSpotsToShow, _HTMLPageAddress, _VideoURL, _VideoSubtitlesURL, _VideoOrder, _MeatCutAnimationTransition));
}

export function SetSizeOfTextClickable3DSizeMultiplier(_Size) {
	textClickable3DSizeMultiplier = _Size;
}

export function FinalizeItems(_NameOfModelToLoad, _SkyboxToLoad, _TitleOfMeat, _CameraStartPosition, _CameraZoomLimits, _HasIntroAnimation, _ReverseFadeOfCompatibility = false) {
	reverseFadeOfCompatibility = _ReverseFadeOfCompatibility;
	document.getElementById("websiteTitle").textContent = _TitleOfMeat;
	new RGBELoader()
		.load(_SkyboxToLoad, function (texture) {

			texture.mapping = THREE.EquirectangularReflectionMapping;
			texture.magFilter = THREE.LinearFilter;
			scene.background = new THREE.Color(0x545454); //texture;
			scene.environment = texture;

			render();


			const loader = new GLTFLoader();
			loader.load(_NameOfModelToLoad, function (gltf) {
				scene.add(gltf.scene);

				gltf.scene.traverse(function (child) {

					if (child.isSkinnedMesh)
						child.castShadow = true;

					//child.doubleSided = false;

					child.frustumCulled = false;
				});


				scene.traverse(function (child) {
					console.log(child.name);
					console.log(child.position);
				});

				RemoveCurrentHotSpots();

				/*for (let i = 0; i < iDHotSpots.length; i++) {
					if (iDHotSpots[i].hotSpotClickableType == HotSpotClickableType.HTMLButton || iDHotSpots[i].hotSpotClickableType == HotSpotClickableType.ClickableInfo) {
						

						


					}
				}*/

				let CurrentVideoOrderNeeded = 1;
				let HTMLButtonCounter = 0;
				for (let i = 0; i < iDHotSpots.length; i++) {
					if(iDHotSpots[i].videoOrder == -1){
						continue;
					}

					for (let j = 0; j < iDHotSpots.length; j++) {
						if(iDHotSpots[j].videoOrder == CurrentVideoOrderNeeded){
							let SpawnedButton = SpawnHTMLButton(j);
							
							if(iDHotSpots[i].hotSpotClickableType == HotSpotClickableType.HTMLButton){
								HTMLButtonCounter++;
							}

							if (iDHotSpots[j].hotSpotClickableType == HotSpotClickableType.ClickableInfo || HTMLButtonCounter > 4) { //Limits the amount of HTML buttons, the rest goes in the array with the other buttons
								SpawnedButton.style.display = "none";								
							}else{
								buttonDisplayUnder3DWindowArray.push(SpawnedButton);
							}

							allVideosArray.push(SpawnedButton); //Might spawn them on start and just hide/show them etc, easier then having to delete

							CurrentVideoOrderNeeded++;
							break;
						}
					}
				}

				mixer = new THREE.AnimationMixer(gltf.scene);
				mixer.addEventListener('loop', function (e) { OnAnimationLoop(); }); // properties of e: type, action and loopDelta

				/*for (let i = 0; i < gltf.animations.length; i++) {
					console.log("Animation" + gltf.animations[i].name);
				}*/


				animationsInScene = gltf.animations;

				for (let i = 0; i < animationsInScene.length; i++) {
					console.log("ANIMATIONS: " + animationsInScene[i].name);
				}

				if (_HasIntroAnimation) {
					for (let i = 0; i < animationsInScene.length; i++) {
						console.log(animationsInScene[i].name + " " + iDHotSpots[0].meatCutAnimationTransition.nameOfAnimation);
						if (animationsInScene[i].name == iDHotSpots[0].meatCutAnimationTransition.nameOfAnimation) {
							introAnimation = animationsInScene[i];
						}
					}
				}


				scene.remove(loadingScreenText);
				scene.remove(loadingScreenObject);

				ResetScene();

				document.getElementById("loadingScreen").remove();

			});

			//mixer = new THREE.AnimationMixer( gltf.scene ); //TEMP AS NO ANIMATION
			//mixer.clipAction( gltf.animations[ 0 ] ).play(); //TEMP AS NO ANIMATION
			//loadedAnimation = gltf.animations[ 0 ]; //TEMP AS NO ANIMATION
		});
	camera.position.set(_CameraStartPosition.x, _CameraStartPosition.y, _CameraStartPosition.z);
	controls = new OrbitControls(camera, renderer.domElement);
	controls.enablePan = false;
	controls.minDistance = _CameraZoomLimits.x;//10;
	controls.maxDistance = _CameraZoomLimits.y;//230; //185
	//controls.enabled = false;
	ResetHTMLButtonColors();
}

function SpawnHTMLButton(_Index) {
	let htmlButton = document.createElement('button');
	const Container = document.getElementById("buttonMenu"); //buttonMenu
	Container.appendChild(htmlButton);
	htmlButton.textContent = iDHotSpots[_Index].GetDisplayName();

	htmlButtonArray.push(htmlButton); //To keep all in array to change color when pressed

	htmlButton.addEventListener("click", function () {
		HTMLPressed(iDHotSpots[_Index].itemID); //Would be giving a 1,2,3 etc
	});

	return htmlButton;
}

function ResetScene() {
	for (let i = 0; i < animationsInScene.length; i++) {
		mixer.clipAction(animationsInScene[i]).stop();
		mixer.clipAction(animationsInScene[i]).reset();
	}

	for (let i = 0; i < iDHotSpots.length; i++) {
		ResetHotspotFadeModels(i);
	}

	listOfObjectToFadeIn.length = 0;
	listOfObjectToFadeOut.length = 0;

	ResetHotspotFadeModels(0); //To stop others from overwrite the original state of the models
}

function ResetHotspotFadeModels(_Index) {
	if (iDHotSpots[_Index].meatCutAnimationTransition == null) {
		return;
	}

	scene.traverse(function (child) {
		for (let j = 0; j < iDHotSpots[_Index].meatCutAnimationTransition.nameOfModelsToFadeOutIfNeeded.length; j++) {
			if (child.name == iDHotSpots[_Index].meatCutAnimationTransition.nameOfModelsToFadeOutIfNeeded[j]) {
				SetObjectAlpha(child, 0);
			}
		}

		for (let j = 0; j < iDHotSpots[_Index].meatCutAnimationTransition.nameOfObjectsToFadeIfNeeded.length; j++) {
			if (child.name == iDHotSpots[_Index].meatCutAnimationTransition.nameOfObjectsToFadeIfNeeded[j]) {
				SetObjectAlpha(child, 1);
			}
		}
	});
}

export function SetQuizURL(_QuizURL){
	const QuizButton = document.getElementById("startQuizButton");

	if(_QuizURL == ""){
		QuizButton.style.display = "none";
	}else{
		QuizButton.addEventListener("click", function () {
			window.open(_QuizURL,'_blank');
		});
	}
}

export function AddLight(_Light) {
	scene.add(_Light);
}

export function AddDefaultLights(_Light) {
	const overHeadLight = new THREE.PointLight(0xf7f5ba, 3, 500);
	overHeadLight.position.set(0, 300, 0);
	AddLight(overHeadLight);

	const topLight = new THREE.PointLight(0xebd19b, 3, 400);
	topLight.position.set(-350, 0, 0);
	AddLight(topLight);

	const bottomLight = new THREE.PointLight(0xebd19b, 3, 400);
	bottomLight.position.set(350, 0, 0);
	AddLight(bottomLight);

	const leftLight = new THREE.PointLight(0xebd19b, 2, 300);
	leftLight.position.set(0, 0, 250);
	AddLight(leftLight);

	const rightLight = new THREE.PointLight(0xebd19b, 2, 300);
	rightLight.position.set(0, 0, -250);
	AddLight(rightLight);

	const belowLight = new THREE.PointLight(0xebd19b, 4, 450);
	belowLight.position.set(0, -300, 0);
	AddLight(belowLight);
}

function init() {
	//new ModalPopup("img_snow.jpg", "Snow!");

	//var myScreenOrientation = window.screen.orientation;
	//myScreenOrientation.lock("landscape");

	//const container = document.createElement( 'div' );
	//document.body.appendChild( container );

	container = document.getElementById("webGLembed");
	videoContainer = document.getElementById("videoContainer");
	camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);

	document.getElementById("animationLoopToggleButton").style.display = "none"; //To hide the loop button on start

	scene = new THREE.Scene();
	//scene.background = new THREE.Color( 0xa0a0a0 );
	//scene.fog = new THREE.Fog( 0xa0a0a0, 700, 1000 );

	clock = new THREE.Clock();

	//const geometry = new THREE.PlaneGeometry( 500, 500 );
	//const material = new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } );

	//const ground = new THREE.Mesh( geometry, material );
	//ground.position.set( 0, - 5, 0 );
	//ground.rotation.x = - Math.PI / 2;
	//ground.receiveShadow = true;
	//scene.add( ground );

	//const grid = new THREE.GridHelper( 500, 100, 0x000000, 0x000000 );
	//grid.position.y = - 5;
	//grid.material.opacity = 0.2;
	//grid.material.transparent = true;

	//scene.add( grid );

	//stats = new Stats();
	//container.appendChild( stats.dom );

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor(0x000000);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.shadowMap.enabled = true;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.domElement.width = "100%";
	renderer.domElement.height = "100%";
	container.appendChild(renderer.domElement);

	/*composer = new EffectComposer( renderer );

	const ssaoPass = new SSAOPass( scene, camera, width, height );
	ssaoPass.kernelRadius = 3.4;
	ssaoPass.minDistance = 0.001;
	ssaoPass.maxDistance = 0.015;
	composer.addPass( ssaoPass );*/

	// Init gui
	/*const gui = new GUI();

	gui.add( ssaoPass, 'output', {
		'Default': SSAOPass.OUTPUT.Default,
		'SSAO Only': SSAOPass.OUTPUT.SSAO,
		'SSAO Only + Blur': SSAOPass.OUTPUT.Blur,
		'Beauty': SSAOPass.OUTPUT.Beauty,
		'Depth': SSAOPass.OUTPUT.Depth,
		'Normal': SSAOPass.OUTPUT.Normal
	} ).onChange( function ( value ) {

		ssaoPass.output = parseInt( value );

	} );
	gui.add( ssaoPass, 'kernelRadius' ).min( 0 ).max( 32 );
	gui.add( ssaoPass, 'minDistance' ).min( 0.001 ).max( 0.02 );
	gui.add( ssaoPass, 'maxDistance' ).min( 0.01 ).max( 0.3 );*/

	container.addEventListener('mousedown', onDownClick);

	container.addEventListener('mouseup', onClick);

	container.addEventListener('touchstart', onDownTouch);
	container.addEventListener('touchend', onTouch);
	document.addEventListener("keydown", onDocumentKeyDown); //Hotspot text does not load, but hotspot itself it there

	function onDocumentKeyDown(event) {
		var keyCode = event.which;
		if (keyCode == 27) { //Make escape button close modal popup
			if (document.getElementById("myModal").childNodes.length > 0) {
				document.getElementById("myModal").removeChild(document.getElementById("myModal").childNodes[0]);
			}
		}
	};

	//stats = new Stats();
	//container.appendChild( stats.dom );



	startButton = document.getElementById("startButton");
	startButton.addEventListener("click", function () {
		OnStartButtonPressed();
	});

	const BackButton = document.getElementById("backButton");
	BackButton.addEventListener("click", function () {
		GoToPreviousHotSpots();
	});

	const LoopButton = document.getElementById("animationLoopToggleButton");
	LoopButton.addEventListener("click", function () {
		OnLoopButtonPressed();
	});

	const ScreenReaderButton = document.getElementById("readerToggleButton");
	ScreenReaderButton.addEventListener("click", function () {
		isScreenReaderActive = !isScreenReaderActive;
		ScreenReaderButton.textContent = isScreenReaderActive ? "Disable Reader" : "Reader";
	});

	const ScreenViewAllVideosButton = document.getElementById("allVideosToggleButton");
	ScreenViewAllVideosButton.addEventListener("click", function () {

		// // Get the modal
		var modal = document.getElementById("myModal");
		var videoSelectArray = allVideosArray

		for (let i = 0; i < videoSelectArray.length; i++) {
			//videoSelectArray[i].style.display = "block";
			videoSelectArray[i].classList.add("button");
			videoSelectArray[i].onclick = function () {
				modal.removeChild(modal.childNodes[0]);
				for (let i = 0; i < videoSelectArray.length; i++) {
					for (let j = 0; j < buttonDisplayUnder3DWindowArray.length; j++) {
						if (videoSelectArray[i].textContent== buttonDisplayUnder3DWindowArray[j].textContent) { //Compares text
							const Container = document.getElementById("buttonMenu"); //buttonMenu
							Container.appendChild(videoSelectArray[i]);
						}
					}						
				}
			}
		}

		fetch('modal.htm')
			.then(data => data.text())
			.then(html => modal.innerHTML = html)
			.then(() => {
				fetch('videoSelect.htm')
					.then(data => data.text())
					.then(htmlContent => {
						document.getElementById('modalContainer').innerHTML = htmlContent;
						var videoSelect = document.getElementById("videoSelectArray");
						for (let i = 0; i < videoSelectArray.length; i++) {
							videoSelect.appendChild(videoSelectArray[i])
							videoSelectArray[i].style.display = "block";
						}
					})

				// Get the <span> element that closes the modal
				var closeModal = document.getElementById("clickableExit");
				var exitButton = document.getElementById("exitButton");
				exitButton.onclick = function () {
					modal.removeChild(modal.childNodes[0]);
					for (let i = 0; i < videoSelectArray.length; i++) {
						for (let j = 0; j < buttonDisplayUnder3DWindowArray.length; j++) {
							if (videoSelectArray[i].textContent == buttonDisplayUnder3DWindowArray[j].textContent) { //Compares text
								const Container = document.getElementById("buttonMenu"); //buttonMenu
								Container.appendChild(videoSelectArray[i]);
							}
						}						
					}
				}
				closeModal.onclick = function () {
					modal.removeChild(modal.childNodes[0]);
					for (let i = 0; i < videoSelectArray.length; i++) {
						for (let j = 0; j < buttonDisplayUnder3DWindowArray.length; j++) {
							if (videoSelectArray[i].textContent== buttonDisplayUnder3DWindowArray[j].textContent) { //Compares text
								const Container = document.getElementById("buttonMenu"); //buttonMenu
								Container.appendChild(videoSelectArray[i]);
							}
						}						
					}
				}
			});
	});

	window.addEventListener('resize', onWindowResize);
	// Force renderer resizing once
	onWindowResize();
}

function ResetHTMLButtonColors() {
	//for (let i = 0; i < htmlButtonArray.length; i++) {
	//	htmlButtonArray[i].style.backgroundColor = colorOfHTMLButtonNormal;
	//}
}

/*function SpawnHotspots(){
	for (let i = 1; i < iDHotSpots.length; i++) { //AS FIRST HOTSPOT SHOULD NOT BE VISIBLE
		new ClickableHotspot(iDHotSpots[i].itemID);
	}
}*/

function AddTheseHotSpots(_HotSpotType) {
	if (_HotSpotType.hotSpotClickableType == HotSpotClickableType.Clickable3DModel) { //So only happens if 3D model
		RemoveCurrentHotSpots();

		for (let i = 0; i < iDHotSpots.length; i++) {
			if (iDHotSpots[i].itemID == _HotSpotType.itemID) {
				for (let j = 0; j < iDHotSpots[i].arrayOfHotSpotsToShow.length; j++) { //AS FIRST HOTSPOT SHOULD NOT BE VISIBLE
					new ClickableHotspot(iDHotSpots[i].arrayOfHotSpotsToShow[j]);
				}
			}
		}
	}

	DisplayHotSpotInfo(_HotSpotType)
}

function DisplayHotSpotInfo(_HotSpotType) {
	currentDisplayingHotSpotType = _HotSpotType.itemID;
	currentDisplayingHotSpot = _HotSpotType;
	ResetHTMLButtonColors();

	for (let i = 0; i < htmlButtonArray.length; i++) { //To turn the buttons a different color to show they have been viewed
		if (_HotSpotType.GetDisplayName() == htmlButtonArray[i].textContent) { //Compares text
			htmlButtonArray[i].style.backgroundColor = colorOfHTMLButtonSelected;
		}
	}

	SetCameraAndWebpage(_HotSpotType);
	if (_HotSpotType.hotSpotClickableType != HotSpotClickableType.ClickableInfo) {
		ShowThisModel(_HotSpotType);
	}
}

function HideThisModel(_ItemID) {
	scene.traverse(function (child) {
		if (child.name == _ItemID) {
			child.visible = false;
		}
	});
}

function ShowThisModel(_HotSpotType) {
	if (_HotSpotType.meatCutAnimationTransition != null) {
		hasFadingStarted = false;
		currentlyPlayingAnimation = null;
		SnapAllInProgressFadeToFinial();
		for (let i = 0; i < animationsInScene.length; i++) {
			console.log(animationsInScene[i] == null);
			console.log(animationsInScene[i].name + " " + _HotSpotType.meatCutAnimationTransition.nameOfAnimation);
			if (animationsInScene[i].name == _HotSpotType.meatCutAnimationTransition.nameOfAnimation) {
				currentlyPlayingAnimation = animationsInScene[i];
			}
		}

		if (currentlyPlayingAnimation != null) {
			mixer.clipAction(currentlyPlayingAnimation).loop = THREE.LoopOnce;
			mixer.clipAction(currentlyPlayingAnimation).clampWhenFinished = true;
			isAnimationLocked = true;
			//mixer.clipAction(currentlyPlayingAnimation).play(); //Dont play right away, wait for animation to be done
		} else {
			ApplyFade(_HotSpotType.meatCutAnimationTransition); //To apply it right away if no animation is present
		}
	}

	let IsLoopable = (_HotSpotType.meatCutAnimationTransition != null && _HotSpotType.meatCutAnimationTransition.isloopable)

	document.getElementById("animationLoopToggleButton").style.display = IsLoopable ? "block" : "none";

	if (IsLoopable) { //So it resets the display
		document.getElementById("animationLoopToggleButton").textContent = "Rewind"
	}

	loopableAnimationCache = IsLoopable ? currentlyPlayingAnimation : null;

	//SnapAllInProgressFadeToFinial();
	/*scene.traverse(function (child) {
		let ShouldFade = false;
		for (let i = 0; i < _HotSpotType.arrayOfHotSpotsToShow.length; i++) {
			if (child.name == _HotSpotType.arrayOfHotSpotsToShow[i] || child.name == _HotSpotType.itemID) //So does not fade itself out, if has animation would still fade itself out
				ShouldFade = true;
		}

		if (ShouldFade) {
			if (child.material != null) {
				listOfObjectToFadeIn.push(child);
			}
		} else if (child.material != null) { //Not to add locators etc
			let IsAnExistingChild = false;
			for (let i = 0; i < iDHotSpots.length; i++) {
				if (child.name == iDHotSpots[i].itemID) {
					IsAnExistingChild = true;
				}
			}

			if (IsAnExistingChild) {
				listOfObjectToFadeOut.push(child);
			}
		}

	});*/

}

/*function ShowThisModel(_ItemID){
	SnapAllInProgressFadeToFinial();
	scene.traverse(function(child) {
		if(child.material != null){
			child.material.transparent = false; //If has not faded out yet, transperent is true, otherwise it is false
			//child.visible = true; //If has not faded out yet, is visible, otherwise it is not visable as the fade out is complete
			
			child.sortObjects = false;
			child.renderOrder = 100;
		}
	});
}*/

/*function SetShowHideOfModel(_ModelsToHide){
	SnapAllInProgressFadeToFinial();
	scene.traverse(function(child) {
		for (let i = 0; i < _ModelsToHide.length; i++) {
			if(child.name == _ModelsToHide[i]){
				//child.visible = false;
				listOfObjectToFadeOut.push(child);
			} 
		}
		
		for (let i = 0; i < originalListOfModels.length; i++) { //Turn everything on by default
			if(child.name == originalListOfModels[i]){
				//child.visible = true;
				let IsPartOfFadedOut = false;
				for (let j = 0; j < listOfObjectToFadeOut.length; j++){ //So does not add it to list if is part of fadeout
					if(originalListOfModels[i] == listOfObjectToFadeOut[j].name){
						IsPartOfFadedOut = true;
					}
				}

				if(!IsPartOfFadedOut){
					listOfObjectToFadeIn.push(child);
				}
			} 
		}
	});
}*/

function PingPongCurrentlyPlayingAnimation() {
	//mixer.clipAction(currentlyPlayingAnimation).timeScale = -1; //If want just to play backwards
	//mixer.clipAction(currentlyPlayingAnimation).loop = true;
	mixer.clipAction(currentlyPlayingAnimation).loop = THREE.LoopPingPong;
	mixer.clipAction(currentlyPlayingAnimation).play();
}

function RemoveCurrentHotSpots() { //_ShouldKeepInQueue
	for (let i = 0; i < ClickableHotspots.length; i++) {
		ClickableHotspots[i].Delete(); //For now delete them, even though will need to fade them out etc
	}
	ClickableHotspots.length = 0;
	TextHotSpots.length = 0;
}

function GoToPreviousHotSpots() {
	if (currentDisplayingHotSpotType != iDHotSpots[0].itemID) {
		ResetScene();
		AddTheseHotSpots(iDHotSpots[0]);
		DisplayHotSpotInfo(iDHotSpots[0]);
	}
}

function OnLoopButtonPressed() {
	if (loopableAnimationCache != null) {
		loopCounter = 0;
		console.log(mixer.clipAction(loopableAnimationCache));
		if (mixer.clipAction(loopableAnimationCache).timeScale == -1) {
			mixer.clipAction(loopableAnimationCache).timeScale = 1;
			mixer.clipAction(loopableAnimationCache).loop = THREE.LoopOnce;
			document.getElementById("animationLoopToggleButton").textContent = "Rewind"
		} else {
			mixer.clipAction(loopableAnimationCache).timeScale = -1; //If want just to play backwards
			mixer.clipAction(loopableAnimationCache).loop = true;
			document.getElementById("animationLoopToggleButton").textContent = "Replay"
		}
		mixer.clipAction(loopableAnimationCache).stop();
		mixer.clipAction(loopableAnimationCache).play();
	}

	console.log("reverse animation");
}

function OnAnimationLoop() {
	if (loopCounter > 0 && mixer.clipAction(loopableAnimationCache).timeScale == -1) {
		mixer.clipAction(loopableAnimationCache).stop();
		console.log("Has Looped");
		loopCounter = 0;
	}
	console.log("Loop Counter " + loopCounter);
	loopCounter++;
}

function HTMLPressed(_ItemID) {
	console.log(_ItemID);
	for (let i = 0; i < iDHotSpots.length; i++) {
		if (iDHotSpots[i].itemID == _ItemID) {
			DisplayHotSpotInfo(iDHotSpots[i]);
		}
	}
	//DisplayHotSpotInfo //Look and find what ID matches
	//console.log("HTMLPressed" + _Index);
	//AddTheseHotSpots(iDHotSpots[_Index].typeOfHotspot);
	//HotSpotPressed(iDHotSpots[_Index].itemID);
}

function SetCameraAndWebpage(_HotSpotType) {
	if (_HotSpotType.hotSpotClickableType == HotSpotClickableType.ClickableInfo || _HotSpotType.hotSpotClickableType == HotSpotClickableType.HTMLButton || _HotSpotType.hotSpotGlobalIndex == 0) {

		fetch(_HotSpotType.hTMLURL)
			.then(data => data.text())
			.then(html => document.getElementById('InfoPage').innerHTML = html);


		let MainBodyVideo = document.getElementById('video');
		MainBodyVideo.src = _HotSpotType.videoURL;

		

		let WasASubtitleShowing = false;

		/*
		for (var i = 0; i < MainBodyVideo.textTracks.length; i++) {
			if(video.textTracks[i].mode == 'showing'){
				WasASubtitleShowing = true;
			}
			video.textTracks[i].mode = 'hidden';
		 }
		 */

		//let Subtitles = document.getElementById('subtitlesTrack');
		//Subtitles.src = null; //Otherwise will not clear out old subtitles
		//Subtitles.src = _HotSpotType.videoSubtitlesURL;
		if(WasASubtitleShowing){
			video.textTracks[0].mode = 'showing';
		}

		document.getElementById("videoTitle").innerHTML = _HotSpotType.GetDisplayName();

		scene.traverse(function (child) {
			if (child.name == lastHotspotClicked) {
				child.material.color.setHex(0xffffff);
			}
		});

		if (_HotSpotType.hotSpotClickableType == HotSpotClickableType.ClickableInfo) {
			scene.traverse(function (child) {
				if (child.name == GetButtonName(_HotSpotType.itemID)) {
					child.material.color.setHex(0x363636);
					lastHotspotClicked = child.name;
				}
			});
		}

		//console.log(MainBodyVideo.textTracks.length);
		//MainBodyVideo.textTracks[0].src = _HotSpotID.videoSubtitlesURL;			
		//document.getElementById("subSource").src = _HotSpotID.videoSubtitlesURL;
	}

	if ((_HotSpotType.hotSpotClickableType != HotSpotClickableType.ClickableInfo && _HotSpotType.hotSpotClickableType != HotSpotClickableType.HTMLButton) || _HotSpotType.hotSpotGlobalIndex == 0) {
		if (_HotSpotType.hotSpotClickableType != HotSpotClickableType.ClickableInfo) { //So camera does not change position
			cameraTargetLookAtPosition = scene.getObjectByName(_HotSpotType.itemID).position;
			cameraTargetPosition = scene.getObjectByName(_HotSpotType.itemID + "_CameraLocator").position;
		}
	}
}

function GetButtonName(_ItemID) {
	return _ItemID + "_Button"
}

function GenerateText(_TextDisplayInfo) {
	const loader = new THREE.FontLoader();
	let text;
	loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
		let ColorText;
		let ColorBackground;
		let ShouldHideBackground = false;
		let fontScale = 0.15;
		if (_TextDisplayInfo.hotSpotClickableType == HotSpotClickableType.Clickable3DModel || _TextDisplayInfo.hotSpotClickableType == HotSpotClickableType.StartButton) { //Changes color per hotspot type
			ColorText = 0xffffff;
			ColorBackground = 0x000000;
			fontScale *= textClickable3DSizeMultiplier;
		}
		if (_TextDisplayInfo.hotSpotClickableType == HotSpotClickableType.ClickableInfo) {
			ColorText = 0x000000;//0x00BBFF;//0x30bfcf; //0xffffff;
			ColorBackground = 0xffffff;//0x363636;
			//ShouldHideBackground = true;
			//fontScale = 0.11;
		}
		if (_TextDisplayInfo.hotSpotClickableType == HotSpotClickableType.NonClickable) {
			ColorText = 0xff1100;
			ColorBackground = 0x000000;
		}
		const color = new THREE.Color(ColorText);
		const matLite = new THREE.MeshBasicMaterial({
			color: color,
			transparent: true,
			opacity: 1,
			side: THREE.DoubleSide
		});

		const message = _TextDisplayInfo.displayMessage; //_ClickableHotspotObj.hotSpotDisplayText;
		const shapes = font.generateShapes(message, 100);
		const geometry = new THREE.ShapeGeometry(shapes);
		geometry.computeBoundingBox();
		const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
		geometry.translate(xMid, 0, 0);

		matLite.depthTest = false;
		//matLite.depthWrite = false;

		let Padding = new THREE.Vector2(125, 125);

		const GeometryBackground = new THREE.BoxGeometry((geometry.boundingBox.max.x - geometry.boundingBox.min.x) + Padding.x, (geometry.boundingBox.max.y - geometry.boundingBox.min.y) + Padding.y, 0.1);
		const MaterialBackground = new THREE.MeshBasicMaterial({ color: ColorBackground });
		MaterialBackground.depthTest = false;
		MaterialBackground.transparent = true;
		GeometryBackground.translate(0, ((geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2) - (Padding.y * 0.15), 0); //-20 is padding to center it more
		const BackGroundObject = new THREE.Mesh(GeometryBackground, MaterialBackground);

		BackGroundObject.visible = !ShouldHideBackground;

		text = new THREE.Mesh(geometry, matLite);
		text.scale.x = fontScale;
		text.scale.y = fontScale;
		text.scale.z = fontScale;
		scene.add(text);
		text.parent = _TextDisplayInfo.parentObject; //_ClickableHotspotObj.clickableObject;

		scene.add(BackGroundObject); //Wait to add to scene, as will flash before parented

		BackGroundObject.parent = text;
		BackGroundObject.name = GetButtonName(_TextDisplayInfo.gameObjectName); //Gives it name so it is clickable
		text.name = _TextDisplayInfo.gameObjectName + "Text";

		if (_TextDisplayInfo.hotSpotClickableType == HotSpotClickableType.LoadingScreen) {
			loadingScreenText = text;
			loadingScreenObject = BackGroundObject;
		}
		else {
			TextHotSpots.push(text);
		}

		text.sortObjects = false;
		text.renderOrder = 200;

		BackGroundObject.sortObjects = false;
		BackGroundObject.renderOrder = 200;
		//text.onBeforeRender = function( renderer ) { renderer.clearDepth(); };

		const holeShapes = [];

		for (let i = 0; i < shapes.length; i++) {
			const shape = shapes[i];
			if (shape.holes && shape.holes.length > 0) {
				for (let j = 0; j < shape.holes.length; j++) {
					const hole = shape.holes[j];
					holeShapes.push(hole);
				}
			}
		}
		shapes.push.apply(shapes, holeShapes);
	}); //end load function
}

function onWindowResize() {
	//const video = document.getElementById("webGLembed");
	//console.log(container.clientWidth + " " + container.clientHeight);
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(container.clientWidth, container.clientHeight); //Otherwise scales down like crazy
}

function GetCurrentScollPosition() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

function GetMouseTouchPos(event) {
	event.preventDefault();
	let mouse = new THREE.Vector2();
	// mouse.x = ( ( event.clientX - event.offsetX ) / renderer.domElement.clientWidth ) * 2 - 1; //event.clientX

	// mouse.y = - ( ( (event.clientY + GetCurrentScollPosition())- event.offsetY ) / renderer.domElement.clientHeight ) * 2 + 1; //event.clientY 

	mouse.x = (event.offsetX / renderer.domElement.clientWidth) * 2 - 1;
	mouse.y = - (event.offsetY / renderer.domElement.clientHeight) * 2 + 1;

	return mouse;
}

function onDownClick(event) {
	OnScreenPressed(GetMouseTouchPos(event), true);
}

function onClick(event) {
	OnScreenPressed(GetMouseTouchPos(event), false);
}

function GetTouchScreenPos(event) {
	//event.preventDefault();
	let touch = new THREE.Vector2();
	touch.x = ((event.changedTouches[0].clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1; //event.clientX
	touch.y = - (((event.changedTouches[0].clientY + GetCurrentScollPosition()) - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1; //event.clientY 
	return touch;
}

function onDownTouch(event) {
	OnScreenPressed(GetTouchScreenPos(event), true);
}

function onTouch(event) {
	OnScreenPressed(GetTouchScreenPos(event), false);
}

function GetTouchingHotSpot(_ScreenPosition) {
	raycaster.setFromCamera(_ScreenPosition, camera);
	let HittableObjects = [];
	for (let i = 0; i < ClickableHotspots.length; i++) {
		HittableObjects.push(ClickableHotspots[i].clickableObject);
	}

	const intersections = raycaster.intersectObjects(scene.children); // HittableObjects, true
	//IsItemSelectable = true;

	if (intersections.length > 0) {
		console.log("CLICKED " + intersections[0].object.name);
		const object = intersections[0].object;

		for (let i = 0; i < ClickableHotspots.length; i++) {
			if (intersections[0].object.name == GetButtonName(ClickableHotspots[i].itemID)) {
				let FoundHotSpot = GetIDHotSpotsFromID(ClickableHotspots[i].itemID);
				if (FoundHotSpot.hotSpotClickableType != HotSpotClickableType.NonClickable) {
					return FoundHotSpot;
				}
			}
		}
	}
}

function OnStartButtonPressed() {
	DisplayHotSpotInfo(iDHotSpots[0]);
	hasStartIntroAnimation = true;
	document.getElementById('startButton').remove();
	if (introAnimation == null) {
		HasFinishedIntoAnimation();
	}
}

function OnScreenPressed(_ScreenPosition, _IsDownTouch) {
	let HotSpotFound = GetTouchingHotSpot(_ScreenPosition);

	if (HotSpotFound != null) {
		console.log("Button pressed " + HotSpotFound.name);

		if (_IsDownTouch) {
			hotspotStartedClick = HotSpotFound;
			ReadThisHotSpot(HotSpotFound);
		} else {
			if (HotSpotFound == hotspotStartedClick) {
				HotSpotPressed(HotSpotFound);
				hotspotStartedClick = null;
			}
		}
	}
}

function ReadThisHotSpot(_HotSpot) {
	if ('speechSynthesis' in window && isScreenReaderActive) {
		console.log("can speak");
		var to_speak = new SpeechSynthesisUtterance(_HotSpot.GetDisplayName());
		window.speechSynthesis.speak(to_speak);
	}
}

function GetIDHotSpotsFromID(_ItemID) {
	for (let i = 0; i < iDHotSpots.length; i++) {
		if (iDHotSpots[i].itemID == _ItemID) {
			return iDHotSpots[i];
		}
	}

	return null;
}


function HotSpotPressed(_HotSpotType) {
	AddTheseHotSpots(_HotSpotType);
	//DisplayHotSpotInfo(_HotSpotType);
}

function HasFinishedIntoAnimation() {
	AddTheseHotSpots(iDHotSpots[0]);
	//HideThisModel(iDHotSpots[0].itemID);
	//controls.enabled = true;
	//DisplayHotSpotInfo(iDHotSpots[0]);
	hasFinishedIntroAnimation = true;
}

function ApplyFade(_MeatCutAnimationTransition) {
	scene.traverse(function (child) {

		for (let j = 0; j < _MeatCutAnimationTransition.nameOfObjectsToFadeIfNeeded.length; j++) {
			if (child.name == _MeatCutAnimationTransition.nameOfObjectsToFadeIfNeeded[j]) {
				(reverseFadeOfCompatibility ? listOfObjectToFadeIn : listOfObjectToFadeOut).push(child); //This was added as originally was backword and had to be corrected for fish to work, but broke other experenses, so by default it is left how it originally was unless reverseFadeOfCompatibility is set to true
			}
		}

		for (let j = 0; j < _MeatCutAnimationTransition.nameOfModelsToFadeOutIfNeeded.length; j++) {
			if (child.name == _MeatCutAnimationTransition.nameOfModelsToFadeOutIfNeeded[j]) {
				(reverseFadeOfCompatibility ? listOfObjectToFadeOut : listOfObjectToFadeIn).push(child);
			}
		}
		//currentlyPlayingAnimation = null;

	});
}

function animate() {
	requestAnimationFrame(animate);

	if (mixer) {
		mixer.update(clock.getDelta());

		if (currentlyPlayingAnimation != null && !hasFadingStarted) {
			if (currentDisplayingHotSpot.meatCutAnimationTransition != null && mixer.clipAction(currentlyPlayingAnimation).time > currentDisplayingHotSpot.meatCutAnimationTransition.timeInSecondsToFadeOutIfNeeded) { //Has currentDisplayingHotSpot.meatCutAnimationTransition incase "Back" button is pressed before camera pan finishes and animation plays 
				ApplyFade(currentDisplayingHotSpot.meatCutAnimationTransition);
				hasFadingStarted = true;
			}
		}

		if (introAnimation != null && !mixer.clipAction(introAnimation).isRunning() && !hasFinishedIntroAnimation && hasStartIntroAnimation) {
			HasFinishedIntoAnimation();
		}

		//for (let i = 0; i < ClickableHotspots.length; i++) {
		//	ClickableHotspots[i].SetVisible(false);
		//}

		if (mixer && currentlyPlayingAnimation != null) {
			//console.log(!mixer.clipAction(currentlyPlayingAnimation).isRunning() + " " + !isCaneraPanning);
			for (let i = 0; i < ClickableHotspots.length; i++) {
				ClickableHotspots[i].SetVisible(!mixer.clipAction(currentlyPlayingAnimation).isRunning() && !isCaneraPanning);
			}
		}
	}
	//stats.begin();
	render();
	//stats.end();

	var delta = clock.getDelta();



	for (let i = 0; i < listOfObjectToFadeIn.length; i++) {
		if (listOfObjectToFadeIn[i].material != null) {
			//console.log("this material is missing " + listOfObjectToFadeIn[i].name);
			//console.log("Is lerping In " + listOfObjectToFadeIn[i].name + listOfObjectToFadeIn[i].material.opacity);
			listOfObjectToFadeIn[i].material.opacity = lerp(listOfObjectToFadeIn[i].material.opacity, 1, 0.05);
			listOfObjectToFadeIn[i].visible = true; //If fading in, is always visible
			listOfObjectToFadeIn[i].material.transparent = !(listOfObjectToFadeIn[i].material.opacity >= 0.95); //If over 95%, is no longer transperent to fix layering issues with text

			listOfObjectToFadeIn[i].sortObjects = false;
			listOfObjectToFadeIn[i].renderOrder = 0;
		}

	}


	for (let i = 0; i < listOfObjectToFadeOut.length; i++) {
		if (listOfObjectToFadeOut[i].material != null) {
			//console.log("this material is missing " + listOfObjectToFadeOut[i].name);						


			listOfObjectToFadeOut[i].material.opacity = lerp(listOfObjectToFadeOut[i].material.opacity, 0, 0.05);
			//console.log("Is lerping Out " + listOfObjectToFadeOut[i].name + listOfObjectToFadeOut[i].material.opacity);
			let IsNotFadedOutYet = !(listOfObjectToFadeOut[i].material.opacity <= 0.05); //If is not less then 5%, then it has not faded out yet
			listOfObjectToFadeOut[i].material.transparent = IsNotFadedOutYet; //If has not faded out yet, transperent is true, otherwise it is false
			listOfObjectToFadeOut[i].visible = IsNotFadedOutYet; //If has not faded out yet, is visible, otherwise it is not visable as the fade out is complete

			listOfObjectToFadeOut[i].sortObjects = false;
			listOfObjectToFadeOut[i].renderOrder = 100;
		}
	}
	if (cameraTargetLookAtPosition != null && cameraTargetLookAtPosition.distanceTo(controls.target) > 2) {
		//console.log(cameraTargetLookAtPosition.distanceTo(controls.target));
		controls.target.x = lerp(controls.target.x, cameraTargetLookAtPosition.x, 0.002 * speedOfPan); //Using delta caused issues
		controls.target.y = lerp(controls.target.y, cameraTargetLookAtPosition.y, 0.002 * speedOfPan);
		controls.target.z = lerp(controls.target.z, cameraTargetLookAtPosition.z, 0.002 * speedOfPan);

		camera.position.set(lerp(camera.position.x, cameraTargetPosition.x, 0.002 * speedOfPan), lerp(camera.position.y, cameraTargetPosition.y, 0.002 * speedOfPan), lerp(camera.position.z, cameraTargetPosition.z, 0.002 * speedOfPan));
		controls.update();
		isCaneraPanning = true;
	} else if (isAnimationLocked && currentDisplayingHotSpot.meatCutAnimationTransition != null) { //Null check incase "Back" button was pressed before camer pan finished
		//if(currentDisplayingHotSpot.meatCutAnimationTransition.isloopable)
		//	mixer.clipAction(currentlyPlayingAnimation).timeScale = 0.5;
		mixer.clipAction(currentlyPlayingAnimation).play();
		isAnimationLocked = false;
		isCaneraPanning = false;
	} else {
		isCaneraPanning = false;
	}


}

function lerp(start, end, amt) {
	return (1 - amt) * start + amt * end
}

function render() {
	for (let i = 0; i < ClickableHotspots.length; i++) {
		ClickableHotspots[i].Update();
	}
	renderer.render(scene, camera);
	//composer.render();
}

function SnapAllInProgressFadeToFinial() {
	for (let i = 0; i < listOfObjectToFadeIn.length; i++) {
		SetObjectAlpha(listOfObjectToFadeIn[i], 1);
	}

	for (let i = 0; i < listOfObjectToFadeOut.length; i++) {
		SetObjectAlpha(listOfObjectToFadeOut[i], 0);
	}

	listOfObjectToFadeIn.length = 0;
	listOfObjectToFadeOut.length = 0;
}

function SetObjectAlpha(_Object, _AlphaValue) {
	_Object.material.opacity = _AlphaValue;
	_Object.material.transparent = false;
	_Object.visible = (_AlphaValue == 1);
}
