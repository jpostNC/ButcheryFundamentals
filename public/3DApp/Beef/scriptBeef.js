import * as THREE from '../build/three.module.js'; //ISSUE, need to make it point to a folder higher so it grabs the same one as the script //Needed to create and add lights manually
import { AddItem, FinalizeItems, AddDefaultLights, ModalDisplayData, HotSpotClickableType, MeatCutAnimationTransition, AddModalData, AddLight, SetQuizURL  } from '../script.js';

//Beef
AddItem("CowBreakdown", "Farm Tour", HotSpotClickableType.Clickable3DModel, 
["RemovingHipBone", "BeefClod", "LegBreakdown", "LoinBreakdown", "RibBreakdown"], 
"Beef/Farm/FarmInfo.htm", "https://www.youtube.com/embed/tDv6b5MYClY?autoplay=1", "Beef/Farm/captions-beef farm.vtt", -1);

AddItem("BeefClod", "Beef clod", HotSpotClickableType.ClickableInfo, [], "Beef/Beef/BeefClodInfo.htm", "https://www.youtube.com/embed/WI1_dEjvmOI?autoplay=1", "Beef/Beef/26.vtt", 26);
AddItem("RemovingHipBone", "Removing hip bone", HotSpotClickableType.ClickableInfo, [], "Beef/Beef/RemovingHibBoneInfo.htm", "https://www.youtube.com/embed/ma9l4ZI8MCw?autoplay=1", "Beef/Beef/8.vtt", 8);

//Leg
AddItem("LegBreakdown", "Leg Breakdown", HotSpotClickableType.Clickable3DModel, 
["TopAndBottomSirloin", "Chateubriand", "TopSirloin", "InsideRound","SirloinTipKnuckle", "EyeOfRound",  
"Shank", "TopSirloinIntro", "TopSirloinSteak", "SirloinBaseball", "SirloinButt"], 
"", "", "", -1,
new MeatCutAnimationTransition("LegAnimation.001Action", ["Leg"], 0, []));

//new MeatCutAnimationTransition("RackAnimationAction", ["LoinBelly", "Loins_1", "Loins_2", "Loins_3"], 0, []));

