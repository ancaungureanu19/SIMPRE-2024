This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

 
Introducere
În era digitală actuală, dezvoltarea de aplicații web și mobile care utilizează servicii în cloud a devenit o necesitate esențială pentru a oferi experiențe interactive și scalabile utilizatorilor din întreaga lume. În acest proiect, ne-am concentrat pe construirea unei astfel de aplicații folosind două servicii populare în cloud: MongoDB și Vercel.
Codul sursă al aplicației a fost salvat și gestionat într-un repozitoriu GitHub. Acest lucru a facilitat gestionarea și actualizarea codului, precum și integrarea continuă a schimbărilor în fluxul de lucru al dezvoltării.
Vercel a fost alegerea noastră pentru desfășurarea și găzduirea aplicației noastre, datorită integrării sale strânse cu GitHub și abordării sale orientate spre viteza și productivitatea dezvoltatorilor. Folosind Vercel, am putut desfășura aplicația noastră rapid și ușor, beneficiind de scalabilitate automată și performanță de vârf.
MongoDB reprezintă un sistem de gestiune a bazelor de date NoSQL care oferă flexibilitate și scalabilitate în gestionarea datelor, în timp ce Vercel este o platformă modernă de hosting și desfășurare care ne-a permis să aducem aplicația noastră în fața utilizatorilor într-un mod rapid și eficient.
În acest proiect, ne propunem să explorăm integrarea dintre MongoDB și Vercel pentru a crea o aplicație web care să ofere funcționalități de bază, cum ar fi gestionarea datelor și interacțiunea cu utilizatorii. Vom explora, de asemenea, modalități de a utiliza funcționalitățile avansate ale acestor servicii pentru a îmbunătăți experiența utilizatorului și performanța aplicației noastre.
Linkuri utile:
•	https://simpre-2024-yxg3-k4lglfung-ancas-projects-3d9d6270.vercel.app/
•	https://github.com/ancaungureanu19/SIMPRE-2024
https://youtu.be/0CK_7onrOVY


Tehnologii
GitHub
GitHub este o platformă de gestionare a codului sursă bazată pe web, care facilitează colaborarea între dezvoltatori și gestionarea proiectelor de dezvoltare a software-ului. Principalele caracteristici și funcționalități ale GitHub includ:
•	Controlul Versiunilor: GitHub oferă un sistem robust de control al versiunilor, care permite dezvoltatorilor să monitorizeze modificările în codul sursă și să colaboreze eficient în cadrul echipelor.
•	Repozitorii: Dezvoltatorii pot crea și gestiona repositorii pentru proiectele lor de software, unde pot stoca și organiza codul sursă, fișierele și documentația.
•	Colaborare și Comunitate: GitHub facilitează colaborarea între dezvoltatori prin intermediul funcțiilor precum probleme, solicitări de tragere și comentarii, permițând revizuirea și discutarea codului într-un mediu structurat.
•	Integrare Continuă: GitHub oferă integrare cu servicii de integrare continuă (CI) și de livrare continuă (CD), care permit automatizarea testării și desfășurării codului.
•	Securitate și Controlul Accesului: Platforma oferă funcționalități avansate de securitate, inclusiv autentificare în două pași, verificarea vulnerabilităților dependențelor și gestionarea accesului la repositorii.
•	Proiecte și Managementul Proiectelor: GitHub permite organizarea și gestionarea proiectelor prin intermediul tablourilor de proiecte, care facilitează urmărirea sarcinilor, atribuirea și prioritizarea activităților.

(1.png)
API
Un API (Interfață de Programare a Aplicațiilor) reprezintă un set de reguli, protocoale și instrumente care permit comunicarea și interacțiunea între diferite aplicații software. Prin intermediul unui API, o aplicație poate trimite solicitări și primi răspunsuri de la alte aplicații sau servicii, permițând astfel integrarea și interoperabilitatea între ele.
Există mai multe tipuri de API-uri, printre care se numără:
•	API-uri Web: Acestea sunt API-uri care permit accesul la funcționalitățile și datele unui serviciu sau aplicație prin intermediul internetului. Ele sunt adesea utilizate pentru a integra servicii terțe în aplicații web sau mobile.
•	API-uri de Sistem: Acestea sunt API-uri care permit interacțiunea directă cu sistemul de operare sau hardware-ul unui dispozitiv. Ele sunt adesea utilizate pentru a accesa resurse și funcționalități la nivel de sistem, cum ar fi gestionarea fișierelor sau controlul dispozitivelor hardware.
•	API-uri de Bibliotecă: Acestea sunt API-uri care oferă acces la funcționalități și resurse specifice unei anumite biblioteci sau framework-uri de programare. Ele sunt utilizate pentru a extinde și a interacționa cu funcționalitățile oferite de aceste biblioteci.

