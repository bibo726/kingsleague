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
  
  // Stato dell’applicazione
let currentMode = 'view'; // 'view', 'compare' o 'scouting'
let selectedTeams = { team1: null, team2: null };
let currentRoleIndex = 0; // Per ciclare i ruoli in modalità scouting

/***************************
 * Funzioni di utilità UI  *
 ***************************/

function clearChildren(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';

    const name = document.createElement('h3');
    name.textContent = player.nome;

    const details = document.createElement('p');
    details.textContent = `Ruolo: ${player.ruolo}\nEtà: ${player.età ?? 'N/A'}\nAltezza: ${player.altezza ?? 'N/A'}\nGoal: ${player.goal}\nAssist: ${player.assist}\nGialli: ${player.cartellini_gialli}\nRossi: ${player.cartellini_rossi}`;

    card.appendChild(name);
    card.appendChild(details);

    return card;
}

/***********************************
 * Popola le select delle squadre   *
 ***********************************/
function populateTeamSelects() {
    const team1Select = document.getElementById('team1-select');
    const team2Select = document.getElementById('team2-select');

    clearChildren(team1Select);
    clearChildren(team2Select);

    const placeholderOption1 = document.createElement('option');
    placeholderOption1.value = '';
    placeholderOption1.textContent = '-- Seleziona squadra --';
    const placeholderOption2 = placeholderOption1.cloneNode(true);

    team1Select.appendChild(placeholderOption1);
    team2Select.appendChild(placeholderOption2);

    Object.keys(teams).forEach(teamName => {
        const option1 = document.createElement('option');
        option1.value = teamName;
        option1.textContent = teamName;

        const option2 = option1.cloneNode(true);

        team1Select.appendChild(option1);
        team2Select.appendChild(option2);
    });
}

/*****************************************
 * Gestione cambio modalità (view/compare/scouting)
 *****************************************/
function setMode(mode) {
  currentMode = mode;

  // Titolo della sezione
  document.getElementById('mode-title').textContent =
    mode === 'view'    ? 'Rosa Squadra'       :
    mode === 'compare' ? 'Confronto Squadre'  :
                         'Scouting';

  /*  NEW: visibilità pannelli  */
  document.getElementById('roster'  ).style.display = mode === 'view'    ? 'block' : 'none';
  document.getElementById('compare' ).style.display = mode === 'compare' ? 'block' : 'none';
  document.getElementById('scouting').style.display = mode === 'scouting'? 'block' : 'none';

  // Controlli extra per lo scouting
  if (mode === 'scouting') {
    currentRoleIndex = 0;
    document.getElementById('scouting-controls').style.display = 'block';
  } else {
    document.getElementById('scouting-controls').style.display = 'none';
  }

  render();   // ridisegna la vista corrente
}

/********************
 * Rendering principali
 ********************/
function render() {
    if (currentMode === 'view') renderTeamRoster();
    else if (currentMode === 'compare') renderComparison();
    else if (currentMode === 'scouting') renderScouting();
}

/***************************
 * Modalità VIEW – Rosa squadra
 ***************************/
function renderTeamRoster() {
    const rosterContainer = document.getElementById('roster');
    clearChildren(rosterContainer);

    if (!selectedTeams.team1) {
        rosterContainer.textContent = 'Seleziona una squadra per vedere la rosa.';
        return;
    }

    teams[selectedTeams.team1].forEach(player => {
        rosterContainer.appendChild(createPlayerCard(player));
    });
}

/*****************************
 * Modalità COMPARE – Confronto
 *****************************/
function renderComparison() {
    const compareContainer = document.getElementById('compare');
    clearChildren(compareContainer);

    if (!selectedTeams.team1 || !selectedTeams.team2) {
        compareContainer.textContent = 'Seleziona entrambe le squadre per confrontarle.';
        return;
    }

    const team1 = teams[selectedTeams.team1];
    const team2 = teams[selectedTeams.team2];

    const metrics = ['goal', 'assist', 'cartellini_gialli', 'cartellini_rossi'];

    metrics.forEach(metric => {
        const section = document.createElement('section');
        const title = document.createElement('h3');
        title.textContent = metric.replace('_', ' ').toUpperCase();
        section.appendChild(title);

        const value1 = team1.reduce((sum, p) => sum + p[metric], 0);
        const value2 = team2.reduce((sum, p) => sum + p[metric], 0);

        const p1 = document.createElement('p');
        p1.textContent = `${selectedTeams.team1}: ${value1}`;
        const p2 = document.createElement('p');
        p2.textContent = `${selectedTeams.team2}: ${value2}`;

        section.appendChild(p1);
        section.appendChild(p2);

        compareContainer.appendChild(section);
    });
}

/*******************************
 * Modalità SCOUTING – Ciclo ruoli
 *******************************/
function renderScouting() {
    const scoutingContainer = document.getElementById('scouting');
    clearChildren(scoutingContainer);

    if (!selectedTeams.team1 || !selectedTeams.team2) {
        scoutingContainer.textContent = 'Seleziona entrambe le squadre per effettuare scouting.';
        return;
    }

    const team1 = teams[selectedTeams.team1];
    const team2 = teams[selectedTeams.team2];

    if (!team1 || !team2) return;
  
    const roles = [...new Set([...team1, ...team2].map(p => p.ruolo))];
    
    if (currentRoleIndex >= roles.length) {
      currentRoleIndex = 0; // ricomincia dal primo ruolo se abbiamo finito il ciclo
    }

    const currentRole = roles[currentRoleIndex];

    const rolePlayers = [
        ...team1.filter(p => p.ruolo === currentRole),
        ...team2.filter(p => p.ruolo === currentRole)
    ];

    if (rolePlayers.length === 0) {
        scoutingContainer.textContent = `Nessun giocatore trovato per il ruolo ${currentRole}.`;
        return;
    }

    const title = document.createElement('h3');
    title.textContent = `Ruolo: ${currentRole}`;
    scoutingContainer.appendChild(title);

    rolePlayers.forEach(player => scoutingContainer.appendChild(createPlayerCard(player)));
}

/*************************
 * Eventi UI
 *************************/
function handleTeamSelection() {
    const team1Select = document.getElementById('team1-select');
    const team2Select = document.getElementById('team2-select');

    selectedTeams.team1 = team1Select.value;
    selectedTeams.team2 = team2Select.value;
  
    if (selectedTeams.team1 && selectedTeams.team2) {
      if (currentMode === 'compare') {
        renderComparison();
      } else if (currentMode === 'scouting') {
        renderScouting();
      }
    } else {
      render();
    }
}

function nextRole() {
    currentRoleIndex += 1;
    renderScouting();
}

/***********************
 * Inizializzazione
 ***********************/
function init() {
    populateTeamSelects();

    document.getElementById('view-btn').addEventListener('click', () => setMode('view'));
    document.getElementById('compare-btn').addEventListener('click', () => setMode('compare'));
    document.getElementById('scouting-btn').addEventListener('click', () => setMode('scouting'));
    document.getElementById('team1-select').addEventListener('change', handleTeamSelection);
    document.getElementById('team2-select').addEventListener('change', handleTeamSelection);
    document.getElementById('next-role-btn').addEventListener('click', nextRole);

    setMode('view');
}

// Avvia tutto quando il DOM è pronto
document.addEventListener('DOMContentLoaded', init);
