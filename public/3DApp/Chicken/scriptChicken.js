import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script

import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, SetQuizURL} from '../script.js';

AddItem("ChickenBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, ["Crown", "LegBreakdown", "WingBreakdown"], "Chicken/Farm/FarmInfo.htm", "https://www.youtube.com/embed/Ovek3nDPjSg?autoplay=1", "Chicken/Farm/ChickenFarm.vtt", -1, 
new MeatCutAnimationTransition("Dark_Meat_AnimationAction", ["Chicken"], 0, ["Dark_Meat_Mesh", "Crown_Wing_1", "Crown_Wing_2"])); //Just send array of what to display, not if statements needed

AddItem("Crown", "Crown", HotSpotClickableType.Clickable3DModel, ["LegBreakdown", "WingBreakdown", "WhiteMeat", "BreastFrench", "Chicken_Supreme"], "Chicken/Crown/CrownInfo.htm", "https://www.youtube.com/embed/ba3Xc0q7BXY?autoplay=1", "Chicken/Crown/4. Breast_French.vtt", -1);


AddItem("Trussing", "Trussing", HotSpotClickableType.HTMLButton, ["LegBreakdown", "WingBreakdown"], "Chicken/Crown/TrussingInfo.htm", "https://www.youtube.com/embed/JDTH1C5CsZY?autoplay=1", "Chicken/Crown/1. Trussing.vtt", 1);

AddItem("WhiteMeat", "Removing Breasts", HotSpotClickableType.ClickableInfo, ["LegBreakdown", "WingBreakdown"], "Chicken/Crown/WhiteMeatInfo.htm", "https://www.youtube.com/embed/JcDEzaUp4Jw?autoplay=1", "Chicken/Crown/3. White meat.vtt", 2);

AddItem("BreastFrench", "Frenched Breast", HotSpotClickableType.ClickableInfo, ["LegBreakdown", "WingBreakdown"], "Chicken/Crown/BreastFrenchInfo.htm", "https://www.youtube.com/embed/ba3Xc0q7BXY?autoplay=1", "Chicken/Crown/4. Breast_French.vtt", 4);

AddItem("Chicken_Supreme", "Stuffed Supreme", HotSpotClickableType.ClickableInfo, ["LegBreakdown", "WingBreakdown"], "Chicken/Crown/Chicken_SupremeInfo.htm", "https://www.youtube.com/embed/e_dREAkrmcM?autoplay=1","Chicken/Crown/9. Chicken Supreme.vtt", 9);


AddItem("LegBreakdown", "Dark Meat", HotSpotClickableType.Clickable3DModel, ["SplitinHalf", "BackLeg", "Crown", "LegThing", "ThighThing", "WingBreakdown"], "Chicken/Legsback/LegsbackInfo.htm", "https://www.youtube.com/embed/AJxyDJUpvyM?autoplay=1", "Chicken/Legsback/5. Remvoing the leg from back.vtt", -1,
new MeatCutAnimationTransition("Leg_Thigh_DrumstickAction", ["Dark_Meat_Mesh"], 0, ["Leg_Thigh_Drumstick_1", "Leg_Thigh_Drumstick_2", "Leg_Thigh_Drumstick_3"]));

AddItem("SplitinHalf", "Removing Legs from Crown", HotSpotClickableType.ClickableInfo, ["Crown", "WingBreakdown"], "Chicken/Legsback/SplitinHalfInfo.htm", "https://www.youtube.com/embed/uLXU-l-U-CU?autoplay=1", "Chicken/Legsback/2. Separating white and dark meat.vtt", 2);

AddItem("BackLeg", "Back Legs", HotSpotClickableType.ClickableInfo, ["Crown", "WingBreakdown"], "Chicken/Legsback/LegsbackInfo.htm", "https://www.youtube.com/embed/AJxyDJUpvyM?autoplay=1", "Chicken/Legsback/5. Remvoing the leg from back.vtt", 5);


AddItem("WingBreakdown", "Wing", HotSpotClickableType.Clickable3DModel, ["Wing_Drumette", "Crown", "LegBreakdown"], "Chicken/Wing/WingInfo.htm", "Chicken/Wing/7. Wing Drumette V2-1.mp4", "Chicken/Wing/7. Wing_Drumette.vtt", -1, 
new MeatCutAnimationTransition("Crown_Wing_AnimationAction", [], 0, []));

