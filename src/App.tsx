import LoginPage from "./pages/LoginPage"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { setUser } from "./store/slices/userSlice"
import { setPageState } from "./store/slices/statesSlice"
import { PageState } from "./types/PageState"
import MainPage from "./pages/MainPage"
import { LoginPath } from "./types/LoginPath"
import { useAppDispatch, useAppSelector } from "./hooks"
import AuthUtils from "./utility/AuthUtils"

function App() {

  const pageState = useAppSelector(state => state.states.pageState);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<ReactNode | null>(null);

  const fetchPage = useCallback(async () => {
    const fetchData = async () => {

      let user;

      try {
        user = await AuthUtils.getCurrentUser();
        dispatch(setUser(user));
        dispatch(setPageState(PageState.main));
        if (!window.location.pathname.startsWith('/std')) {
          window.history.pushState({}, '', '/std');
        }
      } catch (error: unknown) {
        dispatch(setPageState(PageState.login));
        window.history.pushState({}, '', '/login');
      }
    };

    const render = () => {
      const app = document.getElementById('app');
      if (!app) return
      if (pageState === PageState.main) {
        setCurrentPage(<MainPage />);
        return;
      }
      if (pageState === PageState.login) {
        setCurrentPage(<LoginPage />);
        return;
      }
    };

    await fetchData();

    render();

  }, [dispatch, pageState])

  const handlePushState = useCallback(() => {
    if (pageState === PageState.main && !window.location.pathname.startsWith('/std')) {
      window.history.pushState({}, '', '/std');
      return;
    }
    if (pageState === PageState.login && !Object.values(LoginPath).includes(window.location.pathname as LoginPath)) {
      window.history.pushState({}, '', '/login');
      return;
    }
  }, [pageState])

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  useEffect(() => {
    window.addEventListener('popstate', handlePushState);
  }, [handlePushState]);

  return (
    <div id="app" className="h-screen w-screen overflow-hidden">
      {currentPage}
    </div>
  )
}

export default App
