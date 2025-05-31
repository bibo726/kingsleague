// Dati delle squadre
const teams = {
    "Jijantes FC": [
      { nome: "Roger de la Villa", ruolo: "ATT", età: 28, altezza: 178, goal: 12, assist: 8, cartellini_gialli: 2, cartellini_rossi: 0 },
      { nome: "Mario León", ruolo: "POR", età: 32, altezza: 185, goal: 0, assist: 0, cartellini_gialli: 0, cartellini_rossi: 0 },
      { nome: "Pau Fernández", ruolo: "CEN", età: 25, altezza: 175, goal: 5, assist: 10, cartellini_gialli: 3, cartellini_rossi: 0 }
    ],
    "Los Troncos FC": [
      { nome: "Víctor Torres", ruolo: "DIF", età: 29, altezza: 182, goal: 2, assist: 1, cartellini_gialli: 4, cartellini_rossi: 0 },
      { nome: "Oriol Boada", ruolo: "ATT", età: 26, altezza: 180, goal: 15, assist: 7, cartellini_gialli: 2, cartellini_rossi: 0 },
      { nome: "Lluís Alsina", ruolo: "CEN", età: 27, altezza: 176, goal: 4, assist: 12, cartellini_gialli: 3, cartellini_rossi: 0 }
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
  
  // Stato dell'applicazione
  let currentMode = 'compare';
  let selectedTeams = { team1: null, team2: null };
  let currentRoleIndex = 0;
  let roleResults = [];
  let dreamTeam = [];
  
  // Elementi DOM
  const team1Select = document.getElementById('team1');
  const team2Select = document.getElementById('team2');
  const roleBattleContainer = document.getElementById('role-battle-container');
  const roleBattleSummary = document.getElementById('role-battle-summary');
  const roleBattlePlayers = document.getElementById('role-battle-players');
  const currentRoleTitle = document.getElementById('current-role-title');
  const roleBattleActions = document.getElementById('role-battle-actions');
  const roleBattleSummaryList = document.getElementById('role-battle-summary-list');
  const restartButton = document.getElementById('restartRoleBattle');
  const modeCompareBtn = document.getElementById('modeCompare');
  const modeScoutingBtn = document.getElementById('modeScouting');
  const scoutingContainer = document.getElementById('scouting-container');
  
  // Inizializzazione
  function init() {
    populateTeamSelects();
    setupEventListeners();
    initTheme();
    loadDreamTeam();
  }
  
  // Popola i select delle squadre
  function populateTeamSelects() {
    Object.keys(teams).forEach(teamName => {
      const option1 = new Option(teamName, teamName);
      const option2 = new Option(teamName, teamName);
      team1Select.add(option1);
      team2Select.add(option2);
    });
  }
  
  // Setup event listeners
  function setupEventListeners() {
    team1Select.addEventListener('change', handleTeamSelection);
    team2Select.addEventListener('change', handleTeamSelection);
    modeCompareBtn.addEventListener('click', () => switchMode('compare'));
    modeScoutingBtn.addEventListener('click', () => switchMode('scouting'));
    restartButton.addEventListener('click', restartRoleBattle);
  }
  
  // Gestisce la selezione delle squadre
  function handleTeamSelection() {
    selectedTeams.team1 = team1Select.value;
    selectedTeams.team2 = team2Select.value;
  
    if (selectedTeams.team1 && selectedTeams.team2) {
      if (currentMode === 'compare') {
        startRoleBattle();
      } else {
        showScoutingMode();
      }
    }
  }
  
  // Inizia il confronto per ruolo
  function startRoleBattle() {
    currentRoleIndex = 0;
    roleResults = [];
    roleBattleContainer.style.display = 'block';
    roleBattleSummary.style.display = 'none';
    showCurrentRole();
  }
  
  // Mostra il ruolo corrente
  function showCurrentRole() {
    const team1 = teams[selectedTeams.team1];
    const team2 = teams[selectedTeams.team2];
    
    if (!team1 || !team2) return;
  
    const roles = [...new Set([...team1, ...team2].map(p => p.ruolo))];
    
    if (currentRoleIndex >= roles.length) {
      showRoleBattleSummary();
      return;
    }
  
    const currentRole = roles[currentRoleIndex];
    currentRoleTitle.textContent = `Ruolo: ${currentRole}`;
  
    // Filtra tutti i giocatori del ruolo corrente
    const team1Players = team1.filter(p => p.ruolo === currentRole);
    const team2Players = team2.filter(p => p.ruolo === currentRole);
  
    // Crea le card per tutti i giocatori
    roleBattlePlayers.innerHTML = `
      <div class="team-players">
        <h3>${selectedTeams.team1}</h3>
        <div class="players-grid">
          ${team1Players.map(player => `
            <div class="player-card" data-player="${player.nome}">
              <div class="player-header">
                <strong>${player.nome}</strong>
              </div>
              <div class="player-role">${player.ruolo}</div>
              <div class="player-stats">
                <div class="stat"><i class="fas fa-futbol"></i> ${player.goal} gol</div>
                <div class="stat"><i class="fas fa-assist"></i> ${player.assist} assist</div>
                <div class="stat"><i class="fas fa-user"></i> ${player.età} anni</div>
                <div class="stat"><i class="fas fa-ruler-vertical"></i> ${player.altezza} cm</div>
              </div>
              <button class="vote-btn" data-player="${player.nome}">
                <i class="fas fa-vote-yea"></i> Vota
              </button>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="team-players">
        <h3>${selectedTeams.team2}</h3>
        <div class="players-grid">
          ${team2Players.map(player => `
            <div class="player-card" data-player="${player.nome}">
              <div class="player-header">
                <strong>${player.nome}</strong>
              </div>
              <div class="player-role">${player.ruolo}</div>
              <div class="player-stats">
                <div class="stat"><i class="fas fa-futbol"></i> ${player.goal} gol</div>
                <div class="stat"><i class="fas fa-assist"></i> ${player.assist} assist</div>
                <div class="stat"><i class="fas fa-user"></i> ${player.età} anni</div>
                <div class="stat"><i class="fas fa-ruler-vertical"></i> ${player.altezza} cm</div>
              </div>
              <button class="vote-btn" data-player="${player.nome}">
                <i class="fas fa-vote-yea"></i> Vota
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  
    // Aggiungi event listeners ai pulsanti di voto
    document.querySelectorAll('.vote-btn').forEach(btn => {
      btn.addEventListener('click', handleVote);
    });
  }
  
  // Gestisce il voto per un giocatore
  function handleVote(event) {
    const playerName = event.target.dataset.player;
    const team1 = teams[selectedTeams.team1];
    const team2 = teams[selectedTeams.team2];
    
    const player1 = team1.find(p => p.ruolo === currentRoleTitle.textContent.split(': ')[1]);
    const player2 = team2.find(p => p.ruolo === currentRoleTitle.textContent.split(': ')[1]);
  
    roleResults.push({
      ruolo: currentRoleTitle.textContent.split(': ')[1],
      vincitore: playerName === player1.nome ? player1 : player2
    });
  
    currentRoleIndex++;
    showCurrentRole();
  }
  
  // Mostra il riepilogo del confronto per ruolo
  function showRoleBattleSummary() {
    roleBattleContainer.style.display = 'none';
    roleBattleSummary.style.display = 'block';
  
    roleBattleSummaryList.innerHTML = roleResults.map(result => `
      <div class="role-result">
        <h3>${result.ruolo}</h3>
        <p>Vincitore: ${result.vincitore.nome}</p>
        <div class="player-stats">
          <div class="stat"><i class="fas fa-futbol"></i> ${result.vincitore.goal} gol</div>
          <div class="stat"><i class="fas fa-assist"></i> ${result.vincitore.assist} assist</div>
        </div>
      </div>
    `).join('');
  }
  
  // Riavvia il confronto per ruolo
  function restartRoleBattle() {
    startRoleBattle();
  }
  
  // Cambia modalità
  function switchMode(mode) {
    currentMode = mode;
    modeCompareBtn.classList.toggle('active', mode === 'compare');
    modeScoutingBtn.classList.toggle('active', mode === 'scouting');
    
    roleBattleContainer.style.display = mode === 'compare' ? 'block' : 'none';
    roleBattleSummary.style.display = 'none';
    scoutingContainer.style.display = mode === 'scouting' ? 'block' : 'none';
  
    if (mode === 'scouting' && selectedTeams.team1 && selectedTeams.team2) {
      showScoutingMode();
    }
  }
  
  // Mostra la modalità scouting
  function showScoutingMode() {
    const team1 = teams[selectedTeams.team1];
    const team2 = teams[selectedTeams.team2];
    
    if (!team1 || !team2) return;
  
    const allPlayers = [...team1, ...team2];
    
    document.getElementById('scouting-players-list').innerHTML = allPlayers.map(player => `
      <div class="player-card">
        <div class="player-header">
          <strong>${player.nome}</strong>
          <button class="add-to-dream-team" data-player="${player.nome}">
            <i class="fas fa-plus"></i> Aggiungi
          </button>
        </div>
        <div class="player-role">${player.ruolo}</div>
        <div class="player-stats">
          <div class="stat"><i class="fas fa-futbol"></i> ${player.goal} gol</div>
          <div class="stat"><i class="fas fa-assist"></i> ${player.assist} assist</div>
          <div class="stat"><i class="fas fa-user"></i> ${player.età} anni</div>
          <div class="stat"><i class="fas fa-ruler-vertical"></i> ${player.altezza} cm</div>
        </div>
        <div class="player-rating">
          <div class="stars">
            ${'★'.repeat(Math.floor(Math.random() * 3) + 3)}${'☆'.repeat(5 - (Math.floor(Math.random() * 3) + 3))}
          </div>
        </div>
      </div>
    `).join('');
  
    // Aggiungi event listeners per i pulsanti "Aggiungi"
    document.querySelectorAll('.add-to-dream-team').forEach(btn => {
      btn.addEventListener('click', handleAddToDreamTeam);
    });
  }
  
  // Gestisce l'aggiunta di un giocatore alla squadra ideale
  function handleAddToDreamTeam(event) {
    const playerName = event.target.closest('.add-to-dream-team').dataset.player;
    const allPlayers = [...teams[selectedTeams.team1], ...teams[selectedTeams.team2]];
    const player = allPlayers.find(p => p.nome === playerName);
    
    if (!dreamTeam.some(p => p.nome === playerName)) {
      dreamTeam.push(player);
      saveDreamTeam();
      updateDreamTeamDisplay();
    }
  }
  
  // Aggiorna la visualizzazione della squadra ideale
  function updateDreamTeamDisplay() {
    const dreamTeamList = document.getElementById('dream-team-list');
    dreamTeamList.innerHTML = dreamTeam.map(player => `
      <div class="player-card">
        <div class="player-header">
          <strong>${player.nome}</strong>
          <button class="remove-from-dream-team" data-player="${player.nome}">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="player-role">${player.ruolo}</div>
        <div class="player-stats">
          <div class="stat"><i class="fas fa-futbol"></i> ${player.goal} gol</div>
          <div class="stat"><i class="fas fa-assist"></i> ${player.assist} assist</div>
        </div>
      </div>
    `).join('');
  
    // Aggiungi event listeners per i pulsanti di rimozione
    document.querySelectorAll('.remove-from-dream-team').forEach(btn => {
      btn.addEventListener('click', handleRemoveFromDreamTeam);
    });
  }
  
  // Gestisce la rimozione di un giocatore dalla squadra ideale
  function handleRemoveFromDreamTeam(event) {
    const playerName = event.target.closest('.remove-from-dream-team').dataset.player;
    dreamTeam = dreamTeam.filter(p => p.nome !== playerName);
    saveDreamTeam();
    updateDreamTeamDisplay();
  }
  
  // Salva la squadra ideale nel localStorage
  function saveDreamTeam() {
    localStorage.setItem('dreamTeam', JSON.stringify(dreamTeam));
  }
  
  // Carica la squadra ideale dal localStorage
  function loadDreamTeam() {
    const saved = localStorage.getItem('dreamTeam');
    if (saved) {
      dreamTeam = JSON.parse(saved);
      updateDreamTeamDisplay();
    }
  }
  
  // Inizializza il tema
  function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }
  
  // Aggiorna l'icona del tema
  function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  // Cambia tema
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }
  
  // Inizializza l'applicazione quando il DOM è caricato
  document.addEventListener('DOMContentLoaded', init);