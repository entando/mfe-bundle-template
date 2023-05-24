import { ref, onMounted, onUnmounted } from 'vue';

const state = Vue.observable({ instance: null });

const instance = Vue.computed(() => state.instance);

function getKeycloakInstance() {
  return (window &&
    window.entando &&
    window.entando.keycloak && {
      ...window.entando.keycloak,
      initialized: true,
    }) || { initialized: false };
}

function refresh() {
  state.instance = getKeycloakInstance();
}

export function useKeycloak() {
  onMounted(() => {
    state.instance = getKeycloakInstance();
    window.addEventListener('keycloak', refresh);
  });

  onUnmounted(() => {
    window.removeEventListener('keycloak', refresh);
  });

  return { instance };
}
