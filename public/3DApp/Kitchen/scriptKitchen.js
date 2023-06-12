import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetSizeOfTextClickable3DSizeMultiplier, SetQuizURL  } from '../script.js';


//Kitchen
AddItem("KitchenBreakdown", "Visiting a Butcher", HotSpotClickableType.Clickable3DModel, 
["BlenderBreakdown", "SlicerBreakdown", "DelicatorBreakdown", 
"KnivesAndToolsBreakdown", "VacuumSealerBreakdown", "BandsawBreakdown",], 
"Kitchen/Farm/ButchershopInfo.htm", "https://www.youtube.com/embed/8WVO4buJ5ro?autoplay=1", "Kitchen/Farm/captions-Butchershop.vtt", -1);

//Blender
AddItem("BlenderBreakdown", "Meat Grinder Breakdown", HotSpotClickableType.Clickable3DModel, 
["BlenderAssembly", "BlenderCorrectBlendPos", "BlenderDisassembly", "BlenderOperation"], 
"", "", "", -1, new MeatCutAnimationTransition("BlenderAnimationAction", [], 0, [], true));
AddItem("BlenderAssembly", "Meat Grinder Assembly", HotSpotClickableType.ClickableInfo, [], "Kitchen/Blender/BlenderAssemblyInfo.htm", 
"https://www.youtube.com/embed/TO36iUKoYCs?autoplay=1", "Kitchen/Blender/captions-14.vtt", 14);
AddItem("BlenderCorrectBlendPos", "Correct Blade position", HotSpotClickableType.ClickableInfo, [], "Kitchen/Blender/BlenderCorrectBlendPosInfo.htm", 
"https://www.youtube.com/embed/M-F3mTNkHsA?autoplay=1", "Kitchen/Blender/captions-13.vtt", 13);
AddItem("BlenderDisassembly", "Meat Grinder disassembly", HotSpotClickableType.ClickableInfo, [], "Kitchen/Blender/BlenderDisassemblyInfo.htm", 
"https://www.youtube.com/embed/7LzUSZZXSgk?autoplay=1", "Kitchen/Blender/captions-15.vtt", 15);
AddItem("BlenderOperation", "Meat Grinder Operation", HotSpotClickableType.ClickableInfo, [], "Kitchen/Blender/BlenderOperationInfo.htm", 
"https://www.youtube.com/embed/IBG987-7EMk?autoplay=1", "Kitchen/Blender/captions-12.vtt", 12);

//Slicer
AddItem("SlicerBreakdown", "Slicer Breakdown", HotSpotClickableType.Clickable3DModel, 
["SlicerOverview", "SlicerUsage"], 
"", "", "", -1, new MeatCutAnimationTransition("SlicerAnimationAction", [], 0, [], true));
AddItem("SlicerOverview", "Slicer overview", HotSpotClickableType.ClickableInfo, [], "Kitchen/Slicer/SlicerOverviewInfo.htm", 
"https://www.youtube.com/embed/ffc0VRWAaNM?autoplay=1", "Kitchen/Slicer/captions-16.vtt", 16);
AddItem("SlicerUsage", "Slicer Disassembly", HotSpotClickableType.ClickableInfo, [], "Kitchen/Slicer/SlicerUsageInfo.htm", 
"https://www.youtube.com/embed/ACu_U-qjMP8?autoplay=1", "Kitchen/Slicer/captions-17.vtt", 17);

//Delicator
AddItem("DelicatorBreakdown", "Delicator Breakdown", HotSpotClickableType.Clickable3DModel, 
["TenderizerIntro", "TenderizerMeat"], 
"", "", "", -1, new MeatCutAnimationTransition("ArmatureAction", [], 0, [], true));
AddItem("TenderizerIntro", "Tenderizer intro", HotSpotClickableType.ClickableInfo, [], "Kitchen/Delicator/TenderizerIntroInfo.htm", 
"https://www.youtube.com/embed/c6qE7bI0sdo?autoplay=1","Kitchen/Delicator/captions-9.vtt", 9);
AddItem("TenderizerMeat", "Tenderizing meat", HotSpotClickableType.ClickableInfo, [], "Kitchen/Delicator/TenderizerMeatInfo.htm", 
"https://www.youtube.com/embed/TQblh8FdPRU?autoplay=1","Kitchen/Delicator/captions-10.vtt", 10);

