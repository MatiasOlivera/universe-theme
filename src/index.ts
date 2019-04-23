import { buildTheme, createThemesDirectory } from './build';
import { purplePalette } from './themes/universe purple/palette';
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
    name: 'Universe purple',
    filename: 'universe.purple',
    type: 'dark',
    palette: purplePalette,
    tokens: tokens
  });
}

main();
