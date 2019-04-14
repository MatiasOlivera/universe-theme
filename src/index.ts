import { buildTheme, createThemesDirectory } from './build';
import { palette } from './themes/universe/palette';
import { tokens } from './themes/universe/syntax-colors';

async function main() {
  await createThemesDirectory();

  await buildTheme({
    name: 'Universe',
    filename: 'universe',
    type: 'dark',
    palette: palette,
    tokens: tokens
  });
}

main();
