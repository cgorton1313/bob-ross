--replace # with desired number.

-- to get all data by the painting's id.
SELECT * FROM BobRossData WHERE painting_index = #;

-- to get painting's img, title, season, episode, colors, video and index. Ordered by season and episode.
SELECT img_src, painting_title, painting_index, episode, season, colors, color_hex, youtube_src From BobRossData
ORDER BY season asc, episode asc;

-- to get paintings by season. Ordered by episode.
SELECT DISTINCT * FROM BobRossData WHERE season = #
ORDER BY episode asc;

-- to get paintings based off of the colors they have.
SELECT * FROM BobRossData WHERE Black_Gesso = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Bright_Red = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Burnt_Umber = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Cadium_Yellow = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Dark_Sienna = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Indian_Red = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Indian_Yellow = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Liquid_Black = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Liquid_Clear = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Midnight_Black = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Phthalo_Blue = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Phthalo_Green = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Prussian_Blue = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Sap_Green = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Titanium_White = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Van_Dyke_Brown = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Yellow_Ochre = true
ORDER BY season asc, episode asc;

SELECT * FROM BobRossData WHERE Alizarin_Crimson = true
ORDER BY season asc, episode asc;