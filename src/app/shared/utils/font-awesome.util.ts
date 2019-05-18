import { library } from '@fortawesome/fontawesome-svg-core';
import { faSync, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export function initFontAwesome() {
    library.add(faSync);
    library.add(faTimesCircle);
}