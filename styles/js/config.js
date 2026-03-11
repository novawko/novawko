/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Novawko",
  url: "https://novawko.netlify.app/",
  description: `Digital drawing since 2008.`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1tAxRGp3iKqblUewn7YAFPXiERCVFE1Gh6PJz9tyoI34",

  pages: {
    characters:    "characters",
    characterLog:  "character log",
    imageGallery:  "image gallery",
    news:          "news",
    faq:           "faq",
    myCards:       "my cards",
    nubreolanMasterlist:   "nubreolan masterlist",
    nubreolanLog:  "nubreolan log",
    resources:     "resources",
    prompts:       "prompts",
    wishlist:      "wishlist",
    novawkoCards:  "novawko cards",
    binders:       "binders",
    favoriteCards: "favorite cards",
    kitiguarTraits: "kitiguar traits",
    games:          "games",
    codes:          "codes",
    eeveeCards:     "eevee cards",
    queue:          "queue",
    updates:        "updates",
  },

  options: {

    designTypes: ['All', 'Original Character', 'Fan Character', 'Original Species', 'Kinsona'],
    nubreolanTypes: ['All', 'Founder Design', 'Staff Design', 'Mascot', 'AU Design', 'MYO', 'Event', 'Custom', 'Bred'],
    worlds: ['All', 'Jovalan', 'Nubreolan', 'Warriors', 'Shining Stars', 'Harry Potter', 'Pokémon', 'Siderios', 'Lunamor', 'Zenith', 'Care Bears', 'Animal Jam', 'Hazbin Hotel', 'FNAF', 'Others'],
    statuses: ['All', 'Sell', 'Trade', 'Offer', 'Pending', 'Free', 'Do Not Offer', 'Auction'],
    nubreolanStatuses: ['All', 'Sell', 'Trade', 'Offer', 'Pending', 'Free', 'Do Not Offer', 'Auction', 'Voided'],
    nubreolanSpecies: ['All', 'Kitiguar', 'Fluffy Worm', 'Naa'],
    anatomyTypes: ['All', 'Feral', 'Anthro', 'Humanoid'],
    novawkoArtOnlyToggle: ['Enable'],
    resourceTypes: ['All', 'Blinkie', 'GIF', 'Illustration', 'Pattern', 'Photo', 'Pixel', 'Base', 'PNG', 'Stamp', 'Texture', 'Emoji', 'Sticker', 'Moodboard', 'Palette', 'Divider', 'Flag', 'Art Fight', 'Animal Jam', 'Minecraft', 'Pokémon', 'Disability', 'Jovalan'],
    species: ['All', 'Cat', 'Dog', 'Hamster', 'Kitiguar', 'Human', 'Kanpolo', 'Deep Sea Kanpolo', 'Hyper Kanpolo', 'Kumiyaa', 'Noodle Moth', 'Heavian', 'Burgvoir', 'Sylvarian', 'Woobar', 'Chubbö', 'Yuecoatl', 'Protogen', 'Puffball', 'Yukin', 'Tauyn', 'Eevee', 'Leafeon', 'Sylveon', 'Sprigatito', 'Care Bear', 'Care Bear Cousin', 'Wolf', 'Dragon', 'Rabbit', 'Mecha', 'Fluffy Worm', 'Fox', 'Sparkle Cat', 'Arctic Fox', 'Arctic Wolf', 'Senri', 'Jackalope', 'Flareon', 'Tiger'],
    cardFandoms: ['All', 'Pokémon', 'One Piece', 'Spider Man', 'Webkinz', 'Littlest Pet Shop', 'Sonic the Hedgehog', 'Sanrio', 'Re Zero', 'League Of Legends', 'My Hero Academia', 'FNAF', 'Kuromis Cryptid Carnival', 'One-Offs'],
    cardVariations: ['Normal', 'Normal Holo', 'Cosmos Holo', 'Mirror Holo', 'Cracked Ice Holo', 'Tinsel Holo', 'Reverse', 'Pokéball', 'Masterball', 'Stamp Left Side', 'Stamp Right Side', 'Build a Bear', 'Common', 'Rare', 'Super Rare', 'Ultra Rare', 'EX', 'GX', 'V', 'VMAX', 'VSTAR', 'Promo', 'Holo', 'Illustration Rare', 'McDonalds', 'Type Specific', 'Confetti Holo', 'Glitter Foil', 'Gem Pack Stamp', 'Full Art', 'Not Specified'],
    cardRegions: ['English', 'Japanese', 'Chinese'],
    subtypes: ['Energy', 'Code Card', 'Graded', 'Stadium', 'Supporter', 'Special Energy', 'Item', 'Pokémon Tool', 'Shiny Pokémon', 'Wrapper', 'Sleeve'],
    novawkoCardVariations: ['Normal', 'Sparkle Holo', 'Illustration Rare'],
    novawkoCardSubtypes: ['Energy', 'EX'],
    traitTypes: ['All', 'Ears', 'Eyes', 'Tails', 'Paws', 'Tongues', 'Teeth', 'Horns', 'Muzzle', 'Misc'],
    rarity: ['All', 'Standard', 'Unusual', 'Rare', 'Epic', 'Mutation'],
    gameTypes: ['All', 'Match 3', 'Shooters', 'Art', 'Fidgets', 'Cards'],
    mobileFriendlyToggle: ['Enable'],
    codeTypes: ['All', 'HTML', 'CSS', 'JS'],

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};



