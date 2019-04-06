import { buildTheme, createThemesDirectory } from './build';
import { universe } from './themes/universe';

async function main() {
  await createThemesDirectory();

  buildTheme({
    name: 'Universe',
    filename: 'universe',
    type: 'dark',
    palette: universe
  });
}

main();
