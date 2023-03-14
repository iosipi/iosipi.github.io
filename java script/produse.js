const produse = [
    {
        name: 'BoSStar 100g',
        image: 'BoSStar_100g.jpg',
        description: [
            `BoSStar-Compania noastră “Rifero” încearcă să vină mereu combinații deosebite pentru a surprinde fiecare pofticios,de aceea a creat delicioasele ciocolate “BoSStar”-o combinație nemaiîntâlnită de semințe și pulpă de dovleac cu miere de albină și învelite într-un strat delicios de ciocolată neagră..`,
            'Cantitate:100g',
        ],
        pret: '28.00',
    },
    {
        name: 'ChocoNuts 100g',
        image: 'ChocoNuts_100g.jpg',
        description: [
            `ChocoNuts-Îndrăgitele alune de pădure,scăldate în delicioasa miere de albine și învelite într-un strat de ciocolată cremoasă,special create pentru a oferi clipe dulci și de neuitat de fiecare dată.”ChocoNuts” sunt îndrăgite mult de copii,dar în același timp și maturii iubesc gustul deosebit al acestor ciocolate.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă. Poate conține urme de alte nuci. Avertizare alergeni: soia, alune, miere.',
            'Cantitate:100g',
        ],
        pret: '35.00',
    },
    {
        name: 'Cleopatra 100g',
        image: 'Cleopatra_100g.jpg',
        description: [
            `Ciocolatele noastre “Cleopatra”-o combinație mai deosebită decât celelalte,acestea conțin cafea în amestec cu arahide și învelite în ciocolata neagră marca “Rifero”. O gustare numai bună pentru a îndulci fiecare moment din viață.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă. Poate conține urme de alte nuci. Avertizare alergeni: soia, arahide, miere.',
            'Cantitate:100g',
        ],
        pret: '22.00',
    },
    {
        name: 'AraKiss 135g',
        image: 'AraKiss_135g.jpg',
        description: [
            `Preaiubitele ciocolate ”AraKiss”-o combinație deosebit de gustoasă dintre arahidele crocante învelite în ciocolata neagră marca “Rifero”,care sunt preferate atât de cei mici,cât și de cei mare pentru gustul nemaipomenit de bun al acestor ciocolate din ingrediente naturale.`,
            'Cantitate:135g',
        ],
        pret: '28.00',
    },
    {
        name: 'BonBon 200g',
        image: 'BonBon_200g.jpg',
        description: [
            `Ambalajul tematic și ingenios atrage privirea atât a maturilor,cât și a copiilor pentru a se îndrepta spre cel mai delicios mix de ciocolate marca “Rifero”. Bomboane de ciocolată asortate „Bon Bon” Rifero.`,
            '1. Prune cu nucă în ciocolată ”Rifero” – 3 buc.',
            '2. Halva în ciocolată – 3 buc.',
            '3. Fulgi de cocos în ciocolată – 3 buc.',
            '4. Semințe de floarea soarelui cu miere de albine în ciocolată ”Sementia” – 3 buc.',
            '5. Arahide cu miere de albine în ciocolată ”AraKiss” – 3 buc.',
            '6. Miez de nucă în ciocolată- 4-5 buc.',
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miez de nucă ',
            'Cantitate:200g',
        ],
        pret: '45.00',
    },
    {
        name: 'Flori 115g',
        image: 'Flori_115g.jpg',
        description: [
            `Diversitatea fructelor uscate din aceste ciocolate,îți umple sufletul cu culoare,dar în același timp,umple organismul cu multă energie,fibre și vitamine. Prunele și caisele uscate în amestec cu miezul de nucă și arahide și învelite în ciocolată,se combină perfect și creează o bombă de vitamine și savoare.`,
            'Cantitate:115g',
        ],
        pret: '30.00',
    },
    {
        name: 'Caise în ciocolată albă 200g',
        image: 'Caise_in_ciocolata_alba_200g.jpg',
        description: [
            `Gustul dulce-acrișor al caiselor uscate în combinație cu ciocolata albă delicioasă,creat cu drag pentru iubitorii de a încerca gusturi noi,dar în același timp,de a avea parte de un desert delicios, cu o aromă naturală și îmbietoare de vanilină.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia',
            'Cantitate:200g',
        ],
        pret: '70.00',
    },
    {
        name: 'Caise cu migdală în ciocolată albă 200g',
        image: 'Caise_cu_migdale_in_ciocolata_alba_200g.jpg',
        description: [
            `Pe lângă faptul că caisele sunt o sursă de vitamine și fibre,aceste delicii în combinație cu migdalele crocante și ciocolata albă fină oferă un gust nemaiîntâlnit care îndulcește sufletul fiecărei persoane.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, migdale',
            'Cantitate:200g',
        ],
        pret: '75.00',
    },
    {
        name: 'Caise în ciocolată 250g',
        image: 'Caise_in_ciocolata_250g.jpg',
        description: [
            `Pentru că deseori dorim să ne îndulcim,dar în același timp să consumăm produse sănătoase, “Caisele învelite în ciocolată” sunt o alternativă grozavă pentru o gustare sănătoasă,bogată în vitamine și foarte delicioasă.`,
            'Cantitate:250g',
        ],
        pret: '75.00',
    },
    {
        name: 'Curmale cu migdale în ciocolată 200g',
        image: 'Curmale_cu_migdale_in_ciocolata_200g.jpg',
        description: [
            `Curmale cu migdale în ciocolată-Un cadou perfect pentru iubitorii de curmale,însă de data aceasta, în combinație cu migdale și învelite în ciocolată.Un gust autentic,care așteaptă să fie încercat de către cei pofticioși,pentru că pe lângă faptul că sunt extrem de delicioase,aceste ciocolate mai sunt și sănătoase.`,
            'Cantitate:200g',
        ],
        pret: '50.00',
    },
    {
        name: 'Galbenă Gutuie 100g',
        image: 'Galbena_Gutuie_100g.jpg',
        description: [
            `Gutuile sunt o sursă de vitamine A,B și C,de aceea “Rifero” a creat ciocolatele “Galbenă Gutuie”.O combinație gustoasă dintre gutuile uscate și mierea de albine,învelite în ciocolată neagră.Sunt o gustare perfectă-atât sănătoasă,cât și foarte delicioasă.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miere',
            'Cantitate:100g',
        ],
        pret: '28.00',
    },
    {
        name: 'Gutuie în ciocolată albă 100g',
        image: 'Gutuie_in_ciocolata_alba_100g.jpg',
        description: [
            `Gutuie în ciocolată albă-Aroma îmbietoare a gutuilor,dar și gustul dulce-amărui al acestora în combinație cu ciocolata albă marca “Rifero”,sunt o combinație de nerefuzat,care te poartă cu sufletul înapoi în toamnă,la mirosul gutuilor abia culese.`,
            'Cantitate:100g',
        ],
        pret: '35.00',
    },
    {
        name: 'Gustul Moldovei 450g',
        image: 'Gustul_Moldovei_450g.jpg',
        description: [
            `Un mix de ciocolate apetisante,care pun în valoare bogățiile pe care ni le oferă țara noastră. Această cutie plină cu vitamine poate fi oferită la orice ocazie iubitorilor de ciocolate și fructe uscate.Bomboane de ciocolată asortate „Gustul Moldovei” Rifero.`,
            '1. Prune în ciocolată ”Perle Negre”',
            '2. Prune cu miez de nucă în ciocolată ”Rifero”',
            '3. Miez de nucă cu miere de albini în ciocolată ”Merit”',
            '4. Semințe de floarea soarelui decojite cu miere de albini în ciocolată ”Sementia”',
            '5. Semințe de dovleac decojite cu miere de albini în ciocolată ”BoSStar” ',
            'Cantitate:450g',
        ],
        pret: '99.00',
    },
    {
        name: 'Halviță 100g',
        image: 'Halvita_100g.jpg',
        description: [
            `Cine nu a mâncat vreodată halva,nu știe cum se simte gustul adevărat al copilăriei.Ciocolatele noastre “Halvița”-halva cu arahide învelite în ciocolată,te poartă cu gândul în copilărie,dar de asemenea îți îndulcește sufletul cu aroma și gustul senzațional al acestora.`,
            'Cantitate:100g',
        ],
        pret: '20.00',
    },
    {
        name: 'Iepuraș 106g',
        image: 'Iepuras_106g.jpg',
        description: [
            `“Iepurașul de ciocolată”-un cadou perfect pentru toate vârstele.Atât figurina care atrage privirile oricărui pofticios,dar și gustul îmbietor al fructelor și nucilor din care este compus iepurașul,cu drag alese pentru a fermeca fiecare iubitor de dulce. Figurină din ciocolată Iepuraș este umplut cu prune, caise, nuci și arahide.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miez de nucă, arahide',
            'Cantitate:106g',
        ],
        pret: '30.00',
    },
    {
        name: 'Kedru 100g',
        image: 'Kedru_100g.jpg',
        description: [
            `Ciocolate mai deosebite față de celelalte,pentru că umplutura cu miez de nucă de cedru siberian scăldate în miere de albine și învelite în ciocolată neagră cremoasă,anume această umplutură face ciocolatele mai neobișnuite,dar la fel de gustoase și sănătoase.`,
            'ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miez de nuca de cedru, miere.',
            'Cantitate:100g',
        ],
        pret: '85.00',
    },
    {
        name: 'Magic Box 450g',
        image: 'Magic_Box_450g.jpg',
        description: [
            `Cutia cu ciocolate “Magic Box” dăruiește zâmbete și răspândește magie în suflete tuturor prin varietatea de ciocolate cu drag alese pentru cei mari și mici.Bomboanele asortate Magic Box 450g Rifero conține:`,
            '1. Prune în ciocolată',
            '2. Prune cu nucă în ciocolată',
            '3. Caise în ciocolată',
            '4. Semințe de floarea soarelui cu miere de albine în ciocolată ”Sementia”.',
            '5. Arahide cu miere de albine în ciocolată ”AraKiss” ',
            '6. Stafide în ciocolată ”Struguri de Moldova”',
            '7. Figurină din ciocolată ”Iepuraș”',
            '8. Miez de nucă cu miere de albini în ciocolată',
            'Cantitate:450g',
        ],
        pret: '109.00',
    },
    {
        name: 'Imperatrice 235g',
        image: 'Imperatrice_235g.jpg',
        description: [
            `Aceste ciocolate au fost special create pentru iubitorii de a încerca gusturi noi.”Rifero Imperatrice” conține un mix de ciocolată albă și neagră cu umplutura celor mai aromate fructe care oferă un gust irezistibil.Conținutul cutiei Rifero Imperatrice:`,
            '1. Piersici în ciocolată neagră',
            '2. Vișine în ciocolată neagră',
            '3. Răchițele în ciocolată albă',
            '4. Gutuie în ciocolată albă',
            'Cantitate:235g',
        ],
        pret: '85.00',
    },
    {
        name: 'Premium 220g',
        image: 'Premium_220g.jpg',
        description: [
            `Pentru a îndulci fiecare moment al vieții a fost creată această cutie cu bomboane deosebite “Rifero Premium”.
            Această cutie conține:`,
            '1. Prune cu miez de nucă în ciocolată-“Rifero”',
            '2. Nuci de cedru cu miere în ciocolată-“Kedru”',
            '3. Arahide cu boabe de cafea în ciocolată-“Cleopatra”',
            '4. Gutuie în ciocolată-“Galbena Gutuie”',
            'Cantitate:220g',
        ],
        pret: '85.00',
    },
    {
        name: 'Regale 260g',
        image: 'Regale_260g.jpg',
        description: [
            `Cutii delicate ce conțin ciocolate delicioase,numai bune de degustat sau chiar de
            cadonat la orice fel de ocazii.Conținutul cutiei Rifero Regale:`,
            '1. Prune în ciocolată-“Perle Negre”',
            '2. Prune cu miez de nucă în ciocolată-“Rifero”',
            '3. Caise în ciocolată neagră',
            '4. Caise cu migdale în ciocolată albă',
            'Cantitate:260g',
        ],
        pret: '85.00',
    },
    {
        name: 'Nobil 230g',
        image: 'Nobil_230g.jpg',
        description: [
            `Un mix de ciocolate special alese pentru a crea momente de neuitat alături de cei dragi sufletului.
            O cutie de Rifero Nobil conține:`,
            '1. Prune în ciocolată-“Perle Negre”',
            '2. Miez de nucă în ciocolată-“Merit”',
            '3. Răchițele în ciocolată',
            '4. Alune de pădure în ciocolată-“Choconuts”',
            'Cantitate:230g',
        ],
        pret: '85.00',
    },
    {
        name: 'Kozinaki 150g',
        image: 'Kozinaki_150g.jpg',
        description: [
            `Gustul ce ne duce cu gândul la dulcele copilăriei, în acele timpuri când acessta era cel mai preferat deliciu de către toți.Acest deliciu este preparat din semințe de floarea soarelui combinate cu mierea naturală de albine și scăldate în ciocolata neagră delicioasă.`,
            'Cantitate:150g',
        ],
        pret: '22.00',
    },
    {
        name: 'Miez de nucă integral 150g',
        image: 'Miez_de_Nuca_integral_150g.jpg',
        description: [
            `O gustare sănătoasă pentru iubitorii de dulce oferită de “Rifero” prin miezul de nucă bine ales învelit în delicioasa ciocolată neagră.`,
            'Cantitate:150g',
        ],
        pret: '42.00',
    },
    {
        name: 'Prune cu nucă 200g',
        image: 'Prune_cu_nuca_200g.jpg',
        description: [
            `Prune uscate fără sâmburi cu miez de nucă-Prunele uscate în amestec cu miezul de nucă cu grijă ales,oferă un gust delicios,dar în același timp,ele sunt o bombă de fibre și vitamine ce ajută la prevenirea afecţiunilor cardiovasculare și inflamațiilor interne.`,
            'ATENȚIE:Produsul poate conține sâmburi de fructe sau părți ale acestora datorită îndepărtării mecanice.',
            'Cantitate:200g',
        ],
        pret: '35.00',
    },
    {
        name: 'Prune uscate fără sâmburi 200g',
        image: 'Prune_200g.jpg',
        description: [
            `Pentru iubitorii de prune,care vor să se îndulcească, “Prunele uscate fără sâmburi” sunt o alternativă sănătoasă de a înlocui zahărul,dar în același timp sunt o sursă de fibre și vitamine.`,
            'ATENȚIE:Produsul poate conține sâmburi de fructe sau părți ale acestora datorită îndepărtării mecanice.',
            'Cantitate:200g',
        ],
        pret: '25.00',
    },
    {
        name: 'Mere în ciocolată albă 150g',
        image: 'Mere_in_ciocolata_alba_150g.jpg',
        description: [
            `Ce poți să-ți dorești mai mult decât o gustare deosebită de mere uscate cu grijă învelite în ciocolata albă cremoasă?Această gustare este foarte apetisantă,iar cutia cu ciocolate poate fi oferită cu drag în dar celor apropiați.Merele rondele cu inveliș subțire de ciocolată fină,  sunt ambalate frumos într-o cutie elegantă.`,
            'Cantitate:150g',
        ],
        pret: '52.00',
    },
    {
        name: 'Mere în ciocolată 150g',
        image: 'Mere_in_ciocolata_150g.jpg',
        description: [
            `Ca să-ți încarci organismul cu o doză de energie,recomandăm “Merele în ciocolată”,care sunt atât sănătoase,cât și delicioase.Ciocolate care au create pentru momente minunate alături de cei dragi.Un deliciu perfect pentru ați alinta și ați satisface dorințele de a consuma ceva dulce și sănătos`,
            'Cantitate:150g',
        ],
        pret: '42.00',
    },
    {
        name: 'Merit 100g',
        image: 'Merit_100g.jpg',
        description: [
            `Ciocolatele “Merit” sunt combinația perfectă dintre miezul de nucă și mierea de albine învelite în ciocolată,care pun în valoare roadele bogate ale țării noastre.Aceste ciocolate sunt nemaipomenit de gustoase,dar în același timp foarte sănătoase.Aceste ciocolate sun făcute manual și cu mare dragoste`,
            'Cantitate:100g',
        ],
        pret: '28.00',
    },
    {
        name: 'Piersici 100g',
        image: 'Piersici_100g.jpg',
        description: [
            `Deseori ducem lipsă de ceva dulce,dar în același timp căutăm ca gustarea să fie sănătoasă pentru organismul nostru.Din acest motiv,Rifero a creat. Piersicile învelite într-un strat cremos de ciocolată neagră,o gustare delicioasă și sănătoasă.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia.`,
            'Cantitate:100g',
        ],
        pret: '28.00',
    },
    {
        name: 'Perle Negre 230g',
        image: 'Perle_Negre_230g.jpg',
        description: [
            `Prunele uscate fără sâmburi învelite în ciocolată neagră sunt un desert ce poate fiservit cu drag alături de cei dragi,pe lângă faptul că acestea sunt delicioase,prunele uscate sunt o sursă de vitamine A,B și C. Este un produs simplu dar unul destul de delicios și care te poate cuceri din prima gustare.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia.`,
            'Cantitate:230g',
        ],
        pret: '44.00',
    },
    {
        name: 'Rifero 230g',
        image: 'Prune_cu_nuca_230g.jpg',
        description: [
            `Prunele uscate aromate în amestec cu miezul de nucă,se combină perfect cu glazura de ciocolată neagră.În același timp,acestea sunt bogate în substanțe nutritive,fiind un produs îndrăgit de toți pentru gustul rafinat al ciocolatelor noastre.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miez de nucă `,
            'Cantitate:230g',
        ],
        pret: '50.00',
    },
    {
        name: 'Perle Negre 500g',
        image: 'Perle_Negre_500g.jpg',
        description: [
            `Prunele uscate fără sâmburi învelite în ciocolată neagră sunt un desert ce poate fiservit cu drag alături de cei dragi,pe lângă faptul că acestea sunt delicioase,prunele uscate sunt o sursă de vitamine A,B și C. Este un produs simplu dar unul destul de delicios și care te poate cuceri din prima gustare.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia.`,
            'Cantitate:500g',
        ],
        pret: '88.00',
    },
    {
        name: 'Rifero 500g',
        image: 'Prune_cu_nuca_500g.jpg',
        description: [
            `Prunele uscate aromate în amestec cu miezul de nucă,se combină perfect cu glazura de ciocolată neagră.În același timp,acestea sunt bogate în substanțe nutritive,fiind un produs îndrăgit de toți pentru gustul rafinat al ciocolatelor noastre.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, miez de nucă `,
            'Cantitate:500g',
        ],
        pret: '99.00',
    },
    {
        name: 'Răchițele în ciocolată 100g',
        image: 'Rachitele_in_ciocolata_100g.jpg',
        description: [
            `Rifero tinde mereu să fabrice cele mai deosebite ciocolate cu fructe uscate, de aceea,compania noastră vă prezintă “Răchițelele în ciocolată neagră”, o combinație dintre acrișor și dulce,pe gustul celor ce apreciază combinațiile felurite.`,
            'Cantitate:100g',
        ],
        pret: '30.00',
    },
    {
        name: 'Răchițele în ciocolată albă 100g',
        image: 'Rachitele_in_ciocolata_alba_100g.jpg',
        description: [
            `Tuturor le plac surprizele,dar compania noastră, “Rifero” încearcă să surprindă mereu,așa cum a făcut și cu fabricarea “Răchițelelor în ciocolată albă”.Gustul dulce-acrișor al răchițelelor în combinație cu ciocolata alba este demențial,de aceea te îndemnăm să încerci aceste ciocolate.`,
            'Cantitate:100g',
        ],
        pret: '35.00',
    },
    {
        name: 'Zâmbet 100g',
        image: 'Zambet_100g.jpg',
        description: [
            `Ciocolatele Rifero “Zâmbet” cu o umplutură nemaipomenită de cocos cu cremă de lapte acoperită cu un strat delicios de ciocolată neagră naturală al cărei gust te face cu adevărat să zâmbești.Gustul care poți să îl savurezi împreună cu famila și să te bucuri de aroma tropicală.`,
            `ATENȚIE: Produsul poate conține urme de fructe cu coajă lemnoasă.Poate conține urme de alte nuci. Avertizare alergeni: soia, lactoză.`,
            'Cantitate:100g',
        ],
        pret: '22.00',
    },
    {
        name: 'Semenția 100g',
        image: 'Sementia_100g.jpg',
        description: [
            `Semințele de floarea soarelui sunt foarte bogate în fibre și vitamine,iar în combinație cu mierea de albine și învelite în ciocolata neagră naturală,se creează un desert numai bun de luat atunci când ai poftă de ceva dulce,de aceea te îndemnăm să cumperi ciocolatele “Sementia”.`,
            'Cantitate:100g',
        ],
        pret: '20.00',
    },
    {
        name: 'Struguri de Moldova 136g',
        image: 'Struguri_de_Moldova.jpg"',
        description: [
            `Amestecul delicios de ciocolată neagră naturală și stafide ce alcătuiesc delicioasele ciocolate “Struguri de Moldova” care te poartă cu gândul la gustul copilăriei. Strugurii, însăși specificul acestui fruct care este extrem de adorat și preferat de toți este un simbol al țării noastre, de aceea combinarea acesteea cu ciocolata te lasă extrem de împlinit.`,
            'Cantitate:136g',
        ],
        pret: '30.00',
    },
    {
        name: 'Smochine în ciocolată 200g',
        image: 'Smochine_in-_ciocolata_200g.jpg',
        description: [
            `“Smochinele în ciocolată” au fost realizate cu multă pricepere pentru doritorii de a încerca ceva deosebit.Aceste ciocolate pot fi servite cu plăcere împreună cu cei dragi pentru a crea momente memorabile.`,
            'Cantitate:200g',
        ],
        pret: '55.00',
    },
    {
        name: 'Vișini 100g',
        image: 'Visina_100g.jpg',
        description: [
            `Gustul ciocolatelor ce te duc cu gândul la zilele de vară.Vișinele uscate cu multă pricepere,învelite într-un strat de ciocolată cremoasă neagră,creează special pentru voi,un gust delicios,calitativ și sănătos.La producere se utilizează doar ingrediente naturale, fără conservanți sau alte adaosuri.Atât producerea cât și ambalarea se face manual`,
            'Cantitate:100g',
        ],
        pret: '30.00',
    },
];

