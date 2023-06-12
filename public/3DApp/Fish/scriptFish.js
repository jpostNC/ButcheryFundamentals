import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetQuizURL  } from '../script.js';


AddItem("MainSelection", "Intro", HotSpotClickableType.Clickable3DModel, 
["FlatFishSection", "SalmonTroutSection"], 
"Fish/Trout/IntroInfo.htm", "https://www.youtube.com/embed/fa2b0E9aW7I?autoplay=1", "Fish/Trout/captions-1.vtt", -1,
new MeatCutAnimationTransition("", ["Salmon_01", "Flatfish_01"], 0, ["Trout", "Salmon", "Flatfish", "Halibut", "TROUT_1", "TROUT_2", "SALMON_1", "SALMON_2", "flatfish", "flatfish_1", "HALIBUT_1", "HALIBUT_2"]));

//
AddItem("FlatFishSection", "Flat Fish", HotSpotClickableType.Clickable3DModel, 
["FlatFishBreakdown", "HalibutBreakdown"], 
"Fish/Trout/IntroInfo.htm", "https://www.youtube.com/embed/fa2b0E9aW7I?autoplay=1", "Fish/Trout/captions-1.vtt", -1,
new MeatCutAnimationTransition("", ["Flatfish", "Halibut"], 0, ["Salmon_01", "Flatfish_01"]));

AddItem("SalmonTroutSection", "Round Fish", HotSpotClickableType.Clickable3DModel, 
["TroutBreakdown", "SalmonBreakdown"], 
"Fish/Trout/IntroInfo.htm", "https://www.youtube.com/embed/fa2b0E9aW7I?autoplay=1", "Fish/Trout/captions-1.vtt", -1,
new MeatCutAnimationTransition("", ["Trout", "Salmon"], 0, ["Salmon_01", "Flatfish_01"]));


/*AddItem("FishBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, 
["TroutBreakdown", "SalmonBreakdown", "FlatFishBreakdown", "HalibutBreakdown"], 
"Fish/Trout/IntroInfo.htm", "https://www.youtube.com/embed/fa2b0E9aW7I?autoplay=1", "Fish/Trout/captions-1.vtt");*/

//Trout
AddItem("TroutBreakdown", "Trout Breakdown", HotSpotClickableType.Clickable3DModel, 
["TroutIntro", "FilletTrout", "TroutFilletSide2", "TroutRibCageRemoval", "TroutPinBones","TroutSkinning"], 
"", "", "", -1, new MeatCutAnimationTransition("TroutAnimationAction", ["TROUT_1", "TROUT_2"], 0, ["Trout"]));


AddItem("TroutIntro", "Trout Intro", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/IntroInfo.htm", 
"https://www.youtube.com/embed/fa2b0E9aW7I?autoplay=1", "Fish/Trout/captions-1.vtt", 1);
AddItem("FilletTrout", "Trout Fillet 1", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/FilletTroutInfo.htm", 
"https://www.youtube.com/embed/h9OtsiE6T_A?autoplay=1", "Fish/Trout/captions-2.vtt", 2);
AddItem("TroutFilletSide2", "Trout Fillet 2", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/FilletTrout2Info.htm", 
"https://www.youtube.com/embed/ZL4mTTAJkFY?autoplay=1", "Fish/Trout/captions-3.vtt",3);
AddItem("TroutRibCageRemoval", "Trout Ribs", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/TroutRibCageRemovalInfo.htm", 
"https://www.youtube.com/embed/vZcavkpDIP4?autoplay=1", "Fish/Trout/captions-4.vtt", 4);
AddItem("TroutPinBones", "Trout pin bones", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/TroutPinBonesInfo.htm", 
"https://www.youtube.com/embed/mXMNTunM8GQ?autoplay=1", "Fish/Trout/captions-5.vtt", 5);
AddItem("TroutSkinning", "Trout skinning", HotSpotClickableType.ClickableInfo, [], "Fish/Trout/TroutSkinningInfo.htm", 
"https://www.youtube.com/embed/PlCE5eUjFLA?autoplay=1", "Fish/Trout/captions-6.vtt" , 6);

