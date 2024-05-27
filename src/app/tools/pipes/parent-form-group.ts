import { SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

let ParentFormGroup = {
  provide: ControlContainer,
  useFactory: (container: ControlContainer) => container,
  deps: [[new SkipSelf(), ControlContainer]],
};

export { ParentFormGroup };
