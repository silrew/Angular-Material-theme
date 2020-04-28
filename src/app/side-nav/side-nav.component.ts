import { Component, OnInit, HostBinding  } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
const SMALL_WIDTH_BREAKPOINT = 700;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  showToggle = false;
  showSalestoggle = false;
  show_text = true;
 
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer) { }
  onSetTheme(theme) {
      this.overlayContainer.getContainerElement().classList.add(theme); 
      this.componentCssClass = theme;
    }
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  ngOnInit() {
  }

}