//Salmon
AddItem("SalmonBreakdown", "Salmon Breakdown", HotSpotClickableType.Clickable3DModel, 
["SalmonFillet", "SalmonIntro", "SalmonPinBones", "SalmonPortioning","SalmonRemoveFins", "SalmonRemovingHead",
"SalmonRibcageTake2", "SalmonSecondFillet", "SalmonSkinning", "SalmonSteak", "TryingSalmonSteak"], 
"", "", "", -1, new MeatCutAnimationTransition("SalmonAnimationAction", ["SALMON_1", "SALMON_2"], 0, ["Salmon"]));

AddItem("SalmonFillet", "Salmon fillet", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonFilletInfo.htm", 
"https://www.youtube.com/embed/UTuJxt0ls6E?autoplay=1", "Fish/Salmon/captions-12.vtt", 12);
AddItem("SalmonIntro", "Salmon intro", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonIntroInfo.htm", 
"https://www.youtube.com/embed/jA-7qMQh_gw?autoplay=1", "Fish/Salmon/captions-7.vtt", 7);
AddItem("SalmonPinBones", "Salmon pin bones", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonPinBonesInfo.htm", 
"https://www.youtube.com/embed/4CMuWw8j5Ps?autoplay=1", "Fish/Salmon/captions-15.vtt", 15);
AddItem("SalmonPortioning", "Salmon portioning", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonPortioningInfo.htm", 
"https://www.youtube.com/embed/5P4KPEA_n_I?autoplay=1", "Fish/Salmon/captions-17.vtt", 17);
AddItem("SalmonRemoveFins", "Salmon Fins", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonRemoveFinsInfo.htm", 
"https://www.youtube.com/embed/hljXR937b6A?autoplay=1", "Fish/Salmon/captions-8.vtt", 8);
AddItem("SalmonRemovingHead", "Salmon Head", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonRemovingHeadInfo.htm", 
"https://www.youtube.com/embed/rOC-a35jO4E?autoplay=1", "Fish/Salmon/captions-9.vtt", 9);
AddItem("SalmonRibcageTake2", "Salmon ribcage", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonRibcageTake2Info.htm", 
"https://www.youtube.com/embed/31459e8Fgkc?autoplay=1", "Fish/Salmon/captions-14.vtt", 14); //16. Salmon Ribcage Take 2-8.mp4", "Fish/Salmon/captions-16.vtt
//14 is skipped, but 16 is using 14's video
//AddItem("SalmonRibcage", "Salmon ribcage", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonRibcageTake2Info.htm", 
//"Fish/Salmon/16. Salmon Ribcage Take 2-8.mp4", "Fish/Salmon/captions-16.vtt", #);
AddItem("SalmonSecondFillet", "Salmon second fillet", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonSecondFilletInfo.htm", 
"https://www.youtube.com/embed/KsGk96KzU_U?autoplay=1", "Fish/Salmon/captions-13.vtt", 13);
AddItem("SalmonSkinning", "Salmon skinning", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonSkinningInfo.htm", 
"https://www.youtube.com/embed/1csjjcIrhEo?autoplay=1", "Fish/Salmon/captions-18.vtt", 18);
AddItem("SalmonSteak", "Salmon steak", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/SalmonSteakInfo.htm", 
"https://www.youtube.com/embed/JJ9TqRwHVVg?autoplay=1", "Fish/Salmon/captions-10.vtt", 10);
AddItem("TryingSalmonSteak", "Salmon Steak tying", HotSpotClickableType.ClickableInfo, [], "Fish/Salmon/TryingSalmonSteakInfo.htm", 
"https://www.youtube.com/embed/Vy1tX_pI5XQ?autoplay=1",  "Fish/Salmon/captions-11.vtt", 11);

