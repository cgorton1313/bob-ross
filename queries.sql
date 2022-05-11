--replace # with desired number

SELECT * FROM BobRossData WHERE painting_index = #
ORDER BY episode asc, season asc
-- to get all data by the painting's id. Ordered by season and episode.
SELECT img_src, painting_title, painting_index, episode, season From BobRossData
ORDER BY season asc, episode asc
-- to get painting's img, title, season, episode, and index. Ordered by season and episode.
SELECT DISTINCT * FROM BobRossData WHERE season = #
ORDER BY episode asc
-- to get paintings by season. Ordered by episode.
