const GUNS_DATA = [
  {
    name: "M9",
    showMoreButton: true,
    reBuyPrice: 200,
    contractPrice: 0,
    stats: {
      ammo: "15/300",
      ammoPrice: "150$ for 15",
      damage: "14-10-8",
      firerate: 400,
      reload: 2.5,
      accuracy: "±0.40m @ 25m"
    }
  },
  {
    name: "Model 870",
    showMoreButton: true,
    reBuyPrice: 2000,
    contractPrice: 20000,
    stats: {
      ammo: "4/80",
      ammoPrice: "60$ for 4",
      damage: "7-6-4",
      firerate: 66,
      reload: 0.8,
      accuracy: "±3.50m @ 25m"
    }
  },
  {
    name: "Uzi",
    showMoreButton: true,
    reBuyPrice: 2500,
    contractPrice: 25000,
    stats: {
      ammo: "25/250",
      ammoPrice: "250$ for 25",
      damage: "7-6-5",
      firerate: 1500,
      reload: 2.2,
      accuracy: "±0.90m @ 50m"
    }
  },
  {
    name: "UMP 45",
    showMoreButton: true,
    reBuyPrice: 3000,
    contractPrice: 40000,
    stats: {
      ammo: "30/240",
      ammoPrice: "300$ for 30",
      damage: "9-7-6",
      firerate: 750,
      reload: 2,
      accuracy: "±1.70m @ 50m"
    }
  },
  {
    name: "Benelli M1014",
    showMoreButton: true,
    reBuyPrice: 6000,
    contractPrice: 550000,
    stats: {
      ammo: "30/270",
      ammoPrice: "120$ for 6",
      damage: "5-4-3",
      firerate: 230,
      reload: 0.8,
      accuracy: "±3.50m @ 25m"
    }
  },
  {
    name: "AUG A1",
    showMoreButton: true,
    reBuyPrice: 5000,
    contractPrice: 350000,
    stats: {
      ammo: "30/270",
      ammoPrice: "450$ for 30",
      damage: "8-7-6",
      firerate: 681,
      reload: 3,
      accuracy: "±0.90m @ 50m"
    }
  },
  {
    name: "AK-47",
    showMoreButton: true,
    reBuyPrice: 6500,
    contractPrice: 800000,
    stats: {
      ammo: "30/300",
      ammoPrice: "4500$ for 30",
      damage: "10-8-8",
      firerate: 750,
      reload: 2,
      accuracy: "±1.50m @ 50m"
    }
  },
  {
    name: "Glock 18c",
    showMoreButton: true,
    reBuyPrice: 3500,
    contractPrice: 1100000,
    stats: {
      ammo: "19/285",
      ammoPrice: "380$ for 19",
      damage: "11-9-8",
      firerate: 750,
      reload: 3,
      accuracy: "±0.50m @ 25m"
    }
  },
  {
    name: "M4A1",
    showMoreButton: true,
    reBuyPrice: 8000,
    contractPrice: 1600000,
    stats: {
      ammo: "30/420",
      ammoPrice: "600$ for 30",
      damage: "11-9-8",
      firerate: 1000,
      reload: 2,
      accuracy: "±0.90m @ 50m"
    }
  },
  {
    name: "ARX-160",
    showMoreButton: true,
    reBuyPrice: 8000,
    contractPrice: 1800000,
    stats: {
      ammo: "30/300",
      ammoPrice: "450$ for 30",
      damage: "10-9-8",
      firerate: 750,
      reload: 3,
      accuracy: "±1.10m @ 50m"
    }
  },
  {
    name: "SPAS-12",
    showMoreButton: true,
    reBuyPrice: 8000,
    contractPrice: 2000000,
    stats: {
      ammo: "6/90",
      ammoPrice: "360$ for 6",
      damage: "7-5-4",
      firerate: 200,
      reload: 0.8,
      accuracy: "±3.50m @ 25m"
    }
  },
  {
    name: "AWM",
    showMoreButton: true,
    reBuyPrice: 8000,
    contractPrice: 3500000,
    stats: {
      ammo: "5/40",
      ammoPrice: "750$ for 5",
      damage: "100-65-50",
      firerate: 30,
      reload: 3.5,
      accuracy: "±0.40m @ 50m"
    }
  },
  {
    name: "Kriss Vector",
    showMoreButton: true,
    reBuyPrice: 8000,
    contractPrice: 3600000,
    stats: {
      ammo: "30/330",
      ammoPrice: "450$ for 30",
      damage: "8-6-5",
      firerate: 1200,
      reload: 2,
      accuracy: "±1.30m @ 50m"
    }
  },
  {
    name: "M60",
    showMoreButton: true,
    reBuyPrice: 10000,
    contractPrice: 4200000,
    stats: {
      ammo: "100/800",
      ammoPrice: "1000$ for 100",
      damage: "15-11-9",
      firerate: 750,
      reload: 5,
      accuracy: "±4.40m @ 50m"
    }
  },
  {
    name: "FN FAL",
    showMoreButton: true,
    requirements: "Syndicate Level 4",
    reBuyPrice: 9000,
    contractPrice: 0,
    stats: {
      ammo: "20/280",
      ammoPrice: "0$ for 0",
      damage: "14-10-9",
      firerate: 705,
      reload: 2.5,
      accuracy: "±1.10m @ 50m"
    }
  },
  {
    name: "Deagle",
    showMoreButton: true,
    requirements: "Syndicate Level 3",
    reBuyPrice: 3500,
    contractPrice: 0,
    stats: {
      ammo: "8/160",
      ammoPrice: "0$ for 0",
      damage: "55-35-25",
      firerate: 200,
      reload: 3,
      accuracy: "±0.70m @ 25m"
    }
  }
];

const EXPLOSIVES_DATA = [
  {
    name: "C4",
    showMoreButton: true,
    reBuyPrice: 1000,
    contractPrice: 50000,
    stats: {
      ammo: "1/10",
      ammoPrice: "1000$ for 1",
      damage: "?-?-?",
      firerate: 0,
      reload: 0,
      accuracy: "0"
    }
  },
  {
    name: "RPG-7",
    showMoreButton: true,
    reBuyPrice: 10000,
    contractPrice: 1250000,
    stats: {
      ammo: "1/6",
      ammoPrice: "2000$ for 1",
      damage: "18-12-10",
      firerate: 8,
      reload: 7,
      accuracy: "±12.20m @ 200m"
    }
  }
];

const TOOLS_DATA = [
  {
    name: "Buzzsaw",
    showMoreButton: false,
    location: "Ofy's Value Pawn",
    contractPrice: 5000,
    stats: {
      ammo: "1/8",
      ammoPrice: "300$ for 1",
      damage: "100-100-100",
    }
  },
  {
    name: "Vault Cracker",
    showMoreButton: false,
    location: "Oasis City Port",
    contractPrice: 15000,
    stats: {
      ammo: "1/2",
      ammoPrice: "15000$ for 1",
    }
  }

];
