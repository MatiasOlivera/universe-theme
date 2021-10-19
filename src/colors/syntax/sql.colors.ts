import { SyntaxColors } from '../../types/colors-types';

const sqlColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'SQL: Keyword',
      scope: [
        'keyword.other.sql',
        'keyword.other.create.sql',
        'keyword.other.table.sql',
        'keyword.other.DDL.create.II.sql',
        'keyword.other.DML.sql',
        'keyword.other.alias.sql',
        'storage.modifier.sql'
      ],
      settings: tokens.sql.keyword
    }
  ];
};

export default sqlColors;
