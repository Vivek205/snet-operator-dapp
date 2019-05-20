import { createMuiTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

let primaryMain = '#4f79f8';
let secondaryMain = '#c5c5c5'
// let secondaryMain = '#d7516c';
let y = '#857af6';
let z = '#6771f6';

export const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryMain
        },
        secondary: {
            main: secondaryMain
        }
    }
});



