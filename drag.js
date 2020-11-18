// Make the DIV element draggable:

var originalHeight, originalWidth
var done = 0; //variable that's determines how many are done
var correct = 0; //variable that determines how many the player guessed right

var map = document.getElementById("map-id");
var images = document.getElementsByClassName("church-img dragme");
var destinations = document.getElementsByClassName("destination");
var churchNames = [
  'Antakalnio Šv. apaštalų Petro ir Povilo bažnyčia',
  'Antakalnio Viešpaties Jėzaus bažnyčia',
  'Lukiškių Šv. apaštalų Pilypo ir Jokūbo bažnyčia',
  'Šv. arkangelo Mykolo bažnyčia',
  'Šv. arkangelo Rapolo bažnyčia',
  'Šv. Dvasios bažnyčia',
  'Šv. Jono Krikštytojo ir šv. apaštalo evangelisto Jono bažnyčia',
  'Šv. Jurgio bažnyčia',
  'Šv. Kazimiero bažnyčia',
  'Šv. Kotrynos Aleksandrietės bažnyčia',
  'Šv. Pranciškaus Asyžiečio ir šv. Bernardino Sieniečio bažnyčia',
  'Šv. Teresės Avilietės bažnyčia',
  'Šv. Ignoto bažnyčia',
  'Švč. Jėzaus Širdies bažnyčia',
  'Švč. Mergelės Marijos Ėmimo į dangų bažnyčia',
  'Švč. Mergelės Marijos Ramintojos bažnyčia',
  'Švč. Trejybės bažnyčia',
  'Trinapolio Švč. Trejybės bažnyčia',
  'Užupio Šv. Baltramiejaus bažnyčia',
  'Verkių Šv. Kryžiaus Atradimo bažnyčia',
  'Viešpaties Žengimo į dangų bažnyčia',
  'Vilniaus Šv. Kryžiaus bažnyčia',
  'Visų Šventųjų bažnyčia'
];
var desc1 = [
  'Į Vilnių 1625 m. atvykusius Laterano kanauninkus vietos vyskupas Eustachijus Valavičius įkurdino Antakalnio priemiestyje ir iš pradžių išlaikė savo lėšomis. Vėliau valdas vienuolynui paskyrė Mstislaulio vaivada Juozapas Korsakas ir Vilniaus vaivada bei Lietuvos didysis etmonas Mykolas Kazimieras Pacas. Pastarasis geradarys pastatydino ir įspūdingai išpuošė naują mūrinę Šv. Petro ir Povilo šventovę – vieną Lietuvos baroko šedevrų. XVIII–XIX a. Antakalnio vienuolynas, kuriame įvairiu metu gyveno iki 20 vienuolių, buvo didžiausia ir reikšmingiausia Laterano kanauninkų bendruomenė Lietuvoje. Antakalnyje įsikūrę vienuoliai uoliai darbavosi šio Vilniaus priemiesčio sielovadoje: sakė pamokslus lietuvių ir lenkų kalbomis, mokytojavo parapinėje mokykloje, rūpinosi špitole, vadovavo religinėms brolijoms. ',
  'Trinitorius į Lietuvą pakvietė ir jiems žemes skyrė vyriausiasis kariuomenės vadas – LDK etmonas ir Vilniaus vaivada Kazimieras Jonas Sapiega. 1693 m. į Vilnių atvyko „ispaniškos“, reformuotosios ordino atšakos atstovai. Po kelerių metų Antakalnyje iškilo mūrinis vienuolynas, kiek vėliau – ir barokinė Švč. Atpirkėjo Jėzaus Nazariečio titulo trinitorių bažnyčia. Antakalnio konventas tapo svarbiausiu trinitorių centru Abiejų Tautų Respublikoje. Vienuolynas veikė kaip kolegija – studijų namai, kuriuose filosofinį ir teologinį išsimokslinimą įgydavo trinitorių vienuoliai. Jų šventovė garsėjo stebuklinga Jėzaus Nazariečio statula. ',
  'Pamokslininkų ordino misionieriai, kaip manoma, Vilniuje lankėsi dar prieš Lietuvos krikštą, bet stabiliai įsikūrė tik XVI a. pradžioje. 1642 m. priemiestyje Lukiškėse buvo įkurtas jau antrasis dominikonų vienuolynas Vilniuje. Vienuoliai pakviesti rūpintis neprižiūrimomis vietos kapinėmis, teikti sakramentus priemiesčio varguomenei. Lukiškių Šv. apaštalų Pilypo ir Jokūbo vienuolynas netrukus išgarsėjo ir dabar bažnyčioje esančiu stebuklingu Dievo Motinos paveikslu.',
  'Klauzūrinis (uždaro tipo) bernardinių vienuolynas su renesansine Šv. arkangelo Mykolo bažnyčia Vilniuje įsteigtas XVII a. pradžioje. Tai buvo visiškai uždaras kontempliatyvus gyvenimas, kurį sudarė liturginių valandų ciklas, asmeninė malda, skaitymas, ruošos darbai, rankdarbiai ir pasauliečių auklėjimas. Turtingas, geradarių dosniai aprūpintas vienuolynas kentė įvairias negandas, bet po jų vėl atsitiesdavo ir suklestėdavo. Bernardinių nepalaužė nei XVII–XVIII a. šalį alinę karai, nei lig tol neregėta maro epidemija, per kurią mirė daug bernardinių.',
  'Siekdamas sustiprinti Katalikų bažnyčios pozicijas per Reformacijos pakilimą, Vilniaus vyskupas Valerijonas Protasevičius pakvietė į Vilnių jėzuitus. 1569 m. į sostinę atvyko keli Austrijos provincijos vienuoliai ir įsteigė kolegiją. Kiek vėliau Vilniuje buvo įkurti jėzuitų profesų namai ir noviciatas, o XVIII a. įsikūrė dar dveji nedideli jėzuitų namai. Atokioje ramioje vietoje (Šnipiškėse, už Žaliojo tilto), tinkamoje noviciato patirtį kartojantiems Draugijos nariams, iškilo Lietuvos jėzuitų provincijos terciatas su Šv. Rapolo bažnyčia. Čia gyvenusi ne itin gausi (20–30 asmenų) bendruomenė dydžiu panėšėjo į profesų namus.',
  'Pamokslininkų ordino misionieriai, kaip manoma, Vilniuje lankėsi jau XIII–XIV a., bet stabiliai įsikūrė gerokai vėliau. 1501 m. Lietuvos didysis kunigaikštis Aleksandras skyrė fundaciją Vilniuje jau stovėjusiai Šv. Dvasios bažnyčiai ir atidavė ją dominikonams. Vienuolynų tinklui plečiantis, Vilniaus Šv. Dvasios konventas tapo pagrindiniu ir didžiausiu Lietuvos Didžiosios Kunigaikštystės dominikonų vienuolynu. Čia veikė noviciatas ir generalinės studijos, buvo didžiulė (daugiau nei 5 tūkstančių tomų) biblioteka, prie bažnyčios dominikonai būrė religines brolijas.',
  'Siekdamas sustiprinti Katalikų bažnyčios pozicijas Reformacijos pakilimą išgyvenančioje šalyje, Vilniaus vyskupas Valerijonas Protasevičius pakvietė į Vilnių jėzuitus. 1569 m. į sostinę atvyko keli Austrijos provincijos vienuoliai ir įsteigė kolegiją. Sustiprėję jie savo žinion gavo parapinę Šv. Jono Krikštytojo ir šv. apaštalo evangelisto Jono bažnyčią. 1579 m. karalius Steponas Batoras ir popiežius Grigalius XIII jėzuitų kolegijai suteikė universiteto teises. Kolegija tapo stipriu mokslo židiniu, joje buvo viena turtingiausių visoje LDK biblioteka ir produktyviausia šalyje spaustuvė. Čia pirmą kartą Lietuvoje buvo parodyti dramos ir baleto spektakliai, išleistas pirmasis lietuvių kalbos žodynas, pirmasis laikraštis, įrengta observatorija. Jėzuitų darbą nutraukė 1773 m. paskelbtas popiežiaus Klemenso XIV nutarimas dėl Jėzaus Draugijos panaikinimo. Šie metai žymi Vilniaus, kaip jėzuitų miesto, istorijos pabaigą. Vėliau, atkūrus jėzuitų ordiną, jo nariai buvo išvyti iš Rusijos imperijos teritorijos.',
  'Broliai karmelitai Lietuvą pasiekė XVI amžiuje. Savo buveinę jie įsteigė už tuomečio Vilniaus miesto sienų – Puškarnios priemiestyje, privačioje Radvilų valdoje. Karmelitų konventą su Švč. Mergelės Marijos Snieginės ir šv. Jurgio bažnyčia čia įkūrė LDK kancleris ir Vilniaus vaivada Mikalojus Radvila. XVII a. LDK teritorijoje buvę karmelitų vienuolynai padalyti dviem provincijoms: Mažosios Lenkijos–Lietuvos ir Rusios. Visi dabartinės Lietuvos teritorijoje veikę konventai buvo priskirti Mažosios Lenkijos–Lietuvos provincijai, tik Vilniaus Šv. Jurgio konventas atiteko Rusios provincijai. Simbolinė provincijų riba dalijo patį Vilnių – dvi čia veikusios karmelitų bendruomenės tapo centriniais skirtingų provincijų konventais. Abiejuose vienuolynuose klestėjimo metu XVIII a. vid. veikė naujokynai ir gyvavo vienuolinės studijos.',
  'Siekdamas sustiprinti Katalikų bažnyčios pozicijas Reformacijos pakilimą išgyvenančioje šalyje, Vilniaus vyskupas Valerijonas Protasevičius pakvietė į Vilnių jėzuitus. 1569 m. į sostinę atvyko keli Austrijos provincijos vienuoliai ir įsteigė kolegiją. 1604 m. Vilniuje buvo įkurti jėzuitų profesų namai (su Šv. Kazimiero bažnyčia) ir noviciatas (su Šv. Ignaco Lojolos bažnyčia). Profesų namai prie Šv. Kazimiero bažnyčios buvo faktinis Lietuvos jėzuitų centras: čia dažniausiai reziduodavo provincijolas ir jo padėjėjai, buvo saugomas provincijos archyvas. LDK darbavęsi jėzuitai sukūrė pirmąjį Lietuvos istorijoje vidurinio tipo mokyklų tinklą. Jėzaus Draugijos nariai taip pat rengė misijas į provinciją, rūpinosi dvasininkų ir pasauliečių dvasiniu ugdymu. ',
  'Į Lietuvos sostinę pirmosios seserys benediktinės atvyko XVII a. pirmojoje pusėje. Beveik visą XVII a. vienuolyną vargino finansiniai sunkumai, tačiau įgyjant vis daugiau bendruomenės išlaikymui reikalingų žemės valdų padėtis po truputį taisėsi. Amžiaus pabaigoje Jonas Feliksas Pacas benediktinėms padovanojo plačias valdas kaip dviejų savo dukterų, įstojusių į vienuolyną, kraitį. Šis dovanojimas esmingai pakeitė benediktinių bendruomenės gyvenimo sąlygas ir XVIII a. finansinių bėdų nebevarginama Vilniaus bendruomenė suklestėjo.',
  'XV–XVI a. sandūroje prie Vilnelės iškilo gotikos pastatų kompleksas – Šv. Pranciškaus ir šv. Bernardino bažnyčia, vienuolynas ir jam priklausanti Šv. Onos koplyčia. Tai – vienas įspūdingiausių Lietuvoje vėlyvųjų viduramžių architektūros ir dailės ansamblių. Vilniaus bernardinų konventas beveik keturis šimtmečius buvo pats reikšmingiausias Lietuvoje: čia buvo vyresniojo buveinė, naujokynas ir studijos. Čia telkėsi pati gausiausia provincijos brolių bendruomenė. Vilniaus bernardinai galėjo pasigirti viena turtingiausių visoje provincijoje biblioteka. Bernardinų bažnyčioje veikė kelios religinės brolijos, savo altorius turėjo knygrišių, kepurininkų, mūrininkų ir dailidžių, stalių, šaltkalvių cechai. ',
  'Į Lietuvos sostinę basieji karmelitai atvyko XVII a. pirmojoje pusėje ir apsigyveno įsigytuose namuose su nedidele koplyčia. Netoliese įsikūrė vienintelis Lietuvoje bei turtingiausias Abiejų Tautų Respublikoje basųjų karmeličių vienuolynas su Šv. Juozapo bažnyčia. 1654 m. konsekruota nauja mūrinė ankstyvojo baroko stiliaus Šv. Teresės Avilietės bažnyčia. Įsteigus Lietuvos Šv. Kazimiero provinciją, Vilniaus konventas tapo Lietuvos basųjų karmelitų provincijolo buveine. Ilgą laiką čia veikė noviciatas ir studijų namai. Konventas globojo ir mūsų dienomis piligrimų gausiai lankomą Aušros Vartų Gailestingumo Dievo Motinos koplyčią. ',
  'Siekdamas sustiprinti Katalikų bažnyčios pozicijas Reformacijos pakilimą išgyvenančioje šalyje, Vilniaus vyskupas Valerijonas Protasevičius pakvietė į Vilnių jėzuitus. 1569 m. į sostinę atvyko keli Austrijos provincijos vienuoliai ir įsteigė kolegiją. Sustiprėję jie savo žinion gavo parapinę Šv. Jono Krikštytojo ir šv. apaštalo evangelisto Jono bažnyčią. Kiek vėliau Vilniuje buvo įkurti jėzuitų profesų namai (su Šv. Kazimiero bažnyčia) ir noviciatas (su Šv. Ignaco Lojolos bažnyčia), o XVIII a. įsikūrė dar dveji nedideli jėzuitų namai.',
  'Vizites į Vilnių pakvietė ir jų vienuolyną dosniai aprūpino pasiturinti našlė, miestietė Ona Varškėtaitė-Karosienė-Dezelštienė, kurios dukra įstojo į vizičių noviciatą Varšuvoje. 1694 m. fundatorė į Vilnių grįžo su šešiomis seserimis vizitėmis ir viena naujoke – savo dukra. Tais pat metais padėti naujo vizičių vienuolyno pamatai. Nauja mūrinė Švč. Jėzaus Širdies ir šv. Pranciškaus Salezo titulo bažnyčia pašventinta 1752 metais. Vilniaus vizičių vienuolynas buvo bene didžiausia ir svarbiausia visoje Lietuvoje kilmingų merginų lavinimo įstaiga – XVIII–XIX a. čia vienu metu gyveno net daugiau kaip 40 auklėtinių. ',
  'Pranciškonai Vilniuje įsikūrė dar iki Lietuvos krikšto. Šalį valdant kunigaikščiams pagonims, jie vieninteliai sugebėjo čia vykdyti savo misiją. Kviečiami Vytenio ir Gedimino, jie kūrėsi Naugarduke ir Vilniuje, darbavosi valdovo dvare ir tarp krikščionių atvykėlių, o retsykiais išdrįsdavo skelbti Evangeliją ir vietos žmonėms. Tuo laikotarpiu keli vienuoliai netgi mirė kankinių mirtimi.',
  'Vilniuje, Savičiaus gatvėje, XVII a. paskutiniame ketvirtyje įsikūrusi augustinų bendruomenė buvo paskutinis Lietuvos Didžiosios Kunigaikštystės vyrų vienuolynas tankiame senojo Vilniaus urbanistiniame audinyje. Sulaukę geradarių paramos augustinai įkūrė konventą prie medinės Kristaus Atsimainymo koplyčios. Šiai sudegus, XVIII a. viduryje iškilo mūrinė vienabokštė vėlyvojo baroko formų Švč. Mergelės Marijos Ramintojos bažnyčia. Joje augustinams būdingą dvasingumą atspindėjo Švč. Mergelės Marijos Ramintojos, šv. Augustino, šv. Monikos, šv. Mikalojaus Tolentiniečio, šv. Teklės altoriai (arba altorių paveikslai). Šioje bažnyčioje veikė Švč. Mergelės Marijos Ramintojos ir Šv. Teklės brolijos. Vilniaus konventas kiekybiškai labai išaugo ir suklestėjo, 1798–1803 m. konvente gyventojų skaičius svyravo nuo 34 iki 43.',
  'Švč. Trejybės cerkvė ant kalvos rytinėje Vilniaus pusėje besiformuojančiame civitas Ruthenica („rusėnų mieste“) iškilo dar XIV a., tačiau tiksliai nežinoma, kada prie jos pradėjo veikti stačiatikių vienuolynas. 1514 m., atsidėkodamas Dievui už pergalę Oršos mūšyje, Lietuvos didysis etmonas Konstantinas Ostrogiškis pasirūpino, kad šioje vietoje iškiltų mūrinė stačiakampio plano gotikinė cerkvė ir vienuolyno pastatai. Kai po Brastos unijos užgimė nauja Graikų apeigų Katalikų (unitų) bažnyčia, šis iki tol buvęs svarbus stačiatikybės židinys tapo itin reikšmingu naujosios konfesijos centru. Šv. Bazilijaus Didžiojo ordinas, arba bazilijonai, tapo viena iš svarbiausių jėgų įgyvendinant bažnytinę uniją. Bazilijonai derino stačiatikių vienuoliams įprastą askezę ir kontempliatyvų gyvenimą su aktyvia misijine ir sielovados veikla, būdinga katalikų vienuolių ordinams. Vilniaus vienuolyne nuo 1628 m. veikė spaustuvė, joje spausdinti ir lietuviški leidiniai. ',
  'Trinitorius į Lietuvą pakvietė ir jiems žemes skyrė vyriausiasis kariuomenės vadas – LDK etmonas ir Vilniaus vaivada Kazimieras Jonas Sapiega. 1693 m. į Vilnių atvyko „ispaniškos“, reformuotosios ordino atšakos atstovai. Po kelerių metų Antakalnyje iškilo mūrinis vienuolynas, kiek vėliau – ir barokinė Švč. Atpirkėjo Jėzaus Nazariečio titulo trinitorių bažnyčia. Antrąjį trinitorių vienuolyną Vilniuje 1700 m. įkūrė Vilniaus vyskupas Konstantinas Kazimieras Bžostovskis. Žemę vienuolynui jis skyrė netoli vyskupams priklausiusio Verkių dvaro ir vietovę pervadino Trinapoliu. Trinapolyje veikė Šv. Joakimo provincijos trinitorių naujokynas. ',
  'Lietuvoje reguliniai atgailos kanauninkai tapo pirmąja po krikšto čia įsikūrusia vienuolija. Kiek vėliau, XVII a., Vilniaus vyskupijoje susikūrė daug naujų atgailos kanauninkų buveinių, bet dažniausiai tai būdavo nedidelės dviejų trijų vienuolių, tarnaujančių parapinėje bažnyčioje, rezidencijos. 1645 m. Jokūbo Aleksandro Zalamajaus drauge su žmona Ona funduotas ir kukliai aprūpintas Užupio vienuolynas Vilniuje ilgą laiką niekuo neišsiskyrė iš kitų Lietuvos regulinių atgailos kanauninkų bendruomenių. Čia gyvenę vienuoliai tyliai ir kantriai aptarnavo neprestižinio Vilniaus priemiesčio parapiją, susitelkusią apie vienuolyno šventovę. XVIII a. pab. – XIX a. I p. kartkartėmis čia būdavo įkurdinamas ir noviciatas ar provincijos archyvas, tačiau vienuolyno knygų nebuvo daug.',
  'Pamokslininkų ordino misionieriai, kaip manoma, Vilniuje lankėsi dar prieš Lietuvos krikštą, bet stabiliai įsikūrė tik XVI a. pradžioje. Trečiasis dabartinėje Vilniaus teritorijoje esantis dominikonų vienuolynas įsteigtas Verkiuose. Pasibaigus karui su Maskva, Vilniaus vyskupas Jurgis Bialozoras kaip padėką už Tėvynės išlaisvinimą 1664 m. inicijavo Kalvarijų komplekso įkūrimą Verkiuose, o po kelerių metų baigtas statyti Kryžiaus kelio ansamblis buvo perduotas Šv. Dvasios vienuolyno dominikonų globai. ',
  'Vienuoliai atvyko į Vilnių 1685 m. vyskupo Aleksandro Kotovičiaus kvietimu. Fundatorius misionieriams dovanojo žemės valdas, o Kotryna Sobieskytė-Radvilienė ‒ Subačiaus priemiestyje stovėjusius Sanguškų rūmus, kurie vėliau buvo pritaikyti vienuolyno reikmėms. Netrukus pradėta statyti Viešpaties Žengimo į dangų bažnyčia. XVIII a. pabaigoje Lenkijos ir Lietuvos Respublikoje veikė jau 40 misionierių namų. 1794 m. Lenkijos provinciją padalinus, įkurta savarankiška Lietuvos provincija, kurios centru tapo vienuolynas Vilniuje. Misionieriai vykdė vienuolijai įprastą veiklą: atliko misijas Vilniaus vyskupijos parapijose, išlaikė špitolę, organizavo labdaringą veiklą. Be kita ko, jų iniciatyva į Vilnių atvyko šaritės, besirūpinančios beglobiais vaikais. Po 1830‒1831 m. sukilimo prasidėjusios sistemingos represijos prieš vienuolijas palietė ir misionierius. 1844 m. jų namai galutinai uždaryti, o pastatai atiduoti miestui.',
  '1635 m. Vilniaus vyskupo Abraomo Vainos iniciatyva bonifratrai įsikūrė Vilniuje, prie Šv. Kryžiaus koplyčios. Vėliau apsigyveno ir kituose Lietuvos miestuose. Vilniaus bonifratrų bendruomenė, kurią dažniausiai sudarė 8–12 vienuolių, buvo gausiausia tarp visų LDK veikusių bonifratrų konventų, čia veikė ir didžiausia špitolė – prieglaudos tipo įstaiga. Vienuolyne įsteigtoje infirmerijoje (ligoninėje) vienu metu galėjo būti gydoma 14 ligonių vyrų. Nors tuo metu Vilniuje jau veikė keliolika visų krikščioniškų konfesijų špitolių, bonifratrų špitolė išsiskyrė tuo, kad pagrindinė jos funkcija buvo gydymas, o ne globa. Vienuoliai infirmerijoje darbuodavosi kaip slaugytojai, o pagrindinį darbą atlikdavo samdomi gydytojai ir barzdaskučiai. ',
  'Broliai karmelitai Lietuvą pasiekė XVI amžiuje. Savo buveinę jie įsteigė už tuomečio Vilniaus miesto sienų – Puškarnios priemiestyje, privačioje Radvilų valdoje. Pasibaigus vienuolijoms nepalankiam Reformacijos laikotarpiui karmelitai išgyveno pakilimą. 1624 m. Vilniuje buvo įsteigtas antrasis karmelitų konventas su Visų Šventųjų bažnyčia. XVII a. LDK teritorijoje buvę karmelitų vienuolynai padalyti dviem provincijoms: Mažosios Lenkijos–Lietuvos ir Rusios. Visi dabartinės Lietuvos teritorijoje veikę konventai buvo priskirti Mažosios Lenkijos–Lietuvos provincijai, tik Vilniaus Šv. Jurgio konventas atiteko Rusios provincijai. Simbolinė provincijų riba dalijo patį Vilnių – dvi čia veikusios karmelitų bendruomenės tapo centriniais skirtingų provincijų konventais. Abiejuose vienuolynuose klestėjimo metu veikė naujokynai ir gyvavo vienuolinės studijos.'

];

