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
    },
    {
      name: 'GraphQL: Fragment',
      scope: ['entity.name.fragment.graphql', 'variable.fragment.graphql'],
      settings: tokens.type.custom
    },
    {
      name: 'GraphQL: Custom scalar',
      scope: 'entity.scalar.graphql',
      settings: tokens.type.custom
    },
    {
      name: 'GraphQL: Alias',
      scope: 'string.unquoted.alias.graphql',
      settings: tokens.graphql.alias
    },
    {
      name: 'GraphQL: Description',
      scope: 'string.block.description.graphql',
      settings: tokens.comment
    }
  ];
};

export default gqlColors;
