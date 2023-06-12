import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetQuizURL  } from '../script.js';

//Lamb HUB
AddItem("LambBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, 
["AitchBone", "Belly", "Leg", "LegBreakdown", "NeckRemoval", "RemovingShoulder", "RibsBreakdown", "ShoulderBreakdown", "Skirt", "SaddleBreakdown"], 
"Lamb/Farm/FarmInfo.htm", "https://www.youtube.com/embed/-tdKKY_Zw3g?autoplay=1", "Lamb/Farm/captions-lamb farm.vtt", -1);

AddItem("AitchBone", "Atich Bone", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/AitchBoneInfo.htm", "https://www.youtube.com/embed/yM9H7KjwUlA?autoplay=1", "Lamb/Lamb/6. Aitch Bone.vtt", 13);
AddItem("Belly", "Belly", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/BellyInfo.htm", "https://www.youtube.com/embed/neLKByzCqfQ?autoplay=1","Lamb/Lamb/8. Belly.vtt", 22);

AddItem("NeckRemoval", "Neck Removal", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/NeckRemovalInfo.htm", "https://www.youtube.com/embed/REh_yKDD7Y0?autoplay=1", "Lamb/Lamb/9. Shoulder.vtt", 18);
AddItem("RemovingShoulder", "Shoulder Removal", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/RemovingShoulderInfo.htm", "https://www.youtube.com/embed/SR7N8_FekWo?autoplay=1","Lamb/Lamb/5. Front leg.vtt", 14);

AddItem("Skirt", "Skirt", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/SkirtInfo.htm", "https://www.youtube.com/embed/pNuFtRsCd6I?autoplay=1", "Lamb/Lamb/3. Flank.vtt", 3);
AddItem("Leg", "Leg", HotSpotClickableType.ClickableInfo, [], "Lamb/Lamb/LegInfo.htm", "https://www.youtube.com/embed/zHMDMjupWWE?autoplay=1", "Lamb/Lamb/4.Back leg.vtt", 5);


//Tenderlion HUB
//AddItem("TenderloinBreakdown", "Tenderloin Breakdown", HotSpotClickableType.Clickable3DModel, 
//[], "", "", "",
//new MeatCutAnimationTransition("Tenderloin_AnimationAction", ["RibsBelly", "Lamb_Carcass2001", "Lamb_Carcass2001_1"], 0, []));

//Leg HUB
AddItem("LegBreakdown", "Leg Breakdown", HotSpotClickableType.Clickable3DModel, 
["BonedLeg", "EyeofRound", "Flat", "HindShank", "InsideRound", "OutsideRound", "Sirloin", "SirloinTip"], "", "", "", -1, 
new MeatCutAnimationTransition("Leg_AnimationAction", ["Leg"], 0, []));

AddItem("BonedLeg", "Boned Leg", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/BonedLegInfo.htm", "https://www.youtube.com/embed/P-baSD-M8qc?autoplay=1", "Lamb/LegBreakdown/14. Boned leg.vtt", 7);
AddItem("EyeofRound", "Eye Of Round", HotSpotClickableType.NonClickable, [], "", "", "", -1);
AddItem("Flat", "Flat", HotSpotClickableType.NonClickable, [], "", "", "", -1);
AddItem("HindShank", "Hind Shank", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/HindShankInfo.htm","https://www.youtube.com/embed/e1-MYewBlMk?autoplay=1", "Lamb/LegBreakdown/13. Shank.vtt", 6);
AddItem("InsideRound", "Inside Round", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/InsideRoundInfo.htm","https://www.youtube.com/embed/1GrXpzJa9Do?autoplay=1", "Lamb/LegBreakdown/16. Inside Round.vtt", 8);
AddItem("OutsideRound", "Outside Round", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/OutsideRoundInfo.htm","https://www.youtube.com/embed/h5RKyzB6PB4?autoplay=1", "Lamb/LegBreakdown/17. Outside Round.vtt", 9);
AddItem("Sirloin", "Sirloin", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/SirloinInfo.htm","https://www.youtube.com/embed/cLxSpLuwGTk?autoplay=1","Lamb/LegBreakdown/18. Sirloin.vtt", 10);
AddItem("SirloinTip", "Sirloin tip/Knuckle", HotSpotClickableType.ClickableInfo, [], "Lamb/LegBreakdown/KuckleInfo.htm", "https://www.youtube.com/embed/QzO1Eu7CjNw?autoplay=1", "Lamb/LegBreakdown/19. Knuckle.vtt", 11);

AddItem("SaddleBreakdown", "Saddle Breakdown", HotSpotClickableType.Clickable3DModel, 
["Saddle" , "LoinChops", "Tenderloin", "LoinFabrication"], "", "", "", -1,
new MeatCutAnimationTransition("Tenderloin_AnimationAction.001", ["RibsBelly", "Lamb_Carcass2001", "Lamb_Carcass2001_1", "Leg", "Mesh003", "Mesh003_1", "Neck", "Shoulder", "Plane001"], 0, []));

AddItem("Saddle", "Saddle", HotSpotClickableType.ClickableInfo, [], "Lamb/Saddle/SaddleInfo.htm","https://www.youtube.com/embed/2vQPLXtFtF8?autoplay=1", "Lamb/Saddle/7. Saddle.vtt", 19);
AddItem("LoinChops", "Loin Chops", HotSpotClickableType.ClickableInfo, [], "Lamb/Saddle/LoinCutsInfo.htm", "https://www.youtube.com/embed/8R8AAxaCAoc?autoplay=1", "Lamb/Saddle/21. Loin cuts.vtt", 20);
AddItem("Tenderloin", "Tenderloin", HotSpotClickableType.ClickableInfo, [], "Lamb/Saddle/TenderloinInfo.htm","https://www.youtube.com/embed/8GIVyirssNI?autoplay=1","Lamb/Saddle/3.5 Tenderloin removal.vtt", 4);
AddItem("LoinFabrication", "Loin Fabrication", HotSpotClickableType.ClickableInfo, [], "Lamb/Saddle/TenderloinFabricationInfo.htm", "https://www.youtube.com/embed/8Bk2deury2Y?autoplay=1", "Lamb/Saddle/29 Tenderloin cleanup.vtt", 21);

//Ribs HUB
AddItem("RibsBreakdown", "Ribs Breakdown", HotSpotClickableType.Clickable3DModel, 
["Frenching1", "Frenching2", "RackChops", "RackPrimal", "RackRemoval", "RibsAndRack"], "", "", "", -1,
new MeatCutAnimationTransition("Armature.001Action", ["RibsBelly", "Shoulder", "tenderloin002", "tenderloin002_1", "tenderloin002_2", "Plane001_1", "Plane001_2", "Plane001_3", "Saddle_1", "Tenderloin", "Plane001"], 0, []));

AddItem("Frenching1", "Frenching a", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/Frenching1Info.htm", "https://www.youtube.com/embed/fEHzWHS_gT8?autoplay=1","Lamb/Ribs/25. French Ribs.vtt", 26);
AddItem("Frenching2", "Frenching b", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/Frenching2Info.htm", "https://www.youtube.com/embed/O-WQR6VInKs?autoplay=1", "Lamb/Ribs/26. String French.vtt", 27);
AddItem("RackChops", "Rack Chops", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/RackChopsInfo.htm", "https://www.youtube.com/embed/NaLEIv03fuY?autoplay=1","Lamb/Ribs/27. Chops.vtt", 28);
AddItem("RackPrimal", "Rack a", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/RackPrimalInfo.htm", "https://www.youtube.com/embed/lca-t0Mg5UE?autoplay=1", "Lamb/Ribs/22. Rack ribs.vtt", 23);
AddItem("RackRemoval", "Rack b", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/RackRemovalInfo.htm", "https://www.youtube.com/embed/JW9yFAlXzRs?autoplay=1","Lamb/Ribs/23. Cutting Ribs.vtt", 24);
AddItem("RibsAndRack", "Rack c", HotSpotClickableType.ClickableInfo, [], "Lamb/Ribs/RibsAndRackInfo.htm", "https://www.youtube.com/embed/76-gF3oft9w?autoplay=1", "Lamb/Ribs/24. Ribs and rack.vtt", 25);

//Shoulder HUB
AddItem("ShoulderBreakdown", "Shoulder Breakdown", HotSpotClickableType.Clickable3DModel, 
["Foreshank", "ShoulderRoast", "DeboningShoulder"], "", "", "", -1,
new MeatCutAnimationTransition("ArmatureAction", ["RibsBelly", "Lamb_Carcass2001", "Lamb_Carcass2001_1", "Saddle_1", "Leg", "Mesh003", "Mesh003_1", "Tenderloin", "Neck"], 0, []));

AddItem("Foreshank", "Foreshank", HotSpotClickableType.ClickableInfo, [], "Lamb/Shoulder/ForeshankInfo.htm", "https://www.youtube.com/embed/BtfPsMgNta0?autoplay=1", "Lamb/Shoulder/10. Shoulder.vtt", 15);
AddItem("ShoulderRoast", "Tying shoulder roast", HotSpotClickableType.ClickableInfo, [], "Lamb/Shoulder/ShoulderRoastInfo.htm", "https://www.youtube.com/embed/Hr6sB5QHFtY?autoplay=1","Lamb/Shoulder/12. Shoulder roast.vtt", 17);
AddItem("DeboningShoulder", "Deboning Shoulder", HotSpotClickableType.ClickableInfo, [], "Lamb/Shoulder/DeboningShoulderInfo.htm", "https://www.youtube.com/embed/Rr21ChHpFVE?autoplay=1", "Lamb/Shoulder/11. Shoulder shank.vtt", 16);

//HTML
AddItem("Intro", "Intro", HotSpotClickableType.HTMLButton, [], "Lamb/HTMLButtons/IntroInfo.htm", "https://www.youtube.com/embed/oJxK5yvBmuI?autoplay=1", "Lamb/HTMLButtons/1. Inro.vtt", 1);
AddItem("Offals", "Offal", HotSpotClickableType.HTMLButton, [], "Lamb/HTMLButtons/OffalsInfo.htm", "https://www.youtube.com/embed/J9RmU_1NzZw?autoplay=1","Lamb/HTMLButtons/2. Ofals.vtt", 2);
AddItem("LegExplanation", "Leg Explanation", HotSpotClickableType.HTMLButton, [], "Lamb/HTMLButtons/LegExplanationInfo.htm", "https://www.youtube.com/embed/d4iP79fB1_s?autoplay=1","Lamb/HTMLButtons/28. Leg explanation.vtt", 12);
//29 //AddItem("TenderloinRemoval", "Tenderloin", HotSpotClickableType.HTMLButton, [], "Lamb/Shoulder/DeboningShoulderInfo.htm", "Lamb/Shoulder/11. Shoulder Shank-1.mp4", "Lamb/Shoulder/11. Shoulder shank.vtt");

AddModalData([new ModalDisplayData("Lamb/ModalContent/media/1.jpg", "Sheep eating", "Types of Sheep", "Lamb/ModalContent/1Types of Sheep.htm"),
new ModalDisplayData("Lamb/ModalContent/media/2.jpg", "Lamb primal cuts", "Flavour, Cooking Methods and temperatures", "Lamb/ModalContent/2Flavour.htm"),
new ModalDisplayData("Lamb/ModalContent/media/4.jpg", "Group of sheep", "Sustainability", "Lamb/ModalContent/4Sustainability.htm"),
new ModalDisplayData("Lamb/ModalContent/media/5.jpg", "Meat on cutting board", "Price", "Lamb/ModalContent/5Price.htm"),
new ModalDisplayData("Lamb/ModalContent/media/6.jpg", "Certifications logos", "Certifications and marketing terms", "Lamb/ModalContent/6Certifications.htm"),
new ModalDisplayData("Lamb/ModalContent/media/7.jpg", "Grading logo", "Inspection and Grading", "Lamb/ModalContent/7Inspection.htm"),
new ModalDisplayData("Lamb/ModalContent/media/8.jpg", "Thermometer", "Storage and handling", "Lamb/ModalContent/8Storage.htm"),
new ModalDisplayData("Lamb/ModalContent/media/9.jpg", "Cook book", "Further Learning", "Lamb/ModalContent/9Further.htm")]);



FinalizeItems('Lamb/Lamb_Butchery_01.glb', '105_hdrmaps_com_free.hdr', "Lamb", new THREE.Vector3(50, 200, 0), new THREE.Vector2(150, 400), false);

SetQuizURL("../train/lamb1"); //https://next-butchery.vercel.app/train/lamb1

//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xfff8eb, 3, 500);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, 1.5, 400);
topLight.position.set(-350, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 1.5, 400);
bottomLight.position.set(350, 0, 0);
AddLight(bottomLight);

const leftLight = new THREE.PointLight(0xc6e4ff, 1.1, 300);
leftLight.position.set(0, 0, 250);
AddLight(leftLight);

const rightLight = new THREE.PointLight(0xc6e4ff, 1.1, 300);
rightLight.position.set(0, 0, -250);
AddLight(rightLight);

const belowLight = new THREE.PointLight(0xc6e4ff, 0.2, 450);
belowLight.position.set(0, -300, 0);
AddLight(belowLight);