import dynamic from 'next/dynamic'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import useUser from '../../lib/useUser'
import Quiz from '../../components/Quiz'
import { useEffect, useState } from 'react'
import fetchJson, { FetchError } from '../../lib/fetchJson'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/QuizRender'),
  { ssr: false }
)

export default function TrainPage(props) {

  const [reset, toggleReset] = useState(false)

  const {
    type,
    stype,
    next,
    QuestionList,
    DisplayQuizName,
  } = props


  const { user, mutateUser } = useUser({
    redirectTo: `/login?d=/train/${type}`,
  })


  useEffect(async () => {
    if (user && !reset) {
      if (type.slice(-1) == '1') {
        await fetch("/api/resetScore")
          .then(res => res.json())
          .then(data => {
            mutateUser(data)
          })
        toggleReset(true)
      }
    }
  }, [user])


  return (
    <div className={styles.fullPageLayout}>
      {!user &&
        <div className={styles.loadingModal}>
          <img src={'/loading.svg'} />
        </div>
      }
      <header><Navbar type={DisplayQuizName} login={true}/></header>
      <main>
        {next ?
          <div className={styles.mainContent}>
            <div className={styles.topContent}>
              <p id="TopTextLeft">    </p>
              <p className={styles.end} id="TopTextRight">         </p>
            </div>
            <div className={styles.interactiveContent}>
              <DynamicComponentWithNoSSR type={type} score={user?.score ?? 0} />
            </div>
            <div className={styles.bottomContent}>
              <p id="BottemTextLeft"></p>
              <div>
                <small>For each incorrect score you will lose a point </small>
                <small>You can see your score at the top left</small>
              </div>
              <a href={`/train/${next}`}>
                <button
                  className={styles.nextQ}>
                  <p>Next Activity</p>
                </button>
              </a>
            </div>
          </div> :
          <Quiz QuestionList={QuestionList} user={user} type={stype} />
        }
      </main>
    </div>
  )
}



