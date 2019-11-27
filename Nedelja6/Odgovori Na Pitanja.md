1."Зашто користимо JSON?"

-Posto je jedina veza izmedju klijenta i servera u obliku texta potreban nam je alat koji nase JS objekte pretvara u text
-JSON- Je skracenica od Java Script Object Notation i to je standard za komunikaciju izmejdu klijenta i servera.
-JSON- Procesuira objekat u string kada salje podatke serveru sa komandom json.stringify,
A kada sa servera primamo podatke u json formatu uz pomoc komande json.pars pretvaramo string u objekat koji JS koristi.

2.Зашто су модули корисни? +Пример

-Modul je Zbirka malih nezavisnih jedinica, koje se mogu posle koristiti bezbroj puta u nasoj aplikaciji.
Te jedinice mogu sadrzati: Promenljive, Klase, Nizove, Objekte,...
-Moduli su jako korisni zbog recikliranja koda,jer se ne moraju neke stvari iznova pisati.
-NPR: Napravimo neki .js file koji ce sadrzati u sebi neku klasu npr. (automobili) u kojoj ce biti parametri sta 
jedan automobil mora da sadrzi: progon vozila:(prednji,zadnji,4x4), broj vrata:(3,5), boja:(plava,...), masa:(1500kg,...).
Nakon toga u tom .js file-u cemo exportovati tu klasu tako da bi je mogli koristiti, sa export { automobili }.
Onda u nasem glavnom npr.index.js file-u tu klasu cemo importovati da bi bila vidljiva tu sa import { automobili } from...
Sada mozemo u ovo file-u da napravimo nekoliko novih vozila let fica = new automobili(prednji,3,bela,800kg), itd.
A u koliko zelimo da nasim vozilima dodamo neki parametar dovoljno je da to promenimo samo u klasi automobili koju
exportujemo i radice za sva nova vozila koje napravimo.

3.Шта је ECMAScript?

ECMAScript je standard, I to je skracenica od 'European Computer Manufacturer’s Association'.
JavaScript je iplementacija ECMAScript standarda ali takodje ima neke svoje dodatke.

4.Опишите како функционишу HTTP захтеви и шта је то REST API.

HTTP je skracenica od 'Hyper Text Transfer Protocol' i to je komunikacija izmedju klijenta i servera i ona se obavlja
preko HTTP request-ova i HTTP respons-ova. Klijent zatrazi neku internet stranicu od servera tako sto posalje HTTP request
dok server klijentu vraca odgovor u smislu HTTP respons-a. Danas se u 90% slucajeva koristi JSON kao veza izmedju ova dva.
REST API je skup nekih funkcija koje developeri mogu da koriste u komunikaciji sa serverom.
Najcesce od njih su: PUT, POST, GET, DELETE,...
API je skracenica od 'Application programming interface' i api je deo servera koji prima zahteve od klijenta 
i vraca responce nazad klijentu.

5.Која је разлика између == и === ?

2 znaka == uporedjuju vrednosti dve promenljive dok
3 znaka === uporedjuju te promenljive i po vrednosti i po tome koje su tipa te promenljive

6.Шта враћа console.log(typeof typeof true); Објаснити зашто.

Vratice string, gledano sa desna na levo prvi typeof ce vratiti boolean od true,ali ce ga vratiti u stringu jer 
typeof uvek vraca string sa opisom kojeg je tipa vrednost unutar stringa. 
A onda ce 2 typeof vratiti od 'boolean' da je string.