/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.binders);
  charadex.tools.loadPage('.softload', 500);
});


/* ==================================================================== */
/* Sorting Fix
======================================================================= */
const data = [
  { id: 1, datetime: "2026-04-25T20:43:00" },
  { id: 2, datetime: "2026-04-25T20:43:00" },
  { id: 3, datetime: "2025-11-30T19:32:00" },
  { id: 4, datetime: "2025-11-30T19:34:00" },
  { id: 5, datetime: "2025-11-30T19:41:00" },
  { id: 6, datetime: "2025-11-30T19:46:00" },
  { id: 7, datetime: "2025-11-30T19:49:00" },
  { id: 8, datetime: "2026-03-26T16:41:00" },
  { id: 9, datetime: "2025-12-03T11:38:00" },
  { id: 10, datetime: "2025-12-04T05:42:00" },
  { id: 11, datetime: "2025-12-04T05:47:00" },
  { id: 12, datetime: "2026-02-15T10:24:00" },
  { id: 13, datetime: "2026-04-23T16:49:00" },
  { id: 14, datetime: "2026-03-26T12:55:00" }
];

// Sort them up by da most recent
data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

console.log(data);
