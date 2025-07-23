**Igor's Crossword Project (Backend)**

Backend to provide REST API for my crossword project.

**Usage:**

- fetching from /api/keys will provide an array of keys (in the form of dates of each crossword) for the database of crosswords.
  In the crossword app the keys are used to enable crossword selection.
- fetching from /api?date=DD.MM.YYYY where **DD.MM.YYYY** is a date of the crossword that you want to access (its key).
  Note that the correct format includes leading zeros for days and months: 02.07.2025 is an example of a correct date.