var desc2 = [
  'Vienuolyno bendruomenė, paskutinė Lietuvoje, caro valdžios buvo likviduota 1864 metais. Trys vienuoliai buvo apkaltinti parama 1863 m. sukilimo dalyviams ir ištremti. Vienas iš jų – Pranciškus Zavadzkis – vėliau tapo Šv. Petro ir Povilo parapinės bažnyčios klebonu ir nesėkmingai mėgino atgaivinti Laterano kanauninkų veiklą. Sulig šio kunigo mirtimi 1915 m. baigėsi bemaž 300 metų trukusi šios vienuolijos istorija Lietuvoje.',
  'Antakalnio trinitorių vienuolynas visoje buvusioje Šv. Joakimo provincijoje gyvavo ilgiausiai. 1864 m. buvo uždarytas ir atiduotas Rusijos armijos reikmėms, o bažnyčia paversta cerkve. Trinitorių vienuolija į Lietuvą niekada nebegrįžo. Šiuo metu senojoje trinitorių buveinėje įsikūrę Šv. Jono kongregacijos broliai.',
  'Po Abiejų Tautų Respublikos padalijimo dominikonai Vilniuje patyrė caro valdžios represijas. 1812 m. Lukiškių bažnyčią, biblioteką ir net šventoriaus kapines nusiaubė Napoleono kariuomenė. Vidaus gyvenimo tvarką nuolat trikdė Rusijos imperinės valdžios potvarkiai, kol galiausiai Lukiškių vienuolynas buvo panaikintas. Bažnyčia dar šimtmetį veikė kaip parapinė, bet sovietmečiu buvo uždaryta ir naudota kaip sandėlis. Pamokslininkų ordinas į Lietuvą grįžo 1992 m. ir vėl įsikūrė Šv. Pilypo ir Jokūbo vienuolyne.',
  'Nepataisoma žala bendruomenei buvo padaryta po Abiejų Tautų valstybės žlugimo. XIX a. vienuolynas buvo panaikintas, bažnyčia apleista, o seserys iškeldintos. Vėliau leista sutvarkyti apleistą Šv. arkangelo Mykolo bažnyčią, tačiau į vienuolyną seserys grįžo tik 1921 metais. Sovietų Sąjungai okupavus Lietuvą, vienuolynas vėl buvo uždarytas, apleistame pastate atidarytas Architektūros muziejus. Lietuvai atgavus nepriklausomybę, Šv. arkangelo Mykolo bažnyčia ir apgriuvę vienuolyno pastatai sugrąžinti Vilniaus arkivyskupijos kurijai. Kardinolo Audrio Juozo Bačkio dekretu juose įkurtas Vilniaus arkivyskupijos bažnytinio paveldo muziejus.',
  'LDK darbavęsi jėzuitai sukūrė pirmąjį Lietuvos istorijoje vidurinio tipo mokyklų tinklą, rengė misijas į provinciją, rūpinosi dvasininkų ir pasauliečių dvasiniu ugdymu. Jėzuitų darbą nutraukė 1773 m. paskelbtas popiežiaus Klemenso XIV nutarimas dėl Jėzaus Draugijos panaikinimo. Šie metai žymi Vilniaus, kaip jėzuitų miesto, istorijos pabaigą. Vėliau atkūrus jėzuitų ordiną, jo nariai buvo išvyti iš Rusijos imperijos teritorijos. Terciato namuose kuriam laikui apsigyveno pijorų vienuoliai, Šv. Rapolo bažnyčia tapo parapine. Sovietmečiu Lietuvos jėzuitai aktyviai veikė įvairiose katalikiško gyvenimo srityse, darbavosi pogrindinėje kunigų seminarijoje, organizavo sovietų valdžios taip ir nesugebėtos sustabdyti „Lietuvos Katalikų Bažnyčios kronikos“ leidybą. 1989 m. buvo oficialiai įteisinta Lietuvos ir Latvijos jėzuitų provincija.',
  'Po Abiejų Tautų Respublikos padalijimo dominikonai Vilniuje patyrė caro valdžios represijas. Šv. Dvasios konventas 1844 m. panaikintas, jo patalpose įkurdintos įvairios įstaigos, įrengti butai ir netgi kalėjimas, bažnyčia paversta parapine. Pamokslininkų ordinas į Lietuvą grįžo 1992 m. ir įsikūrė Šv. Pilypo ir Jokūbo vienuolyne.',
  'Po Antrojo pasaulinio karo sovietų valdžiai uždarius visus vienuolynus, buvo išniekintos ir senosios jėzuitų bažnyčios, parapinė Šv. Jono bažnyčia paversta sandėliu, vėliau joje įkurtas Mokslo muziejus. Pogrindžio sąlygomis Lietuvos jėzuitai aktyviai veikė įvairiose katalikiško gyvenimo srityse. Prasidėjus Sąjūdžiui, 1989 m. buvo oficialiai įteisinta Lietuvos ir Latvijos jėzuitų provincija.',
  'XIX amžius šiam ordinui Lietuvoje buvo lemiamas ir tragiškas: jam baigiantis, nebeliko nė vienos Karmelio bendruomenės. Jau 1798 m. pirmasis po padalijimų uždarytas konventas prie Šv. Jurgio bažnyčios; jo pastatai perduoti Vilniaus vyskupijos seminarijai, vėliau – Rusijos kariuomenei. Iki Antrojo pasaulinio karo Šv. Jurgio konvento ir bažnyčios pastatuose gyvavo Vilniaus vyskupijos seminarija, o sovietmečiu čia įkurdinta knygų saugykla, gretimuose konvento pastatuose veikė LSSR knygų rūmai. Dabar knygų stelažų atsikračiusi Šv. Jurgio bažnyčia ir konvento pastatai tebelaukia atgimimo.',
  'Jėzuitų darbą nutraukė 1773 m. paskelbtas popiežiaus Klemenso XIV nutarimas dėl Jėzaus Draugijos panaikinimo. Šie metai žymi Vilniaus, kaip jėzuitų miesto, istorijos pabaigą. Vėliau atkūrus jėzuitų ordiną, jo nariai buvo išvyti iš Rusijos imperijos teritorijos. Profesų namai atiteko kunigams emeritams, vėliau – kitoms vienuolijoms. Galiausiai profesų namai buvo perduoti Rusijos kariuomenės reikmėms. Po Pirmojo pasaulinio karo greta Šv. Kazimiero bažnyčios įsikūrė Lenkijos jėzuitai. Po Antrojo pasaulinio karo sovietų valdžiai uždarius visus vienuolynus, Šv. Kazimiero bažnyčia iš pradžių paversta gėrimų sandėliu, o vėliau – Ateizmo muziejumi. Lietuvos jėzuitai pogrindžio sąlygomis aktyviai veikė įvairiose katalikiško gyvenimo srityse. Prasidėjus Sąjūdžiui, 1989 m. buvo oficialiai įteisinta Lietuvos ir Latvijos jėzuitų provincija. Netrukus atgauti Šv. Kazimiero bažnyčia ir namai Vilniuje.',
  'Tačiau XIX a. Vilniaus vienuolyno benediktinėms nebuvo lengvas. Ilgainiui jis tapo vieninteliu Vilniuje likusiu veikti moterų vienuolynu, tapusiu priebėga ir kitų vienuolijų seserims. Antrojo pasaulinio karo metais Vilniaus vienuolyne seserys slėpė žydus; drauge su kitų Vilniaus vienuolynų bendruomenėmis buvo areštuotos, vėliau paleistos. 1944 m. benediktinių bendruomenė grįžo į savo buveinę, bet 1948 m. Šv. Kotrynos bažnyčia buvo uždaryta ir paversta sandėliu, o seserys iš vienuolyno iškeldintos. Teko pamiršti klauzūrinį gyvenimą ir imtis valdiško darbo. 1964 m. Vilniaus benediktinės įsigijo naują buveinę – nusipirko dar nebaigtą statyti namą Žvėryne – ir atkūrė bendruomeninį gyvenimą. Čia seserys gyvena ir dabar.',
  '1864 m. Vilniaus bernardinų konventas, kurio kai kurie broliai prisidėjo prie 1863 m. sukilimo, buvo uždarytas. Vienuolyno pastatuose iš pradžių įsikūrė Rusijos kariuomenė, po Pirmojo pasaulinio karo – Stepono Batoro universiteto Dailės fakultetas, po Antrojo pasaulinio karo – Valstybinis dailės institutas. Šv. Pranciškaus ir šv. Bernardino bažnyčia sovietmečiu buvo paversta dailininkų dirbtuvėmis. Tikrieji šeimininkai į apleistą buveinę grįžo 1994 metais.',
  'Po Abiejų Tautų Respublikos padalijimo XIX a. pab. Šv. Teresės Avilietės vienuolynas uždarytas, jame caro valdžia įkurdino stačiatikių dvasininkų dukterų institutą. Taip pat panaikintas moterų Šv. Juozapo vienuolynas, visai nugriauta jo bažnyčia. 1930 m. basieji karmelitai atgavo Šv. Teresės vienuolyno pastatus, tačiau viltingą vienuolijos atsikūrimo laikotarpį brutaliai nutraukė Antrasis pasaulinis karas. Šv. Teresės Avilietės šventovė, virtusi parapine bažnyčia, niekada nebuvo uždaryta.',
  'Lietuvos provincijos jėzuitų darbą nutraukė 1773 m. paskelbtas popiežiaus Klemenso XIV nutarimas dėl Jėzaus Draugijos panaikinimo. Šie metai žymi Vilniaus, kaip jėzuitų miesto, istorijos pabaigą. Popiežiui Pijui VII atkūrus jėzuitų ordiną, jo nariai buvo išvyti iš Rusijos imperijos teritorijos. Noviciato pastatuose trumpam įsikūrė vyskupijos kunigų seminarija. Vėliau profesų namai ir noviciato pastatai su Šv. Ignaco bažnyčia buvo perduoti Rusijos kariuomenės reikmėms. Po Antrojo pasaulinio karo sovietų valdžiai uždarius visus vienuolynus, tarpukariu įgulos bažnyčia tapusi Šv. Ignaco šventovė ir parapinė universitetinė Šv. Jono bažnyčia paverstos sandėliais. Sovietmečiu, pogrindžio sąlygomis, Lietuvos jėzuitai aktyviai veikė įvairiose katalikiško gyvenimo srityse, darbavosi ugdydami kandidatus į kunigystę pogrindinėje seminarijoje, organizavo sovietų valdžios taip ir nesugebėtos sustabdyti „Lietuvos Katalikų Bažnyčios kronikos“ (1972–1989 m.) leidybą. Prasidėjus Sąjūdžiui, 1989 m. buvo oficialiai įteisinta Lietuvos ir Latvijos jėzuitų provincija.',
  'XIX a. vizitės tęsė įprastinę veiklą, tačiau 1863 m. vienuolyną nuspręsta uždaryti dėl žalingos ir nekontroliuojamos seserų įtakos auklėjant merginas bei slaptų kontaktų su sukilėliais. Prancūzijos vizitės išrūpino vilnietėms leidimą išvykti į užsienį be teisės grįžti į Rusijos imperiją. 1865 m. Švč. Jėzaus Širdies bažnyčioje įvyko paskutinės viešos pamaldos. Vienuolynas buvo atiduotas stačiatikių vienuolėms, o Švč. Jėzaus Širdies bažnyčia pertvarkyta į Šv. Marijos Magdalenos cerkvę. Vizitės į Vilnių sugrįžo tarpukariu, bet ir vėl buvo priverstos bėgti. Senojoje Vilniaus vizičių buveinėje sovietų valdžia įkurdino kalėjimą. XXI a. pradžioje, senojo vizičių vienuolyno kompleksą grąžinus Bažnyčiai, čia įsikūrė Gailestingojo Jėzaus kongregacijos seserys ir pradėjo veikti pal. Mykolo Sopočkos hospisas.',
  'Vilniuje tebestovi dvi seniausios, ikikrikščioniškos Lietuvos laikus menančios Mažesniųjų brolių konventualų ordino šventovės: gotikinės Šv. Mikalojaus ir Švč. Mergelės Marijos Ėmimo į dangų bažnyčios. Būtent prie pastarosios įsikūrė seniausias Vilniaus vienuolynas. Tai buvo svarbiausias pranciškonų konventas visoje XVII a. įkurtoje Lietuvos Šv. Kazimiero provincijoje. Čia rezidavo Lietuvos pranciškonų vyresnysis, veikė naujokynas, vyko vienuolių studijos, turėta gausi biblioteka. 1864 m. Rusijos caro administracijai šį vienuolyną uždarius, mažesnieji broliai konventualai buvo išblaškyti, o bažnyčia išniekinta – paversta archyvo saugykla. 1919 m. į Vilnių buvo atvykę Lenkijos provincijos broliai. Sovietmečiu uždarius vienuolyną, bažnyčia vėl paversta archyvo saugykla. 1998 m. šventovė grąžinta tikriesiems jos savininkams pranciškonams.',
  'XIX a. caro valdžia perėmė pagrindinį konvento pastatą Vilniuje. Vilniaus Švč. Mergelės Marijos Ramintojos bažnyčia 1919 m. buvo grąžinta katalikams, tačiau augustinai Vilniuje nebeatsikūrė. Sovietmečiu bažnyčios interjeras pritaikytas daržovių sandėliui, įstatytos dvi gelžbetoninės perdangos, o vienuolyne įrengti butai. 2018 m. buvo atšventinta Švč. Mergelės Marijos Ramintojos koplyčia, joje vėl vyksta pamaldos.',
  'Iš karto po Abiejų Tautų Respublikos padalijimų bazilijonų veikla nebuvo varžoma, tačiau 1839 m. buvo nutraukta bažnytinė unija ir Vilniaus bazilijonai bei bazilijonės formaliai perėjo į stačiatikybę. Po kelių dešimtmečių buvo oficialiai uždarytas Švč. Trejybės vienuolynas. Vėliau, keičiantis santvarkoms, Švč. Trejybės bažnyčia ir vienuolynas ėjo iš rankų į rankas, sovietmečiu bažnyčia buvo paversta mokslinių bandymų laboratorija. 1994 m. bazilijonai ir vėl sugrįžo į savo vienuolyną.',
  'Šis vienuolynas panaikintas 1832 metais. Pastatai paversti kareivinėmis ir ligonine, vėliau perduoti Rusijos stačiatikių bažnyčiai. Antakalnio trinitorių vienuolynas visoje buvusioje provincijoje gyvavo ilgiausiai. 1864 m. buvo uždarytas ir atiduotas Rusijos armijos reikmėms, o bažnyčia paversta cerkve. Trinitorių vienuolija į Lietuvą niekada nebegrįžo. Šiandien vienuolyno pastatuose veikia rekolekcijų namai.',
  'Tuo laiku prasidėjęs vienuolijos nuosmukis ilgainiui lėmė ir Vilniaus bendruomenės krizę. 1832 m. uždarius visus regulinių atgailos kanauninkų vienuolynus (juose tuo metu gyveno apie 40 vienuolių), prie Užupio bažnyčios liko tarnauti du vienuoliai kunigai. Sovietmečiu Šv. Baltramiejaus bažnyčia uždaryta, joje įrengtos skulptorių dirbtuvės. Lietuvai atgavus nepriklausomybę, Šv. Baltramiejaus bažnyčia perduota Vilniaus baltarusių katalikų bendruomenei.',
  'Po Abiejų Tautų Respublikos padalijimo dominikonai Vilniuje patyrė caro valdžios represijas, uždaryti Lukiškių ir Šv. Dvasios vienuolynai. Paskutinį Vilniaus pašonėje dar veikusį Verkių dominikonų vienuolyną caro valdžia uždarė 1850 m. Parapine tapusios bažnyčios ir koplyčių ansamblis išliko iki 1963 m., kai sovietų valdžios potvarkiu Kalvarija buvo nugriauta (atgavus nepriklausomybę – atstatyta). Pamokslininkų ordinas į Lietuvą grįžo 1992 m. ir įsikūrė Šv. Pilypo ir Jokūbo vienuolyne.',
  ' ',
  'Po Respublikos padalijimų carinė administracija kurį laiką leido Vilniaus bonifratrams netrukdomiems veikti, tačiau 1843 m. Vilniaus vienuolynas buvo uždarytas. Tarpukariu, Lietuvai atgavus nepriklausomybę, bonifratrai vėl sugrįžo į Šv. Kryžiaus vienuolyną ir tęsė savo pirmtakų darbus. Po Antrojo pasaulinio karo ir Rusijos okupacijos gerieji broliai į Vilnių jau nebesugrįžo.',
  'XIX a. šiam ordinui Lietuvoje buvo lemiamas ir tragiškas: jam baigiantis, nebeliko nė vienos Karmelio bendruomenės. Visų Šventųjų vienuolynas po 1863 m. sukilimo tapo bendra įvairių uždarytų vienuolijų narių buveine, tam tikru metu čia gyveno 17 karmelitų, 8 trinitoriai, po 2 dominikonus ir bernardinus. Visų Šventųjų konventas panaikintas 1886 metais. Karmelitų vienuolija Lietuvoje liovėsi egzistavusi. Visų Šventųjų bažnyčia iš pradžių paversta maisto produktų sandėliu, vėliau – LSSR dailės muziejaus Liaudies meno skyriaus ekspozicija.'

];

