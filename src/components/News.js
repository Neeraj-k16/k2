import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'

import PropTypes from 'prop-types'






const News=(props)=>{

  

  

 
  let Source=[
    
        {
          "source": { "id": null, "name": "Marketingdirecto.com" },
          "author": "Esther Lastra",
          "title": "Scott Galloway profetiza que la compra de Twitter por parte de Elon Musk se irá al garete",
          "description": "\"Elon Musk aportará más volatilidad que verdadero valor a Twitter. No creo realmente que la transacción llegue a cerrarse\", asegura Scott Galloway.\nLa entrada Scott Galloway profetiza que la compra de Twitter por parte de Elon Musk se irá al garete se publicó…",
          "url": "https://www.marketingdirecto.com/digital-general/social-media-marketing/scott-galloway-profetiza-compra-twitter-ira-garete",
          "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2022/05/elon-musk-twitter.png",
          "publishedAt": "2022-05-18T13:06:05Z",
          "content": "\"Elon Musk aportará más volatilidad que verdadero valor a Twitter. No creo realmente que la transacción llegue a cerrarse\", asegura Scott Galloway.Es profesor de la Universidad de Nueva York, pero Sc… [+3080 chars]"
        },
        {
          "source": { "id": null, "name": "Itc.ua" },
          "author": "Максим Григор'єв",
          "title": "Tesla увеличивает максимальную скорость автопилота с Tesla Vision до 137 км/ч",
          "description": "Компания Tesla начала распространять обновление для своих авто, которое увеличит максимальную скорость автопилота до 137 км/ч. Это обновление вышло спустя почти год после того, как Tesla объявила о переходе на автопилот без радара. Идея заключалась в том, что…",
          "url": "https://itc.ua/news/tesla-uvelichivaet-maksimalnuyu-skorost-avtopilota-s-tesla-vision-do-137-km-ch/",
          "urlToImage": "https://itc.ua/wp-content/uploads/2022/05/depositphotos_459220104_l.jpg",
          "publishedAt": "2022-05-18T13:04:11Z",
          "content": "Tesla , 137 /. , , . Tesla , . , . , Autosteer, , 120 . 128 /, , Tesla . Tesla 145 .Tesla is finally bumping the max speed of Tesla Vision-based Autosteer from 80mph to 85mph.\r\nOn pre-Vision cars, th… [+173 chars]"
        },
        {
          "source": { "id": null, "name": "Sophos.com" },
          "author": "Paul Ducklin",
          "title": "Pwn2Own hacking schedule released – Windows and Linux are top targets",
          "description": "What's better? Disclose early, patch fast? Or dig deep, disclose in full, patch more slowly?",
          "url": "https://nakedsecurity.sophos.com/2022/05/18/pwn2own-hacking-schedule-released-windows-and-linux-are-top-targets/",
          "urlToImage": "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2022/05/p2o-1200.png?w=775",
          "publishedAt": "2022-05-18T13:04:06Z",
          "content": "The 2022 edition of the famous (or infamous, depending on your viewpoint) Pwn2Own competition kicks off later today in Vancouver, British Columbia.\r\n(Actually, it’s a so-called “hybrid” event this ye… [+5054 chars]"
        },
        {
          "source": { "id": null, "name": "Lalibre.be" },
          "author": "La Libre Eco avec Belga",
          "title": "Toutes les marques de voitures électriques peuvent désormais utiliser les chargeurs rapides de Tesla en Belgique",
          "description": "Neuf stations de recharge rapide et 141 superchargeurs individuels font partie du projet pilote en Belgique, ce qui en fait le plus grand réseau de recharge rapide du pays.",
          "url": "https://www.lalibre.be/economie/entreprises-startup/2022/05/18/toutes-les-marques-de-voitures-electriques-peuvent-desormais-utiliser-les-chargeurs-rapides-de-tesla-en-belgique-G4QFCRWIFZG3ZC6AN5VU2RMVKU/",
          "urlToImage": "https://www.lalibre.be/resizer/mFtf5Fi7ISj9tSzzsAZa4Z0dHJw=/169x0:2559x1593/1200x630/filters:quality(70):format(jpg):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/EF665FJJCNGHFFHRRMWR57UKMI.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/Y7A6RUX4C5BSFDCPN5QLRMIYN4.jpg",
          "publishedAt": "2022-05-18T13:02:31Z",
          "content": "Le constructeur américain de voitures électriques Tesla permet aux propriétaires de voitures électriques d'autres marques de faire le plein dans certaines stations de superchargeurs Tesla en Belgique… [+1035 chars]"
        },
        {
          "source": { "id": null, "name": "Smartmania.cz" },
          "author": "Adam Bělunek",
          "title": "Tesla spustila rezervace na svůj futuristický tahač. Záloha vyjde na půl milionu",
          "description": "Ačkoliv na elektrický tahač Tesla Semi čekáme už nějaký ten rok a v médiích už proběhly desítky spekulací ohledně možného začátku prodeje, nyní se zdá, že se věci konečně dávají do pohybu. Tesla na svých oficiálních stránkách totiž spustila předobjednávky pro…",
          "url": "https://smartmania.cz/tesla-spustila-rezervace-na-svuj-futuristicky-tahac-zaloha-vyjde-na-pul-milionu/",
          "urlToImage": "https://smartmania.cz/wp-content/uploads/2017/11/tesla-semi2.jpg",
          "publishedAt": "2022-05-18T13:00:05Z",
          "content": "Akoliv na elektrický taha Tesla Semi ekáme u njaký ten rok a v médiích u probhly desítky spekulací ohledn moného zaátku prodeje, nyní se zdá, e se vci konen dávají do pohybu. Tesla na svých oficiální… [+1147 chars]"
        },
        {
          "source": { "id": null, "name": "Abertoatedemadrugada.com" },
          "author": "Carlos Martins",
          "title": "Falha no Bluetooth deixa Teslas em risco",
          "description": "Investigadores identificaram falhas no Bluetooth Low Energy, que possibilitam entrar e roubar carros como os Tesla Model 3, e muitos outros produtos.",
          "url": "https://abertoatedemadrugada.com/2022/05/falha-no-bluetooth-deixa-teslas-em-risco.html",
          "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVTSzEmhoV_vKbuyOkyVit9nXOW0iq3gtxv7wQV3EP1VnExNbDb1TozHhc6evzyZ9_Xqhd9K6-ExZWO_xBV6DYhnsKDufzNYzqd-ejoaIqufH5B1V7XAPLyOZ2-LDyEI0mHCDgVjCt-ONa-EV1ceBTIl_MNPW9NhdH-cKhn2gv2cuJ5KUR3iO04Y0-5w/w1200-h630-p-k-no-nu/teslakey.jpg",
          "publishedAt": "2022-05-18T13:00:00Z",
          "content": "Investigadores identificaram falhas no Bluetooth Low Energy, que possibilitam entrar e roubar carros como os Tesla Model 3 e Y, e afectam muitos outros dispositivos.Há muito que são conhecidos os ata… [+1953 chars]"
        },
        {
          "source": { "id": null, "name": "Vnexpress.net" },
          "author": "VnExpress",
          "title": "Gián đoạn chuỗi cung ứng thách thức các hàng xe điện",
          "description": "Các nhà sản xuất ôtô lớn nhất thế giới lo ngại gián đoán chuỗi cung ứng, giá nguyên vật liệu leo cao đe dọa đến mục tiêu phát triển xe điện.",
          "url": "https://vnexpress.net/gian-doan-chuoi-cung-ung-thach-thuc-cac-hang-xe-dien-4464936.html",
          "urlToImage": "https://vcdn1-kinhdoanh.vnecdn.net/2022/05/18/106893850-1623165013127-vw11-1-7525-3458-1652848446.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=xZDdaK7Yir0M5jN0yy_P4A",
          "publishedAt": "2022-05-18T13:00:00Z",
          "content": "Các nhà sn xut ôtô ln nht th gii lo ngi gián oán chui cung ng, giá nguyên vt liu leo cao e da n mc tiêu phát trin xe in.Phát biu ti hi ngh Future of Car mi ây, ông Elon Musk, CEO ca Tesla, quan ngi v… [+3310 chars]"
        },
        {
          "source": { "id": null, "name": "Decrypt" },
          "author": "Andrew Asmakov",
          "title": "Elon Musk Wants Twitter to Be WeChat-Style Super App With Payments",
          "description": "The next iteration of Twitter could see the social media giant turn into a WeChat-style super app, according to Elon Musk.",
          "url": "https://decrypt.co/100732/elon-musk-wants-twitter-be-wechat-style-super-app-payments",
          "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/04/Elon-Musk-Twitter-gID_1.jpeg",
          "publishedAt": "2022-05-18T12:56:41Z",
          "content": "Tesla CEO Elon Musk didnt rule out that should he proceed with his Twitter acquisition, the social media platform could become sort of a super app similar to the Chinese WeChat that would also suppor… [+3090 chars]"
        },
        {
          "source": { "id": null, "name": "Autoblog" },
          "author": "Reuters",
          "title": "China reportedly in talks to extend EV production subsidies",
          "description": "Filed under:\n Government/Legal,Green,Plants/Manufacturing\n Continue reading China reportedly in talks to extend EV production subsidies\nChina reportedly in talks to extend EV production subsidies originally appeared on Autoblog on Wed, 18 May 2022 08:45:00 ED…",
          "url": "https://www.autoblog.com/2022/05/18/china-ev-subsidy-extension/",
          "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2022-03/1e238e50-a6b9-11ec-b1b9-a7b1ac595a4d",
          "publishedAt": "2022-05-18T12:45:00Z",
          "content": "SHANGHAI China is in talks with automakers about extending costly subsidies for electric vehicles (EV) that were set to expire in 2022, aiming to keep a key market growing as the broader economy slow… [+4579 chars]"
        },
        {
          "source": { "id": null, "name": "Motley Fool" },
          "author": "newsfeedback@fool.com (Billy Duberstein)",
          "title": "Buffett vs. Burry: Who's Right on Apple?",
          "description": "Two marquee investors take opposite positions in the largest company in the world.",
          "url": "https://www.fool.com/investing/2022/05/18/buffett-vs-burry-whos-right-on-apple/",
          "urlToImage": "https://g.foolcdn.com/editorial/images/680524/warren-buffett-3-tmf-may-2015_b064VRn.jpg",
          "publishedAt": "2022-05-18T12:37:00Z",
          "content": "Warren Buffett is legendary for perhaps the greatest long-term investing performance in history. Michael Burry is legendary in his own right for his shorting the housing market and banks before the f… [+6302 chars]"
        },
        {
          "source": { "id": null, "name": "Sputnik International" },
          "author": "Sputnik Türkiye",
          "title": "Twitter yöneticisinin videosu gündemde: Aspergerli Musk'ı önemsemem, işimiz ifade özgürlüğü değil",
          "description": "Tüm dünyanın yakından takip ettiği Elon Musk-Twitter pembe dizisinin yeni bölümünde, sosyal medya platformunun bir yöneticisinin dünyanın en zengin kişisi konumundaki teknoloji devi için 'zihinsel engelli' imasında bulunduğu, \"Twitter insanlara ifade özgürlüğ…",
          "url": "https://tr.sputniknews.com/20220518/twitter-yoneticisinin-videosu-gundemde-aspergerli-muski-onemsemem-isimiz-ifade-ozgurlugu-degil-1056475275.html",
          "urlToImage": "https://cdnntr1.img.sputniknews.com/images/sharing/article/tur/1056475275.jpg?10420271771652877627",
          "publishedAt": "2022-05-18T12:36:54Z",
          "content": "Rusya, ABD, Avrupa ve Ortadou bata olmak üzere dünyann dört bir yanndan son dakika haberleri, analizler ve özel dosyalar.\r\nhttps://tr.sputniknews.com/20220518/twitter-yoneticisinin-videosu-gundemde-a… [+4505 chars]"
        },
        {
          "source": { "id": null, "name": "futurezone.at" },
          "author": "florian.christof@futurezone.at (Florian Christof)",
          "title": "So lädt man sein E-Auto mit einem Tesla-Supercharger auf",
          "description": "Tesla öffnet in Österreich seine Ladestationen für alle E-Autos. Wir zeigen, wie man jedes E-Auto an einem Supercharger laden kann.",
          "url": "https://futurezone.at/produkte/e-auto-tesla-supercharger-ladestation-aufladen-anleitung-so-funktionierts-preise-stecker-ccs-app/402012129",
          "urlToImage": "https://image.futurezone.at/images/facebook/6923304/auf1.jpg",
          "publishedAt": "2022-05-18T12:36:47Z",
          "content": "Tesla öffnet in Österreich seine Ladestationen für alle E-Autos. Wir zeigen, wie man jedes E-Auto an einem Supercharger laden kann. \r\nDie Tesla-App\r\n© Tesla/Screenshot\r\nEin typischer CCS-Stecker\r\n(Cr… [+209 chars]"
        },
        {
          "source": { "id": null, "name": "Www.hln.be" },
          "author": "HLA",
          "title": "Tesla laat ook eigenaars van andere merken tanken aan snelladers in België: negen snellaadstations nemen deel aan pilootproject",
          "description": "De Amerikaanse fabrikant van elektrische wagens Tesla laat vanaf woensdag ook eigenaars van elektrische wagens van een ander merk toe om elektriciteit te tanken aan bepaalde Tesla-superchargerstations in België. Dat meldt Tesla woensdag in een persbericht.",
          "url": "https://www.hln.be/binnenland/tesla-laat-ook-eigenaars-van-andere-merken-tanken-aan-snelladers-in-belgie-negen-snellaadstations-nemen-deel-aan-pilootproject~a6324c95/",
          "urlToImage": "https://images0.persgroep.net/rcs/Pd4p1UMUNTEOwClFEU0F9uNqktg/diocontent/216207418/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
          "publishedAt": "2022-05-18T12:35:57Z",
          "content": "Negen snellaadstations en 141 individuele superchargers maken deel uit van de pilot in België, waardoor dit het grootste snellaadnetwerk van het land wordt. Het gaat om de volgende stations: Antwerpe… [+1766 chars]"
        },
        {
          "source": { "id": null, "name": "Turbo.fr" },
          "author": "Antoine Arnoux",
          "title": "ESSAI – Volkswagen ID.5 (2022) : du style, mais à quel prix ?",
          "description": "Comme prévu, Volkswagen n'aura pas attendu longtemps pour décliner son SUV électrique ID.4 en une variante de « coupé ». L'ID.5 devient ainsi le troisième modèle de la famille…",
          "url": "https://www.turbo.fr/volkswagen/id5/essai-auto/essai-volkswagen-id5-2022-du-style-mais-quel-prix-185728",
          "urlToImage": "https://www.turbo.fr/sites/default/files/2022-05/12_essai_volkswagen_id5_gtx_2022.jpg",
          "publishedAt": "2022-05-18T12:33:47Z",
          "content": "Comme prévu, Volkswagen n'aura pas attendu longtemps pour décliner son SUV électrique ID.4 en une variante de « coupé ». L'ID.5 devient ainsi le troisième modèle de la famille 100 % électrique du con… [+7927 chars]"
        },
        {
          "source": { "id": null, "name": "Antaranews.com" },
          "author": "Ade Irma J, Mecca Yumna",
          "title": "Tesla to invest in car battery, EVs in Indonesia: Minister",
          "description": "Tesla had shown interest in investing in car battery and electric vehicles (EVs) in Indonesia, Investment Minister Bahlil Lahadalia stated.\r\n\"If God allows, Tesla will (be distributed in) Indonesia. It (Tesla) will delve ...",
          "url": "https://en.antaranews.com/news/230073/tesla-to-invest-in-car-battery-evs-in-indonesia-minister",
          "urlToImage": "https://cdn.antaranews.com/cache/800x533/2022/03/23/antarafoto-germany-tesla-elonmusk-gigafactory-23032022.jpg",
          "publishedAt": "2022-05-18T12:32:41Z",
          "content": "Jakarta (ANTARA) - Tesla had shown interest in investing in car battery and electric vehicles (EVs) in Indonesia, Investment Minister Bahlil Lahadalia stated.\"If God allows, Tesla will (be distribute… [+1890 chars]"
        },
        {
          "source": { "id": null, "name": "CarScoops" },
          "author": "Andrew Gutman",
          "title": "VW Aero B Electric Sedan Spotted Again Testing Out On German Roads",
          "description": "Volkswagen's upcoming all-electric sedan is expected to compete with the Tesla Model 3",
          "url": "https://www.carscoops.com/2022/05/vw-aero-b-electric-sedan-spotted-again-testing-out-on-german-roads/",
          "urlToImage": "https://www.carscoops.com/wp-content/uploads/2022/05/VW-Aero-B-Spy-Shots-13.jpg",
          "publishedAt": "2022-05-18T12:32:24Z",
          "content": "Volkswagen has been readying a Tesla Model 3-fighting electric sedan for quite some time now, and our spy photographers were able to capture the latest prototype, tentatively named “Aero B”, testing … [+3616 chars]"
        },
        {
          "source": { "id": null, "name": "Diepresse.com" },
          "author": "Markus Hauer",
          "title": "Tesla öffnet Supercharger in Österreich für andere Marken",
          "description": "Auch in anderen Ländern macht der Autobauer seine Ladestationen für Fremdmarken zugänglich. Bei einigen Modellen wird das Laden in der Praxis allerdings problematisch.",
          "url": "https://www.diepresse.com/6141275/tesla-oeffnet-supercharger-in-oesterreich-fuer-andere-marken",
          "urlToImage": "https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/5/5/b/6141275/US-CALIFORNIA-AIMS-TO-BAN-GAS-POWERED-CARS-BY-2035_1652875904282825_v0_h.jpg",
          "publishedAt": "2022-05-18T12:31:00Z",
          "content": "Auch in anderen Ländern macht der Autobauer seine Ladestationen für Fremdmarken zugänglich. Bei einigen Modellen wird das Laden in der Praxis allerdings problematisch.\r\nDer US-Autobauer Tesla macht s… [+2768 chars]"
        },
        {
          "source": { "id": null, "name": "Www.ad.nl" },
          "author": "Lezers",
          "title": "Reacties op zonnepanelen: ‘Ik zou een paar jongens en meiden van de TU Delft of Eindhoven bellen’",
          "description": "‘De te veel geproduceerde stroom kun je ook opslaan in een elektra boiler’ en ‘Een warmtepomp gaat voor velen een erg dure grap worden’: dit zijn enkele reacties op nieuwsonderwerpen die lezers bezighouden. Hieronder de lezersbrieven die in de krant van dinsd…",
          "url": "https://www.ad.nl/lezersbrieven/reacties-op-zonnepanelen-ik-zou-een-paar-jongens-en-meiden-van-de-tu-delft-of-eindhoven-bellen~aa814232/",
          "urlToImage": "https://images0.persgroep.net/rcs/nc6WHowxJGVDbPd_TAWiOhdilLM/diocontent/216475435/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
          "publishedAt": "2022-05-18T12:30:03Z",
          "content": "Zonnepanelen | De enige oplossing die ze bedenken: dikkere kabels\r\nZonnepanelen vallen massaal uit bij te veel opbrengst (AD 17-5). De zon schijnt uitbundig, het waait af en toe stevig en alles raakt… [+4028 chars]"
        },
        {
          "source": { "id": null, "name": "futurezone.at" },
          "author": "florian.christof@futurezone.at (Florian Christof)",
          "title": "Tesla öffnet seine Ladestationen in Österreich für alle E-Autos",
          "description": "Der US-Autobauer ermöglicht nun das Laden aller Elektroautos an seinen Supercharger-Ladestationen.",
          "url": "https://futurezone.at/produkte/tesla-supercharger-ladestationen-oesterreich-alle-elektroautos-e-autos/402011961",
          "urlToImage": "https://image.futurezone.at/images/facebook/6922977/46-186848420.jpg",
          "publishedAt": "2022-05-18T12:30:02Z",
          "content": "Der US-Autobauer ermöglicht nun das Laden aller Elektroautos an seinen Supercharger-Ladestationen.\r\nToggle Infobox\r\n<ul><li>Wiener Neustadt, 14 Ladesäulen</li><li>St. Georgen, 8</li><li>Asten, 12</li… [+199 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": null,
          "title": "Want To See A Preview Of Tesla Robot, User Demands. Elon Musk Says...",
          "description": "Tesla Bot, a next-generation humanoid robot, is \"capable of performing tasks that are unsafe, repetitive or boring.\"",
          "url": "https://www.ndtv.com/world-news/elon-musk-to-give-a-sneak-preview-of-tesla-bot-on-ai-day-2987366",
          "urlToImage": "https://c.ndtvimg.com/2022-05/dte8tg0g_elon-musk-reuters_625x300_18_May_22.jpg",
          "publishedAt": "2022-05-18T12:28:01Z",
          "content": "Elon Musk Tesla Bot: Tesla Bot was announced by Elon Musk last year.\r\nHours after announcing details about Tesla's second Artificial Intelligence day, Elon Musk has said that people will get a chance… [+1518 chars]"
        },
        
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Jon Fingas",
      "title": "Apple softens its stance on remote work amid return-to-office delays",
      "description": "Apple is once again delaying its return to the office, and this time it will be less strict about in-person work. The New York Timesunderstands that Apple has delayed the return to offices once again. The iPhone maker will no longer require staff to come to t…",
      "url": "https://www.engadget.com/apple-delays-return-to-office-allows-remote-work-194324892.html",
      "urlToImage": "https://s.yimg.com/os/creatr-images/2020-06/f48235f0-a783-11ea-bbfc-3d6d42165a09",
      "publishedAt": "2022-05-17T19:43:24Z",
      "content": "Apple is once again delaying its return to the office, and this time it will be less strict about in-person work. The New York Timesunderstands that Apple has delayed the return to offices once again… [+1360 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Cherlynn Low",
      "title": "Apple adds systemwide Live Captions as part of larger accessibility update",
      "description": "Global Accessibility Awareness Day is this Thursday (May 19th) and Apple, like many other companies, is announcing assistive updates in honor of the occasion. The company is bringing new features across iPhone, iPad, Mac and Apple Watch, and the most intrigui…",
      "url": "https://www.engadget.com/apple-accessibility-updates-live-captions-magnifier-door-detection-assistive-touch-120056407.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/08701d00-d583-11ec-bffa-8f18f9f1f7b3",
      "publishedAt": "2022-05-17T12:00:56Z",
      "content": "Global Accessibility Awareness Day is this Thursday (May 19th) and Apple, like many other companies, is announcing assistive updates in honor of the occasion. The company is bringing new features acr… [+4579 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Christopher Schodt",
      "title": "We ran every test you could think of on the M1 Ultra",
      "description": "We've now tested every version of Apple's M1 processor, from the first M1 chip in the 13-inch Macbook Pro all the way up to the M1 Ultra in the new Mac Studio, and the chip's ability to scale performance is pretty incredible. The M1 Ultra fuses two M1 Max chi…",
      "url": "https://www.engadget.com/m1-ultra-benchmarks-upscaled-video-143024262.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/d2a18a60-d51e-11ec-bfd7-1ff38240af6e",
      "publishedAt": "2022-05-17T14:30:24Z",
      "content": "We've now tested every version of Apple's M1 processor, from the first M1 chip in the 13-inch Macbook Pro all the way up to the M1 Ultra in the new Mac Studio, and the chip's ability to scale perform… [+1873 chars]"
    },
    {
      "source": { "id": "wired", "name": "Wired" },
      "author": "Clive Thompson",
      "title": "Drones Are Turning Into Personal Flying Machines",
      "description": "We were promised jetpacks that never arrived. But you know what’s finally here? Big, honking drones you can ride on.",
      "url": "https://www.wired.com/story/drones-are-turning-into-personal-flying-machines/",
      "urlToImage": "https://media.wired.com/photos/627eb82cd2cc3583cf5c8fd2/191:100/w_1280,c_limit/Drones-Are-Turning-Into-Personal-Flying-Machines.jpg",
      "publishedAt": "2022-05-17T12:00:00Z",
      "content": "Ever since he was a kid in Sweden, Peter Ternström wanted to make a sci-fi-style flying machine. In 1983 he saw Return of the Jedi five times and dreamed of zooming through the forest of Endor on a l… [+3986 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Nilay Patel",
      "title": "The videos that don’t work on YouTube and the future of the creator business with Nebula CEO Dave Wiskus",
      "description": "The economics of running a creator-owned streaming service that’s an alternative to the YouTube algorithm, negotiating brand deals, and partnering with Curiosity Stream.",
      "url": "https://www.theverge.com/23076663/nebula-youtube-creator-business-future-startup-ceo-dave-wiskus",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/dAEi6gyySWPiNCXUL1KIsSU21R0=/0x148:2050x1221/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23478900/VRG_ILLO_5230_Decoder_DaveWiskus_s.jpg",
      "publishedAt": "2022-05-17T14:15:00Z",
      "content": "Photo Illustration by Grayson Blackmon / The Verge\r\n\n \n\n\n Running a creator-owned streaming service One of our recurring jokes at The Verge is that every YouTuber eventually makes a video where they … [+63164 chars]"
    },
    {
      "source": { "id": "ars-technica", "name": "Ars Technica" },
      "author": "Samuel Axon",
      "title": "iOS 15.5 and macOS 12.4 bring updates to Podcasts, digital payments, and more",
      "description": "tvOS, watchOS, HomePod, Studio Display, and Swift Playgrounds also got updates.",
      "url": "https://arstechnica.com/gadgets/2022/05/ios-15-5-and-macos-12-4-bring-updates-to-podcasts-digital-payments-and-more/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/IMG_0142-980x653-760x380.jpeg",
      "publishedAt": "2022-05-17T20:28:39Z",
      "content": "Enlarge/ Apple's Studio Display received a firmware update today to improve its webcam performance.\r\n2 with 2 posters participating\r\nApple released new software updates for all of its platforms on Tu… [+2768 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters Editorial",
      "title": "Wall Street ends sharply higher, fueled by Apple - Reuters.com",
      "description": "05/17 U.S. stocks finished higher on Tuesday, as investors were cheered by data showing U.S. retail sales increased 0.9% in April. This report produced by Chris Dignam.",
      "url": "https://www.reuters.com/video/watch/idsPZ1?now=true",
      "urlToImage": "https://ajo.prod.reuters.tv/api/v2/img/62842079e4b085d396fd7082-1652826233297?location=LANDSCAPE",
      "publishedAt": "2022-05-17T23:08:25Z",
      "content": "Posted \r\n05/17 U.S. stocks finished higher on Tuesday, as investors were cheered by data showing U.S. retail sales increased 0.9% in April. This report produced by Chris Dignam."
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Apple sued after loud Amber Alert on AirPods said to damage Texas boy's hearing - Reuters.com",
      "description": "Apple Inc has been sued by the family of a Texas child who allegedly suffered permanent hearing loss from an Amber Alert on the company's AirPod wireless earbuds.",
      "url": "https://www.reuters.com/legal/litigation/apple-sued-after-loud-amber-alert-airpods-said-damage-texas-boys-hearing-2022-05-17/",
      "urlToImage": "https://www.reuters.com/resizer/JjQUaSp2O7eXkgxMWpcZuiLommQ=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WOQMXJULEBM7PPLVCOBGU6F64M.jpg",
      "publishedAt": "2022-05-17T22:40:00Z",
      "content": "(Reuters) - Apple Inc has been sued by the family of a Texas child who allegedly suffered permanent hearing loss from an Amber Alert on the company's AirPod wireless earbuds.\r\nIn the lawsuit filed Mo… [+1797 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Futures climb as technology and growth stocks rebound - Reuters.com",
      "description": "U.S. stock index futures jumped on Tuesday, as strong earnings from Home Depot and United Airlines added to an upbeat global mood driven by hopes of easing crackdown on tech firms and COVID-19 in China.",
      "url": "https://www.reuters.com/markets/europe/futures-climb-technology-growth-stocks-rebound-2022-05-17/",
      "urlToImage": "https://www.reuters.com/resizer/6ac3u8l1RfuRY0Y9o2UlcPgd52g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/33TTRSXHSJJCFLAQKDTTDX6A5M.jpg",
      "publishedAt": "2022-05-17T11:21:00Z",
      "content": "May 17 (Reuters) - U.S. stock index futures jumped on Tuesday, as strong earnings from Home Depot and United Airlines added to an upbeat global mood driven by hopes of easing crackdown on tech firms … [+2641 chars]"
    },
    {
      "source": { "id": null, "name": "Android Central" },
      "author": "derrek.lee@futurenet.com (Derrek Lee)",
      "title": "New Pixel Buds Pro to come ahead of the AirPods Pro in at least one key metric",
      "description": "A new filing with the Wireless Power Consortium reveals the wireless charging speed of the upcoming Pixel Buds Pro. This suggests faster wireless charging than the AirPods Pro.",
      "url": "https://www.androidcentral.com/accessories/pixel-buds-pro-wireless-charging-speed",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/Zkahd95gXwKPTY4mYeVMNK-1200-80.jpg",
      "publishedAt": "2022-05-17T21:54:31Z",
      "content": "<ul><li>Google recently announced the new Pixel Buds Pro at its annual Google I/O developer conference.</li><li>According to a recent filing, Google's new wireless earbuds will charge wirelessly at 2… [+1761 chars]"
    },
    {
      "source": { "id": null, "name": "Android Central" },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "Here's why Meta hasn't removed the Quest Facebook login requirement yet",
      "description": "It's less to do with the technical challenge of supporting two account systems, and more to do with Meta trying to figure out how to safely and legally monetize your data.",
      "url": "https://www.androidcentral.com/gaming/virtual-reality/why-meta-hasnt-removed-facebook-quest-requirement",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/C5w3yF8bvHEaXcKCfKwZKD-1200-80.png",
      "publishedAt": "2022-05-17T16:01:45Z",
      "content": "Amidst all the cool revelations about new AR/VR headsets, realistic avatars, and GTA VR, Meta Connect 2021 had one seemingly small announcement that inspired universal joy from Oculus Quest owners at… [+7531 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Dale Berning Sawa",
      "title": "‘It’s called Disco, so we’re buying it!’: the rise and rise of fancy cordials",
      "description": "Forget lemon or lime – when the temperatures soar, what you really need is blood orange and bitter lemon, or strawberry and sageAs soon as the sun shows its nose in Britain, we want to be outside with a drink. Socks shrink, shoulders relax, park tennis courts…",
      "url": "https://amp.theguardian.com/food/2022/may/17/its-called-disco-so-were-buying-it-the-rise-and-rise-of-fancy-cordials",
      "urlToImage": "https://i.guim.co.uk/img/media/ddc245f69e4b93ece2d6027496abb42281ac55ab/0_235_5221_3133/master/5221.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=69cff6a5004668199a9b2f069fd09204",
      "publishedAt": "2022-05-17T12:16:54Z",
      "content": "As soon as the sun shows its nose in Britain, we want to be outside with a drink. Socks shrink, shoulders relax, park tennis courts teem with hopefuls counting down the days to Wimbledon, and we star… [+8224 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Rebecca Seal",
      "title": "Number crunching: why ultra-processed foods have a calorie problem",
      "description": "How we process a calorie depends on genetics, hormones and the food it’s in. The trouble is that 50% of our calories come from ultra-processed foods – everything from biscuits to hummusA calorie is a calorie, right? Fixed and unchanging, like a gram, or a mil…",
      "url": "https://amp.theguardian.com/lifeandstyle/2022/may/17/number-crunching-why-ultra-processed-foods-have-a-calorie-problem",
      "urlToImage": "https://i.guim.co.uk/img/media/d40e6c48b079632840babd8f2734473c0f9f44cb/1_114_4478_2688/master/4478.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=70c87b31cd2d1cc39887d23bf28588e4",
      "publishedAt": "2022-05-17T06:00:51Z",
      "content": "A calorie is a calorie, right? Fixed and unchanging, like a gram, or a mile? Well no, not necessarily. You see, what a straightforward calorie count on a restaurant menu or food packet cant tell you … [+9930 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Simon Parkin",
      "title": "Who owns Einstein? The battle for the world’s most famous face",
      "description": "Thanks to a savvy California lawyer, Albert Einstein has earned far more posthumously than he ever did in his lifetime. But is that what the great scientist would have wanted?In July 2003, the physicist and Pulitzer-prize-nominated author Dr Tony Rothman rece…",
      "url": "https://amp.theguardian.com/media/2022/may/17/who-owns-einstein-the-battle-for-the-worlds-most-famous-face",
      "urlToImage": "https://i.guim.co.uk/img/media/f3216171dc1e8a86250e77d73255711ebcb8ea88/0_1188_2768_1660/master/2768.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a46303523dc40d487b4929a0aae7629d",
      "publishedAt": "2022-05-17T05:00:49Z",
      "content": "In July 2003, the physicist and Pulitzer-prize-nominated author Dr Tony Rothman received an email from his editor bearing unwelcome news. Rothmans new book was weeks from publication. An affable debu… [+36463 chars]"
    },
    {
      "source": { "id": null, "name": "MacRumors" },
      "author": "Hartley Charlton",
      "title": "Apple Previews New Door Detection, Apple Watch Mirroring, and Live Captions Accessibility Features",
      "description": "Apple today previewed a range of new accessibility features, including Door Detection, Apple Watch Mirroring, Live Captions, and more.\n\n\n\n\n\nDoor Detection will allow individuals who are blind or have low vision to use their iPhone or iPad to locate a door upo…",
      "url": "https://www.macrumors.com/2022/05/17/apple-previews-new-accessibility-features/",
      "urlToImage": "https://images.macrumors.com/t/XztK86ZyisTAbD1aVDTM16B-dWQ=/1960x/article-new/2022/05/Apple-Accessibility-OS-features-2022.jpg",
      "publishedAt": "2022-05-17T12:42:13Z",
      "content": "Apple today previewed a range of new accessibility features, including Door Detection, Apple Watch Mirroring, Live Captions, and more.\r\nDoor Detection will allow individuals who are blind or have low… [+2939 chars]"
    },
    {
      "source": { "id": null, "name": "MacRumors" },
      "author": "Juli Clover",
      "title": "Nomad Launches New Sport Band Slim for Apple Watch",
      "description": "Nomad, known for its lineup of accessories created for Apple devices, today debuted a new Apple Watch band called the Sport Band Slim. It is an iteration on the Sport Band that Nomad also sells, but as the name suggests, it has an updated aesthetic.\n\n\n\n\n\nPric…",
      "url": "https://www.macrumors.com/2022/05/17/nomad-sport-band-slim-apple-watch/",
      "urlToImage": "https://images.macrumors.com/t/xVyHJhyqM_VfnIFeUA8HxpsWqoc=/1600x/article-new/2022/05/nomad-sport-slim.jpg",
      "publishedAt": "2022-05-17T16:00:14Z",
      "content": "Nomad, known for its lineup of accessories created for Apple devices, today debuted a new Apple Watch band called the Sport Band Slim. It is an iteration on the Sport Band that Nomad also sells, but … [+824 chars]"
    },
    {
      "source": { "id": null, "name": "MacRumors" },
      "author": "Juli Clover",
      "title": "Apple Facing Lawsuit After AirPods Allegedly Ruptured Child's Eardrums With Amber Alert",
      "description": "Apple's AirPods ruptured the eardrums of a 12-year-old boy in 2020 when a loud Amber Alert was issued, according to a lawsuit filed against Apple in California (via Law360).\n\n\n\n\n\nThe child, identified as B.G. in the filing, was watching a movie on Netflix on …",
      "url": "https://www.macrumors.com/2022/05/17/apple-airpods-pro-amber-alert-lawsuit/",
      "urlToImage": "https://images.macrumors.com/t/fhb0Ic3gQAXNPXi7C50zEScyWgo=/1600x/article-new/2019/11/airpodsproinear.jpg",
      "publishedAt": "2022-05-17T18:40:54Z",
      "content": "Apple's AirPods ruptured the eardrums of a 12-year-old boy in 2020 when a loud Amber Alert was issued, according to a lawsuit filed against Apple in California (via Law360).\r\nThe child, identified as… [+2682 chars]"
    },
    {
      "source": { "id": null, "name": "MacRumors" },
      "author": "Tim Hardwick",
      "title": "Sonos 'Sub Mini' Design Leaked Ahead of Official Announcement",
      "description": "Sonos is set to release a smaller, more affordable subwoofer that will be able to wirelessly pair with the Sonos Ray and the rest of its existing soundbar lineup, a new report has confirmed.\n\n\n\n\n\nAccording to The Verge, Sonos is working on a smaller version o…",
      "url": "https://www.macrumors.com/2022/05/17/sonos-sub-mini-design-leaked/",
      "urlToImage": "https://images.macrumors.com/t/mXrW-uyDzmq1xuafN1dKVdHGYDU=/1600x/article-new/2022/05/VRG_ILLO_5226_Sonos_Leak_sub-mini.jpg",
      "publishedAt": "2022-05-17T10:40:24Z",
      "content": "Sonos is set to release a smaller, more affordable subwoofer that will be able to wirelessly pair with the Sonos Ray and the rest of its existing soundbar lineup, a new report has confirmed.\r\nAccordi… [+1389 chars]"
    },
    {
      "source": { "id": null, "name": "CNET" },
      "author": "Max McHone",
      "title": "Save Over $200 on the OnePlus 9, One of Our Favorite Phones of the Year - CNET",
      "description": "Today only, get a 5G phone with an AMOLED display and ultra-fast charging capabilities for just $499.",
      "url": "https://www.cnet.com/tech/mobile/save-over-200-on-the-oneplus-9-one-of-our-favorite-phones-of-the-year/",
      "urlToImage": "https://www.cnet.com/a/img/resize/a6c4b53f095bc01b1bd028b7cd6a9d5160a71e71/2021/03/22/b41fc357-647b-4219-a009-ce75faa99492/oneplus-9-pro-hoyle-promo-27.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-05-17T15:16:57Z",
      "content": "While they've certainly carved out a large chunk of the market for themselves, Samsung, Google and Apple aren't the only phone manufacturers out there. There are plenty of smaller brands that have so… [+1255 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "prosen@insider.com (Phil Rosen)",
      "title": "10 things before the opening bell",
      "description": "Top bulls and bears are sounding off on Wall Street. This and more, in today's edition of the Opening Bell newsletter.",
      "url": "https://www.businessinsider.com/10-things-before-the-opening-bell-may-17-2022-5",
      "urlToImage": "https://i.insider.com/61f98f21ef63e10018100eb1?width=1200&format=jpeg",
      "publishedAt": "2022-05-17T10:30:00Z",
      "content": "Good morning. When the top voices on Wall Street can't agree on what happens next, at least you know the coming chapter is going to be interesting for markets. \r\nThe bulls and bears are out to play l… [+4260 chars]"
    },
    
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "'Huge' pressure for Shanghai to stay COVID-free as lockdown end nears - Reuters",
      "description": "Health authorities in Shanghai faced \"huge\" pressure to keep China's most populous city free of COVID-19 as residents were counting down the days until June 1 when their lockdown is set to end after almost two months of isolation.",
      "url": "https://www.reuters.com/world/china/huge-pressure-shanghai-remains-covid-free-end-lockdown-looms-2022-05-18/",
      "urlToImage": "https://www.reuters.com/resizer/CWSHsdgHhEfJOdVHJCooYpnSx7U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PS2PP6LDGBNILJKUD4MUFH3A3U.jpg",
      "publishedAt": "2022-05-18T12:11:00Z",
      "content": "SHANGHAI/BEIJING, May 18 (Reuters) - Health authorities in Shanghai faced \"huge\" pressure to keep China's most populous city free of COVID-19 as residents were counting down the days until June 1 whe… [+5098 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Peter Schacknow",
      "title": "Stocks making the biggest moves premarket: Target, Walmart, Carrier Global and others - CNBC",
      "description": "These are the stocks posting the largest moves before the bell.",
      "url": "https://www.cnbc.com/2022/05/18/stocks-making-the-biggest-moves-premarket-target-walmart-carrier-global-and-others.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106984555-16385741522021-12-03t212746z_393402353_rc277r9njrws_rtrmadp_0_usa-stocks.jpeg?v=1638574214&w=1920&h=1080",
      "publishedAt": "2022-05-18T11:50:59Z",
      "content": "Check out the companies making headlines before the bell:\r\nTarget (TGT) Target plummeted 22.1% in the premarket after the retailer reported an adjusted quarterly profit of $2.19 per share, below the … [+2617 chars]"
    },
    {
      "source": { "id": null, "name": "MarketWatch" },
      "author": "Tomi Kilgore",
      "title": "Target's stock sinks toward worst day since Black Monday - MarketWatch",
      "description": "Shares of Target Corp. undefined are suffering a black Wednesday, as they are plunging toward their worst one-day performance in 35 years. The stock is...",
      "url": "https://www.marketwatch.com/story/targets-stock-sinks-toward-worst-day-since-black-monday-2022-05-18",
      "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
      "publishedAt": "2022-05-18T11:16:00Z",
      "content": "Shares of Target Corp. \r\n TGT,\r\n -1.41%\r\nare suffering a black Wednesday, as they are plunging toward their worst one-day performance in 35 years. The stock is shedding 21.6% in premarket trading, af… [+696 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Retail Stocks: Target Stocks Dives On Big Miss After Walmart Earnings Fall Well Short - Investor's Business Daily",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiRWh0dHBzOi8vd3d3LmludmVzdG9ycy5jb20vbmV3cy9yZXRhaWwtc3RvY2tzLXRhcmdldC13YWxtYXJ0LWVhcm5pbmdzL9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-05-18T11:01:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Diana Olick",
      "title": "Weekly mortgage demand from homebuyers tumbles 12%, as higher interest rates take their toll - CNBC",
      "description": "Higher mortgage interest rates are hitting homebuyer affordability hard, and that is showing up in a sharp drop in mortgage applications.",
      "url": "https://www.cnbc.com/2022/05/18/weekly-mortgage-demand-from-homebuyers-tumbles-12percent.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107062756-1652820776892-gettyimages-1240449958-AFP_329H2E7.jpeg?v=1652820837&w=1920&h=1080",
      "publishedAt": "2022-05-18T11:00:02Z",
      "content": "Mortgage rates actually fell slightly last week, but the damage has already been done to housing affordability. Both refinance and purchase loan demand dropped, pulling total mortgage application vol… [+2144 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Jody Serrano",
      "title": "Twitter Won’t Budge in Face of Musk’s Spam Bot Obsession, Says It Will ‘Enforce the Merger Agreement’ - Gizmodo",
      "description": "The board reportedly told CNN that it was committed to the $44 billion sale and insinuated that it was prepared to sue to get Musk to honor the agreement.",
      "url": "https://gizmodo.com/twitter-says-it-will-enforce-merger-agreement-with-elon-1848941453",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a7af527b9ca240f959adaa6c8d9dfc53.jpg",
      "publishedAt": "2022-05-18T10:28:00Z",
      "content": "You can almost hear the exasperated sigh at Twitter when you look at the havoc Elon Musk, CEO of Tesla and possibly Twitters future owner, has wreaked on on and off the social media platform over the… [+2339 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Melissa Repko",
      "title": "Lowe's sales decline as cool spring weather weighs on demand for outdoor products - CNBC",
      "description": "The home improvement retailer's profit topped Wall Street estimates for the quarter, even as sales missed the mark.",
      "url": "https://www.cnbc.com/2022/05/18/lowes-low-earnings-q1-2022.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106848038-1614716685715-low.jpg?v=1652734231&w=1920&h=1080",
      "publishedAt": "2022-05-18T10:13:26Z",
      "content": "Lowe's on Wednesday missed Wall Street's sales expectations for its fiscal first quarter, as cooler spring weather hurt demand for supplies for outdoor do-it-yourself projects.\r\nThe company's shares … [+2185 chars]"
    },
    {
      "source": { "id": null, "name": "Fox Business" },
      "author": "Associated Press",
      "title": "US stocks choppy hours before opening bell - Fox Business",
      "description": "U.S. stocks were choppy early Wednesday morning, turning lower hours before the opening bell. Target and Lowes are expected to report earnings.",
      "url": "https://www.foxbusiness.com/markets/stocks-5-18-22",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/1stocks-5.18.22.jpg?ve=1&tl=1",
      "publishedAt": "2022-05-18T07:57:32Z",
      "content": "U.S. stocks were choppy early Wednesday morning, turning lower hours before the opening bell.\r\n<table><tr><th>Ticker</th><th>Security</th><th>Last</th><th>Change</th><th>Change %</th></tr>\r\n<tr><td>I… [+3881 chars]"
    },
    {
      "source": { "id": null, "name": "Cointelegraph" },
      "author": "William Suberg",
      "title": "Bitcoin shakes of Fed volatility as analysts remain split on return under $24K - Cointelegraph",
      "description": "Bitcoin revolves around $30,000 while BTC price outlooks still include a lower low than last week's $23,800 Terra LUNA drop.",
      "url": "https://cointelegraph.com/news/bitcoin-shakes-of-fed-volatility-as-analysts-remain-split-on-return-under-24k",
      "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDUvOTdiMmNlMzQtNjVlYi00ODc0LTgwNzQtZTEwNTFlNmVmZTA4LmpwZWc=.jpg",
      "publishedAt": "2022-05-18T07:24:30Z",
      "content": "Bitcoin (BTC) circled $30,000 on May 18 after fresh comments from the United States Federal Reserve sparked n volatility.\r\nBTC/USD 1-hour candle chart (Bitstamp). Source: TradingView\r\nAnalyst: Extra … [+3245 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Stock rally losing puff as economic growth doubts grow - Reuters",
      "description": "Asia's stock markets eked out their fourth straight session of gains on Wednesday, but the recent rally lost momentum as nagging doubts about inflation and the drag from rate rises overshadowed bits and pieces of good news about the global growth outlook.",
      "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-2022-05-18/",
      "urlToImage": "https://www.reuters.com/resizer/O15fo-VHbziqv5NOK4kqvqUDnRo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AYPKJDYUNRMBNIE4W425Y243DA.jpg",
      "publishedAt": "2022-05-18T05:49:00Z",
      "content": "SINGAPORE, May 18 (Reuters) - Asia's stock markets eked out their fourth straight session of gains on Wednesday, but the recent rally lost momentum as nagging doubts about inflation and the drag from… [+3895 chars]"
    },
    {
      "source": { "id": null, "name": "ScienceAlert" },
      "author": "Peter Howson, The Conversation",
      "title": "The Cryptocurrency Crash Is Great News For The Rest of The World. Here's Why - ScienceAlert",
      "description": "Cryptocurrencies like Bitcoin were meant to be used as digital cash. Instead, they've become popular as speculative investments.",
      "url": "https://www.sciencealert.com/the-cryptocurrency-crash-is-great-news-for-the-rest-of-the-world-here-s-why",
      "urlToImage": "https://www.sciencealert.com/images/2022-05/processed/BurstingBitcoinBalloon_1024.jpg",
      "publishedAt": "2022-05-18T05:27:17Z",
      "content": "Cryptocurrencies like Bitcoin were meant to be used as digital cash. Instead, they've become popular as speculative investments.\r\nAs well as being resource-intensive and inherently wasteful, cryptocu… [+5825 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Rachel Phua",
      "title": "Shares of Shopee-owner Sea surge 14% after stronger-than-expected revenue - CNBC",
      "description": "Southeast Asian tech giant Sea's shares rebounded, but its e-commerce site could slow due to macro uncertainties.",
      "url": "https://www.cnbc.com/2022/05/18/sea-q1-earnings-shopee-garena-post-strong-revenue-.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107062354-1652792412926-gettyimages-1355515030-dsc09206edit.jpeg?v=1652793980&w=1920&h=1080",
      "publishedAt": "2022-05-18T04:40:26Z",
      "content": "Singapore, Singapore - 2021: A large Shopee logo at the entrance to the e-commerce platform's headquarters at Science Park. (Exact photography date unknown due to incorrect camera settings)\r\nShares o… [+4226 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "China Tech Stocks Slide as Liu He's Pledges Underwhelm - Bloomberg Markets and Finance",
      "description": "Tech stocks lead a broader decline in China markets on Wednesday as support pledges from Vice Premier Liu He lacked fresh detail and fresh virus outbreaks ar...",
      "url": "https://www.youtube.com/watch?v=lHWLKYUkFmQ",
      "urlToImage": "https://i.ytimg.com/vi/lHWLKYUkFmQ/hqdefault.jpg",
      "publishedAt": "2022-05-18T04:32:57Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Jim Cramer explains why investors should have their eyes on retail earnings and China - CNBC Television",
      "description": "The \"Mad Money\" host explained what investors should be on the lookout for to determine what Wednesday's trading session will be like in Tuesday's episode of...",
      "url": "https://www.youtube.com/watch?v=9pyvqo-3vtA",
      "urlToImage": "https://i.ytimg.com/vi/9pyvqo-3vtA/hqdefault.jpg",
      "publishedAt": "2022-05-18T03:42:19Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Arjun Kharpal",
      "title": "China has signaled easing of its tech crackdown — but don't expect a policy U-turn - CNBC",
      "description": "Following a meeting with top executives, Liu He, China's vice-premier, pledged support for the technology sector and plans for internet companies to go public.",
      "url": "https://www.cnbc.com/2022/05/18/china-signals-easing-of-its-tech-crackdown-but-dont-expect-a-u-turn.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107062682-1652814922546-gettyimages-1391132088-41.jpeg?v=1652815008&w=1920&h=1080",
      "publishedAt": "2022-05-18T02:05:00Z",
      "content": "China has shown signs of easing its crackdown on the technology sector which has wiped billions of dollars of value from its most prominent companies.\r\nBut analysts said Beijing's recent positive rhe… [+3814 chars]"
    },
    {
      "source": { "id": null, "name": "Fox Business" },
      "author": "Paul Best",
      "title": "Gas prices hit $4 in all 50 states for the first time, national average reaches record high - Fox Business",
      "description": "The average gallon of gas now tops $4 a gallon in all 50 states for the first time ever, according to the auto club AAA.",
      "url": "https://www.foxbusiness.com/economy/gas-prices-record-nationwide",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/02/0/0/Gas-Prices.jpg?ve=1&tl=1",
      "publishedAt": "2022-05-18T01:14:09Z",
      "content": "Gas prices continued hitting record highs this week, as the average gallon of gas now costs at least $4 in all 50 states for the first time ever, according to the auto club AAA. \r\nJust three states –… [+2139 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Goh Chiew Tong",
      "title": "Air travel is making a strong comeback, but Asia is lagging behind, IATA says - CNBC",
      "description": "Air travel in the United States, Europe and Latin America are hitting about 60% of pre-pandemic levels, says the International Air Transport Association.",
      "url": "https://www.cnbc.com/2022/05/18/strong-air-travel-recovery-in-us-europe-latin-america-but-asia-lags.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106979960-1637759704670-gettyimages-1236751769-775740669.jpeg?v=1652768041&w=1920&h=1080",
      "publishedAt": "2022-05-18T01:10:00Z",
      "content": "International air travel has been making a strong recovery this year, with the exception of the Asia-Pacific region, which is \"lagging significantly behind,\" according to the International Air Transp… [+3082 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT News Desk",
      "title": "Elon Musk reacts to leaked Twitter videos where employees say, 'We're commie as f***', 'You are special needs' - Hindustan Times",
      "description": "Though Twitter has not officially commented about the leaked videos, the employees are believed to have received a mail on safeguarding internal conversations and policies. | World News",
      "url": "https://www.hindustantimes.com/world-news/elon-musk-reacts-to-leaked-twitter-video-where-engineer-says-we-re-commie-as-f-101652833294384.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/18/1600x900/elon_musk_1652833567159_1652833585117.jpg",
      "publishedAt": "2022-05-18T00:29:58Z",
      "content": "Tesla CEO Elon Musk has commented on the leaked video of a Twitter employee openly admitting that Twitter has no freedom of speech and his colleagues are 'commies as f***' as the video has now gone v… [+3325 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "Ben Dooley, Hisako Ueno",
      "title": "Japan's Economy Shrank 1 Percent as Consumers Fled Covid - The New York Times",
      "description": "The world’s third-largest economy lost momentum in the first three months of the year after the Omicron variant suppressed demand at home.",
      "url": "https://www.nytimes.com/2022/05/17/business/japan-economy-covid.html",
      "urlToImage": "https://static01.nyt.com/images/2022/05/18/business/18-Japan-Economy/18-Japan-Economy-facebookJumbo.jpg",
      "publishedAt": "2022-05-18T00:29:08Z",
      "content": "TOKYO Last December, after two years of stop-and-go growth, Japans economic engine seemed like it might finally be revving up. Covid cases were practically nonexistent. Consumers were back on the tow… [+1277 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Taylor Telford",
      "title": "Apple delays plan to require workers in the office three days a week - The Washington Post",
      "description": "The tech giant also reinstates mask requirements for common areas, citing a rise in coronavirus cases.",
      "url": "https://www.washingtonpost.com/business/2022/05/17/apple-office-three-days-week/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J75IVZWV7UI6ZPQXFBQWJF2MKQ.jpg&w=1440",
      "publishedAt": "2022-05-17T23:39:00Z",
      "content": "Placeholder while article actions load\r\nApple has tabled a policy that would have required workers to be in the office on Mondays, Tuesdays and Thursdays, citing the rising wave of covid-19 cases for… [+2777 chars]"
    },
    
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Jacky Wong",
      "title": "Tencent’s Earnings Are a Bad Omen for Chinese Tech - The Wall Street Journal",
      "description": "China’s most valuable internet company is contending with a toxic mix of slowing consumption and regulatory overhang at home, and the same forces punishing other tech firms abroad",
      "url": "https://www.wsj.com/articles/tencents-earnings-are-a-bad-omen-for-chinese-tech-11652876650",
      "urlToImage": "https://images.wsj.net/im-546664/social",
      "publishedAt": "2022-05-18T12:24:00Z",
      "content": "A regulatory crackdown, a slowing Chinese economy and a nasty post-Covid hangover added up to the weakest revenue growth ever for Chinas most valuable internet company last quarter. The stock has bee… [+2592 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Greg Ip",
      "title": "Meltdown Exposes Hollowness of Libertarian Promise...",
      "description": "Meltdown Exposes Hollowness of Libertarian Promise...\r\n\n \n \n \n (Second column, 14th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Celebs Pushing Crypto Not So Vocal Now...\r\nHow Trash-Talking Bro Caused $40 Billion Crash...",
      "url": "https://www.wsj.com/articles/crypto-meltdown-exposes-hollowness-of-its-libertarian-promise-11652875201",
      "urlToImage": "https://images.wsj.net/im-546216/social",
      "publishedAt": "2022-05-18T12:07:42Z",
      "content": "To its advocates, cryptocurrency is, at its heart, a libertarian project to free mankind from the shackles of governmentmost of all its power to debase a fiat currency by printing more of it. Do Kwon… [+355 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Caitlin Ostroff",
      "title": "Stock Futures Decline After Rally - The Wall Street Journal",
      "description": "<ol><li>Stock Futures Decline After Rally  The Wall Street Journal\r\n</li><li>Stock market news live updates: Stock futures rise to extend gains after Powell comments  Yahoo Finance\r\n</li><li>US stocks choppy hours before opening bell  Fox Business\r\n</li><li>T…",
      "url": "https://www.wsj.com/articles/global-stocks-markets-dow-update-05-18-2022-11652859762",
      "urlToImage": "https://images.wsj.net/im-546569/social",
      "publishedAt": "2022-05-18T11:36:00Z",
      "content": "U.S. stock futures fell, following signs that rising costs were weighing on some companies profits, putting Wall Street on course to extend the years volatility.\r\nFutures for the S&amp;P 500 fell 0.8… [+185 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Spencer Jakab",
      "title": "This Could Be Lost Decade for Stocks...",
      "description": "This Could Be Lost Decade for Stocks...\r\n\n \n \n \n (Second column, 13th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Surging Dollar Stirs Markets Buzz of 80s-Style Plaza Accord...",
      "url": "https://www.wsj.com/articles/this-could-be-a-lost-decade-for-stocks-11652871781",
      "urlToImage": "https://images.wsj.net/im-546198/social",
      "publishedAt": "2022-05-18T11:19:40Z",
      "content": "U.S. stocks could well bounce back from their awful start to the year. How they do in the longer run is another matter.Heading into 2022, expectations were great. A Natixis survey of individual inves… [+3774 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Paul Hannon",
      "title": "U.K. Inflation Hits 40-Year High, Putting Government on Defensive - The Wall Street Journal",
      "description": "<ol><li>U.K. Inflation Hits 40-Year High, Putting Government on Defensive  The Wall Street Journal\r\n</li><li>UK inflation jumps to 40-year high of 9% as food and energy prices spiral  CNBC\r\n</li><li>UK inflation hits 40-year high of 9%  CNN\r\n</li><li>UK infla…",
      "url": "https://www.wsj.com/articles/u-k-inflation-hits-40-year-high-putting-government-on-defensive-11652866547",
      "urlToImage": "https://images.wsj.net/im-546626/social",
      "publishedAt": "2022-05-18T10:59:00Z",
      "content": "LONDONThe U.K.s annual rate of inflation jumped to a forty-year-high in April, the highest level recorded by an industrialized nation since the start of the global price surge last year.\r\nConsumer pr… [+260 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Libertina Brandt",
      "title": "UTAH REAL ESTATE RECORD SHATTERED: $40M COMPOUND!",
      "description": "UTAH REAL ESTATE RECORD SHATTERED: $40M COMPOUND!\r\n\n \n \n \n (Second column, 14th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:BOOM: In Hamptons, $48M Home Sells Before Hits Market...\r\nBUST: JPMORGAN investors reject Dimon's bonus...",
      "url": "https://www.wsj.com/articles/rockstar-energy-creator-russell-weiner-pays-a-record-39-6-million-for-park-city-ski-home-11652822121",
      "urlToImage": "https://images.wsj.net/im-545525/social",
      "publishedAt": "2022-05-18T04:10:40Z",
      "content": "Billionaire Russell Weiner, the creator of Rockstar Energy Drink, has purchased a $39.6 million spec home in Park City, Utah, according to Paul Benson of Engel &amp; Völkers, who represented both Mr.… [+2313 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Joseph Pisani",
      "title": "Arkansas Gov. Says GOP Needs to Move Past Trump...",
      "description": "Arkansas Gov. Says GOP Needs to Move Past Trump...\r\n\n \n \n \n (First column, 4th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
      "url": "https://www.wsj.com/articles/gov-asa-hutchinson-says-gop-needs-to-move-past-donald-trump-11652832337",
      "urlToImage": "https://images.wsj.net/im-546309/social",
      "publishedAt": "2022-05-18T04:10:38Z",
      "content": "The Republican Party has to move past former President Donald Trump, said Arkansas Gov. Asa Hutchinson. To do so, voters need to see other leaders fighting for the same conservative issues Mr. Trump … [+307 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Sune Engel Rasmussen",
      "title": "瑞典和芬兰将于周三提交加入北约申请 - Wall Street Journal",
      "description": "<ol><li>瑞典和芬兰将于周三提交加入北约申请  Wall Street Journal\r\n</li><li>芬兰与瑞典加入北约事突遇“程咬金” 土耳其坚称不同意  RFI - 法国国际广播电台\r\n</li><li>现实很残酷，普京这次强忍住了愤怒！  瞭望东方周刊\r\n</li><li>扎哈罗娃：芬兰瑞典在美国施压下“入约”，是在给予俄罗斯采取行动的自由！  环球网\r\n</li><li>芬兰预备军人紧急练兵以迎战俄罗斯任何威胁  RFI - 法国国际广播电台\r\n</li><li>在Google 新闻上查看完整…",
      "url": "https://cn.wsj.com/articles/瑞典和芬兰将于周三提交加入北约申请-11652832007",
      "urlToImage": "https://images.wsj.net/im-545901/social",
      "publishedAt": "2022-05-18T00:00:00Z",
      "content": "·(Magdalena Andersson)·(Sauli Niinisto)(NATO)\r\n94%\r\n..."
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Aruna Viswanatha",
      "title": "Steve Wynn Sued by Justice Department - The Wall Street Journal",
      "description": "<ol><li>Steve Wynn Sued by Justice Department  The Wall Street Journal\r\n</li><li>U.S. Accuses Steve Wynn of Lobbying Trump on Behalf of China  The New York Times\r\n</li><li>DOJ files suit against casino mogul Steve Wynn seeking order that he register as foreig…",
      "url": "https://www.wsj.com/articles/steve-wynn-sued-by-justice-department-11652826374",
      "urlToImage": "https://images.wsj.net/im-546352/social",
      "publishedAt": "2022-05-17T23:24:00Z",
      "content": "WASHINGTONThe Justice Department sued casino mogul Steve Wynn Tuesday to force him to register as a lobbyist in connection with his 2017 efforts to obtain a diplomatic favor long sought by Chinese au… [+296 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Caitlin McCabe, Alexander Osipovich",
      "title": "Tech Shares Rebound, Leading Stock Rally - The Wall Street Journal",
      "description": "Upbeat retail-sales data, signs of reopening in China fuel optimism",
      "url": "https://www.wsj.com/articles/global-stocks-markets-dow-update-05-17-2022-11652772429",
      "urlToImage": "https://images.wsj.net/im-545660/social",
      "publishedAt": "2022-05-17T19:21:00Z",
      "content": "U.S. stock indexes climbed Tuesday as investors snapped up beaten-down shares in the technology, banking, airline and other sectors.\r\nThe S&amp;P 500 rose about 2% in 4 p.m. trading, while the Dow Jo… [+179 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": null,
      "title": "The Cat Business Is Booming - The Wall Street Journal",
      "description": "Feline owners are shelling out for services from daycare and baths to exercise, social stimulation and even some time at the spa.",
      "url": "https://www.wsj.com/story/the-cat-business-is-booming-dd384bdd",
      "urlToImage": "https://images.wsj.net/im-536908/social",
      "publishedAt": "2022-05-17T18:04:18Z",
      "content": "Businesses that also focus on dogs are discovering the upside to providing cat care, too. It is underestimated how much people will spend on cats, said Julie Fredrick, owner of Pet Sitter LLC in Bois… [+8 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Andrew Tangel and Micah Maidenberg",
      "title": "CHINA EASTERN Black Box Points to Intentional Nosedive...",
      "description": "Flight data suggests that someone in the cockpit of the Boeing 737-800 that crashed in March put the aircraft into a near-vertical descent, according to a preliminary U.S. assessment.",
      "url": "https://www.wsj.com/articles/china-eastern-black-box-points-to-intentional-nosedive-11652805097",
      "urlToImage": "https://images.wsj.net/im-543611/social",
      "publishedAt": "2022-05-17T17:40:41Z",
      "content": "Flight data indicates someone in the cockpit intentionally crashed a China Eastern jet earlier this year, according to people familiar with U.S. officials preliminary assessment of what led to the ac… [+291 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Sune Engel Rasmussen",
      "title": "Sweden, Finland to submit NATO membership bid Wednesday...",
      "description": "Sweden, Finland to submit NATO membership bid Wednesday...\r\n\n \n \n \n (First column, 15th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Ukraine relinquishes Mariupol as Russia attacks both east and west...\r\n'Astonishingly weakened' Putin fidgets manically...\r\nTV pu…",
      "url": "https://www.wsj.com/livecoverage/russia-ukraine-latest-news-2022-05-17",
      "urlToImage": "https://images.wsj.net/im-545901/social",
      "publishedAt": "2022-05-17T16:22:38Z",
      "content": "Sweden and Finland will submit their applications for NATO membership on Wednesday, Swedish Prime Minister Magdalena Andersson said in a joint press conference with Finnish President Sauli Niinisto i… [+1087 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Allison Prang",
      "title": "Feds Find Drug Smuggling Tunnel Between San Diego, Mexico...",
      "description": "Feds Find Drug Smuggling Tunnel Between San Diego, Mexico...\r\n\n \n \n \n (Third column, 5th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
      "url": "https://www.wsj.com/articles/a-drug-smuggling-tunnel-was-discovered-connecting-san-diego-warehouse-to-mexico-11652799301",
      "urlToImage": "https://images.wsj.net/im-545753/social",
      "publishedAt": "2022-05-17T15:04:38Z",
      "content": "Federal investigators said they found a more than 1,700-foot-long drug-smuggling tunnel connecting San Diego to Tijuana, Mexico, and authorities charged six people for conspiracy to distribute more t… [+295 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Sarah Nassauer",
      "title": "Walmart Earnings Are Dented by Higher Costs - The Wall Street Journal",
      "description": "<ol><li>Walmart Earnings Are Dented by Higher Costs  The Wall Street Journal\r\n</li><li>Walmart shares fall as higher costs, supply chain problems and inventories eat into profits  CNBC\r\n</li><li>Walmart earnings miss estimates as inflation hits profits  Yahoo…",
      "url": "https://www.wsj.com/articles/walmart-sales-rise-but-higher-costs-dent-profit-11652787631",
      "urlToImage": "https://images.wsj.net/im-544214/social",
      "publishedAt": "2022-05-17T14:22:00Z",
      "content": "Walmart like many of the families that shop in its stores, is getting squeezed by higher food prices and other rising costs.\r\nThe countrys largest retailer by revenue said sales increased in the most… [+136 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Katherine Clarke",
      "title": "In Hamptons, $48 Million Home Sells Before Hits Market...",
      "description": "In Hamptons, $48 Million Home Sells Before Hits Market...\r\n\n \n \n \n (Second column, 8th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
      "url": "https://www.wsj.com/articles/in-the-hamptons-a-48-million-home-sells-before-it-hits-the-market-11652737587",
      "urlToImage": "https://images.wsj.net/im-545107/social",
      "publishedAt": "2022-05-17T11:31:38Z",
      "content": "The former Hamptons home of the late \r\nJohnson &amp; Johnson\r\nchief executive \r\nJames Burke\r\nhas sold for close to its $48 million asking price, according to people familiar with the situation. The r… [+1967 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Lindsay Ellis and Charley Grant",
      "title": "Goldman Sachs Takes a Page From Netflix and Twitter on Vacation Rules - The Wall Street Journal",
      "description": "Goldman Sachs Takes a Page From Netflix and Twitter on Vacation Rules  The Wall Street JournalView Full Coverage on Google News",
      "url": "https://www.wsj.com/articles/goldman-sachs-takes-a-page-from-netflix-and-twitter-on-vacation-rules-11652786855",
      "urlToImage": "https://images.wsj.net/im-545311/social",
      "publishedAt": "2022-05-17T11:27:00Z",
      "content": "Goldman Sachs Group Inc., the 153-year-old Wall Street firm synonymous with long hours and a hard-charging culture, is telling some senior employees it wont be capping their days off.\r\nOnce reserved … [+333 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Laura Forman",
      "title": "Tech Giants Want to Own Your Summer Vacation - The Wall Street Journal",
      "description": "Over the past two weeks both Airbnb and Uber Technologies have unveiled big, multipronged platform updates",
      "url": "https://www.wsj.com/articles/tech-giants-want-to-own-your-summer-vacation-11652785381",
      "urlToImage": "https://images.wsj.net/im-545475/social",
      "publishedAt": "2022-05-17T11:03:00Z",
      "content": "One thing not in short supply right now are product announcements in the online travel sector.Over the past two weeks both\r\nAirbnb\r\n ABNB -5.77%\r\nand\r\nUber Technologies\r\n UBER -3.28%\r\nhave unveiled b… [+3756 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Vivian Salama and James Marson",
      "title": "Ukrainian Soldiers Lay Down Arms at Mariupol’s Azovstal Steel Plant - The Wall Street Journal",
      "description": "<ol><li>Ukrainian Soldiers Lay Down Arms at Mariupol’s Azovstal Steel Plant  The Wall Street Journal\r\n</li><li>Mariupol's fate in limbo after steelworks evacuation; Russia plays down NATO expansion  CNBC\r\n</li><li>Latest Russia-Ukraine War news: Live updates …",
      "url": "https://www.wsj.com/articles/ukraine-says-long-combat-mission-in-mariupol-has-ended-11652767128",
      "urlToImage": "https://images.wsj.net/im-545652/social",
      "publishedAt": "2022-05-17T09:42:00Z",
      "content": "KYIV, UkraineUkrainian fighters in Mariupol laid down their arms at the Azovstal steel plant, concluding months of bloody battle for the strategic southern port city that ended with a dramatic siege … [+320 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Nina Trentmann",
      "title": "Lordstown Motors Remains Concerned About Ability to Stay in Business, CFO Says - The Wall Street Journal",
      "description": "Electric-truck maker needs to raise more capital and boost its market capitalization, CFO Adam Kroll says",
      "url": "https://www.wsj.com/articles/lordstown-motors-remains-concerned-about-ability-to-stay-in-business-cfo-says-11652741679",
      "urlToImage": "https://images.wsj.net/im-545511/social",
      "publishedAt": "2022-05-16T22:54:00Z",
      "content": "Lordstown Motors Corp.s\r\nability to stay in business for at least another year remains in doubt until it secures more funding and its market value rises, its finance chief said after the electric-tru… [+4270 chars]"
    }
  

  
  

      ]
    
  
  
 
  
  
  const capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);

  }
  



  

  

 


  

  
  
  




  


  
    
    return (
      
      <>
          
          <h1 className="text-center" style={{ margin: '15px 0px',marginTop:'90px' }}>NewsMonkey - top {capitalizefirstletter(props.category)} Headlines</h1>
          
          

          

          
            <div className='container my-3'>
            
              <div className='row'>
                {Source.map((element,index)=>{
                  return  <div className='col-md-4' key={index}>
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                          </div>

                }
                )
                }
              </div>

            </div>

         
          
         
        
      </>
    )
  
}

News.defaultProps = {
  country: "in",
  pagesize: 5,
  category:"general"
}
News.propTypes = {
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}

export default News
