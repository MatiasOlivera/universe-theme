import { buildTheme, createThemesDirectory } from './build';
import { universe } from './themes/universe';
import { universeNext } from './themes/universe.next';

async function main() {
  await createThemesDirectory();

  buildTheme({
    name: 'Universe',
    filename: 'universe',
    type: 'dark',
    palette: universe
  });

  buildTheme({
    name: 'Universe Next',
    filename: 'universe.next',
    type: 'dark',
    palette: universeNext
  });
}

main();