AddItem("Wing_Drumette", "Preparing a Lollipop", HotSpotClickableType.ClickableInfo, ["Crown", "LegBreakdown"], "Chicken/Wing/WingInfo.htm", "https://www.youtube.com/embed/7Pjiyy3wkzw?autoplay=1", "Chicken/Wing/7. Wing_Drumette.vtt", 7);

AddItem("LegThing", "Splitting Leg and Thigh", HotSpotClickableType.ClickableInfo, ["Crown", "LegBreakdown", "WingBreakdown", "ChickenThigh"], "Chicken/Wing/WingInfo.htm", "https://www.youtube.com/embed/pZB5BTyJRLs?autoplay=1", "Chicken/Drumstick/6. Leg.vtt", 6);


AddItem("ThighThing", "Deboning Thigh", HotSpotClickableType.ClickableInfo, ["Crown", "LegBreakdown", "Leg", "WingBreakdown"], "Chicken/ChickenThigh/ChickenThighInfo.htm", "https://www.youtube.com/embed/P8sqrpy9NHg?autoplay=1", "Chicken/ChickenThigh/10. Thigh.vtt", 10);




AddItem("SpatchcockThing", "Spatchcock Technique", HotSpotClickableType.HTMLButton, ["Crown", "LegBreakdown", "WingBreakdown", "Leg", "ChickenThigh"], "Chicken/Spatchcock/SpatchcockInfo.htm", "https://www.youtube.com/embed/AJxyDJUpvyM?autoplay=1", "Chicken/Spatchcock/11. Spatchcock.vtt", 11);


AddItem("Sanitation", "Sanitation", HotSpotClickableType.HTMLButton, ["Crown", "LegBreakdown", "WingBreakdown", "Leg", "ChickenThigh"], "Chicken/Sanitation/Sanitation.htm", "https://www.youtube.com/embed/rR6f-LhlFWo?autoplay=1", "Chicken/Sanitation/8. Sanitation.vtt", 8);




AddModalData([new ModalDisplayData("Chicken/ModalContent/media/types.jpg", "Different chicken", "Types of Poutry", "Chicken/ModalContent/types.htm"), 
new ModalDisplayData("Chicken/ModalContent/media/market.jpg", "Different Poultry on a tray", "Market Classes", "Chicken/ModalContent/market.htm"),
new ModalDisplayData("Chicken/ModalContent/media/life.jpg", "Chicken on farm", "Life cycle", "Chicken/ModalContent/life.htm"),
new ModalDisplayData("Chicken/ModalContent/media/certifications.jpg", "Different Poultry on a tray", "Certifications & Marketing Terms", "Chicken/ModalContent/certifications.htm"),
new ModalDisplayData("Chicken/ModalContent/media/hormones.jpg", "Chicken on farm", "Hormones and health", "Chicken/ModalContent/hormones.htm"),
new ModalDisplayData("Chicken/ModalContent/media/inspection.jpg", "Grade logos", "Inspection and grading", "Chicken/ModalContent/inspection.htm"),
new ModalDisplayData("Chicken/ModalContent/media/tender.jpg", "Cut poultry", "Tenderness & Flavour", "Chicken/ModalContent/tender.htm"),
new ModalDisplayData("Chicken/ModalContent/media/cooking.jpg", "Primal chicken diagram", "Cooking methods", "Chicken/ModalContent/cooking.htm"),
new ModalDisplayData("Chicken/ModalContent/media/illness.jpg", "Cutting chicken", "Food-Born Illness", "Chicken/ModalContent/illness.htm"),
new ModalDisplayData("Chicken/ModalContent/media/storage.jpg", "Poultry on board", "Storage", "Chicken/ModalContent/storage.htm"),
new ModalDisplayData("Chicken/ModalContent/media/future.jpg", "Book on table", "Further Learning", "Chicken/ModalContent/future.htm")]);

FinalizeItems('Chicken/ChickenPieces.glb', '105_hdrmaps_com_free.hdr', "Poultry", new THREE.Vector3(0, 120, -85), new THREE.Vector2(10, 185), true);

SetQuizURL("../train/chicken1"); //https://next-butchery.vercel.app/train/chicken1

AddDefaultLights();
