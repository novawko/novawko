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
    connections:   "connections",
    nubreolanMasterlist:   "nubreolan masterlist",
    nubreolanLog:  "nubreolan log",
    resources:     "resources",
    prompts:       "prompts",
  },

  options: {

    designTypes: ['All', 'Original Character', 'Fan Character', 'Original Species', 'Kinsona'],
    nubreolanTypes: ['All', 'Founder Design', 'Staff Design', 'Mascot', 'AU Design', 'MYO', 'Event', 'Custom', 'Bred'],
    worlds: ['All', 'Jovalan', 'Nubreolan', 'Warriors', 'Harry Potter', 'Pokémon', 'Territory', 'SHaM', 'Siderios', 'Lunamor', 'Zenith', 'Care Bears', 'Turning Red', 'Indigo Park', 'Animal Jam', 'Hazbin Hotel', 'Others'],
    statuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction'],
    privacyStatuses: ['All', 'Public', 'Unlisted', 'Authorized Only', 'Logged In Users Only'],
    nubreolanStatuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction', 'Voided'],
    nubreolanSpecies: ['All', 'Kitiguar', 'Fluffy Worm'],
    novawkoArtOnlyToggle: ['Enable'],
    resourceTypes: ['All', 'Blinkie', 'GIF', 'Illustration', 'Pattern', 'Photo', 'Pixel', 'PNG', 'Stamp', 'Texture', 'Emoji', 'Sticker'],
    species: ['All', 'Cat', 'Dog', 'Hamster', 'Kitiguar', 'Human', 'Kanpolo', 'Deep Sea Kanpolo', 'Hyper Kanpolo', 'Kumiyaa', 'Noodle Moth', 'Heavian', 'Burgvoir', 'Sylvarian', 'Woobar', 'Chubbö', 'Yuecoatl', 'Protogen', 'Puffball', 'Yukin', 'Tauyn', 'Eevee', 'Leafeon', 'Sylveon', 'Sprigatito', 'Care Bear', 'Care Bear Cousin', 'Wolf', 'Dragon', 'Rabbit', 'Mecha', 'Fluffy Worm', 'Fox', 'Sparkle Cat', 'Arctic Fox', 'Arctic Wolf', 'Senri', 'Jackalope', 'Flareon', 'Tiger'],

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
    order: "desc",
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


/* News
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "posteddate",
    order: "desc",
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


/* Connections
/* --------------------------------------------------------------- */
charadex.page.connections = {

  sheetPage: charadex.sheet.pages.connections,
  sitePage: 'connections',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
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
    parameters: ['Username']
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
    order: "desc",
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
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: []
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
    order: "desc",
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
      'Status': charadex.sheet.options.statuses,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'World',
    parameters: charadex.sheet.options.worlds,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Name', 'Design', 'Owner', 'Designer', 'Artist']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.characterLog]: {

      sheetPage: charadex.sheet.pages.characterLog,
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
        order: "desc",
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
    order: "desc",
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
      'Status': charadex.sheet.options.nubreolanStatuses,
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
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist']
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