var imagedetails = [];
var i;
for(i = 0;i<23;i++) //initalise array that stores all the required information for the image
{
  var image = {
    destination: destinations[i],
    img: images[i],
    name: churchNames[i],
    imgdesc1: desc1[i],
    imgdesc2: desc2[i]
  }
  imagedetails.push(image); //pushes details on the array

}
for(let n = 0; n < 23;n++)
{

  destinations[n].addEventListener("click",function()
{
  var imgNumb = n+1;
  var variable = n;
  document.getElementById("modalTitle").innerHTML = churchNames[variable];
  document.getElementById("modalImg").src = "img/" + imgNumb + ".png";

  document.getElementById("desc1").innerHTML = imagedetails[n].imgdesc1;
  document.getElementById("desc2").innerHTML = imagedetails[n].imgdesc2;
});
}




  var random = Math.floor(Math.random() * 23); //generates random number
  dragElement(imagedetails[random].img,random); //starts the function



function dragElement(elmnt,index) {
  window.onresize = function() //makes element always be in the correct spot
  {
    elmnt.style.width = document.getElementById("hide").offsetWidth+ "px"; //returns to original size
    elmnt.style.height = document.getElementById("hide").offsetHeight + "px";

    elmnt.style.top = document.getElementById("hide").offsetTop + "px";
    elmnt.style.left = document.getElementById("hide").offsetLeft + "px";
  };
  document.getElementById("imgheader").onclick = function()
  {
    var imgNumb = index + 1;
    document.getElementById("modalTitle").innerHTML = imagedetails[index].name;
    document.getElementById("modalImg").src = "img/" + imgNumb + ".png";
    document.getElementById("desc1").innerHTML = imagedetails[index].imgdesc1;
    document.getElementById("desc2").innerHTML = imagedetails[index].imgdesc2;

  };
  elmnt.style.visibility = "visible"; //makes element vissible
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var startposx, startposy;
  var move = true; //allows it to move
  var wrong = 0;


      // otherwise, move the DIV from anywhere inside the DIV:
      startposx = elmnt.offsetLeft; //get the position of an element
      startposy = elmnt.offsetTop;

      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragMouseDown;

  function reduceSize(element)
  {
    element.style.width = "45px";
    element.style.height = "auto";
  }
  function dragMouseDown(e) {
      e.preventDefault();
    if(move)
    {

      imgmove = true;
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:

      if(e.type == 'touchstart' || e.type == 'touchmove')
    {

      var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      pos3 = touch.pageX;
      pos4 = touch.pageY;

    }
    else {

      pos3 = e.pageX;
      pos4 = e.pageY;

    }

      originalHeight = elmnt.style.height;
      originalWidth = elmnt.style.width;
      reduceSize(elmnt); //reduces images size
      elmnt.style.top = (pos4-elmnt.height/2) + "px"; //centers the image
      elmnt.style.left = (pos3-elmnt.width/2) + "px";
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      // cll a function whenever the cursor moves:

      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag;

    }
    else
    {

        var imgNumb = index+1;
        document.getElementById("modalTitle").innerHTML = imagedetails[index].name;
        document.getElementById("modalImg").src = "img/" + imgNumb + ".png";

        document.getElementById("desc1").innerHTML = imagedetails[index].imgdesc1;

        document.getElementById("desc2").innerHTML = imagedetails[index].imgdesc2;
        elmnt.dataset.target = "#modal";
      var myModal = new coreui.Modal(document.getElementById('myModal'), {
        keyboard: true
        })

      myModal.show();

    }
  }

  function elementDrag(e) {
    e = e || window.event;


      if(e.type == 'touchevent' || e.type == 'touchmove')
    {

      var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];

      pos1 = pos3 - touch.pageX;
      pos2 = pos4 - touch.pageY;
      pos3 = touch.pageX;
      pos4 = touch.pageY;
    }
    else {

      pos1 = pos3 - e.pageX;
      pos2 = pos4 - e.pageY;
      pos3 = e.pageX;
      pos4 = e.pageY;

    }
    // calculate the new cursor position:



    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  }


  function CheckifHover(x,y)
  {
    var l;

    for(l = 0;l< 23;l++)
    {

      var dest = imagedetails[l].destination.getBoundingClientRect()

      if ((y > (dest.top-map.offsetTop)) && (y < (dest.bottom-map.offsetTop)) && (x > (dest.left-map.offsetLeft)) && (x < (dest.right- map.offsetLeft)))
      {
        wrong++;
        document.getElementById("failed").style.display = "flex";
        document.getElementById("church-id").innerHTML = "Čia stovi " + imagedetails[l].name;
        if( window.matchMedia("(max-width: 1238px)").matches)
        {
          document.getElementById("church-id").style.animation = "incorect-small 1s 1";
          document.getElementById("neteisingai").style.animation = "incorect-small 1s 1";


        }
        else {

          document.getElementById("church-id").style.animation = "incorect 2s 1";
          document.getElementById("neteisingai").style.animation = "incorect 2s 1";
        }



        var elm = document.getElementById("neteisingai");
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        var elm = document.getElementById("church-id");
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
      }
    }

  }
  function closeDragElement() {
    // stop moving when mouse button is released:
  //var coordinates = elmnt.getBoundingClientRect();

  if(event.type == 'touchend')
{

  var evt = (typeof event.originalEvent === 'undefined') ? event : event.originalEvent;
  var touch = evt.touches[0] || evt.changedTouches[0];

  var realX = touch.clientX - map.offsetLeft;
  var realY = touch.clientY - map.offsetTop;

}
else {

  var realX = event.clientX - map.offsetLeft;
  var realY = event.clientY - map.offsetTop;

}

    var dest = imagedetails[index].destination.getBoundingClientRect()

  //  alert(dest.top + " " + dest.left + "///" + (realY+scrollsY))
    if ((wrong == 3)||((realY > (dest.top-map.offsetTop)) && (realY < (dest.bottom-map.offsetTop)) && (realX > (dest.left-map.offsetLeft)) && (realX < (dest.right- map.offsetLeft))))
    {

      document.getElementById("failed").style.display = "none";
      if(zoomed) //determines the animation based on if the map is zoomed or not
      {
        destination[index].style.animation = "imgPlacedZoomed 2s 1";
      }
      else {
        destination[index].style.animation = "imgPlacedOut 2s 1";
      }

      move = false;
      imgmove = false;
      destinations[index].src = images[index].src;
          elmnt.style.display = "none";

      done++;
      if(wrong != 3)
      correct++;


      if(done < 2)
      {

        var random = Math.floor(Math.random() * 23);
        while(images[random].style.visibility == "visible")
        {
          random = Math.floor(Math.random() * 23);

        }
        document.getElementById("findText").innerHTML = "Rask šią bažnyčią! Turi tris bandymus";

        dragElement(images[random],random);
      }
      else {
        document.getElementById("top-end").style.display = "block"; ///displays the ending screen

        if(correct == 0)
        {
            document.getElementById("end-text").innerHTML = "Pabandyk dar kartą, gal geriau pasiseks?"
        }
        else if(correct == 1 || correct == 21)
        {
            document.getElementById("end-text").innerHTML = "Neblogai padirbėjai! Tau pavyko rasti " + correct + " bažnyčią";
        }
        else if(correct < 10)
        {
            document.getElementById("end-text").innerHTML = "Neblogai padirbėjai! Tau pavyko rasti " + correct + " bažnyčias."
        }
        else if (correct < 21){
          document.getElementById("end-text").innerHTML = "Neblogai padirbėjai! Tau pavyko rasti " + correct + " bažnyčių."
        }
        else
        {
          document.getElementById("end-text").innerHTML = "Neblogai padirbėjai! Tau pavyko rasti " + correct + " bažnyčias."
        }


      }


    }
    else {
      imgmove = false;
      CheckifHover(realX,realY);
      elmnt.style.width = document.getElementById("hide").offsetWidth+ "px"; //returns to original size
      elmnt.style.height = document.getElementById("hide").offsetHeight + "px";
      elmnt.style.top = document.getElementById("hide").offsetTop + "px";
      elmnt.style.left = document.getElementById("hide").offsetLeft + "px";
      if(wrong == 3) closeDragElement();

    }

    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
  }

}