window.addEventListener('DOMContentLoaded', (event) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.id) {
        setProduct(parseInt(params.id));
    } else {
        setProducts();
    }
});

function getFavorites() {
    return localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
}

function addFavorite(index) {
    const favorites = getFavorites();

    console.log({favorites, index})
    const newList = favorites.some(item => item === index) ? favorites.filter(item => item !== index) : [...favorites, index];
    localStorage.setItem('favorites', JSON.stringify(newList));
    setProducts();
}

function setProducts() {
    const favorites = getFavorites();
    const cart = getaddItemToCart();

    document.getElementById('lista').innerHTML = produse.map((item, index) => `
    <div class="box">
    <div class="icons">
        <button onclick="addItemToCart(${index})"  id="add-cart" class="add-cart"><i style="color: ${cart.includes(index) ? 'blue' : 'inherit'};"class="bx bx-shopping-bag add-cart" ></i> </button>
        <button onclick="addFavorite(${index})"  id="heart" class="heart"> <i style="color: ${favorites.includes(index) ? 'red' : 'inherit'};" class="fas fa-heart"></i></button>
        <a href="./product.html?id=${index}" class="fas fa-eye"></a>
    </div>
    <div class="image">
        <img src="../imagini/${item.image}" width="" height="" alt="">
    </div>
    <div class="content">
        <h3>${item.name}</h3>
        <div class="price">${item.pret} MDL</div>
    </div>
</div>`).join('');
}

function getaddItemToCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

function addItemToCart(index) {
    const cart = getaddItemToCart();

    const newList = cart.some(item => item === index) ? cart.filter(item => item !== index) : [...cart, index];
    localStorage.setItem('cart', JSON.stringify(newList));
    setProducts();
}

function setProduct(index) {
    const produs = produse[index];

    document.title = produs.name;

    document.getElementById('product').innerHTML = `
<div class="row">

<div class="image">
    <img src="../imagini/${produs.image}">
</div>

<div class="content">
    <h3>${produs.name}</h3>
    ${produs.description.map(item => `<p>${item}</p>`).join('')}
   <butt> back
</div>

</div>
`;
}
