import { ref, onMounted, onUnmounted, reactive } from 'vue';

const instance = ref(null);

function getKeycloakInstance() {
  return (window &&
    window.entando &&
    window.entando.keycloak && {
      ...window.entando.keycloak,
      initialized: true,
    }) || { initialized: false };
}

function refresh() {
  instance.value = getKeycloakInstance();
}

export function useKeycloak() {
  onMounted(() => {
    instance.value = getKeycloakInstance();
    window.addEventListener('keycloak', refresh);
  });

  onUnmounted(() => {
    window.removeEventListener('keycloak', refresh);
  });

  return { instance };
}
