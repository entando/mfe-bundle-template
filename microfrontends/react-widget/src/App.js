import { Container } from "./components/Container";
import { BasicTable } from "./components/BasicTable";
import { BasicModal } from "./components/BasicModal";

//import { useUsers } from "./hooks/useUsers";
import { Loading } from "./components/Loading";

function App({ config }) {
  /**
   * uncomment when API is ready
   * const { isLoading, users } = useUsers(config);
   */
  const isLoading = false;
  const users = [];

  return (
    // NOTE: data-theme is for propagate the css variables theme through the shadow dom
    <div data-theme="light">
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <BasicTable users={users} />
            <BasicModal />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
