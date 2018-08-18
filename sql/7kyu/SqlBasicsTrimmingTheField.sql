/*
  You have access to a table of monsters as follows:

  monsters schema
    - id
    - name
    - legs
    - arms
    - characteristics

  The monsters in the provided table have too many characteristics, they really
  only need one each. Your job is to trim the characteristics down so that each
  monster only has one. If there is only one already, provide that. If there
  are multiple, provide only the first one (don't leave any commas in there).

  You must return a table with the format as follows:

  output schema
    - id
    - name
    - characteristic
*/

SELECT id, name, (
  CASE
    WHEN POSITION(',' IN characteristics) = 0
      THEN characteristics
    ELSE
      SUBSTRING(characteristics, 0, POSITION(',' IN characteristics))
  END
) AS characteristic
FROM monsters
ORDER BY id ASC;