export async function getStaticPaths() {
  const paths = [                // name of the paths to be generated
    { params: { id: 'beef1' } },
    { params: { id: 'beef2' } },
    { params: { id: 'beef3' } },
    { params: { id: 'chicken1' } },
    { params: { id: 'chicken2' } },
    { params: { id: 'chicken3' } },
    { params: { id: 'fish1' } },
    { params: { id: 'fish2' } },
    { params: { id: 'fish3' } },
    { params: { id: 'lamb1' } },
    { params: { id: 'lamb2' } },
    { params: { id: 'lamb3' } },
    { params: { id: 'pork1' } },
    { params: { id: 'pork2' } },
    { params: { id: 'pork3' } },
    { params: { id: 'kitchen1' } },
    { params: { id: 'kitchen2' } },
    { params: { id: 'kitchen3' } },
    { params: { id: 'game1' } },
    { params: { id: 'game2' } },
    { params: { id: 'game3' } },
  ]
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const id = context.params.id // here is where you use the id to get the data you need to pass to html
  const index = parseInt(id.slice(-1));
  const stype = id.slice(0, -1)
  var next = `${stype}${index + 1}`
  if (index === 3) {
    next = false
  }

  let QuestionList = null;
  let DisplayQuizName = '';

  if (id === 'beef1' || id === 'beef2' || id === 'beef3') {
    DisplayQuizName = 'Beef';
  }

  if (id === 'chicken1' || id === 'chicken2' || id === 'chicken3') {
    DisplayQuizName = 'Poultry';
  }

  if (id === 'fish1' || id === 'fish2' || id === 'fish3') {
    DisplayQuizName = 'Fish and Shellfish';
  }

  if (id === 'kitchen1' || id === 'kitchen2' || id === 'kitchen3') {
    DisplayQuizName = 'Orientation';
  }

  if (id === 'lamb1' || id === 'lamb2' || id === 'lamb3') {
    DisplayQuizName = 'Lamb';
  }

  if (id === 'pork1' || id === 'pork2' || id === 'pork3') {
    DisplayQuizName = 'Pork';
  }

  if (id === 'game1' || id === 'game2' || id === 'game3') {
    DisplayQuizName = 'Game';
  }

  if (id == 'beef3') {
    QuestionList = [
      { question: 'From what part of the animal would you fabricate an Osso bucco?', correctAnswer: 2, image: '', options: ['A. Chuck', 'B. Belly', 'C. Shank ', 'D. Round'] },
      { question: "The term 'marbling' refers to:", correctAnswer: 3, image: '', options: ['A. The internal organs of the carcass', 'B. The grade of beef', 'C. The external fat of the carcass', 'D. The veins of fat running through the meat'] },
      { question: 'Male calves that are fed a balanced fortified milk-based diet are called?', correctAnswer: 0, image: '', options: ['A. Provimi Veal', 'B. Certified Angus', 'C. Hereford Veal', 'D. Choice Veal'] },
      { question: 'TRUE OR FALSE:  Beef can be eaten raw.', correctAnswer: 0, image: '', options: ['True', 'False'] },
      { question: 'Which image indicates the highest grade of Canadian Beef?', correctAnswer: 3, image: '/MultipleChoiceImages/Beef7.png', options: ['A', 'B', 'C', 'D'] },
      { question: 'Which of the following would not be suitable to be cooked medium rare?', correctAnswer: 0, image: '', options: ['A. Beef inside round', 'B. Beef tenderloin', 'C. Beef striploin', 'D. Beef ribeye'] },
      { question: 'Grain fed beef is considered a sustainable product.', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'What is a good way of remembering the tenderness of animals', correctAnswer: 3, image: '', options: ['A. The more the muscle works, the tougher the meat', 'B. The older an animal becomes, the tougher the meat gets', 'C. The rib, loin and the sirloin are all very tender.  ', 'D. All of the above'] },
    ]
  }

  if (id == 'chicken3') {
    QuestionList = [
      { question: "Which of the above represents a 'Chicken Supreme'?", correctAnswer: 2, image: '/MultipleChoiceImages/Chicken01.png', options: ['A.', 'B.', 'C.', 'D.'] },
      { question: 'Cornish Hen, A chicken 500-750g is the most commonly butchered and used chicken in the food service industry?', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'Chickens are inspected to ensure they are fit for human consumption. Grading is an optional choice for the farmer, the  best possible grade for chickens is AAA+.', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'Which protein is not categorized as Poultry?', correctAnswer: 1, image: '', options: ['A. Duck', 'B. Rabbit ', 'C. Turkey', 'D. Chicken'] },
      { question: 'When cooking pieces of fried chicken, the internal temperature must reach?', correctAnswer: 1, image: '', options: ['A. 180º (82º C)', 'B. 165º F (74ºC)', 'C. 0ºF (-18ºC)'] },
      { question: 'Spatchcock Chicken is a specialized butchery skill identified in one of these images', correctAnswer: 2, image: '/MultipleChoiceImages/Chicken02.png', options: ['A.', 'B.', 'C.'] },
      { question: 'Poultry is not very perishable, it is best cooked and consumed after a lengthy aging and ripening process of 27 days for maximum flavour?', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'The most common breed of chicken consumed in Canada is the?', correctAnswer: 2, image: '', options: ['A. Red Rock Breeds', 'B. Brown Rock Breeds,', 'C. White Rock Breeds', 'D. Blue Feathery Breeds'] },
    ]
  }

  if (id == 'fish3') {
    QuestionList = [
      { question: "How many fillets do a flat fish have?", correctAnswer: 0, image: '', options: ['A. Four', 'B. Two'] },
      { question: 'Which one is a fillet?', correctAnswer: 1, image: '/MultipleChoiceImages/fish01.png', options: ['A.', 'B.', 'C.'] },
      { question: 'How many fillets does a round fish have?', correctAnswer: 1, image: '', options: ['A. One', 'B. Two ', 'C. Three', 'D. Four'] },
      { question: 'What is an alternate name for a salmon steak?', correctAnswer: 0, image: '', options: ['A. A Darne', 'B. A fillet', 'C. Goujon'] },
      { question: 'What are the characteristics of crustaceans?', correctAnswer: 0, image: '', options: ['A. They have jointed legs, a hard shell, and no backbone.', 'B. They have a crusty texture', 'C. They have no backbone but two shells'] },
      { question: 'Mollusks can be classified into 3 major groups.', correctAnswer: 0, image: '', options: ['A. Univalves, bivalves, and cephalopods', 'B. Seafood, shellfish, and bivalves', 'C. Abalone, Oysters, and octopus'] },
      { question: 'Identify which is item is an example of a cephalopod.', correctAnswer: 0, image: '/MultipleChoiceImages/fish02.png', options: ['A.', 'B.', 'C.'] },
      { question: 'What is bycatch? And what happens to it?', correctAnswer: 0, image: '', options: ["A. Bycatch is a type of ghost fishing and is used for pet food", 'B. Bycatch is caught by trawlers and used for fish food.', 'C. By catch is a type of ghost fishing.'] },
    ]
  }

  if (id == 'kitchen3') {
    QuestionList = [
      { question: 'What is the Food Danger Zone Temperature?', correctAnswer: 0, image: '', options: ['A. 40°F and 140°F (4°C - 60°C)', 'B. 140°F and 240°F (60°C - 116°C)', 'C. 10°F and 20°F (-12°C - -6.6°C)', 'D. 90°F and 100°F (32°C - 38°C)'] },
      { question: 'When using a triple sink what is the correct method of cleaning equipment?', correctAnswer: 2, image: '', options: ['A. Wash - rinse - airdry', 'B. Rinse - wash - airdry', 'C. Wash - rinse- sanitize', 'D. Rinse - sanitize - wash'] },
      { question: 'Choose the correct blade position that should be pressed against the grinder plate', correctAnswer: 1, image: '/MultipleChoiceImages/Orientation3.png', options: ['A.', 'B.'] },
      { question: 'What is the correct handwashing method?', correctAnswer: 2, image: '', options: ['A. Wet your hands with cold running water - apply hand soap - rub hands together for at least 3 seconds - clean under fingernails and between fingers - rinse hands under running water - dry hands in an electrical dry or with paper towel', 'B. Wet your hands with hot running water - apply hand soap - rub hands together for at least 20 seconds - clean under fingernails and between fingers - rinse hands under running water - dry hands on your kitchen side towel ', 'C. Wet your hands with hot running water - apply hand soap - rub hands together for at least 20 seconds - clean under fingernails and between fingers - rinse hands under running water - dry hands in an electrical dry or with paper towel', 'D. Apply hand soap – rub hands together for at least 10 seconds - clean under fingernails and between fingers - rinse hands under running water - dry hands on your apron'] },
      { question: 'You should thoroughly wash your hands and clean your fingernails prior to starting any food service preparation.', correctAnswer: 0, image: '', options: ['A. True', 'B. False'] },
      { question: 'Before setting up your workstation you should sanitize all surfaces and equipment.', correctAnswer: 0, image: '', options: ['True', 'False'] },
      { question: 'What are some examples of high-risk foods?', correctAnswer: 3, image: '', options: ['A. Meat and shellfish', 'B. Eggs and dairy', 'C. Leafy greens and cooked rice', 'D. All of the above'] },
      { question: 'Which has a higher value?', correctAnswer: 1, image: '', options: ['A. AP', 'B. EP ', 'C. Tip Meat', 'D. Fat'] },
      //{ question: 'What are the two most common methods for sanitizing?', correctAnswer: 3, image: '', options: ['A. Hot water and cold water', 'B. Cold water and chemical,', 'C. Detergent and cold water', 'D. Hot water and chemical'] },
    ]
  }

  if (id == 'lamb3') {
    QuestionList = [
      { question: "Lamb shanks are a tough cut and are therefore good for braising.", correctAnswer: 0, image: '', options: ['True', 'False'] },
      { question: 'Rack of lamb is a tough cut, good for slow roasting', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'Frenching is a process of removing meat and connective tissue from the ends of bones to make them look more elegant.', correctAnswer: 0, image: '', options: ['True', 'False'] },
      { question: 'Which 2 cuts will be on a bone in lamb T-bone?', correctAnswer: 2, image: '', options: ['A. Rack and Leg', 'B. Sirloin and Tenderloin ', 'C. Loin and Tenderloin', 'D. Neck and chop'] },
      { question: "Define the term 'Lamb'", correctAnswer: 0, image: '', options: ['A. A sheep less than one year old', 'B. A sheep over a year old ', 'C. A sheep over 60 lb', 'D. A goat less than one year old'] },
      { question: 'Rack of lamb is best served:', correctAnswer: 0, image: '', options: ['A. Medium rare, because it is a tender cut', 'B. Medium, because it has some connective tissue that needs to be broken down', 'C. Medium Well, because it has elastin that needs to be cooked for a long time', 'D. Well done, because it has a lot of connective tissue'] },
      { question: 'The outside round comes from which part of the animal?', correctAnswer: 3, image: '', options: ['A. The Rib', 'B. The Shoulder ', 'C. The Sirloin', 'D. The Leg'] },
      { question: 'Tough cuts of lamb like the neck, should be cooked at', correctAnswer: 3, image: '', options: ['A. 155*F, 74*C', 'B. Using a moist cooking method ', 'C. For a long time, to break down connective tissue', 'D. All of the above'] },
    ]
  }

  if (id == 'pork3') {
    QuestionList = [
      { question: "You are hired as the chef of a newly opened German restaurant.  Your signature dish will be pork schnitzel (breaded cutlet) on a bun.  You will need to", correctAnswer: 3, image: '', options: ['A. Order a pork belly, slice it, pound it, bread it, shallow fry it', 'B. Order a pork leg, slice it, pound it, bread it, roast it', 'C. Order a pork trotter, slice it pound it, bread it, grill it', 'D. Order a pork inside round, slice it, pound it, bread it, shallow fry it'] },
      { question: 'Bacon', correctAnswer: 3, image: '', options: ['A. Is cured, smoked and comes from the leg area of the pig', 'B. Is cured, dried and comes from the loin area of the pig ', 'C. Is cured, dried and comes from the head area of the pig', 'D. Is cured, smoked and comes from the belly area of the pig'] },
      { question: 'When the kidney is slashed on the pork carcass, it usually means', correctAnswer: 2, image: '', options: ['A. The butcher used a wrong technique when cutting.', 'B. The kidney is not good for consumption, and it needs to be thrown out. ', 'C. The animal was inspected and has been deemed fit for human consumption.', 'D. The carcass needs to be returned to the supplier.'] },
      { question: 'You want to cut your own pork chops for your restaurant.  What primal cut of pork should you purchase?', correctAnswer: 1, image: '', options: ['A. Leg', 'B. Loin ', 'C. Shoulder', 'D. Belly'] },
      { question: 'Modern day meat processing industry is more ecologically sustainable than the small farms?', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'Another name for a reverse grip is a dagger grip.', correctAnswer: 1, image: '', options: ['True', 'False'] },
      { question: 'Which cooking method would not be suitable for trotter of a pig?', correctAnswer: 2, image: '', options: ['A. Grilling', 'B. Smoking ', 'C. Both A and D', 'D. Sautéing'] },
      { question: 'Which primal cut of pork does spareribs come from?', correctAnswer: 2, image: '', options: ['A. Loin', 'B. Rib ', 'C. Belly', 'D. Leg'] },
    ]
  }

  if (id == 'game3') {
    QuestionList = [
      { question: "In Ontario, true 'wild game' meats are legally sold to consumers?", correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
      { question: 'Bison and a Buffalo are the same species of wild animals?', correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
      { question: 'Wild boar animals look similar to which domesticated animal?', correctAnswer: 3, image: '', options: ['A. Steer/Cow', 'B. Lamb ', 'C. Bison', 'D. Pig'] },
      { question: 'Which of the following is an example of large game.', correctAnswer: 2, image: '', options: ['A. Duck', 'B. Rabbit', 'C. Deer', 'D. Beaver'] },
      { question: 'The term “gamey” is used to describe delicate smells and flavours', correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
      { question: 'Game meats contain more fat than domesticated animals', correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
      { question: 'Game meat is consumed regularly by Canadian households because the cost is inexpensive compared to other meat proteins.', correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
      { question: 'Game meats are best prepared and cooked well done to an internal cooking temperature of 185℉ / 85℃?', correctAnswer: 1, image: '', options: ['A. True', 'B. False'] },
    ]
  }

  /*const QuestionList = [
    { question: 'what does x do?', correctAnswer: 0, image: 'link', options: ['A', 'B', 'C', 'D'] },
    { question: 'what does x do?', correctAnswer: 0, image: '', options: ['A', 'B'] },
    { question: 'what does x do?', correctAnswer: 0, image: '', options: ['A', 'B', 'C', 'D'] },
  ]*/


  return {
    props: {
      type: id,
      next,
      QuestionList,
      DisplayQuizName,
      stype
    },
  }
}