/* Codes
/* --------------------------------------------------------------- */
charadex.page.codes = {

  sheetPage: charadex.sheet.pages.codes,
  sitePage: 'codes',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 6,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Code Type',
    parameters: charadex.sheet.options.codeTypes,
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: false,
  },

};


/* Changelog
/* --------------------------------------------------------------- */
charadex.page.updates = {

      sheetPage: charadex.sheet.pages.updates,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'update',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 20,
      },

};


/* Queue
/* --------------------------------------------------------------- */
charadex.page.queue = {

  sheetPage: charadex.sheet.pages.queue,
  sitePage: 'queue',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 9,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username', 'Art Type']
  },

  prevNext: {
    toggle: false,
  },

};


/* Minigames
/* --------------------------------------------------------------- */
charadex.page.games = {

  sheetPage: charadex.sheet.pages.games,
  sitePage: 'games',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 6,
  },

  filters: {
    toggle: true,
    parameters: {
      'Mobile Friendly': charadex.sheet.options.mobileFriendlyToggle,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.gameTypes,
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: false,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.kitiguarTraits = {

  sheetPage: charadex.sheet.pages.kitiguarTraits,
  sitePage: 'kitiguartraits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};


/* News
/* --------------------------------------------------------------- */
charadex.page.news = {

  sheetPage: charadex.sheet.pages.news,
  sitePage: 'news',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "posteddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: false,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: false,
  },

};


/* Binders
/* --------------------------------------------------------------- */
charadex.page.binders = {

  sheetPage: charadex.sheet.pages.binders,
  sitePage: 'binders',
  dexSelector: 'charadex',
  profileProperty: 'bindertitle',

  sort: {
    toggle: false,
    key: "date",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 6,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Binder Title']
  },

  prevNext: {
    toggle: false,
  },

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "posteddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* Eevee Cards
/* --------------------------------------------------------------- */
charadex.page.eeveeCards = {

  sheetPage: charadex.sheet.pages.eeveeCards,
  sitePage: 'eeveecards',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 9,
  },

  filters: {
    toggle: true,
    parameters: {
      'Card Variation': ['Normal', 'Reverse', 'Pokéball', 'Masterball', 'Confetti Holo', 'Type Specific', 'Gem Pack Stamp', 'Glitter Foil', 'V', 'VMAX', 'Promo', 'Illustration Rare', 'EX', 'Stamp Left Side', 'McDonalds', 'Build a Bear'],
      'Subtype': ['Graded', 'Shiny Pokémon'],
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Card Region',
    parameters: charadex.sheet.options.cardRegions,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Card Number', 'Artist']
  },

  prevNext: {
    toggle: false,
  },

};


/* My Cards
/* --------------------------------------------------------------- */
charadex.page.myCards = {

  sheetPage: charadex.sheet.pages.myCards,
  sitePage: 'mycards',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 9,
  },

  filters: {
    toggle: true,
    parameters: {
      'Card Variation': charadex.sheet.options.cardVariations,
      'Card Region': charadex.sheet.options.cardRegions,
      'Subtype': charadex.sheet.options.subtypes,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Card Fandom',
    parameters: ['All', 'Pokémon', 'One Piece', 'Spider Man', 'Webkinz', 'Littlest Pet Shop', 'Sonic the Hedgehog', 'Sanrio', 'Re Zero', 'League Of Legends', 'Kuromis Cryptid Carnival', 'One-Offs']
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Card Name', 'Card Number', 'Artist']
  },

  prevNext: {
    toggle: false,
  },

};


/* Favorite Cards
/* --------------------------------------------------------------- */
charadex.page.favoriteCards = {

  sheetPage: charadex.sheet.pages.favoriteCards,
  sitePage: 'favoritecards',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 9,
  },

  filters: {
    toggle: true,
    parameters: {
      'Card Region': charadex.sheet.options.cardRegions,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Card Fandom',
    parameters: ['All', 'Pokémon', 'One Piece', 'Sonic the Hedgehog', 'Littlest Pet Shop', 'Re Zero', 'Kuromis Cryptid Carnival']
  },

  search: {
    toggle: false,
    filterToggle: true,
    parameters: []
  },

  prevNext: {
    toggle: false,
  },

};


/* Wishlist
/* --------------------------------------------------------------- */
charadex.page.wishlist = {

  sheetPage: charadex.sheet.pages.wishlist,
  sitePage: 'wishlist',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 4,
  },

  filters: {
    toggle: true,
    parameters: {
      'Card Variation': ['Common', 'Ultra Rare', 'Rare', 'Normal', 'Promo', 'GX', 'V', 'VMAX', 'EX', 'Full Art', 'Cosmos Holo', 'Not Specified'],
      'Card Region': charadex.sheet.options.cardRegions,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Card Fandom', 'Card Number', 'Artist']
  },

  prevNext: {
    toggle: false,
  },

};


/* Novawko Cards
/* --------------------------------------------------------------- */
charadex.page.novawkoCards = {

  sheetPage: charadex.sheet.pages.novawkoCards,
  sitePage: 'novawkocards',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 4,
  },

  filters: {
    toggle: true,
    parameters: {
      'Novawko Card Variation': charadex.sheet.options.novawkoCardVariations,
      'Novawko Card Subtype': charadex.sheet.options.novawkoCardSubtypes,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Novawko Card Folder',
    parameters: ['All', 'Retired'],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Card Number', 'Artist']
  },

  prevNext: {
    toggle: false,
  },

};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}


/* Image Gallery
/* --------------------------------------------------------------- */
charadex.page.imageGallery = {

  sheetPage: charadex.sheet.pages.imageGallery,
  sitePage: 'gallery',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters:  {
      'View Novawko Art Only': charadex.sheet.options.novawkoArtOnlyToggle,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  tags: {
    toggle: true,
    parameters: ['icon', 'bust', 'animaljam', 'fullbody', 'refsheet', 'jovalancustom', 'discordemoji', 'emoji', 'headshot', 'complexrefsheet', 'sketch', 'warriorcats', 'fanart', 'custom', 'tradingcard', 'giftart', 'celshading', 'softshading', 'halfbody', 'banner', 'header', 'pixel', 'pixelshading', 'warriorminis', 'arttrade', 'lineart', 'matchingicons', 'scene', 'jovalan', 'nubreolan', 'lunamor', 'siderios', 'birthdayevent', 'commission', 'speciessheet', 'pattern', 'traditional', 'photo', 'freebie', 'map', 'trade', 'artfight', 'collab', 'pagedoll', 'cover', 'event', 'wallpaper', 'animated', 'screenshot', 'doodlepage', 'outfit', 'logo', 'moodboard', 'realism', 'vent', 'birthdaygift', 'key', '2018', '2019', '2021', '2022', '2023', '2024', '2025', '2026', 'novawko'],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Artist', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

};



/* Resources
/* --------------------------------------------------------------- */
charadex.page.resources = {

  sheetPage: charadex.sheet.pages.resources,
  sitePage: 'resources',
  dexSelector: 'charadex',
  profileProperty: 'resource',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Seasonal Types': ['Halloween', 'Christmas', 'Winter', 'Birthday'],
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Resource Type',
    parameters: charadex.sheet.options.resourceTypes,
  },

  search: {
    toggle: false,
    filterToggle: true,
    parameters: []
  },

  prevNext: {
    toggle: true,
  },

};



/* Characters
/* --------------------------------------------------------------- */
charadex.page.characters = {

  sheetPage: charadex.sheet.pages.characters,
  sitePage: 'characters',
  dexSelector: 'charadex',
  profileProperty: 'name',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Trade Status': charadex.sheet.options.statuses,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Fandom',
    parameters: charadex.sheet.options.worlds,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Name', 'Designer', 'Artist']
  },

  prevNext: {
    toggle: false,
  },

  relatedData: {

    [charadex.sheet.pages.characterLog]: {

      sheetPage: charadex.sheet.pages.characterLog,
      primaryProperty: 'name',
      relatedProperty: 'name',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

    [charadex.sheet.pages.imageGallery]: {

      ... charadex.page.imageGallery,

      sheetPage: charadex.sheet.pages.imageGallery,
      primaryProperty: 'name',
      relatedProperty: 'picturedcharacters',
      dexSelector: 'gallery',
      profileProperty: 'id',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "id",
        order: "asc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: true,
        amount: 12,
      },

    }

  }

};
    

/* Nubreolan Masterlist
/* --------------------------------------------------------------- */
charadex.page.nubreolanMasterlist = {

  sheetPage: charadex.sheet.pages.nubreolanMasterlist,
  sitePage: 'nubreolanmasterlist',
  dexSelector: 'charadex',
  profileProperty: 'listing',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.nubreolanTypes,
      'Trade Status': charadex.sheet.options.nubreolanStatuses,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Species',
    parameters: charadex.sheet.options.nubreolanSpecies,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Owner', 'Designer', 'Artist']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.nubreolanLog]: {

      sheetPage: charadex.sheet.pages.nubreolanLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  news: {
    ... charadex.page.news,
    dexSelector: 'announcement',
    amount: 4,
  },

  designs: {
    ... charadex.page.characters,
    dexSelector: 'design',
    amount: 5,
  },

};


/* Nubreolan Page
/* --------------------------------------------------------------- */
charadex.page.nubreolan = {

  listings: {
    ... charadex.page.nubreolanMasterlist,
    dexSelector: 'listing',
    amount: 5,
  },

};


export { charadex };
