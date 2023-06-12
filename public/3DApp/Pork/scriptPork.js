import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetQuizURL  } from '../script.js';

//Pork
AddItem("PorkBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, 
["RackBreakdown", "ShoulderBreakdown", "LoinBreakdown", "LegBreakdown", "Shoulder", "Belly", "BackLeg", "BackLegSkinRemoval", "RemovalAitchBone", "RemoveFemur", "BellyChops", "SideRibs", "BackRibs", "Head"], 
"Pork/Farm/FarmInfo.htm", "https://www.youtube.com/embed/nR93wsxrl2E?autoplay=1", "Pork/Farm/captions-1 (pig farms).vtt", -1);

AddItem("Shoulder", "Removal of Shoulder", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/ShoulderInfo.htm","https://www.youtube.com/embed/OWtAHE6-a5g?autoplay=1","Pork/Pork/3. Shoulder.vtt", 3);
AddItem("BackLeg", "Removal of Back Leg", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BackLegInfo.htm", "https://www.youtube.com/embed/xMnAie1ikTM?autoplay=1", "Pork/Pork/4. Backleg.vtt", 4);
AddItem("Belly", "Removal of Belly", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BellyInfo.htm","https://www.youtube.com/embed/lv4ZBSmoQoY?autoplay=1", "Pork/Pork/5. Belly.vtt", 5);
AddItem("BackLegSkinRemoval", "Removal Skin", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BackLegSkinRemovalInfo.htm", "https://www.youtube.com/embed/9jWd5Y4tLw0?autoplay=1","Pork/Pork/7. Back leg skin removal.vtt", 7);
AddItem("RemovalAitchBone", "Removal of aitch bone", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BackLegHBoneInfo.htm", "https://www.youtube.com/embed/L3NLJChZh4g?autoplay=1", "Pork/Pork/8. Back leg H bone.vtt", 8);
AddItem("RemoveFemur", "Remove femur", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/DeboneLegInfo.htm", "https://www.youtube.com/embed/Zy_zb3B9c2A?autoplay=1", "Pork/Pork/9. Debone leg remove femur.vtt", 9);
AddItem("BellyChops", "Belly chops", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BellyChopsInfo.htm", "https://www.youtube.com/embed/t0eU0Rtr1Qc?autoplay=1", "Pork/Pork/18 Belly chops.vtt", 18);
AddItem("SideRibs", "Side ribs boneless belly", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/SideRibsInfo.htm", "https://www.youtube.com/embed/f8e6yGG3aEE?autoplay=1", "Pork/Pork/19. Side ribs boneless belly.vtt", 19);
AddItem("BackRibs", "Back Ribs", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/BackRibsInfo.htm", "https://www.youtube.com/embed/rsKl2SGiUIU?autoplay=1", "Pork/Pork/25. Back ribs.vtt", 25);
AddItem("Head", "Head", HotSpotClickableType.ClickableInfo, [], "Pork/Pork/HeadInfo.htm", "https://www.youtube.com/embed/FqvzcapUKiU?autoplay=1","Pork/Pork/27. Head.vtt", 27);

//Rack
AddItem("RackBreakdown", "Rack Breakdown", HotSpotClickableType.Clickable3DModel, 
["BonelessRack", "PorkRackChop"], "", "", "", -1,
new MeatCutAnimationTransition("RackAnimationAction", ["LoinBelly", "Loins_1", "Loins_2", "Loins_3"], 0, []));

AddItem("PorkRackChop", "Pork rack chop", HotSpotClickableType.ClickableInfo, [], "Pork/Rack/PorkRackChopInfo.htm","https://www.youtube.com/embed/waO2ozCdxr0?autoplay=1", "Pork/Rack/24. Pork rack chop.vtt", 24);
AddItem("BonelessRack", "Boneless rack", HotSpotClickableType.ClickableInfo, [], "Pork/Rack/BonelessRackInfo.htm", "https://www.youtube.com/embed/nUB0ckFPOlo?autoplay=1", "Pork/Rack/26. Boneless rack.vtt", 26);

//Loin
AddItem("LoinBreakdown", "Loin Breakdown", HotSpotClickableType.Clickable3DModel, 
["LoinBreakdownVideo", "Midloin", "Sirloin", "TenderLoinProcessing"], "", "", "",
new MeatCutAnimationTransition("LoinAnimationAction", ["LoinBelly", "Rack"], 0, []));
AddItem("LoinBreakdownVideo", "Loin Breakdown", HotSpotClickableType.ClickableInfo, [], "Pork/Loin/LoinBreakdownInfo.htm","https://www.youtube.com/embed/75xKn9K2o2Y?autoplay=1", "Pork/Loin/20. Loin breakdown.vtt", 20);
AddItem("TenderLoinProcessing", "Tenderloin processing", HotSpotClickableType.ClickableInfo, [], "Pork/Loin/TenderloinProcessingInfo.htm", "https://www.youtube.com/embed/qInegizNvoo?autoplay=1","Pork/Loin/21. Tenderloin processing.vtt", 21);
AddItem("Sirloin", "Sirloin processing", HotSpotClickableType.ClickableInfo, [], "Pork/Loin/SirloinProcessingInfo.htm", "https://www.youtube.com/embed/dt1zNGja8y4?autoplay=1", "Pork/Loin/22. Sirloin processing.vtt", 22);
AddItem("Midloin", "Mid-Loin processing", HotSpotClickableType.ClickableInfo, [], "Pork/Loin/MidloinProcessingInfo.htm", "https://www.youtube.com/embed/MLtnW9Q5SCU?autoplay=1", "Pork/Loin/23. Midloin processing.vtt", 23);

//Shoulder
AddItem("ShoulderBreakdown", "Shoulder Breakdown", HotSpotClickableType.Clickable3DModel, 
["ShoulderTrotterAndHock", "BostonButtAndPicnic", "CountryRibsAndBrisket", "BonelessPicnicRoast", "BostonButtDebone"], "", "", "", -1,
new MeatCutAnimationTransition("ShoulderAnimationAction", ["Shoulder"], 0, []));

AddItem("ShoulderTrotterAndHock", "Shoulder front trotter and hock", HotSpotClickableType.ClickableInfo, [], "Pork/Shoulder/ShoulderTrotterInfo.htm", "https://www.youtube.com/embed/BJ52T_PBtvY?autoplay=1", "Pork/Shoulder/13. Shoulder trotter and hawk.vtt", 13);
AddItem("BostonButtAndPicnic", "Boston Butt and Picnic", HotSpotClickableType.ClickableInfo, [], "Pork/Shoulder/BostonButtInfo.htm", "https://www.youtube.com/embed/0yxqqcXUQUw?autoplay=1","Pork/Shoulder/14. Shoulder boston butt and picnic.vtt", 14);
AddItem("CountryRibsAndBrisket", "Country Ribs and Brisket", HotSpotClickableType.ClickableInfo, [], "Pork/Shoulder/PicnicRibsInfo.htm", "https://www.youtube.com/embed/CFJEJC9SnGw?autoplay=1", "Pork/Shoulder/15. Picnic ribs and brisket.vtt", 15);
AddItem("BonelessPicnicRoast", "Boneless picnic roast", HotSpotClickableType.ClickableInfo, [], "Pork/Shoulder/PicnicBonelessInfo.htm", "https://www.youtube.com/embed/Vx-4G_LywMQ?autoplay=1", "Pork/Shoulder/16. Picnic boneless roast.vtt", 16);
AddItem("BostonButtDebone", "Boston butt debone and skin", HotSpotClickableType.ClickableInfo, [], "Pork/Shoulder/BostonButtDeboneInfo.htm", "https://www.youtube.com/embed/-bGtXIeHkyI?autoplay=1", "Pork/Shoulder/17. Boston butt debone.vtt", 17);

//Leg
AddItem("LegBreakdown", "Leg Breakdown", HotSpotClickableType.Clickable3DModel, 
["BackTrotterAndHock", "SirloinTip", "InsideRound", "OutsideRound"], "", "", "", -1,
new MeatCutAnimationTransition("ArmatureAction", ["BackLeg"], 0, []));

AddItem("BackTrotterAndHock", "Back trotter and hock", HotSpotClickableType.ClickableInfo, [], "Pork/BackLeg/BackTrotterInfo.htm", "https://www.youtube.com/embed/n9De0vF-DYs?autoplay=1", "Pork/BackLeg//6. Back trotter and hawk.vtt", 6);
AddItem("SirloinTip", "Inside, Sirloin tip, Gooseneck", HotSpotClickableType.ClickableInfo, [], "Pork/BackLeg/SirloinTipInfo.htm", "https://www.youtube.com/embed/-JuGZtJ37kY?autoplay=1", "Pork/BackLeg//10. Inside, sirloin, gooseneck.vtt", 10);
AddItem("InsideRound", "Inside round", HotSpotClickableType.ClickableInfo, [], "Pork/BackLeg/InsideRoundInfo.htm", "https://www.youtube.com/embed/cUBJqRwiPkE?autoplay=1","Pork/BackLeg/11. Inside Round.vtt", 11);
AddItem("OutsideRound", "Outside round", HotSpotClickableType.ClickableInfo, [], "Pork/BackLeg/OutsideRoundInfo.htm", "https://www.youtube.com/embed/pl0912fPd-w?autoplay=1", "Pork/BackLeg/12. Outside Round.vtt", 12);



//HTML
AddItem("Intro", "Intro", HotSpotClickableType.HTMLButton, [], "Pork/HTMLButtons/IntroInfo.htm", "https://www.youtube.com/embed/g0dOpfRUEKs?autoplay=1", "Pork/HTMLButtons/1. Pork Intro.vtt", 1);
AddItem("ToolsAndFat", "Tools and Fat", HotSpotClickableType.HTMLButton, [], "Pork/HTMLButtons/ToolsAndFatInfo.htm", "https://www.youtube.com/embed/Jr1K8A3vo80?autoplay=1", "Pork/HTMLButtons/2. Tools and fat.vtt", 2);



AddModalData([new ModalDisplayData("Pork/ModalContent/media/1.jpg", "Pigs laying in forest", "Type of Pigs", "Pork/ModalContent/1TypesofPigs.htm"),
new ModalDisplayData("Pork/ModalContent/media/2.jpg", "Pork primal cuts", "Flavour, Cooking Methods and temperatures", "Pork/ModalContent/2Flavour.htm"),
new ModalDisplayData("Pork/ModalContent/media/3.jpg", "Pig in forest", "Sustainability", "Pork/ModalContent/3Sustainability.htm"),
new ModalDisplayData("Pork/ModalContent/media/4.jpg", "Pig in forest", "Price", "Pork/ModalContent/4Price.htm"),
new ModalDisplayData("Pork/ModalContent/media/5.jpg", "Pig on cutting board", "Certifications and marketing terms", "Pork/ModalContent/5Certifications.htm"),
new ModalDisplayData("Pork/ModalContent/media/6.jpg", "Ontario Inspection Stamp", "Ontario Inspection Stamp", "Pork/ModalContent/6Inspection.htm"),
new ModalDisplayData("Pork/ModalContent/media/7.jpg", "Thermometer", "Storage and handling", "Pork/ModalContent/7Storage.htm"),
new ModalDisplayData("Pork/ModalContent/media/8.jpg", "Book on table", "Further Learning", "Pork/ModalContent/8Future.htm")]);

SetQuizURL("../train/pork1"); //https://next-butchery.vercel.app/train/pork1

FinalizeItems('Pork/Pork_Butchery_01.glb', '105_hdrmaps_com_free.hdr', "Pork", new THREE.Vector3(170, 150, 0), new THREE.Vector2(10, 230), false);
//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xfff8eb, 1.6, 500);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, 3, 400);
topLight.position.set(-350, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 1.2, 400);
bottomLight.position.set(350, 0, 0);
AddLight(bottomLight);

const leftLight = new THREE.PointLight(0xc6e4ff, 1.5, 300);
leftLight.position.set(0, 0, 250);
AddLight(leftLight);

const rightLight = new THREE.PointLight(0xc6e4ff, 1.2, 300);
rightLight.position.set(0, 0, -250);
AddLight(rightLight);

const belowLight = new THREE.PointLight(0xc6e4ff, .1, 450);
belowLight.position.set(0, -300, 0);
AddLight(belowLight);