API-urile sunt utilizate într-o varietate de scenarii și aplicații, inclusiv:
•	Integrarea cu Servicii Terțe: Dezvoltatorii utilizează API-uri pentru a integra funcționalități și servicii oferite de terți în propriile aplicații. De exemplu, o aplicație de socializare poate folosi API-ul unei platforme de autentificare socială pentru a permite utilizatorilor să se conecteze cu conturile lor existente.
•	Dezvoltarea de Aplicații Multiplatformă: API-urile permit dezvoltatorilor să creeze aplicații care rulează pe mai multe platforme și dispozitive. Prin intermediul unui API bine definit, o aplicație poate interacționa cu diferite sisteme și dispozitive fără a fi necesară rescrierea codului sursă.
•	Automatizarea și Orchestarea Proceselor: API-urile sunt utilizate pentru a automatiza și a coordona diferite procese și fluxuri de lucru în cadrul unei aplicații sau organizații. Prin intermediul unui API, datele și acțiunile pot fi transmise și procesate în mod automat în funcție de anumite condiții sau evenimente.

MongoDB
MongoDB este un sistem de gestiune a bazelor de date NoSQL, recunoscut pentru abordarea sa scalabilă și flexibilă în gestionarea datelor. NoSQL (Not Only SQL) se referă la o clasă de baze de date care oferă alternative la modelul tradițional de relaționare SQL, permițând stocarea și interogarea datelor într-un mod mai flexibil și mai dinamic.
O caracteristică definitorie a MongoDB este modelul său de date flexibil, bazat pe documente. În loc să utilizeze structuri tabulare rigide, MongoDB stochează datele sub formă de documente JSON (JavaScript Object Notation), oferind astfel un mod natural și intuitiv de a organiza și accesa datele. Această flexibilitate permite dezvoltatorilor să lucreze mai eficient și să adapteze structura datelor la nevoile specifice ale aplicației lor.
O altă caracteristică cheie a MongoDB este scalabilitatea sa orizontală. Prin distribuirea datelor pe mai multe noduri de server, MongoDB poate gestiona cantități mari de date și sarcini de lucru intensive, fără a compromite performanța sau disponibilitatea. Această abordare permite extinderea ușoară a capacității de stocare și a puterii de procesare pe măsură ce cerințele aplicației cresc.
MongoDB oferă, de asemenea, o varietate de funcționalități avansate pentru administrarea și gestionarea datelor, inclusiv replicarea automată pentru asigurarea redundanței și a disponibilității, indexarea eficientă pentru acces rapid la date și interogările complexe, și suportul pentru tranzacții pentru asigurarea consistenței și integrității datelor.
Astfel, MongoDB reprezintă o opțiune puternică și versatilă pentru dezvoltatorii care caută o soluție modernă și scalabilă de gestionare a datelor. Cu abordarea sa flexibilă, scalabilă și bogată în funcționalități, MongoDB continuă să fie o alegere populară în rândul comunității de dezvoltatori pentru o varietate de aplicații și scenarii de utilizare.
(image-2.png)


