import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private instanceSource = new BehaviorSubject(this.getKeycloakInstance());
  instance$ = this.instanceSource.asObservable();

  constructor() {
    const refresh = () => this.instanceSource.next(this.getKeycloakInstance());
    window.addEventListener('keycloak', refresh);
  }

  private getKeycloakInstance() {
    return (window &&
      window.entando &&
      window.entando.keycloak && {
        ...window.entando.keycloak,
        initialized: true,
      }) || { initialized: false };
  }
}
