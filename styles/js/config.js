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
    nubreolanMasterlist: "nubreolan masterlist",
    nubreolanLog: "nubreolan log",
  },

  options: {

    designTypes: ['All', 'Original Character', 'Fan Character', 'Original Species', 'Kinsona'],

    worlds: ['All', 'Jovalan', 'Nubreolan', 'Warriors', 'Harry Potter', 'Pokémon', 'Territory', 'SHaM', 'Siderios', 'Lunamor', 'Zenith', 'Care Bears', 'Turning Red', 'Indigo Park', 'Animal Jam', 'Feral', 'Hazbin Hotel', 'Others'],

    speciesTypes: ['All', 'Open Species', 'Closed Species', 'Semi-Closed Species', 'Open Species with Closed Traits', 'Pet Species', 'Regular Species'],

    statuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction'],

    privacyStatuses: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction'],

    nubreolanStatuses: ['All', 'Private', 'Public', 'Authorized Only', 'Unlisted', 'Logged In Users Only'],

    nubreolanTypes: ['All', 'Founder Design', 'Staff Design', 'Mascot', 'AU Design', 'MYO', 'Event', 'Custom', 'Bred'],

    nubreolanSpecies: ['All', 'Resell', 'Trade', 'Offer', 'Pending', 'For Sale', 'Do Not Offer', 'Auction', 'Voided'],

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

},


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
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Designs', 'Artist', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

};



/* Characters
/* --------------------------------------------------------------- */
charadex.page.characters = {

  sheetPage: charadex.sheet.pages.characters,
  sitePage: 'characters',
  dexSelector: 'charadex',
  profileProperty: 'design',

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
      profileProperty: 'character',
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
      primaryProperty: 'design',
      relatedProperty: 'designs',
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
      
  },    

    [charadex.sheet.pages.characters]: {

      // This imports the config from the characters
      // So you dont have to repeat yourself
      ...charadex.page.characters, 

      sheetPage: charadex.sheet.pages.characters,
      sitePage: 'characters',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

  }

}


/* Nubreolan Masterlist
/* --------------------------------------------------------------- */
charadex.page.nubreolanmasterlist = {

  sheetPage: charadex.sheet.pages.nubreolanmasterlist,
  sitePage: 'nubreolanmasterlist',
  dexSelector: 'charadex',
  profileProperty: 'listing',

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
      'Design Type': charadex.sheet.options.nubreolanStatuses,
      'Privacy Status': charadex.sheet.options.privacyStatuses,
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
      profileProperty: 'nubreolanmasterlist',
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


    [charadex.sheet.pages.nubreolanmasterlist]: {

      // This imports the config from the listings
      // So you dont have to repeat yourself
      ...charadex.page.nubreolanmasterlist, 

      sheetPage: charadex.sheet.pages.nubreolanmasterlist,
      sitePage: 'nubreolanmasterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'listings',
      profileProperty: 'listing',
      profileToggle: false,

  },

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

  characters: {
    ... charadex.page.characters,
    dexSelector: 'design',
    amount: 4,
  },

  nubreolanmasterlist: {
    ... charadex.page.nubreolanmasterlist,
    dexSelector: 'listing',
    amount: 4,
  }

};


export { charadex };