//Knives And Tools
AddItem("KnivesAndToolsBreakdown", "Knives And Tools Breakdown", HotSpotClickableType.Clickable3DModel, 
["KnivesAndMallets", "FrenchAndBoningKnife", "KnifeSharpening", "KitchenTools"], 
"", "", "", -1);
AddItem("KnivesAndMallets", "Knives and mallets", HotSpotClickableType.ClickableInfo, [], "Kitchen/KnivesAndTools/KnifesAndMalletsInfo.htm", 
"https://www.youtube.com/embed/JEA0pzhlC1s?autoplay=1","Kitchen/KnivesAndTools/captions-7.vtt", 7);
AddItem("FrenchAndBoningKnife", "French and boning knife", HotSpotClickableType.ClickableInfo, [], "Kitchen/KnivesAndTools/FrenchAndBoningKnifeInfo.htm", 
"https://www.youtube.com/embed/Ait8qlJ7ebk?autoplay=1", "Kitchen/KnivesAndTools/captions-5.vtt", 5);
AddItem("KnifeSharpening", "Knife sharpening", HotSpotClickableType.ClickableInfo, [], "Kitchen/KnivesAndTools/KnifeSharpeningInfo.htm", 
"https://www.youtube.com/embed/JaMEtV_SMW0?autoplay=1", "Kitchen/KnivesAndTools/captions-6.vtt", 6);
AddItem("KitchenTools", "Kitchen tools", HotSpotClickableType.ClickableInfo, [], "Kitchen/KnivesAndTools/KitchenToolsInfo.htm", 
"https://www.youtube.com/embed/TyHvnMvTDdA?autoplay=1", "Kitchen/KnivesAndTools/captions-8.vtt", 8);

//Vacuum Sealer
AddItem("VacuumSealerBreakdown", "Vacuum Sealer Breakdown", HotSpotClickableType.Clickable3DModel, 
["VacuumSealer", "BaggingMeat"], 
"", "", "", -1, new MeatCutAnimationTransition("VacuumSealerAnimatiomAction", [], 0, [], true));
AddItem("VacuumSealer", "Vacuum sealer", HotSpotClickableType.ClickableInfo, [], "Kitchen/VacuumSealer/VacuumSealerInfo.htm", 
"https://www.youtube.com/embed/tNxy8Hch45s?autoplay=1", "Kitchen/VacuumSealer/captions-3.vtt", 3);
AddItem("BaggingMeat", "Vacuum sealing", HotSpotClickableType.ClickableInfo, [], "Kitchen/VacuumSealer/BaggingMeatInfo.htm", 
"https://www.youtube.com/embed/xNBMk77LsVw?autoplay=1", "Kitchen/VacuumSealer/captions-2.vtt", 2);

AddItem("BandsawBreakdown", "Bandsaw Breakdown", HotSpotClickableType.Clickable3DModel, 
["Bandsaw"], 
"", "", "", -1);
AddItem("Bandsaw", "Using the bandsaw", HotSpotClickableType.ClickableInfo, [], "Kitchen/Bandsaw/BandsawInfo.htm", 
"https://www.youtube.com/embed/BqX2zYfYs54?autoplay=1", "Kitchen/Bandsaw/captions-1.vtt", 1);

//HTMLButtons
AddItem("Sanitation", "Sanitation", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/SanitationInfo.htm", 
"https://www.youtube.com/embed/nSqHmLiHaXA?autoplay=1", "Kitchen/HTMLButtons/captions-4.vtt", 4);
AddItem("Larding", "Larding", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/LardingInfo.htm", 
"https://www.youtube.com/embed/Ux8xUD7pOn0?autoplay=1", "Kitchen/HTMLButtons/captions-11.vtt", 11);