AddItem("TopAndBottomSirloin", "Bottom Sirloin", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/TopAndBottemSirloinInfo.htm", "https://www.youtube.com/embed/GSbMcc5N5Zw?autoplay=1", "Beef/Leg/6.vtt", 6);
AddItem("Chateubriand", "Chateaubriand", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/ChateaubriandInfo.htm", "https://www.youtube.com/embed/pRblAp7_B1E?autoplay=1", "Beef/Leg/7.vtt", 7);
AddItem("TopSirloin", "Top Sirloin", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/TopSirloinInfo.htm", "https://www.youtube.com/embed/F3IgT44Bh2I?autoplay=1", "Beef/Leg/9.vtt", 9);
AddItem("InsideRound", "Inside Round", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/InsideRoundInfo.htm", "https://www.youtube.com/embed/-6M5MYv2JaE?autoplay=1", "Beef/Leg/10.vtt", 10);
AddItem("SirloinTipKnuckle", "Sirloin Tip Knuckle", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/SirloinTipKnuckleInfo.htm", "https://www.youtube.com/embed/airLzL1fKBs?autoplay=1", "Beef/Leg/11.vtt", 11);
AddItem("EyeOfRound", "Eye Of Round", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/EyeOfRoundInfo.htm", "https://www.youtube.com/embed/QRtvu408A40?autoplay=1", "Beef/Leg/12.vtt", 12);
AddItem("Shank", "Shank", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/ShankInfo.htm", "https://www.youtube.com/embed/pYqqCPVCZlc?autoplay=1", "Beef/Leg/14.vtt", 14);
AddItem("TopSirloinIntro", "Top sirloin intro", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/TopSirloinIntroInfo.htm", "https://www.youtube.com/embed/OUVekSKs-bM?autoplay=1", "Beef/Leg/16.vtt", 16);
AddItem("TopSirloinSteak", "Top sirloin steak", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/PTopSirloinSteakInfo.htm", "https://www.youtube.com/embed/Dx1MzQpa3uE?autoplay=1", "Beef/Leg/17.vtt", 17);
AddItem("SirloinBaseball", "Sirloin baseball", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/SirloinBaseballInfo.htm", "https://www.youtube.com/embed/_Gvc5Q3MSV0?autoplay=1", "Beef/Leg/18.vtt", 18);
AddItem("SirloinButt", "Sirloin Butt", HotSpotClickableType.ClickableInfo, [], "Beef/Leg/SirloinButtInfo.htm", "https://www.youtube.com/embed/EEGvInLDgPk?autoplay=1", "Beef/Leg/19.vtt", 19);

//Loin
AddItem("LoinBreakdown", "Loin Breakdown", HotSpotClickableType.Clickable3DModel, 
["TenderloinIntro", "TenderloinBreakdownVideo", "SlipKnot", "ShortloinOverview", "Poterhouse", "Tenderloin", "Striploin"], 
"", "", "", -1,
new MeatCutAnimationTransition("LoinAnimationAction", ["RibLoin", "Rib_1", "Rib_2"], 0, []));

AddItem("TenderloinIntro", "Tenderloin Intro", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/TenderloinIntroInfo.htm", "https://www.youtube.com/embed/ER_4d8BMQ6A?autoplay=1",  "Beef/Loin/1.vtt", 1);
AddItem("TenderloinBreakdownVideo", "Tenderloin Breakdown", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/TenderloinBreakdownVideoInfo.htm", "https://www.youtube.com/embed/A6uip825J7k?autoplay=1", "Beef/Loin/2.vtt", 2);
AddItem("SlipKnot", "Slip knot", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/SlipKnotInfo.htm", "https://www.youtube.com/embed/LuBvCes0I0o?autoplay=1", "Beef/Loin/3.vtt", 3);
AddItem("ShortloinOverview", "Shortloin Overview", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/ShortlionOverviewInfo.htm", "https://www.youtube.com/embed/HPqfK26QkL4?autoplay=1",  "Beef/Loin/20.vtt", 20);
AddItem("Poterhouse", "Porterhouse", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/PorterhouseInfo.htm",  "https://www.youtube.com/embed/XWmv1ygST2s?autoplay=1", "Beef/Loin/21.vtt", 21);
AddItem("Tenderloin", "Tenderloin", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/TenderloinInfo.htm", "https://www.youtube.com/embed/87Wly2Ke2Sg?autoplay=1", "Beef/Loin/22.vtt", 22);
AddItem("Striploin", "Striploin", HotSpotClickableType.ClickableInfo, [], "Beef/Loin/StriploinInfo.htm", "https://www.youtube.com/embed/qaifGDi9rQg?autoplay=1",  "Beef/Loin/23.vtt", 23);

//Rib
AddItem("RibBreakdown", "Rib Breakdown", HotSpotClickableType.Clickable3DModel, 
["RibAndAging", "RibEyeAndPrimeRib"], 
"", "", "", -1,
new MeatCutAnimationTransition("RibAnimationAction", ["RibLoin", "LoinBreakdown_1", "LoinBreakdown_2", "LoinBreakdown_3", "LoinBreakdown_4"], 0, []));


AddItem("RibAndAging", "Rib and aging", HotSpotClickableType.ClickableInfo, [], "Beef/Rib/RibAndAging.htm", "https://www.youtube.com/embed/C05wwoq4N-E?autoplay=1",  "Beef/Rib/24.vtt", 24);
AddItem("RibEyeAndPrimeRib", "Ribeye and prime rib", HotSpotClickableType.ClickableInfo, [], "Beef/Rib/RibEyeAndPrimeRibInfo.htm", "https://www.youtube.com/embed/Q9D95C0UW2c?autoplay=1",  "Beef/Rib/25.vtt", 25);

//HTML
AddItem("Overview", "Overview", HotSpotClickableType.HTMLButton, [], "Beef/HTMLButtons/OverviewInfo.htm", "https://www.youtube.com/embed/Aj1tRAxhWYQ?autoplay=1", "Beef/HTMLButtons/4.vtt", 4);
AddItem("Anatomy", "Anatomy overview", HotSpotClickableType.HTMLButton, [], "Beef/HTMLButtons/AnatomyInfo.htm", "https://www.youtube.com/embed/u6Tqw4iIcVg?autoplay=1", "Beef/HTMLButtons/5.vtt", 5);
AddItem("LegDisplay", "Leg display", HotSpotClickableType.HTMLButton, [], "Beef/HTMLButtons/LegDisplayInfo.htm", "https://www.youtube.com/embed/7e6ImyCk-jM?autoplay=1", "Beef/HTMLButtons/15.vtt", 15);
AddItem("DinnerCustOverview", "Dinner Cuts Overview", HotSpotClickableType.HTMLButton, [], "Beef/HTMLButtons/DinnerCutOverviewInfo.htm", "https://www.youtube.com/embed/m7CbkEP-FmA?autoplay=1", "Beef/HTMLButtons/captions-27.vtt", 27);

AddModalData([new ModalDisplayData("Beef/ModalContent/media/1.jpg", "Cow in field", "Beef Overview", "Beef/ModalContent/1BeefOverview.htm"),
new ModalDisplayData("Beef/ModalContent/media/2.jpg", "Meat on board", "Veal Overview", "Beef/ModalContent/3VealOverview.htm"),
new ModalDisplayData("Beef/ModalContent/media/3.jpg", "Cows in field", "Grading and Inspection ", "Beef/ModalContent/5Inspection.htm"),
new ModalDisplayData("Beef/ModalContent/media/4.jpg", "Meat aging in refrigerator", "Aging", "Beef/ModalContent/6Aging.htm"),
new ModalDisplayData("Beef/ModalContent/media/5.jpg", "Cows in field", "Sustainability", "Beef/ModalContent/7Sustainability.htm"),
new ModalDisplayData("Beef/ModalContent/media/6.jpg", "Cutting meat in butcer shop", "Price", "Beef/ModalContent/8Price.htm"),
new ModalDisplayData("Beef/ModalContent/media/7.jpg", "Meat in butcher shop", "Marketing Terms", "Beef/ModalContent/9MarketingTerms.htm"),
new ModalDisplayData("Beef/ModalContent/media/8.jpg", "Beef diagram", "Flavour Cooking Methods and temperatures.", "Beef/ModalContent/10Flavour.htm"),
new ModalDisplayData("Beef/ModalContent/media/9.jpg", "Bull in field", "Further Learning", "Beef/ModalContent/11Learning.htm")]);



FinalizeItems('Beef/Beef_animation_01.glb', '105_hdrmaps_com_free.hdr', "Beef", new THREE.Vector3(170, 150, 0), new THREE.Vector2(10, 230), false);

SetQuizURL("../train/beef1"); //https://next-butchery.vercel.app/train/beef1

//AddDefaultLights();

const overHeadLight = new THREE.PointLight(0xfff8eb, 2, 1000);
overHeadLight.position.set(0, 300, 0);
AddLight(overHeadLight);

const topLight = new THREE.PointLight(0xfff8eb, .5, 400);
topLight.position.set(-350, 0, 0);
AddLight(topLight);

const bottomLight = new THREE.PointLight(0xc6e4ff, 1.5, 400);
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