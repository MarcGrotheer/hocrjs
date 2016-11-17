/* BEGIN-BANNER -f smmono12 -i ' * ' -C "2016 Konstantin Baierer"  -L MIT
 *   ▄▄      ▗▄▖  ▗▄▖                                       █         █
 *  ▐▛▀      ▝▜▌  ▝▜▌                                       ▀         ▀   ▐▌
 * ▐███ ▐▌ ▐▌ ▐▌   ▐▌  ▗▟██▖ ▟██▖ █▟█▌ ▟█▙  ▟█▙ ▐▙██▖      ██  ▐▙██▖ ██  ▐███
 *  ▐▌  ▐▌ ▐▌ ▐▌   ▐▌  ▐▙▄▖▘▐▛  ▘ █▘  ▐▙▄▟▌▐▙▄▟▌▐▛ ▐▌       █  ▐▛ ▐▌  █   ▐▌
 *  ▐▌  ▐▌ ▐▌ ▐▌   ▐▌   ▀▀█▖▐▌    █   ▐▛▀▀▘▐▛▀▀▘▐▌ ▐▌ ██▌   █  ▐▌ ▐▌  █   ▐▌
 *  ▐▌  ▐▙▄█▌ ▐▙▄  ▐▙▄ ▐▄▄▟▌▝█▄▄▌ █   ▝█▄▄▌▝█▄▄▌▐▌ ▐▌     ▗▄█▄▖▐▌ ▐▌▗▄█▄▖ ▐▙▄
 *  ▝▘   ▀▀▝▘  ▀▀   ▀▀  ▀▀▀  ▝▀▀  ▀    ▝▀▀  ▝▀▀ ▝▘ ▝▘     ▝▀▀▀▘▝▘ ▝▘▝▀▀▀▘  ▀▀
 *
 * Copyright (c) 2016 Konstantin Baierer
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 *

 * END-BANNER */
import {HocrViewer} from './viewer';
window.hocrViewer = new HocrViewer({root: document.querySelector('body')});
window.hocrViewer.init();
