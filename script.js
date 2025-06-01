// Dati delle squadre
const teams = {
	"Jynxzi FC": [
        { nome: "Aleix Martí",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Barata",            ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Brinquinho",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Merrick Cook",      ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yeray Cuenca",      ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Santiago Gordillo", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Bryan Bustamante",  ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Roc Bancells",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Idriss Oubrik",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Víctor Blasco",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Naoufal Boumina",   ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Kunisports": [
        { nome: "Pol Zapata",             ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jorge Ibáñez",           ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Guillem 'ZZ' Ruiz",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Álvaro Arché",           ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ian González",           ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Carlos Omabegho",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Dani 'Mini Bartu' Ruiz", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Pol Román",              ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Adrià Escribano",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Fran Rodríguez",         ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Cristian Faura",         ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Javi Espinosa",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luis García",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Isaac 'Isi' Mendes",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"La Capital FC": [
        { nome: "Jordi Cano",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yaroslav Toporkov", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Manel Jiménez",     ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mouad Louraoui",    ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Joan Benet",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Julen Álvarez",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Diego Almeida",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Abubacarry Juwara", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Miami 7": [
        { nome: "Marc Briones",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Antonio Pelegrín",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "David Ortiz",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alexander Bertrand",   ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Juan Ramírez",         ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luis Peralta",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Zyan Ferreira",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luiz Morales",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "James Valkenburg",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Josu Rodríguez",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Aitor Vives",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Juan Antonio Gallego", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Murash FC": [
        { nome: "Kensuke Enjo",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Keisuke Fukaya",   ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ryohei Oda",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Shohei Moriyasu",  ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Shohei Agata",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Rikiya Narita",    ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Joi Masuda",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kasho Tamura",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kazuki Hamamoto",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Toshiya Miyashita",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Shunsuke Nakamura",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kan Ujihashi",     ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ryuji Sugimoto",   ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"SXB FC": [
        { nome: "Brihan Gutiérrez",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Angellot Caro",             ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luis Moreno",               ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Farhan Al-Asmari",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Denilson Lobón",            ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Diego Martínez",            ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kevin Cardona",             ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Camilo Mena",               ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Augusto León",              ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Davinson Tapias",           ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alejandro Ortega Caballero",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "David Alejandro Loaiza Gutiérrez", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Camilo Saiz",               ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Ultra Chmicha": [
        { nome: "Mzirira Marouane", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Issam Erraki",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Said Elaouny",     ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Achraf Mohamed Saoud", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Hatim Finani",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mohamed Boullouh", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Boubacar Bah",     ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Zahraoui Reda",    ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Idriss Raiss",     ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yassir Jarici",    ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mbark Boussoufa",  ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Dirar Nabil",      ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Soufian Charraoui",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Zaytouna FC": [
        { nome: "Lahcen Damhari",        ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Abdellatif Elbajjani",  ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Rabiae Bounnit",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Houssam El Gazzoui",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Oussama Benlaadem",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Youssef Taoufik",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mustapha Rabou",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ayoub Bahrouji",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Zoutini Salah",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Amalah Zakaria",        ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Daniel Pérez",          ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jean-Marc JMK",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Adrien Regattin",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Los Futbolitos": [
        { nome: "Luis Nava",       ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jairo Tapie",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Moisés Dabbah",   ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Daniel Ríos",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "José Islas",      ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Diego Franco",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Pabel Montes",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Enrique Lagarde", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Carlos Monroy",   ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "José Askenazi",   ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Well",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alexis Silva",    ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Los Chamos FC": [
        { nome: "Alejandro Díaz",   ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Edwin Cárdenas",   ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Edgar Álvarez",    ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Baruc Mateos",     ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "David Pérez",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Daniel López",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Diego Pérez",      ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Christian Lagunas",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Juan Cisneros",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Andrés Rugeles",   ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Tona Mejía",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Genaro Castillo",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luis Ayala",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Olimpo United": [
        { nome: "Patricio 'Pato' Arias", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Didier Uribe",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Anferny Rebollar",      ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jacob 'Lobo' Morales",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Manuel Viniegra",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Brayan Hernández",      ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Tirso Trueba",          ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gustavo 'Furby' Guillén", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Sergio Alfaro",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Marco Bueno",           ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mario Osuna",           ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Josecarlos van Rankin", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Persas FC": [
        { nome: "Bernardo Lugo",       ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "José Miramontes",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jesús 'Chuy' Pérez",  ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Donovan Martínez",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Fernando Olmedo",     ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Santiago Martínez",   ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yair Arias",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Juan Celada",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Antonio Monterde",    ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kevin Valdez",        ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lawrence Lonsdale",   ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Michel Cárdenas",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jhon Palacios",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Davi Ilario",         ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Dendele FC": [
        { nome: "Tuco",               ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Romarinho",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Thales",             ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Assump",             ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Maikon",             ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mathias",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Fifão",             ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Coity",             ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gabriel Repulho",   ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Guilherme Carvalho",ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Canhoto",           ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lyncoln Oliveira",  ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lucas Hector",      ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Desimpedidos Goti": [
        { nome: "Marcelinho Junior",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luisinho Barreiros", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "João Pedro",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Vitão",              ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Cadu José",          ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lucas Donadi",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Fernando da Silva",  ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gabriel Thor",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gui Bernardinello",  ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gustavinho",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Leo Gol",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jonatas Batman",     ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Victor Bolt",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Fluxo FC": [
        { nome: "Vini Alexandre",    ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Thiago de Oliveira",ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Victor Bueno",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Thiaguinho",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gustavo Menezes",   ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Julio Carvalho",    ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Vini Melequinha",   ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Murillo",           ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Caio Sanchez",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Intera",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Luís Boolt",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Helber Jr.",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Chaveirinho",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"Furia FC": [
        { nome: "Guilherme Monagatti", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Caio Catroca",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Murillo Donato",      ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Andrey Batata",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ryan Lima",           ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Matheus Ayosa",       ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "João Pelegrini",      ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Gabriel Pastuch",     ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Victor Hugo",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Matheus Dedo",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Jeffinho",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lipão",               ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Leleti",              ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"F2R": [
        { nome: "Amara Fofana",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Sahir Boumhand",     ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Louka Masset",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Allan Rakotovazaha", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Andy Wothor",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Haris El Mouttaqi",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "William Harhouz",    ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Kevin Bru",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yacine Boucharoud",  ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Ousmane Badji",      ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Lucas Valeri",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Benoît Costil",      ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Giannelli Imbula",   ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"KARASU": [
        { nome: "Yacine Ben Cherki",         ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Salim Abdou Mohamed",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alexandre Fakir",           ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Zinedine Ayadi",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Abdelhamid Touati",         ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Sofiane Sayah",             ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mehdi Gacem",               ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mohammed Berrabah",         ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Bilal Bouchelouche",        ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Guilherme Carvalho Feitosa",ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Matisse Henry",             ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Yohan MOLLO",               ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Foued Kadir",               ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"PANAM ALL STARZ": [
        { nome: "Nzaba Lungituka",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Adama Wagui",           ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Daniel Mboudou",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Idir Ahmin",            ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Louis Coppin",          ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Guillaume Lesec",       ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alric Francisco",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Nicolas Martins",       ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Eric Mathieu",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Sofiane Bendaoud",      ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Mohamed Amine Bencherif", ruolo: null, età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Moussa SAO",            ruolo: null,  età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

"UNIT3D": [
        { nome: "Clément Goguey",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Marvin Emmanuel",       ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alseny Sano",           ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Abdraman Toure",        ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Van Landry Nguekam",    ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Louis Lapouge",         ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Florian Forestier",     ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Théo Chendri",          ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Alex Diliberto",        ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Youssef Khatiri",       ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Anthony Scaramozzino",  ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Emmanuel Mifsud",       ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
        { nome: "Abdourahim Moina Afia Alidi", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
],

    "Jijantes FC": [
		{ nome: "Roger de la Villa", ruolo: "ATT", età: null, altezza: null, goal: 1,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Mario León",          ruolo: "POR", età: null, altezza: null, goal: 0,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Pau Fernández",       ruolo: "CEN", età: null, altezza: null, goal: 2,  assist: 2,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Dani Martí",          ruolo: "DIF", età: null, altezza: null, goal: 4,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Nil Ayats",           ruolo: "CEN", età: null, altezza: null, goal: 14, assist: 5,  cartellini_gialli: 1, cartellini_rossi: 0 },
		{ nome: "Víctor Vidal",        ruolo: "POR", età: null, altezza: null, goal: 0,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Álex 'Capi' Domingo", ruolo: "CEN", età: null, altezza: null, goal: 1,  assist: 2,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Daniel Plaza",        ruolo: "CEN", età: null, altezza: null, goal: 2,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Marc Pilar",          ruolo: "ATT", età: null, altezza: null, goal: 1,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Manuel Linares",      ruolo: "CEN", età: null, altezza: null, goal: 2,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Nico Pareja",         ruolo: "DIF", età: null, altezza: null, goal: 0,  assist: 4,  cartellini_gialli: 1, cartellini_rossi: 0 },
		{ nome: "Pol Ortega",          ruolo: "ATT", età: null, altezza: null, goal: 22, assist: 9,  cartellini_gialli: 1, cartellini_rossi: 0 },
		{ nome: "Carlos Martínez",     ruolo: "ATT", età: null, altezza: null, goal: 5,  assist: 2,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Nicolás García",      ruolo: "ATT", età: null, altezza: null, goal: 0,  assist: 0,  cartellini_gialli: 1, cartellini_rossi: 0 },
		{ nome: "Ion Vázquez",         ruolo: "CEN", età: null, altezza: null, goal: 0,  assist: 0,  cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Albert López",        ruolo: "ATT", età: null, altezza: null, goal: 2,  assist: 1,  cartellini_gialli: 0, cartellini_rossi: 0 }
	],
	"Los Troncos FC": [
		{ nome: "Víctor Torres",   ruolo: "DIF", età: null, altezza: null, goal: 0,  assist: 1, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Oriol Boada",     ruolo: "ATT", età: null, altezza: null, goal: 4,  assist: 1, cartellini_gialli: 2, cartellini_rossi: 0 },
		{ nome: "Lluís Alsina",    ruolo: "CEN", età: null, altezza: null, goal: 1,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "David Soriano",   ruolo: "DIF", età: null, altezza: null, goal: 1,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Àlex Gutiérrez",  ruolo: "DIF", età: null, altezza: null, goal: 2,  assist: 1, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Álex Cubedo",     ruolo: "DIF", età: null, altezza: null, goal: 0,  assist: 1, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Eloy Amoedo",     ruolo: "POR", età: null, altezza: null, goal: 0,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Carlos Ferres",   ruolo: "CEN", età: null, altezza: null, goal: 0,  assist: 1, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Pol Agustí",      ruolo: "POR", età: null, altezza: null, goal: 0,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Yaroslav Toporkov", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Diego Jiménez",   ruolo: "ATT", età: null, altezza: null, goal: 5,  assist: 5, cartellini_gialli: 2, cartellini_rossi: 0 },
		{ nome: "Carles Planas",   ruolo: "DIF", età: null, altezza: null, goal: 13, assist: 7, cartellini_gialli: 1, cartellini_rossi: 0 },
		{ nome: "Joan Verdú",      ruolo: "CEN", età: null, altezza: null, goal: 11, assist: 3, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Jordi Gómez",     ruolo: "CEN", età: null, altezza: null, goal: 10, assist: 2, cartellini_gialli: 2, cartellini_rossi: 0 },
		{ nome: "David Reyes",     ruolo: "ATT", età: null, altezza: null, goal: 0,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
		{ nome: "Pau Baró",        ruolo: "CEN", età: null, altezza: null, goal: 0,  assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
	],
    "Porcinos FC": [
      { nome: "Gilles Vidal", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Sergio Sánchez", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Marc Pelaz", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Adrià 'Capi' Gutiérrez", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Carlos Torrentbó", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Gerard Vacas", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Óscar Coll", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Adrián Frutos", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Stelios Orgianos", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Juan De Dios Martínez", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Nadir Louah", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Gerard Nolla", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Adrián Lledó", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Mikel Rico", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Iván Torres", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "Ultimate Móstoles": [
      { nome: "José Segovia", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Kilian Honorato", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Joan Canet", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Mario Reyes", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Aleix Lage", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Marc Granero", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Dani Liñares", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Sergi Gestí", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Daniel Santoro", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Aleix Hernando", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Xavi Fabra", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Ferran Corominas", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alberto Bueno", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Diego de la Mata", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alberto de la Bella", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "xBuyer Team": [
      { nome: "Sergi Aguilar", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Jacobo Liencres", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Pablo Beguer", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Juanma González", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Daniel Santiago", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Manuel Martín", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Iker Alcarazo", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Ao Kishimoto", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Eric Simó", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "David Pérez Picón", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Mario 'Lepetit' Rodríguez", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Fuad El Amrani", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Adri Gimeno", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Víctor Oribe", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Roger Panadés", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "Boomers": [
      { nome: "Daniel Santoro", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alex Bonasso", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Gabriele Di Battista", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Vincenzo Amoroso", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Mirko Dario", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Andrea Redaelli", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alessandro Ferreri", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Stefano Sberna", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Vlad Caprianu", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Simone Lo Faso", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Bryan Mecca", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Martino Capelli", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "FC Zeta": [
      { nome: "Elmahdi Kanis", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Guido Nicoli", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Matteo Maddalena", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Fabio Di Mauro", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Tommaso Bernardi", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Matteo Manzoni", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Axel Gulin", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Nicolò Deda", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Andrea Montagna", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Samuele Venturi", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Matteo Perrotti", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alessio Buono", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Cosimo Chiricò", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "Gear 7 FC": [
      { nome: "Andrea Belsito", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Davide Donzelli", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Niccolò Ciceri", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Bernardo Leka", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Zakaria Choukry", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Gabriele Folla", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Tommaso Cogi", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Adrián De La Cruz", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Leandro Cosenza", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Andrea Vicini", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alessandro Gelsi", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Domenico Rossi", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Gianmarco Chironi", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ],
    "TRM FC": [
      { nome: "Simone Scanferlato", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Marouan Amiar", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Matteo Rossoni", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Thomas Salvaterra", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Andrea Filippi", ruolo: "DIF", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Andres Cordova", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alberto Muscas", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Federico Turati", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Denis Andrei", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Vittorio Grimaldi", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Francesco Caputo", ruolo: "ATT", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alessandro Vagge", ruolo: "POR", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Alessandro Colombo", ruolo: "CEN", età: null, altezza: null, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 }
    ]
  };
  

/***** STATO *****/
let currentMode   = "view";        // view | compare | scouting
let selectedTeams = { team1:null, team2:null };
let selectedRole  = "";            // POR, DIF, CEN, ATT
const votes       = {};            // { battleId : playerName }
let currentRoleIndex = 0;          // per lo scouting

/***** UTILITIES *****/
function $(id){ return document.getElementById(id); }
function clear(el){ while(el.firstChild) el.removeChild(el.firstChild); }

function createPlayerCard(player){
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
        <div class="player-header">
            <span class="player-name">${player.nome}</span>
            <span class="player-role">${player.ruolo}</span>
        </div>
        <div class="player-stats">
            <span class="stat"><i class="fas fa-futbol"></i>&nbsp;${player.goal}</span>
            <span class="stat"><i class="fas fa-hands-helping"></i>&nbsp;${player.assist}</span>
            <span class="stat"><i class="fas fa-square"></i>&nbsp;${player.gialli}</span>
            <span class="stat"><i class="fas fa-square-full"></i>&nbsp;${player.rossi}</span>
        </div>
    `;
    return card;
}

/***** POPOLA SELECT SQUADRE *****/
function populateTeamSelects(){
    ["team1-select","team2-select"].forEach(id=>{
        const sel = $(id);
        sel.innerHTML = '<option value="">-- Seleziona squadra --</option>';
        Object.keys(teams).forEach(team=>{
            const opt = document.createElement("option");
            opt.value = team; opt.textContent = team;
            sel.appendChild(opt);
        });
    });
}

/***** GESTIONE MODALITÀ *****/
function setMode(mode){
    currentMode = mode;
    $("mode-title").textContent =
          mode==="view"    ? "Rosa Squadra"
        : mode==="compare" ? "Role Battle"
        :                    "Scouting";

    $("roster" ).style.display = mode==="view"    ? "block":"none";
    $("compare").style.display = mode==="compare" ? "block":"none";
    $("scouting").style.display= mode==="scouting"? "block":"none";

    if(mode!=="scouting") $("scouting-players-list").innerHTML="";
    render();
}

/***** RENDERING ROOT *****/
function render(){
    if(currentMode==="view")     renderTeamRoster();
    else if(currentMode==="compare") renderRoleBattle();
    else if(currentMode==="scouting") renderScouting();
}

/***** ROSA *****/
function renderTeamRoster(){
    const c = $("roster"); clear(c);
    if(!selectedTeams.team1) { c.textContent = "Seleziona una squadra…"; return; }
    teams[selectedTeams.team1].forEach(p=>c.appendChild(createPlayerCard(p)));
}

/***** ROLE BATTLE *****/
function renderRoleBattle(){
    const c = $("compare"); clear(c);

    if(!selectedTeams.team1 || !selectedTeams.team2 || !selectedRole){
        c.textContent = "Seleziona due squadre e un ruolo.";
        return;
    }

    const data = [selectedTeams.team1, selectedTeams.team2].map(name=>({
        name,
        players: teams[name].filter(p=>p.ruolo===selectedRole)
    }));

    const wrap = document.createElement("div");
    wrap.className = "role-battle-players";

    data.forEach(team=>{
        const col = document.createElement("div");
        col.className="team-players";
        col.innerHTML = `<h3>${team.name}</h3>`;
        const grid = document.createElement("div");
        grid.className = "players-grid";

        team.players.forEach(pl=>{
            const card = createPlayerCard(pl);
            const btn  = document.createElement("button");
            btn.className="vote-btn";
            btn.innerHTML = '<i class="fas fa-thumbs-up"></i>&nbsp;Vota';
            btn.onclick = ()=>handleVote(team.name,pl,btn);
            card.appendChild(btn);
            grid.appendChild(card);
        });
        col.appendChild(grid);
        wrap.appendChild(col);
    });

    c.appendChild(wrap);
}

function handleVote(team,player,btn){
    const battleId = `${selectedTeams.team1}|${selectedTeams.team2}|${selectedRole}`;
    if(votes[battleId]) return;
    votes[battleId] = player.nome;
    btn.classList.add("voted");
    btn.textContent = "Votato!";
    showBattleSummary(battleId,player.nome);
}

function showBattleSummary(id,playerName){
    $("role-battle-summary").style.display="block";
    const div = document.createElement("div");
    div.className="role-result";
    div.innerHTML = `<h3>${selectedRole}</h3><p>Migliore: <strong>${playerName}</strong></p>`;
    $("role-battle-summary-list").appendChild(div);
}

/***** SCOUTING (dimostrativo) *****/
function renderScouting(){
    const c = $("scouting-players-list"); clear(c);
    if(!selectedTeams.team1 || !selectedTeams.team2){
        c.textContent = "Seleziona due squadre…"; return;
    }
    const roles = ["POR","DIF","CEN","ATT"];
    const role = roles[currentRoleIndex%roles.length];
    ["team1","team2"].forEach(key=>{
        teams[selectedTeams[key]].filter(p=>p.ruolo===role)
            .forEach(p=>c.appendChild(createPlayerCard(p)));
    });
}
function nextRole(){ currentRoleIndex++; renderScouting(); }

/***** EVENT HANDLERS *****/
function handleTeamSelection(){
    selectedTeams.team1 = $("team1-select").value;
    selectedTeams.team2 = $("team2-select").value;
    render();
}
function handleRoleSelection(){
    selectedRole = $("role-select").value;
    if(currentMode==="compare") renderRoleBattle();
}

/***** INIT *****/
function init(){
    populateTeamSelects();

    $("view-btn").onclick    = ()=>setMode("view");
    $("compare-btn").onclick = ()=>setMode("compare");
    $("scouting-btn").onclick= ()=>setMode("scouting");

    $("team1-select").onchange = handleTeamSelection;
    $("team2-select").onchange = handleTeamSelection;
    $("role-select").onchange  = handleRoleSelection;

    $("next-role-btn").onclick = nextRole;
    $("restartRoleBattle").onclick = ()=>{
        Object.keys(votes).forEach(k=>delete votes[k]);
        $("role-battle-summary-list").innerHTML="";
        $("role-battle-summary").style.display="none";
        renderRoleBattle();
    };

    setMode("view");
}
document.addEventListener("DOMContentLoaded",init);
