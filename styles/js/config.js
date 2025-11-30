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
  },

  options: {

    designTypes: ['All', 'Original Character', 'Fan Character', 'Original Species', 'Kinsona'],
    nubreolanTypes: ['All', 'Founder Design', 'Staff Design', 'Mascot', 'AU Design', 'MYO', 'Event', 'Custom', 'Bred'],
    worlds: ['All', 'Jovalan', 'Nubreolan', 'Warriors', 'Harry Potter', 'Pokémon', 'Territory', 'Siderios', 'Lunamor', 'Zenith', 'Care Bears', 'Turning Red', 'Indigo Park', 'Animal Jam', 'Hazbin Hotel', 'FNAF', 'Others'],
    statuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction'],
    privacyStatuses: ['All', 'Public', 'Unlisted', 'Authorized Only', 'Logged In Users Only'],
    nubreolanStatuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction', 'Voided'],
    nubreolanSpecies: ['All', 'Kitiguar', 'Fluffy Worm', 'Naa'],
    anatomyTypes: ['All', 'Feral', 'Anthro', 'Humanoid'],
    folderTypes: ['All', 'Favorites', 'Mains', 'Adoptables', 'Needs New Ref'],
    novawkoArtOnlyToggle: ['Enable'],
    resourceTypes: ['All', 'Blinkie', 'GIF', 'Illustration', 'Pattern', 'Photo', 'Pixel', 'PNG', 'Stamp', 'Texture', 'Emoji', 'Sticker', 'Moodboard', 'Palette', 'Divider', 'Flag', 'Art Fight', 'Animal Jam', 'Minecraft', 'Pokémon', 'Disability'],
    species: ['All', 'Cat', 'Dog', 'Hamster', 'Kitiguar', 'Human', 'Kanpolo', 'Deep Sea Kanpolo', 'Hyper Kanpolo', 'Kumiyaa', 'Noodle Moth', 'Heavian', 'Burgvoir', 'Sylvarian', 'Woobar', 'Chubbö', 'Yuecoatl', 'Protogen', 'Puffball', 'Yukin', 'Tauyn', 'Eevee', 'Leafeon', 'Sylveon', 'Sprigatito', 'Care Bear', 'Care Bear Cousin', 'Wolf', 'Dragon', 'Rabbit', 'Mecha', 'Fluffy Worm', 'Fox', 'Sparkle Cat', 'Arctic Fox', 'Arctic Wolf', 'Senri', 'Jackalope', 'Flareon', 'Tiger'],
    cardFandoms: ['Pokémon', 'One Piece', 'Spider Man', 'Webkinz', 'Littlest Pet Shop', 'Sonic the Hedgehog', 'Sanrio', 'Re Zero', 'Minecraft', 'Dandadan', 'My Hero Academia', 'FNAF', 'Kuromis Cryptid Carnival'],
    cardVariations: ['Normal', 'Normal Holo', 'Cosmos Holo', 'Mirror Holo', 'Cracked Ice Holo', 'Tinsel Holo', 'Reverse', 'Reverse Pokéball', 'Reverse Masterball', 'Stamp Left Side', 'Stamp Right Side', 'Build a Bear', 'Common', 'Rare', 'Super Rare', 'Ultra Rare', 'EX', 'GX', 'V', 'VMAX', 'VSTAR', 'Promo', 'Holo', 'Illustration Rare', 'McDonalds', 'Not Specified'],
    cardRegions: ['English', 'Japanese', 'Chinese'],
    subtypes: ['Energy', 'Code Card', 'Graded', 'Stadium', 'Supporter', 'Special Energy', 'Item', 'Pokémon Tool', 'Shiny Pokémon'],
    novawkoCardVariations: ['Normal', 'Sparkle Holo'],
    novawkoCardSubtypes: ['Energy', 'EX'],

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};



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
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "editdate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 4,
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
    parameters: ['Title']
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
    parameters: charadex.sheet.options.cardFandoms,
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
      'Card Variation': charadex.sheet.options.cardVariations,
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
    toggle: false,
    folderProperty: '',
    parameters: [],
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
      'Fandom': charadex.sheet.options.worlds,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Folder Type',
    parameters: charadex.sheet.options.folderTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Name', 'Designer', 'Artist']
  },

  prevNext: {
    toggle: true,
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
    parameters: {
      'Design Type': charadex.sheet.options.nubreolanTypes,
      'Privacy Status': charadex.sheet.options.privacyStatuses,
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
    amount: 3,
  },

  connections: {
    ... charadex.page.connections,
    dexSelector: 'connection',
    amount: 6,
  },

  designs: {
    ... charadex.page.characters,
    dexSelector: 'design',
    amount: 5,
  },

  listings: {
    ... charadex.page.nubreolanMasterlist,
    dexSelector: 'listing',
    amount: 4,
  },

  resources: {
    ... charadex.page.resources,
    dexSelector: 'resource',
    amount: 4,
  }

};


export { charadex };
