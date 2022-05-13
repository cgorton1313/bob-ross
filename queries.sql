--replace # with desired number

-- to get all data by the painting's id.
SELECT * FROM BobRossData WHERE painting_index = #;

-- to get painting's img, title, season, episode, colors, video and index. Ordered by season and episode.
SELECT img_src, painting_title, painting_index, episode, season, colors, youtube_src From BobRossData
ORDER BY season asc, episode asc;

-- to get paintings by season. Ordered by episode.
SELECT DISTINCT * FROM BobRossData WHERE season = #
ORDER BY episode asc;

-- to get paintings based off of the colors they have. Ex. Black Gesso
SELECT * FROM BobRossData WHERE Black_Gesso = true
ORDER BY season asc, episode asc