//FlatFish
AddItem("FlatFishBreakdown", "Flat Fish Breakdown", HotSpotClickableType.Clickable3DModel, 
["FlatFishIntro", "FlatFishBottomFillets", "FlatFishSkinning", "FlatFishTopFillet2","FlatFishTopFillet"], 
"", "", "", -1, new MeatCutAnimationTransition("FlatFishAnimationAction", ["flatfish", "flatfish_1"], 0, ["Flatfish"]));


AddItem("FlatFishIntro", "Flatfish intro", HotSpotClickableType.ClickableInfo, [], "Fish/FlatFish/FlatFishIntroInfo.htm", 
"https://www.youtube.com/embed/fy6DKawoq3Q?autoplay=1", "Fish/FlatFish/captions-19.vtt", 19);
AddItem("FlatFishBottomFillets", "Flatfish 3", HotSpotClickableType.ClickableInfo, [], "Fish/FlatFish/FlatFishBottonFilletsInfo.htm", 
"https://www.youtube.com/embed/LO8_NKBXPtk?autoplay=1", "Fish/FlatFish/captions-22.vtt", 22);
AddItem("FlatFishSkinning", "Flatfish 4", HotSpotClickableType.ClickableInfo, [], "Fish/FlatFish/FlatFishSkinningInfo.htm", 
"https://www.youtube.com/embed/gDc_-4eHXqA?autoplay=1",  "Fish/FlatFish/captions-23.vtt",23);
AddItem("FlatFishTopFillet2", "Flatfish 2", HotSpotClickableType.ClickableInfo, [], "Fish/FlatFish/FlatFishTopFillet2Info.htm", 
"https://www.youtube.com/embed/cwWY5sTtFN0?autoplay=1", "Fish/FlatFish/captions-21.vtt", 21);
AddItem("FlatFishTopFillet", "Flatfish 1", HotSpotClickableType.ClickableInfo, [], "Fish/FlatFish/FlatFishTopFilletInfo.htm", 
"https://www.youtube.com/embed/gDc_-4eHXqA?autoplay=1",  "Fish/FlatFish/captions-20.vtt", 20);

//Halibut
AddItem("HalibutBreakdown", "Halibut Breakdown", HotSpotClickableType.Clickable3DModel, 
["HalibutBottomFillet", "HalibutFillet1", "HalibutFillet2", "HalibutIntro", "HalibutPortioning", "HalibutSkinFillet"], 
"", "", "", -1, new MeatCutAnimationTransition("HalibutAnimationAction", ["HALIBUT_1", "HALIBUT_2"], 0, [ "Halibut"]));

AddItem("HalibutBottomFillet", "Halibut 3", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutBottonFilletInfo.htm", 
"https://www.youtube.com/embed/UgqHZNrd8Ag?autoplay=1","Fish/Halibut/captions-27.vtt", 27);
AddItem("HalibutFillet1", "Halibut 1", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutFillet1Info.htm", 
"https://www.youtube.com/embed/MHip3Uiue7U?autoplay=1", "Fish/Halibut/captions-25.vtt", 25);
AddItem("HalibutFillet2", "Halibut 2", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutFillet2Info.htm", 
"https://www.youtube.com/embed/aTBA4ZpezxE?autoplay=1","Fish/Halibut/captions-26.vtt", 26);
AddItem("HalibutIntro", "Halibut intro", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutIntroInfo.htm", 
"https://www.youtube.com/embed/EUpkm3zzwiU?autoplay=1", "Fish/Halibut/captions-24.vtt", 24);
AddItem("HalibutPortioning", "Halibut portioning", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutPortioningInfo.htm", 
"https://www.youtube.com/embed/n2YsdkqtFbk?autoplay=1", "Fish/Halibut/captions-29.vtt", 29);
AddItem("HalibutSkinFillet", "Halibut skinning", HotSpotClickableType.ClickableInfo, [], "Fish/Halibut/HalibutSkinFilletInfo.htm", 
"https://www.youtube.com/embed/oGH9u-w8xl0?autoplay=1","Fish/Halibut/captions-28.vtt", 28);

