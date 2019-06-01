import { SyntaxColors } from '../../types/colors-types';

const gqlColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'GraphQL: Object property',
      scope: 'meta.type.object.graphql variable.graphql',
      settings: tokens.object.property
    },
    {
      name: 'GraphQL: Selection set property',
      scope: 'meta.selectionset.graphql variable.graphql',
      settings: tokens.object.property
    }
  ];
};

export default gqlColors;
