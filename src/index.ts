import { buildTheme, createThemesDirectory } from './build';
import { italicTokens } from './themes/universe italic/syntax-colors';
import { purplePalette } from './themes/universe purple/palette';
import { grayPalette } from './themes/universe gray/palette';
import { universePalette } from './themes/universe/palette';
import { tokens } from './themes/universe/syntax-colors';

async function main() {
  await createThemesDirectory();

  await buildTheme({
    name: 'Universe',
    filename: 'universe',
    type: 'dark',
    palette: universePalette,
    tokens: tokens
  });

  await buildTheme({
    name: 'Universe Italic',
    filename: 'universe.italic',
    type: 'dark',
    palette: universePalette,
    tokens: italicTokens
  });

  await buildTheme({
    name: 'Universe Purple',
    filename: 'universe.purple',
    type: 'dark',
    palette: purplePalette,
    tokens: tokens
  });

  await buildTheme({
    name: 'Universe Purple Italic',
    filename: 'universe.purple.italic',
    type: 'dark',
    palette: purplePalette,
    tokens: italicTokens
  });

  await buildTheme({
    name: 'Universe Gray',
    filename: 'universe.gray',
    type: 'dark',
    palette: grayPalette,
    tokens: tokens
  });

  await buildTheme({
    name: 'Universe Gray Italic',
    filename: 'universe.gray.italic',
    type: 'dark',
    palette: grayPalette,
    tokens: italicTokens
  });
}

main();