//HTMLButtons
AddItem("Shrimp", "Shrimp", HotSpotClickableType.HTMLButton, [], "Fish/HTMLButtons/ShrimpInfo.htm", 
"https://www.youtube.com/embed/GWqNdORI4ug?autoplay=1", "Fish/HTMLButtons/captions-30.vtt", 30);
AddItem("Oyster", "Oyster", HotSpotClickableType.HTMLButton, [], "Fish/HTMLButtons/OysterInfo.htm", 
"https://www.youtube.com/embed/LM5zB0su5cE?autoplay=1",  "Fish/HTMLButtons/captions-31.vtt", 31);
AddItem("Clams", "Clams", HotSpotClickableType.HTMLButton, [], "Fish/HTMLButtons/ClamsInfo.htm", 
"https://www.youtube.com/embed/aPy0gp4NzzY?autoplay=1", "Fish/HTMLButtons/captions-32.vtt", 32);
AddItem("Octopus", "Octopus", HotSpotClickableType.HTMLButton, [], "Fish/HTMLButtons/OctopusInfo.htm", 
"https://www.youtube.com/embed/7LkcjBZDhYA?autoplay=1","Fish/HTMLButtons/captions-33.vtt", 33);
AddItem("Squid", "Squid", HotSpotClickableType.HTMLButton, [], "Fish/HTMLButtons/SquidInfo.htm", 
"https://www.youtube.com/embed/RZ1CjOsOI_U?autoplay=1", "Fish/HTMLButtons/captions-34.vtt", 34);


AddModalData([new ModalDisplayData("Fish/ModalContent/media/1.jpg", "Fish on cutting board", "Fish Types", "Fish/ModalContent/1FishTypes.htm"),
new ModalDisplayData("Fish/ModalContent/media/2.jpg", "Shellfish", "Shellfish", "Fish/ModalContent/2Shellfish.htm"),
new ModalDisplayData("Fish/ModalContent/media/3.jpg", "Fish on cutting board", "Freshness and storage", "Fish/ModalContent/3Freshness.htm"),
new ModalDisplayData("Fish/ModalContent/media/4.jpg", "Cut open fish", "Market terms", "Fish/ModalContent/4MarketTerms.htm"),
new ModalDisplayData("Fish/ModalContent/media/5.jpg", "Fish on cutting board", "Sustainability", "Fish/ModalContent/5Sustainability.htm"),
new ModalDisplayData("Fish/ModalContent/media/6.jpg", "Seafood on plate", "Allergies", "Fish/ModalContent/6Allergies.htm"),
new ModalDisplayData("Fish/ModalContent/media/7.jpg", "Fish diagram", "Cooking", "Fish/ModalContent/7Cooking.htm"),
new ModalDisplayData("Fish/ModalContent/media/8.jpg", "Clams on ice", "Further Learning", "Fish/ModalContent/8Further.htm")]);



FinalizeItems('Fish/Fish_Animation_01.glb', '105_hdrmaps_com_free.hdr', "Fish and Shellfish", new THREE.Vector3(-20, 200, 0), new THREE.Vector2(0, 200), false, true);

SetQuizURL("../train/fish1"); //https://next-butchery.vercel.app/train/fish1

//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xfff8eb, 3, 500);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, 3, 400);
topLight.position.set(-150, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 3, 400);
bottomLight.position.set(350, 0, 0);
AddLight(bottomLight);

const leftLight = new THREE.PointLight(0xc6e4ff, 0, 300);
leftLight.position.set(0, 0, 250);
AddLight(leftLight);

const rightLight = new THREE.PointLight(0xc6e4ff, 0, 300);
rightLight.position.set(0, 0, -250);
AddLight(rightLight);

const belowLight = new THREE.PointLight(0xc6e4ff, .5, 450);
belowLight.position.set(0, -300, 0);
AddLight(belowLight);