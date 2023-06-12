import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetQuizURL  } from '../script.js';

AddItem("RabbitBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, 
["ForeLegs", "HalvingRabbit", "HindLegs", "Loins", "RabbitAnatomy", "RabbitFarce", 
"RabbitOffals", "RabbitRacap", "RemovingNeckAndTail", "RemovingTheSaddle"], 
"Game/Farm/FarmInfo.htm", "https://www.youtube.com/embed/iqLYrUJ26-A?autoplay=1",  "Game/Farm/KingCole.vtt", -1,
new MeatCutAnimationTransition("ArmatureAction", ["Rabbit"], 0, []));

//Rabbit
AddItem("ForeLegs", "Fore legs", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/ForeLegsInfo.htm", "https://www.youtube.com/embed/oPd99WDSGtQ?autoplay=1", "Game/Rabbit/captions-5.vtt", 5);
AddItem("HalvingRabbit", "Halving rabbit", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/HalvingRabbitInfo.htm", "https://www.youtube.com/embed/rYkmyG1Boa0?autoplay=1","Game/Rabbit/captions-8.vtt", 8);
AddItem("HindLegs", "Hind legs", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/HindLegsInfo.htm", "https://www.youtube.com/embed/Dn0jSnWjekI?autoplay=1", "Game/Rabbit/captions-6.vtt", 6);
AddItem("Loins", "Loins", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/LoinsInfo.htm", "https://www.youtube.com/embed/NyadtJZQ_zY?autoplay=1", "Game/Rabbit/captions-11.vtt", 11);
AddItem("RabbitAnatomy", "Rabbit Anatomy", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RabbitAnatomyInfo.htm", "https://www.youtube.com/embed/PNUP7QvVbYU?autoplay=1", "Game/Rabbit/captions-3.vtt", 3);
AddItem("RabbitFarce", "Rabbit farce", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RabbitFarceInfo.htm", "https://www.youtube.com/embed/r3eXgyzRG2o?autoplay=1", "Game/Rabbit/captions-10.vtt", 10);
AddItem("RabbitOffals", "Rabbit Offal", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RabbitOffalsInfo.htm", "https://www.youtube.com/embed/rf2KEEYf7ks?autoplay=1", "Game/Rabbit/captions-2.vtt", 2);
AddItem("RabbitRacap", "Rabbit Recap", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RabbitRecapInfo.htm", "https://www.youtube.com/embed/Aro3IgG5mCo?autoplay=1","Game/Rabbit/captions-12.vtt", 12);
AddItem("RemovingNeckAndTail", "Tail and Neck", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RemovingNeckAndTailInfo.htm", "https://www.youtube.com/embed/nTiHSTgAE1U?autoplay=1", "Game/Rabbit/captions-7.vtt", 7);
AddItem("RemovingTheSaddle", "Removing the saddle", HotSpotClickableType.ClickableInfo, [], "Game/Rabbit/RemovingTheSaddleInfo.htm","https://www.youtube.com/embed/5TyTkQZRQhE?autoplay=1", "Game/Rabbit/captions-9.vtt", 9);

//HTML
AddItem("Barding", "Barding", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/BardingInfo.htm", "https://www.youtube.com/embed/F9zjFI8SMg4?autoplay=1", "Game/HTMLButtons/captions-13.vtt", 13);
AddItem("Boar", "Boar", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/BoarInfo.htm", "https://www.youtube.com/embed/epYBVCYLTfI?autoplay=1", "Game/HTMLButtons/captions-19.vtt", 19);
AddItem("CookingMethods", "Cooking methods", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/CookingMethodsInfo.htm", "https://www.youtube.com/embed/yHKEbCj7lt4?autoplay=1", "Game/HTMLButtons/captions-4.vtt", 4);
AddItem("DeekRack", "Deek rack", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/DeekRackInfo.htm", "https://www.youtube.com/embed/Lf8NMIMI0lM?autoplay=1", "Game/HTMLButtons/captions-15.vtt", 15);
AddItem("DeerDoubleRack", "Double Rack Chops", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/DeerDoubleRackInfo.htm","https://www.youtube.com/embed/K9Vy11kHtKs?autoplay=1", "Game/HTMLButtons/captions-16.vtt", 16);
AddItem("DeerRibCap", "Deer rib cap", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/DeerRibCapInfo.htm","https://www.youtube.com/embed/dLL8NS9iYPw?autoplay=1","Game/HTMLButtons/captions-14.vtt", 14);
AddItem("FrenchingRack", "Frenching rack", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/FrenchingRackInfo.htm", "https://www.youtube.com/embed/3FGjF4kqjos?autoplay=1", "Game/HTMLButtons/captions-17.vtt", 17);
AddItem("MeatsOverview", "Game Overview", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/MeatsOverviewInfo.htm", "https://www.youtube.com/embed/ARKjL9HWIeA?autoplay=1", "Game/HTMLButtons/captions-1.vtt", 1);
AddItem("VenisionMeats", "Venison meats", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/VenisionMeatsInfo.htm", "https://www.youtube.com/embed/yG1eEW1rUS8?autoplay=1","Game/HTMLButtons/captions-18.vtt", 18);
AddItem("GameBirds", "Game Birds", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/GameBirdsInfo.htm", "https://www.youtube.com/embed/Um1ZsAXwqXM?autoplay=1", "Game/HTMLButtons/captions-20 (birds).vtt", 20);
AddItem("Duck", "Duck", HotSpotClickableType.HTMLButton, [], "Game/HTMLButtons/DuckInfo.htm", "https://www.youtube.com/embed/Jgt91zJm_j8?autoplay=1", "Game/HTMLButtons/captions-21 (Duck).vtt", 21);

AddModalData([new ModalDisplayData("Game/ModalContent/media/1.jpg", "Meat on cutting board", "Game Types", "Game/ModalContent/1Types.htm"),
new ModalDisplayData("Game/ModalContent/media/2.jpg", "Meat presented on cutting board", "Sustainability", "Game/ModalContent/2Sustainability.htm"),
new ModalDisplayData("Game/ModalContent/media/3.jpg", "Vacuum sealer", "Storage and Handling", "Game/ModalContent/3Storage.htm"),
new ModalDisplayData("Game/ModalContent/media/4.jpg", "Rabbit Primal Cuts", "Flavour & Cooking Methods", "Game/ModalContent/4Flavour.htm"),
new ModalDisplayData("Game/ModalContent/media/5.jpg", "Butcher shop meat", "Cost", "Game/ModalContent/5Cost.htm"),
new ModalDisplayData("Game/ModalContent/media/6.jpg", "Meat on cutting board", "Further Learning ", "Game/ModalContent/6Further.htm")]);

FinalizeItems('Game/Rabbit_Animation_01.glb', '105_hdrmaps_com_free.hdr', "Game", new THREE.Vector3(75, 70, 0), new THREE.Vector2(10, 230), false);

SetQuizURL("../train/game1"); //https://next-butchery.vercel.app/train/game1

//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xFDF0B9, 2, 500);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, .5, 400);
topLight.position.set(-350, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 1, 400);
bottomLight.position.set(350, 0, 0);
AddLight(bottomLight);

const leftLight = new THREE.PointLight(0xc6e4ff, 1.5, 300);
leftLight.position.set(0, 0, 250);
AddLight(leftLight);

const rightLight = new THREE.PointLight(0xc6e4ff, 1, 300);
rightLight.position.set(0, 0, -250);
AddLight(rightLight);

const belowLight = new THREE.PointLight(0xc6e4ff, .5, 450);
belowLight.position.set(0, -300, 0);
AddLight(belowLight);
