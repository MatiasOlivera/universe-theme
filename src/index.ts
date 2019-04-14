import { buildTheme, createThemesDirectory } from './build';
import { universePalette } from './themes/universe/palette';

async function main() {
  await createThemesDirectory();

  buildTheme({
    name: 'Universe',
    filename: 'universe',
    type: 'dark',
    palette: universePalette
  });
}

main();