AddItem("Scale", "Using a scale", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/ScaleInfo.htm", 
"https://www.youtube.com/embed/NrMTGLxPF0s?autoplay=1", "Kitchen/HTMLButtons/2.1 Using A Scale.vtt", 18);
AddItem("Measurements", "Volume measurements", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/MeasurementsInfo.htm", 
"https://www.youtube.com/embed/ubaISnj18EQ?autoplay=1", "Kitchen/HTMLButtons/2.2 Use Liquid Volume Measurements.vtt", 19);
AddItem("Yield", "Concept of yield", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/YieldInfo.htm", 
"https://www.youtube.com/embed/rjqIUH7M4ko?autoplay=1", "Kitchen/HTMLButtons/2.4 The Concept of Yield.vtt", 20);
AddItem("UsingBlender", "Using a blender", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/UsingBlenderInfo.htm", 
"https://www.youtube.com/embed/cMK1z1EwkN0?autoplay=1","Kitchen/HTMLButtons/2.7 Setup and Use a Blender.vtt", 21);
AddItem("ImmersionBlender", "Immersion Blender", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/ImmersionBlenderInfo.htm", 
"https://www.youtube.com/embed/9ktGlF1rHUk?autoplay=1", "Kitchen/HTMLButtons/2.8 Immersion Blender.vtt", 22);

AddItem("UnderstandingYield", "Understanding Yield", HotSpotClickableType.HTMLButton, [], "Kitchen/HTMLButtons/UnderstandingYieldInfo.htm", 
"https://www.youtube.com/embed/xzCKU0PpYUs?autoplay=1","Kitchen/HTMLButtons/Final Yield.vtt", 23);

AddModalData([new ModalDisplayData("Kitchen/ModalContent/media/1.jpg", "Knife on cutting board", "What is butchery?", "Kitchen/ModalContent/1Butchery.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/2.jpg", "Cutting board", "Sanitation", "Kitchen/ModalContent/2Sanitation.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/3.jpg", "Cutting meat", "First Aid", "Kitchen/ModalContent/3FirstAid.htm"),
//new ModalDisplayData("Kitchen/ModalContent/media/4.jpg", "Meat presented", "Yield Concepts", "Kitchen/ModalContent/4Yield.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/5.jpg", "Meat in fridge", "Fridge Rules", "Kitchen/ModalContent/5Fridge.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/6.jpg", "Knives on cutting board", "Butchery Guidelines", "Kitchen/ModalContent/6Guidelines.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/7.jpg", "Pigs in forest", "Sustainability", "Kitchen/ModalContent/7Sustainability.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/8.jpg", "Sinks in kitchen", "Washing and sanitizing", "Kitchen/ModalContent/8Washing.htm"),
new ModalDisplayData("Kitchen/ModalContent/media/9.jpg", "Cook book", "Further learning", "Kitchen/ModalContent/9Further.htm")]);

SetSizeOfTextClickable3DSizeMultiplier(2);

FinalizeItems('Kitchen/Orientation_Animation_01.glb', 'empty_warehouse_01_1k copy.hdr', "Orientation", new THREE.Vector3(0, 100, 340), new THREE.Vector2(10, 460), false);

SetQuizURL("https://next-butchery.vercel.app/train/kitchen1");

//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xfff8eb, 5, 800);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, 3, 400);
topLight.position.set(-150, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 3, 500);
bottomLight.position.set(100, 0, 0);
AddLight(bottomLight);

const leftLight = new THREE.PointLight(0xc6e4ff, 3, 300);
leftLight.position.set(0, 0, 250);
AddLight(leftLight);

const rightLight = new THREE.PointLight(0xc6e4ff, 3, 300);
rightLight.position.set(0, 0, -250);
AddLight(rightLight);

const belowLight = new THREE.PointLight(0xc6e4ff, .5, 450);
belowLight.position.set(0, -300, 0);
AddLight(belowLight);