Vercel
Vercel este o platformă modernă de hosting și desfășurare care oferă un mediu simplificat și eficient pentru construirea și desfășurarea aplicațiilor web și mobile. Platforma este recunoscută pentru performanța sa de vârf, scalabilitatea automată și integrarea strânsă cu ecosistemul de dezvoltare web.
O caracteristică definitorie a Vercel este accentul pus pe viteza și productivitatea dezvoltatorilor. Prin utilizarea unor tehnologii precum serverless și pre-rendering, Vercel permite construirea și desfășurarea aplicațiilor într-un mod eficient și optimizat. Această abordare ajută la reducerea timpului de încărcare al paginilor și la îmbunătățirea experienței utilizatorului final.
O altă caracteristică cheie a Vercel este scalabilitatea sa automată. Platforma gestionează automat cererile de trafic fluctuante și creșterea volumului de utilizatori, permițând aplicației să rămână receptivă și disponibilă în orice moment. Această scalabilitate dinamică elimină nevoia de a gestiona manual resursele de infrastructură și permite dezvoltatorilor să se concentreze pe construirea funcționalităților aplicației.
Vercel oferă, de asemenea, o gamă largă de funcționalități și instrumente pentru dezvoltatorii web. Acestea includ suport pentru multiple limbaje de programare, integrare continuă (CI/CD), gestionarea domeniilor și certificatelor SSL, monitorizare performanță, și multe altele. Aceste caracteristici permit dezvoltatorilor să își gestioneze întregul flux de lucru de dezvoltare și desfășurare într-un singur loc.
 Pentru a asigura compatibilitatea și funcționarea corectă a aplicației noastre în mediul Vercel, am realizat o configurație specială pentru comanda de instalare a dependențelor. Am observat că versiunile unor dependențe nu erau compatibile, ceea ce ducea la erori în timpul instalării. Pentru a rezolva această problemă, am configurat comanda de instalare să ruleze cu opțiunea --force, asigurând astfel o instalare corectă și fără erori a dependențelor.
Această configurație specială a fost esențială pentru a asigura funcționarea adecvată a aplicației noastre în mediul Vercel și pentru a evita eventualele probleme legate de incompatibilități între versiuni.

(image-3.png)
(image-5.png)


Flux de Date
În dezvoltarea unei aplicații web care utilizează servicii în cloud, este esențial să înțelegem fluxul de date și modul în care interacționăm cu aceste servicii pentru a obține și gestiona informațiile necesare. În cadrul proiectului nostru, ne-am bazat pe două componente cheie: MongoDB, un sistem de gestiune a bazelor de date NoSQL, și Vercel, o platformă modernă de hosting și desfășurare a aplicațiilor web.
Pentru a comunica cu serviciile cloud, am folosit cereri HTTP pentru a trimite solicitări către API-urile expuse de aceste servicii și pentru a primi răspunsuri înapoi. De exemplu, pentru a obține datele despre înregistrările din baza de date MongoDB, am utilizat cereri de tip GET către endpoint-urile /api/records și /api/records?id=${id}. Pentru a crea, actualiza sau șterge înregistrări, am folosit cereri de tip POST, PUT și DELETE către același endpoint /api/records, dar cu diferite configurații și date în corpul cererii.
(image-6.png)
(image-7.png)

Fiecare cerere HTTP a fost asociată cu o anumită metodă HTTP, care indică tipul de acțiune pe care dorim să o realizăm în server. Metoda GET a fost folosită pentru a obține datele, POST pentru a crea noi înregistrări, PUT pentru a actualiza înregistrări existente și DELETE pentru a șterge înregistrări.
(image-8.png)
(image-9.png)

Pentru a oferi utilizatorilor o experiență mai plăcută și mai informativă în timpul încărcării și prelucrării datelor, am inclus un Spinner personalizat în interfața aplicației noastre. Acest Spinner este afișat în timpul încărcării datelor de pe server sau în timpul proceselor care necesită timp de procesare extins. Prin afișarea unui Spinner, oferim utilizatorilor un feedback vizual clar cu privire la faptul că aplicația este încă activă și în proces de lucru, îmbunătățind astfel experiența lor generală. 
(image-11.png)

Pentru a oferi un aspect atractiv și coeziv cardurilor afișate în aplicație, am implementat stiluri CSS personalizate. Acestea includ setări pentru dimensiuni, margini, fundal, border, shadow și font pentru fiecare card. De asemenea, am definit clase CSS pentru titlul cardului, informațiile suplimentare și butonul de acțiune "Delete", pentru a asigura un aspect uniform și coerent în întreaga aplicație.

(image-10.png)

Bibliografie
https://lungu-mihai-adrian.gitbook.io/cloud-computing-2024-simpre/seminar-1/configurarea-mediului-de-dezvoltare
https://vercel.com/blog/what-is-vercel
https://www.mulesoft.com/resources/api/what-is-an-api
https://www.mongodb.com/company/what-is-mongodb
https://www.cloudtech.com/

